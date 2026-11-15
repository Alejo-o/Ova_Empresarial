import React from 'react';
import { MapPin, Phone, Mail, User, GraduationCap } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#00381C] text-emerald-100 text-[11px] py-2 px-4 sm:px-8 border-b border-emerald-900/60 no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left: 3 items en español idénticos a la imagen de referencia */}
        <div className="flex flex-wrap items-center gap-5 text-emerald-200">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cra. 59 No. 59-65, Barranquilla y Cúcuta</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+57 (605) 344 4333</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>ova@unisimon.edu.co</span>
          </div>
        </div>

        {/* Right: Portal Padres y Portal Estudiantes en español */}
        <div className="flex items-center gap-6 text-emerald-200 font-medium">
          <a
            href="https://estudiantes.unisimon.edu.co"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <User className="w-3.5 h-3.5 text-emerald-400" />
            <span>Portal Padres</span>
          </a>

          <a
            href="https://campus.unisimon.edu.co"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Portal Estudiantes</span>
          </a>
        </div>
      </div>
    </div>
  );
};
