import React from 'react';
import { Building2, Users, GraduationCap, Award, Percent } from 'lucide-react';

export const StatsCounterBar: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      value: '25+',
      label: 'Años de Excelencia'
    },
    {
      icon: Users,
      value: '1500+',
      label: 'Estudiantes Matriculados'
    },
    {
      icon: GraduationCap,
      value: '120+',
      label: 'Docentes Calificados'
    },
    {
      icon: Award,
      value: '100+',
      label: 'Premios Ganados'
    },
    {
      icon: Percent,
      value: '98%',
      label: 'Tasa de Aprobación Universitaria'
    }
  ];

  return (
    <section className="bg-[#00381C] text-white py-10 border-y border-emerald-900/60 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="flex flex-col items-center space-y-2">
                <div className="p-2.5 rounded-full bg-white/10 text-emerald-300 mb-1">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {s.value}
                </span>
                <span className="text-xs text-emerald-200/90 font-medium">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
