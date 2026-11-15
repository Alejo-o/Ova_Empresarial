import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { TECH_BADGE_LOGO } from '../data/courseData';

interface HeroProps {
  onExploreModules: () => void;
  onOpenGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreModules, onOpenGuide }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FAF8] via-white to-white pt-10 pb-20">
      {/* Círculos pastel suaves de fondo idénticos a la imagen de referencia */}
      <div className="absolute top-12 right-1/3 w-32 h-32 rounded-full bg-emerald-100/60 blur-xl pointer-events-none" />
      <div className="absolute top-44 right-1/2 w-44 h-44 rounded-full bg-amber-100/50 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Columna Izquierda: Titulares y Botones Duales en Español */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0A2B18] tracking-tight leading-[1.1]">
                Inspirando Mentes. <br />
                <span className="text-[#DFA035]">Forjando el Futuro.</span>
              </h1>
              <p className="text-xs font-serif italic text-emerald-800 pt-1">
                Universidad Simón Bolívar · Barranquilla y Cúcuta
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              Un entorno enriquecedor donde los estudiantes aprenden, crecen y prosperan para convertirse en los líderes del mañana, dominando competencias clave en innovación, ciberseguridad y gestión transformadora.
            </p>

            {/* Botones de acción duales calcados del referente */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreModules}
                className="px-6 py-3.5 bg-[#00381C] hover:bg-[#004D28] text-white text-xs sm:text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <span>Descubre Nuestro OVA</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenGuide}
                className="px-5 py-3.5 bg-white hover:bg-emerald-50/70 text-[#00381C] border border-slate-300 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-2xs uppercase tracking-wider"
              >
                <div className="w-5 h-5 rounded-full border border-[#00381C] flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Ver Video del OVA</span>
              </button>
            </div>
          </div>

          {/* Columna Derecha: Imagen de estudiantes con la medalla flotante de excelencia */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-emerald-100">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=80"
                alt="Estudiantes de la Universidad Simón Bolívar"
                className="w-full h-80 sm:h-[420px] object-cover"
              />

              {/* Medalla de Excelencia idéntica a la esquina inferior derecha */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-emerald-200 shadow-xl flex items-center gap-3 max-w-xs">
                <img
                  src={TECH_BADGE_LOGO}
                  alt="Insignia de Excelencia"
                  className="w-12 h-12 object-contain rounded-full border-2 border-emerald-200 p-0.5 bg-emerald-50 shrink-0"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59324] block">
                    Un Legado de Excelencia
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    Alta Calidad Acreditada
                  </h4>
                  <span className="text-[10px] text-slate-500 block font-mono">
                    Desde 1972 · 50+ Años
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
