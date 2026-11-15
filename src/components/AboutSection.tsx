import React from 'react';
import { ArrowRight, GraduationCap, Heart, Globe, Building2, Users, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-el-ova" className="py-20 bg-white border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Columna Izquierda: Titulares, texto y estadísticas en español */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#DFA035] uppercase tracking-wider block">
                Sobre Nuestra Universidad
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A2B18] leading-tight">
                Excelencia en Educación <br />
                <span className="text-[#DFA035]">Carácter para la Vida</span>
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              En la <strong className="text-slate-800">Universidad Simón Bolívar</strong>, creemos en el desarrollo de mentes curiosas, valores sólidos y profesionales seguros de sí mismos, preparados para marcar una diferencia positiva en el mundo global.
            </p>

            <a
              href="https://www.unisimon.edu.co"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00381C] hover:bg-[#004D28] text-white text-xs font-bold rounded-lg transition-all shadow-xs hover:shadow uppercase tracking-wider cursor-pointer"
            >
              <span>Conoce Más Sobre Nosotros</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Fila inferior de 3 estadísticas idéntica a la imagen */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 text-xs">
              <div className="flex items-start gap-2">
                <Building2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-base font-bold font-serif text-slate-900 block leading-tight">50+</span>
                  <span className="text-[10px] text-slate-500 leading-tight block">Años de Excelencia</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Users className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-base font-bold font-serif text-slate-900 block leading-tight">1500+</span>
                  <span className="text-[10px] text-slate-500 leading-tight block">Estudiantes Felices</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Award className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-base font-bold font-serif text-slate-900 block leading-tight">100+</span>
                  <span className="text-[10px] text-slate-500 leading-tight block">Premios y Logros</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Central: Foto del Campus Universitario */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                alt="Instalaciones del Campus Universidad Simón Bolívar"
                className="w-full h-72 sm:h-84 object-cover"
              />
            </div>
          </div>

          {/* Columna Derecha: 3 Tarjetas Blancas Apiladas idénticas a la imagen */}
          <div className="lg:col-span-3 space-y-4">
            {/* Tarjeta 1 */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-slate-100 text-[#00381C] shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-base font-bold font-serif text-slate-900 block leading-tight">15:1</span>
                <span className="text-[11px] text-slate-500">Relación Estudiante-Docente</span>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-amber-50 text-[#DFA035] shrink-0">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div>
                <span className="text-base font-bold font-serif text-slate-900 block leading-tight">30+</span>
                <span className="text-[11px] text-slate-500">Clubes y Actividades</span>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-slate-100 text-slate-700 shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="text-base font-bold font-serif text-slate-900 block leading-tight">20+</span>
                <span className="text-[11px] text-slate-500">Países Representados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
