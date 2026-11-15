import React, { useState, useEffect } from 'react';
import { MODULES_DATA } from './data/courseData';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsBar } from './components/PillarsBar';
import { AboutSection } from './components/AboutSection';
import { ModulesGrid } from './components/ModulesGrid';
import { StatsCounterBar } from './components/StatsCounterBar';
import { AdmissionsBanner } from './components/AdmissionsBanner';
import { ModuleViewer } from './components/ModuleViewer';
import { CertificateModal } from './components/CertificateModal';
import { Footer } from './components/Footer';
import { BookOpen, X } from 'lucide-react';

export default function App() {
  // Navigation State
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // User Progress persisted in localStorage
  const [completedModules, setCompletedModules] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('unisimon_ova_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quizScores, setQuizScores] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('unisimon_ova_scores');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [studentInfo, setStudentInfo] = useState<{ name: string; id: string }>(() => {
    try {
      const saved = localStorage.getItem('unisimon_student_info');
      return saved ? JSON.parse(saved) : { name: 'Alejandro Martínez', id: '1.042.890.312' };
    } catch {
      return { name: 'Alejandro Martínez', id: '1.042.890.312' };
    }
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem('unisimon_ova_completed', JSON.stringify(completedModules));
      localStorage.setItem('unisimon_ova_scores', JSON.stringify(quizScores));
      localStorage.setItem('unisimon_student_info', JSON.stringify(studentInfo));
    } catch {
      // localStorage error handling
    }
  }, [completedModules, quizScores, studentInfo]);

  const totalModules = MODULES_DATA.length;
  const completedCount = completedModules.length;
  const progressPercentage = Math.round((completedCount / totalModules) * 100);

  const handleSelectModule = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteModule = (moduleId: string, score: number) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules((prev) => [...prev, moduleId]);
    }
    setQuizScores((prev) => ({ ...prev, [moduleId]: score }));
  };

  const handleUpdateStudentInfo = (name: string, id: string) => {
    setStudentInfo({ name, id });
  };

  const handleNavigateSection = (sectionId: string) => {
    if (selectedModuleId) {
      setSelectedModuleId(null);
    }
    setTimeout(() => {
      if (sectionId === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 50);
  };

  // Find currently active module
  const currentModule = MODULES_DATA.find((m) => m.id === selectedModuleId);
  const currentModuleIndex = MODULES_DATA.findIndex((m) => m.id === selectedModuleId);
  const hasNextModule = currentModuleIndex >= 0 && currentModuleIndex < MODULES_DATA.length - 1;

  const handleNextModule = () => {
    if (hasNextModule) {
      setSelectedModuleId(MODULES_DATA[currentModuleIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#132219] flex flex-col font-sans selection:bg-[#006837] selection:text-white">
      {/* 1. Institutional Top Bar */}
      <TopBar />

      {/* 2. Main Navbar with Unisimón Logo */}
      <Navbar
        progressPercentage={progressPercentage}
        completedCount={completedCount}
        totalModules={totalModules}
        onNavigate={handleNavigateSection}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onStartLearning={() => {
          if (completedCount === 0) {
            handleSelectModule(MODULES_DATA[0].id);
          } else {
            const nextUncompleted = MODULES_DATA.find((m) => !completedModules.includes(m.id));
            handleSelectModule(nextUncompleted ? nextUncompleted.id : MODULES_DATA[0].id);
          }
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedModuleId && currentModule ? (
          <ModuleViewer
            module={currentModule}
            onBack={() => {
              setSelectedModuleId(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onCompleteModule={handleCompleteModule}
            isCompleted={completedModules.includes(currentModule.id)}
            savedScore={quizScores[currentModule.id]}
            onNextModule={handleNextModule}
            hasNextModule={hasNextModule}
          />
        ) : (
          <>
            {/* 3. Hero Section (Inspiring Minds. Shaping Futures.) */}
            <Hero
              onExploreModules={() => {
                const el = document.getElementById('modulos');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenGuide={() => setIsGuideOpen(true)}
            />

            {/* 4. Pillars Bar (Floating dark card overlapping Hero bottom) */}
            <PillarsBar
              onSelectModule={handleSelectModule}
              completedModules={completedModules}
            />

            {/* 5. About Section (Excellence in Education - Character for Life) */}
            <AboutSection />

            {/* 6. Modules Grid (Discover Our Programs with 5 cards) */}
            <ModulesGrid
              modules={MODULES_DATA}
              completedModules={completedModules}
              quizScores={quizScores}
              onSelectModule={handleSelectModule}
            />

            {/* 7. Full-Width Stats Counter Bar (Navy/Dark Green with 5 counters) */}
            <StatsCounterBar />

            {/* 8. Admissions Banner (Begin Your Journey Toward a Bright Future) */}
            <AdmissionsBanner
              onOpenCertificate={() => setIsCertificateOpen(true)}
              onOpenGuide={() => setIsGuideOpen(true)}
            />
          </>
        )}
      </main>

      {/* 9. Official Footer matching reference layout */}
      <Footer
        onSelectModule={handleSelectModule}
        onOpenCertificate={() => setIsCertificateOpen(true)}
      />

      {/* Official Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        studentName={studentInfo.name}
        studentId={studentInfo.id}
        onUpdateStudentInfo={handleUpdateStudentInfo}
        completedCount={completedCount}
        totalModules={totalModules}
      />

      {/* Learning Guide & Methodology Modal */}
      {isGuideOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-emerald-100 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#006837]" />
                <h3 className="text-lg font-serif font-bold text-[#004D28]">
                  Guía Pedagógica del Estudiante · Unisimón
                </h3>
              </div>
              <button
                onClick={() => setIsGuideOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                El <strong>Objeto Virtual de Aprendizaje (OVA)</strong> de la Universidad Simón Bolívar ha sido estructurado siguiendo la arquitectura de formación integral de excelencia internacional:
              </p>

              <div className="space-y-2.5">
                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                  <strong className="text-[#006837] block">1. Innovación y Design Thinking</strong>
                  <span>Metodología de 5 fases para resolver retos centrados en personas con lienzo interactivo.</span>
                </div>

                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                  <strong className="text-[#006837] block">2. Ciberseguridad</strong>
                  <span>Tríada CIA, vectores de ataque y simulador de incidentes en el SOC institucional.</span>
                </div>

                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                  <strong className="text-[#006837] block">3. Gestión de Riesgos</strong>
                  <span>Norma ISO 31000, matriz 5x5 y cálculo interactivo de severidad y riesgo residual.</span>
                </div>

                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                  <strong className="text-[#006837] block">4. Cultura Organizacional</strong>
                  <span>Modelo de Edgar Schein y radar OCAI de Cameron & Quinn con gráfico SVG dinámico.</span>
                </div>

                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                  <strong className="text-[#006837] block">5. Gestión del Cambio</strong>
                  <span>Ruta de 8 pasos de John Kotter con termómetro interactivo de resistencia y adopción.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsGuideOpen(false)}
                className="px-5 py-2.5 bg-[#00381C] hover:bg-[#004D28] text-white text-xs font-bold rounded-lg cursor-pointer uppercase tracking-wider"
              >
                Comenzar Aprendizaje
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
