import Link from "next/link";
import Image from "next/image";
import { Target, Eye, Diamond, Users, Globe, Award, ArrowRight, TrendingUp, CheckCircle } from "lucide-react";
import { partners } from "../data/partners";

export const metadata = {
  title: "Sobre Nós | Digital Smart",
  description: "Conheça a Digital Smart, uma empresa de marketing digital comprometida em fornecer soluções personalizadas e eficazes para cada um dos nossos clientes.",
};

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Todas as nossas estratégias são orientadas a gerar resultados mensuráveis para o seu negócio.",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Trabalhamos lado a lado com nossos clientes, entendendo suas necessidades e objetivos.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Buscamos a excelência em cada projeto, entregando sempre o melhor para nossos clientes.",
  },
  {
    icon: Globe,
    title: "Inovação",
    description: "Estamos sempre atualizados com as últimas tendências e tecnologias do mercado digital.",
  },
];

const specialties = [
  "Identidade Visual",
  "Tráfego Pago",
  "Criação de Sites",
  "Landing Pages",
  "Automações WhatsApp",
  "Gestão de Redes Sociais",
];

export default function SobrePage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-[#543295] text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Image 
              src="/root/logo-branca.png" 
              alt="Digital Smart" 
              width={180} 
              height={60} 
              className="h-12 w-auto object-contain mx-auto mb-8" 
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sobre a Digital Smart
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Uma empresa de marketing digital que oferece uma ampla gama de serviços 
              para ajudar outras empresas e negócios a alcançar seus objetivos on-line.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#543295]/10 text-[#543295] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Quem Somos
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Uma empresa de marketing digital focada em resultados
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A Digital Smart é uma agência de marketing digital que nasceu com o 
                propósito de ajudar empresas a se destacarem no mundo digital. Com uma 
                equipe especializada e apaixonada pelo que faz, oferecemos soluções 
                completas para transformar a presença online do seu negócio.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Trabalhamos com empresas no Brasil e nos Estados Unidos, 
                atendendo mais de {partners.length} parceiros que confiam em nosso trabalho para 
                alcançar seus objetivos de marketing e vendas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#543295]/5 to-[#543295]/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-[#543295] mb-2">+{partners.length}</div>
                  <div className="text-gray-600 text-sm">Empresas Parceiras</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-[#543295] mb-2">2</div>
                  <div className="text-gray-600 text-sm">Países Atendidos</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-[#543295] mb-2">5+</div>
                  <div className="text-gray-600 text-sm">Anos de Experiência</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-[#543295] mb-2">+300%</div>
                  <div className="text-gray-600 text-sm">Aumento em Vendas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Fazemos */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#543295]/10 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-[#543295]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Nossa Especialidade</h3>
                    <p className="text-gray-500 text-sm">O que fazemos de melhor</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {specialties.map((item) => (
                    <li key={item} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-[#543295]" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#543295]/10 text-[#543295] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Eye className="w-4 h-4" />
                O Que Fazemos
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Especialistas em marketing digital
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nós nos especializamos em identidade visual, tráfego pago e criação 
                de sites e landing pages - todos fundamentais para o sucesso on-line 
                de qualquer empresa.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa abordagem é personalizada: entendemos as necessidades únicas 
                de cada cliente e desenvolvemos estratégias sob medida para alcançar 
                os melhores resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo */}
      <section className="py-20 bg-[#543295] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-8">
              <Diamond className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nosso Objetivo
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Aqui na nossa empresa estamos comprometidos em fornecer soluções 
              personalizadas e eficazes para cada um dos nossos clientes. Nosso 
              objetivo é ser o parceiro estratégico que impulsiona o crescimento 
              do seu negócio no mundo digital.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#543295] font-semibold text-sm uppercase tracking-wider">
              Nossos Valores
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              O que nos guia
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#543295]/10 rounded-2xl mb-4">
                  <value.icon className="w-8 h-8 text-[#543295]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pronto para trabalhar conosco?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar seu negócio a crescer no mundo digital.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-[#543295] hover:bg-[#432476] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#543295]/25"
          >
            Fale Conosco
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
