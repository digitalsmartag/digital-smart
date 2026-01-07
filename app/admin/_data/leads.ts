"use server"

import { db } from "../../utils/drizzle";
import { leads } from "../../../drizzle/schema";
import crypto from 'crypto';
import { and, eq, gte, lte } from "drizzle-orm";

export async function getLeads() {
    const result = await db.select().from(leads);
    return result;
}

export const createLead = async (leadData: { name: string; email: string; phone?: string; company?: string; service?: string; message?: string; source?: string; status?: string }) => {
    const id = crypto.randomUUID();
    try {
        const [newLead] = await db.insert(leads).values({
            id,
            ...leadData,
            createdAt: new Date(),
            updatedAt: new Date()
        }).returning();
        
        console.log('Lead criado com sucesso:', newLead);
        return newLead;
    } catch (error) {
        console.error('Erro ao criar lead:', error);
        throw error;
    }
};

async function sendLeadWebhook(lead: any) {
    try {
        const webhookUrl = process.env.LEAD_WEBHOOK_URL;
        
        if (!webhookUrl) {
            console.log('⚠️ Webhook URL não configurada (LEAD_WEBHOOK_URL)');
            return;
        }
        
        const payload = {
            event: 'lead_created',
            lead: {
                id: lead.id,
                name: lead.name,
                email: lead.email,
                phone: lead.phone,
                company: lead.company,
                service: lead.service,
                message: lead.message,
                source: lead.source || 'formulario_contato',
                status: lead.status || 'new',
                createdAt: lead.createdAt
            },
            timestamp: new Date().toISOString()
        };
        
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'DigitalSmart-Webhook/1.0'
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            throw new Error(`Webhook failed with status ${response.status}`);
        }
        
        console.log('✅ Webhook enviado com sucesso para o lead:', lead.id);
        
    } catch (error) {
        console.error('❌ Erro ao enviar webhook:', error);
        // Não falhar a criação do lead se o webhook falhar
    }
}


export const updateLead = async (id: string, leadData: Partial<{ name: string; email: string; phone?: string; company?: string; service?: string; message?: string; source?: string; status?: string; lossReason?: string }>) => {
    const updateData: any = {
        ...leadData,
        updatedAt: new Date(),
    };
    
    // Se o status for alterado para "lost", adiciona a data de perda
    if (leadData.status === 'lost') {
        updateData.lostAt = new Date();
    }
    
    // Se o status for alterado para "converted", adiciona a data de conversão
    if (leadData.status === 'converted') {
        updateData.convertedAt = new Date();
    }
    
    // Se o status não for "lost", limpa o motivo da perda
    if (leadData.status && leadData.status !== 'lost') {
        updateData.lossReason = null;
    }
    
    try {
        const [updatedLead] = await db.update(leads)
            .set(updateData)
            .where(eq(leads.id, id))
            .returning();
        
        return updatedLead;
    } catch (error) {
        console.error('Erro ao atualizar lead:', error);
        throw error;
    }
}


export const deleteLead = async (id: string) => {
    try {
        const [deletedLead] = await db.delete(leads)
            .where(eq(leads.id, id))
            .returning();
        
        return deletedLead;
    } catch (error) {
        console.error('Erro ao deletar lead:', error);
        throw error;
    }
}


export const getLeadsBetweenDates = async (startDate: Date, endDate: Date) => {
    const leadsData = await db.select().from(leads)
        .where(and(
            gte(leads.createdAt, startDate),
            lte(leads.createdAt, endDate)
        ));
    return leadsData;
};

export const getLeadsFromCurrentMonth = async () => {
    console.log('🔍 Buscando leads do mês atual...');
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    
    const leadsData = await db.select().from(leads)
        .where(and(
            gte(leads.createdAt, startOfMonth),
            lte(leads.createdAt, endOfMonth)
        ));
    
    return leadsData;
};

export const getConvertedLeads = async () => {
    console.log('🔍 Buscando leads convertidos...');
    const convertedLeads = await db.select().from(leads)
        .where(eq(leads.status, 'converted'));
    
    return convertedLeads;
};

export const getConvertedLeadsFromCurrentMonth = async () => {
    console.log('🔍 Buscando leads convertidos do mês...');
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    
    const convertedLeads = await db.select().from(leads)
        .where(and(
            eq(leads.status, 'converted'),
            gte(leads.createdAt, startOfMonth),
            lte(leads.createdAt, endOfMonth)
        ));
    
    return convertedLeads;
};

export const getLostLeads = async () => {
    const lostLeads = await db.select().from(leads)
        .where(eq(leads.status, 'lost'));
    
    return lostLeads;
};

export const getConversionTimeStats = async () => {
    console.log('🔍 Buscando estatísticas de conversão...');
    const convertedLeads = await db.select().from(leads)
        .where(and(
            eq(leads.status, 'converted'),
            // Apenas leads com data de conversão registrada
        ));
    
    const conversionTimes = convertedLeads
        .filter(lead => lead.convertedAt && lead.createdAt)
        .map(lead => {
            const created = new Date(lead.createdAt);
            const converted = new Date(lead.convertedAt);
            const diffTime = converted.getTime() - created.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        })
        .filter(days => days >= 0); // Remover valores negativos
    
    if (conversionTimes.length === 0) {
        return {
            averageConversionTime: 0,
            fastestConversion: 0,
            slowestConversion: 0,
            totalConverted: 0
        };
    }
    
    const averageConversionTime = Math.round(
        conversionTimes.reduce((sum, days) => sum + days, 0) / conversionTimes.length
    );
    const fastestConversion = Math.min(...conversionTimes);
    const slowestConversion = Math.max(...conversionTimes);
    
    return {
        averageConversionTime,
        fastestConversion,
        slowestConversion,
        totalConverted: convertedLeads.length
    };
};
