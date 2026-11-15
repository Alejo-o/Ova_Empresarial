import React, { useState } from 'react';
import { UNISIMON_LOGO } from '../data/courseData';
import { MapPin, Phone, Mail, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onSelectModule: (moduleId: string) => void;
  onOpenCertificate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectModule, onOpenCertificate }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setEmailInput('');
  };

  return (
    <footer id="contacto" className="bg-[#002B15] text-white pt-14 pb-8 border-t border-emerald-950 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-emerald-900/60">
          {/* Columna 1: Logo Unisimón, Lema y Redes Sociales */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block shadow-sm">
              <img
                src={UNISIMON_LOGO}
                alt="Universidad Simón Bolívar"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-emerald-200/80 leading-relaxed max-w-sm">
              Inspirando mentes. Forjando el futuro. <br />
              Construyendo un mejor mañana a través de la excelencia académica, la investigación y la innovación con impacto social.
            </p>

            {/* Iconos circulares de redes sociales idénticos al referente */}
            <div className="flex items-center gap-2 pt-1 text-xs">
              <a
                href="https://facebook.com/unisimon"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-emerald-700/80 flex items-center justify-center hover:bg-white hover:text-[#002B15] transition-all font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com/unisimon"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-emerald-700/80 flex items-center justify-center hover:bg-white hover:text-[#002B15] transition-all font-bold"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://youtube.com/unisimon"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-emerald-700/80 flex items-center justify-center hover:bg-white hover:text-[#002B15] transition-all font-bold"
                aria-label="YouTube"
              >
                yt
              </a>
              <a
                href="https://linkedin.com/school/universidad-simon-bolivar"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-emerald-700/80 flex items-center justify-center hover:bg-white hover:text-[#002B15] transition-all font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Columna 2: ENLACES RÁPIDOS */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/80">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => onSelectModule('innovacion-design-thinking')} className="hover:text-white transition-colors cursor-pointer">
                  Académico
                </button>
              </li>
              <li>
                <button onClick={onOpenCertificate} className="hover:text-white transition-colors cursor-pointer">
                  Admisiones
                </button>
              </li>
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">
                  Vida en el Campus
                </button>
              </li>
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">
                  Noticias y Eventos
                </button>
              </li>
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">
                  Contáctanos
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: RECURSOS */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Recursos
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/80">
              <li>
                <a href="https://estudiantes.unisimon.edu.co" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Portal Padres
                </a>
              </li>
              <li>
                <a href="https://campus.unisimon.edu.co" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Portal Estudiantes
                </a>
              </li>
              <li>
                <a href="https://www.unisimon.edu.co" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Calendario Escolar
                </a>
              </li>
              <li>
                <a href="https://www.unisimon.edu.co" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Políticas y Ética
                </a>
              </li>
              <li>
                <a href="https://www.unisimon.edu.co" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Bolsa de Empleo
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: CONTÁCTANOS */}
          <div className="lg:col-span-2 space-y-3 text-xs text-emerald-200/80">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Contáctanos
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Cra. 59 No. 59-65, Barranquilla, Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+57 (605) 344 4333</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>info@unisimon.edu.co</span>
              </div>
            </div>
          </div>

          {/* Columna 5: BOLETÍN INFORMATIVO */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
              Boletín
            </h4>
            <p className="text-[11px] text-emerald-200/80 leading-snug">
              Mantente actualizado con nuestras últimas noticias y eventos.
            </p>

            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Ingresa tu correo"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full text-xs px-3 py-2 bg-white text-slate-800 rounded-l-md focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-3 bg-[#DFA035] hover:bg-[#C98B24] text-slate-900 rounded-r-md transition-colors cursor-pointer flex items-center justify-center shrink-0"
                aria-label="Suscribirse al boletín"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
            {subscribed && (
              <span className="text-[10px] text-emerald-300 block">
                ¡Gracias por suscribirte al boletín oficial!
              </span>
            )}
          </div>
        </div>

        {/* Barra de Derechos de Autor en Español */}
        <div className="text-center text-[11px] text-emerald-300/80">
          <p>© {new Date().getFullYear()} Universidad Simón Bolívar. Vigilada Mineducación. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
