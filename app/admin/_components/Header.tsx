"use client";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p className="text-white/60">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
