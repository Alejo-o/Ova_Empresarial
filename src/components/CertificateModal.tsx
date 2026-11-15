import React, { useState } from 'react';
import { UNISIMON_LOGO, TECH_BADGE_LOGO } from '../data/courseData';
import { X, Printer, CheckCircle, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  studentId: string;
  onUpdateStudentInfo: (name: string, id: string) => void;
  completedCount: number;
  totalModules: number;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  studentName,
  studentId,
  onUpdateStudentInfo,
  completedCount,
  totalModules
}) => {
  const [nameInput, setNameInput] = useState(studentName || 'Alejandro Martínez');
  const [idInput, setIdInput] = useState(studentId || '1.042.890.312');
  const [isEditing, setIsEditing] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateStudentInfo(nameInput, idInput);
    setIsEditing(false);
  };

  const currentDate = new Date().toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full border border-emerald-200 shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Top Control Bar (Hidden on print) */}
        <div className="no-print bg-[#004D28] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-300" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Certificación Digital Oficial · Universidad Simón Bolívar
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs font-medium text-emerald-200 hover:text-white underline cursor-pointer"
            >
              {isEditing ? 'Cerrar Edición' : 'Editar Datos del Estudiante'}
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#006837] hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Descargar PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 text-emerald-300 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-emerald-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editing Form (Hidden on print) */}
        {isEditing && (
          <form onSubmit={handleSaveInfo} className="no-print p-4 bg-emerald-50/70 border-b border-emerald-200 flex flex-wrap gap-4 items-end text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Nombre Completo del Estudiante:</label>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="p-2 border border-slate-300 rounded-lg w-64 bg-white"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Documento de Identidad / C.C.:</label>
              <input
                type="text"
                value={idInput}
                onChange={(e) => setIdInput(e.target.value)}
                className="p-2 border border-slate-300 rounded-lg w-48 bg-white"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#006837] text-white font-bold rounded-lg cursor-pointer hover:bg-[#004D28]"
            >
              Guardar en Diploma
            </button>
          </form>
        )}

        {/* PRINTABLE DIPLOMA CANVAS */}
        <div className="p-8 sm:p-12 bg-white relative print:p-0">
          {/* Certificate Border with Unisimón Green Lines */}
          <div className="border-4 border-[#006837] p-8 sm:p-10 rounded-2xl relative bg-gradient-to-b from-[#FAFDFB] via-white to-[#F5FAF6] shadow-inner">
            {/* Inner Guilloche Border */}
            <div className="border border-emerald-300 p-6 rounded-xl space-y-6 text-center relative">
              {/* Header Logos Row */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald-200">
                <img
                  src={UNISIMON_LOGO}
                  alt="Universidad Simón Bolívar"
                  className="h-16 w-auto object-contain"
                />

                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                    CÓDIGO DE VERIFICACIÓN
                  </span>
                  <span className="text-xs font-mono font-bold text-[#006837]">
                    USB-OVA-2026-94812-OK
                  </span>
                </div>
              </div>

              {/* Legal Text */}
              <div className="space-y-1">
                <h3 className="text-sm font-bold tracking-widest text-[#004D28] uppercase">
                  La Universidad Simón Bolívar
                </h3>
                <p className="text-[10px] text-slate-500 italic">
                  Reconocimiento institucional por el Ministerio de Educación Nacional de Colombia · Sedes Barranquilla y Cúcuta
                </p>
                <p className="text-xs font-bold text-slate-700 pt-1 tracking-wider uppercase">
                  Hace Constar Que:
                </p>
              </div>

              {/* Student Name */}
              <div className="py-2">
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#006837] tracking-wide border-b-2 border-emerald-200 pb-2 inline-block px-8">
                  {nameInput}
                </h2>
                <p className="text-xs text-slate-600 mt-1 font-mono">
                  Identificación: C.C. {idInput}
                </p>
              </div>

              {/* Course Title and Accomplishment */}
              <div className="space-y-2 max-w-2xl mx-auto">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Ha cursado y aprobado satisfactoriamente con excelencia académica el
                </p>
                <h4 className="text-lg sm:text-xl font-serif font-bold text-[#0F2417]">
                  Objeto Virtual de Aprendizaje (OVA): <br />
                  <span className="text-[#006837]">
                    Liderazgo en Innovación, Ciberseguridad y Gestión Organizacional
                  </span>
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Con una intensidad de <strong>20 Horas Académicas</strong> y el dominio de los 5 núcleos temáticos:
                  Innovación y Design Thinking · Ciberseguridad y Tríada CIA · Gestión Integral de Riesgos (ISO 31000) · Cultura Organizacional · Gestión del Cambio (Kotter).
                </p>
              </div>

              {/* Official Seals and Signatures */}
              <div className="pt-8 grid grid-cols-3 gap-6 items-end border-t border-emerald-200 text-center">
                {/* Signature 1 */}
                <div className="space-y-1">
                  <div className="h-10 flex items-center justify-center font-serif italic text-slate-600 text-sm">
                    Dra. María Elena Restrepo
                  </div>
                  <div className="border-t border-slate-400 w-36 mx-auto" />
                  <span className="text-[10px] font-bold text-slate-800 block">
                    Vicerrectoría Académica
                  </span>
                  <span className="text-[9px] text-slate-400 block">Universidad Simón Bolívar</span>
                </div>

                {/* Central Official Circular Tech Badge */}
                <div className="flex flex-col items-center justify-center space-y-1">
                  <img
                    src={TECH_BADGE_LOGO}
                    alt="Sello de Seguridad Oficial"
                    className="w-16 h-16 object-contain rounded-full border border-emerald-300 p-1 bg-white shadow-xs"
                  />
                  <span className="text-[9px] font-bold text-[#006837] tracking-wider uppercase">
                    Acreditación de Alta Calidad
                  </span>
                </div>

                {/* Signature 2 */}
                <div className="space-y-1">
                  <div className="h-10 flex items-center justify-center font-serif italic text-slate-600 text-sm">
                    Ing. Carlos Alberto Mendoza
                  </div>
                  <div className="border-t border-slate-400 w-36 mx-auto" />
                  <span className="text-[10px] font-bold text-slate-800 block">
                    Dirección de Educación Digital
                  </span>
                  <span className="text-[9px] text-slate-400 block">Sedes Barranquilla y Cúcuta</span>
                </div>
              </div>

              {/* Issue Date & Footer */}
              <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>Expedido en Barranquilla, Colombia a los {currentDate}</span>
                <span className="flex items-center gap-1 text-[#006837] font-bold">
                  <CheckCircle className="w-3 h-3" /> Certificado Válido y Auténtico
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
