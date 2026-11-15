import React from 'react';
import { ModuleData } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ModulesGridProps {
  modules: ModuleData[];
  completedModules: string[];
  quizScores: Record<string, number>;
  onSelectModule: (moduleId: string) => void;
}

export const ModulesGrid: React.FC<ModulesGridProps> = ({
  modules,
  completedModules,
  quizScores,
  onSelectModule
}) => {
  return (
    <section id="modulos" className="py-20 bg-white border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Encabezado de la sección en español */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <span className="text-[11px] font-bold text-[#DFA035] uppercase tracking-wider block">
            Académico
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A2B18]">
            Descubre Nuestros Programas
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Un currículo integral diseñado para inspirar y desafiar a cada estudiante en su camino profesional.
          </p>
        </div>

        {/* Rejilla de 5 tarjetas en fila idéntica a la imagen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {modules.map((m, idx) => {
            const isCompleted = completedModules.includes(m.id);
            const score = quizScores[m.id];

            // Títulos y etiquetas en español correspondientes
            const levelLabels = [
              'Edades 3-5 · Inicial',
              'Grados 1-5 · Primaria',
              'Grados 6-8 · Media',
              'Grados 9-12 · Secundaria',
              'Clubes y Actividades'
            ];

            return (
              <div
                key={m.id}
                onClick={() => onSelectModule(m.id)}
                className="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between overflow-hidden cursor-pointer group"
              >
                <div>
                  {/* Foto de la tarjeta */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={m.heroImage}
                      alt={m.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {isCompleted && (
                      <div className="absolute top-2 right-2 bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 shadow-xs">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{score ? `${score}%` : 'Aprobado'}</span>
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#006837] transition-colors leading-tight">
                      {m.shortTitle}
                    </h3>

                    <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                      {m.subtitle}
                    </p>
                  </div>
                </div>

                {/* Etiqueta inferior en color dorado */}
                <div className="px-4 pb-4 pt-1">
                  <span className="text-[11px] font-bold text-[#DFA035] block">
                    {levelLabels[idx % levelLabels.length]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botón Central 'VER TODOS LOS PROGRAMAS →' */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => onSelectModule(modules[0].id)}
            className="px-6 py-3 bg-[#00381C] hover:bg-[#004D28] text-white text-xs font-bold rounded-lg transition-all shadow-xs hover:shadow flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <span>Ver Todos los Programas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
