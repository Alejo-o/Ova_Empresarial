import React from 'react';
import { Lightbulb, ShieldCheck, AlertTriangle, Users, RefreshCw } from 'lucide-react';

interface PillarsBarProps {
  onSelectModule: (moduleId: string) => void;
  completedModules: string[];
}

export const PillarsBar: React.FC<PillarsBarProps> = ({ onSelectModule, completedModules }) => {
  const pillars = [
    {
      id: 'innovacion-design-thinking',
      title: 'Educación Holística',
      subtitle: 'Design Thinking',
      desc: 'Fomentando el crecimiento académico, emocional y creativo.',
      icon: Lightbulb
    },
    {
      id: 'ciberseguridad',
      title: 'Docentes Expertos',
      subtitle: 'Ciberseguridad & CIA',
      desc: 'Formadores apasionados y dedicados a la excelencia digital.',
      icon: ShieldCheck
    },
    {
      id: 'gestion-de-riesgos',
      title: 'Aprendizaje Innovador',
      subtitle: 'Gestión de Riesgos',
      desc: 'Simuladores modernos y métodos pedagógicos activos.',
      icon: AlertTriangle
    },
    {
      id: 'cultura-organizacional',
      title: 'Perspectiva Global',
      subtitle: 'Cultura Organizacional',
      desc: 'Preparando líderes éticos para un futuro internacional.',
      icon: Users
    },
    {
      id: 'gestion-del-cambio',
      title: 'Campus Seguro e Inclusivo',
      subtitle: 'Gestión del Cambio',
      desc: 'Un entorno seguro y guiado donde cada estudiante prospera.',
      icon: RefreshCw
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-8 relative z-20 no-print">
      <div className="bg-[#00381C] text-white rounded-2xl shadow-2xl border border-emerald-900/60 p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-emerald-800/60">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isCompleted = completedModules.includes(p.id);

            return (
              <div
                key={p.id}
                onClick={() => onSelectModule(p.id)}
                className="p-3 sm:px-4 first:pl-0 last:pr-0 cursor-pointer group transition-all flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-emerald-400/50 flex items-center justify-center text-emerald-300 group-hover:bg-white group-hover:text-[#00381C] transition-all shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                      {p.title}
                    </h3>
                    <span className="text-[10px] text-emerald-300 block font-medium">
                      {p.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-emerald-100/70 leading-snug line-clamp-2">
                  {p.desc}
                </p>

                {isCompleted && (
                  <span className="text-[9px] font-bold text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded self-start">
                    ✓ Completado
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
