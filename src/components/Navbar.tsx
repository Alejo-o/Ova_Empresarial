import React from 'react';
import { UNISIMON_LOGO } from '../data/courseData';
import { Award } from 'lucide-react';

interface NavbarProps {
  progressPercentage: number;
  completedCount: number;
  totalModules: number;
  onNavigate: (sectionId: string) => void;
  onOpenCertificate: () => void;
  onStartLearning: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  progressPercentage,
  completedCount,
  totalModules,
  onNavigate,
  onOpenCertificate,
  onStartLearning
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-emerald-100 shadow-2xs no-print transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-6">
        {/* Left: Logo Oficial de la Universidad Simón Bolívar */}
        <div
          onClick={() => onNavigate('inicio')}
          className="flex items-center gap-3 cursor-pointer select-none shrink-0"
        >
          <img
            src={UNISIMON_LOGO}
            alt="Universidad Simón Bolívar"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </div>

        {/* Center: Enlaces de navegación en español */}
        <nav className="hidden xl:flex items-center gap-7 text-[11px] font-bold tracking-wider text-slate-700 uppercase">
          <button
            onClick={() => onNavigate('inicio')}
            className="hover:text-[#006837] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Inicio
          </button>
          <button
            onClick={() => onNavigate('sobre-el-ova')}
            className="hover:text-[#006837] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Sobre Nosotros
          </button>
          <button
            onClick={() => onNavigate('admisiones')}
            className="hover:text-[#006837] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Admisiones
          </button>
          <button
            onClick={() => onNavigate('modulos')}
            className="hover:text-[#006837] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>Académico</span>
            <span className="text-[10px] font-bold text-[#006837] bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200">
              {totalModules}
            </span>
          </button>
          <button
            onClick={() => onNavigate('sobre-el-ova')}
            className="hover:text-[#006837] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Vida en el Campus
          </button>
          <button
            onClick={onOpenCertificate}
            className="hover:text-[#006837] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Noticias y Eventos
          </button>
          <button
            onClick={() => onNavigate('contacto')}
            className="hover:text-[#006837] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contacto
          </button>
        </nav>

        {/* Right: Botón Dorado de Acción Principal */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Indicador de Progreso */}
          <div className="hidden sm:flex flex-col items-end text-right">
            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700">
              <span>{completedCount}/{totalModules} Módulos</span>
              <span className="text-[#006837]">({progressPercentage}%)</span>
            </div>
            <div className="w-20 bg-slate-100 rounded-full h-1.5 mt-1 overflow-hidden border border-emerald-100">
              <div
                className="bg-[#006837] h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <button
            onClick={progressPercentage >= 100 ? onOpenCertificate : onStartLearning}
            className="px-5 py-2.5 bg-[#DFA035] hover:bg-[#C98B24] text-slate-900 text-xs font-bold rounded-lg transition-all shadow-xs hover:shadow uppercase tracking-wider flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
          >
            {progressPercentage >= 100 ? (
              <>
                <Award className="w-3.5 h-3.5 text-slate-900" />
                <span>Ver Diploma</span>
              </>
            ) : (
              <span>Inscríbete Ahora</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
