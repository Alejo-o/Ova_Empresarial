import { ModuleData } from '../types';

export const UNISIMON_LOGO = '/assets/aistudio/WhatsApp_Image_2026-11-06_at_6.49.52_AM_0c394458.jpeg';
export const TECH_BADGE_LOGO = '/assets/aistudio/WhatsApp_Image_2026-11-06_at_6.49.52_AM_1caec12c.jpeg';

export const MODULES_DATA: ModuleData[] = [
  {
    id: 'innovacion-design-thinking',
    title: 'Innovación y Design Thinking',
    shortTitle: 'Design Thinking',
    subtitle: 'Metodología ágil centrada en las personas para la resolución creativa de problemas complejos',
    description: 'Aprende a formular soluciones innovadoras que equilibren deseabilidad humana, viabilidad tecnológica y sostenibilidad financiera a través de las 5 fases del Design Thinking.',
    competencies: [
      'Empatía activa e investigación con usuarios',
      'Definición estratégica de arquetipos y problemas (POV)',
      'Técnicas de divergencia creativa y priorización de ideas',
      'Prototipado rápido y validación experimental'
    ],
    duration: '4 Horas Académicas',
    level: 'Fundamental y Aplicado',
    iconName: 'Lightbulb',
    heroImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    simulatorType: 'design-thinking',
    simulatorTitle: 'Lienzo de Innovación & Mapa de Empatía',
    sections: [
      {
        id: 'fundamentos-dt',
        title: '1. Fundamentos del Pensamiento de Diseño',
        summary: 'Comprender el modelo de doble diamante y el ciclo iterativo de innovación centrada en el usuario.',
        content: [
          'El Design Thinking nació en los laboratorios de la Universidad de Stanford y la consultora IDEO como una respuesta a los métodos tradicionales de ingeniería y negocios, que a menudo diseñaban productos desde la perspectiva de la viabilidad técnica antes de consultar las necesidades reales de los seres humanos.',
          'Esta metodología se basa en un proceso no lineal e iterativo estructurado en cinco fases complementarias: Empatizar, Definir, Idear, Prototipar y Evaluar. Su premisa fundamental es que la innovación de alto impacto surge de la intersección entre tres vectores: Deseabilidad (lo que la gente necesita), Factibilidad (lo que la tecnología permite construir) y Viabilidad (lo que hace económicamente sostenible el proyecto).'
        ],
        keyPoints: [
          'Doble Diamante: alternancia entre pensamiento divergente (explorar posibilidades) y convergente (tomar decisiones).',
          'Enfoque Human-Centered Design: el usuario real es el centro del descubrimiento.',
          'Cultura del fallo temprano y económico: prototipar rápido para aprender sin incurrir en costos masivos.'
        ],
        practicalApplication: 'En el contexto caribeño y latinoamericano, el Design Thinking ha permitido a empresas de salud, fintech y educación rediseñar sus canales de atención para reducir la deserción y mejorar la accesibilidad de poblaciones diversas.'
      },
      {
        id: 'fases-empatizar-definir',
        title: '2. Empatizar y Definir: De la Observación al POV',
        summary: 'Herramientas de inmersión etnográfica, entrevistas en profundidad y síntesis de hallazgos en puntos de vista accionables.',
        content: [
          'La fase de empatía requiere suspender los juicios previos y observar los comportamientos en el entorno natural del usuario. Herramientas como el Mapa de Empatía (¿Qué piensa y siente?, ¿Qué oye?, ¿Qué ve?, ¿Qué dice y hace?) permiten estructurar dolores (frustraciones) y ganancias (aspiraciones).',
          'En la fase de definición, el equipo traduce datos cualitativos dispersos en un "Point of View" (POV) o enunciado del problema estructurado bajo la fórmula: [Usuario específico] necesita [Acción/Necesidad sentida] porque [Insight o revelación profunda encontrada]. A partir de este enunciado se generan las preguntas detonantes "¿Cómo podríamos...?" (How Might We?).'
        ],
        keyPoints: [
          'Evitar preguntas dirigidas durante entrevistas: priorizar historias reales sobre opiniones abstractas.',
          'El insight no es un dato estadístico; es la motivación oculta detrás de la conducta del usuario.',
          'La pregunta "¿Cómo podríamos...?" abre el espacio de soluciones sin presuponer una respuesta tecnológica fija.'
        ],
        practicalApplication: 'Rediseño de la experiencia del estudiante universitario: al observar que los estudiantes no utilizaban la biblioteca digital, se descubrió que no era por falta de interés, sino porque las interfaces requerían 6 pasos de autenticación en dispositivos móviles lentos.'
      },
      {
        id: 'idear-prototipar-evaluar',
        title: '3. Idear, Prototipar y Testear con Usuarios',
        summary: 'Estrategias de co-creación, matrices de priorización impacto/esfuerzo y experimentación ágil con prototipos de baja y alta fidelidad.',
        content: [
          'La fase de ideación busca volumen y diversidad de enfoques. Técnicas como Crazy 8\'s o SCAMPER impiden que el equipo se enamore de la primera solución evidente. Posteriormente, se aplican matrices de priorización 2x2 (Impacto vs. Esfuerzo) para seleccionar las ideas más viables.',
          'El prototipado da forma tangible a la idea: bocetos en papel, storyboards, maquetas digitales en Figma o simulaciones de servicio (roleplay). Lo esencial es que el prototipo sirva únicamente para responder una hipótesis crítica: ¿Entiende el usuario el valor de la propuesta?'
        ],
        keyPoints: [
          'Prototipo de baja fidelidad: menor inversión de tiempo, mayor disposición del usuario a criticar constructivamente.',
          'Pruebas de usuario: observar en silencio sin guiar ni defender el diseño.',
          'Bucle "Construir - Medir - Aprender": iterar continuamente hasta alcanzar la solución óptima.'
        ],
        practicalApplication: 'Una universidad regional prototipó un nuevo sistema de tutorías virtuales en solo 3 días usando un grupo de WhatsApp y formularios simples antes de contratar el desarrollo de una plataforma costosa, validando previamente el interés real de los alumnos.'
      }
    ],
    caseStudy: {
      id: 'caso-clinica-salud',
      title: 'Caso de Estudio: Rediseño del Servicio de Teleconsulta Médica',
      companyScenario: 'La red hospitalaria "Salud Caribe" implementó un sistema de telemedicina durante un año, pero el 65% de los pacientes adultos mayores no lograba completar sus citas virtuales, saturando las líneas de urgencias.',
      contextBackground: 'El equipo de tecnología propuso gastar $80.000 USD en una nueva aplicación móvil con videollamadas 4K. Sin embargo, el equipo de innovación sugirió aplicar Design Thinking antes de autorizar el presupuesto.',
      dilemma: '¿Cuál es la estrategia metodológicamente correcta para abordar este problema desde el Design Thinking?',
      options: [
        {
          id: 'opt-1',
          text: 'Comprar inmediatamente la nueva app con mayor resolución y obligar a los pacientes a capacitarse mediante videos instructivos.',
          isBest: false,
          score: 10,
          feedback: 'Enfoque centrado en la tecnología, no en las personas. Asume que la falla es la calidad del video, ignorando la brecha digital y la accesibilidad de los adultos mayores.'
        },
        {
          id: 'opt-2',
          text: 'Realizar inmersión etnográfica y entrevistas domiciliarias a pacientes para mapear su viaje completo y construir un prototipo asistido de baja complejidad.',
          isBest: true,
          score: 100,
          feedback: '¡Excelente decisión! La inmersión permitió descubrir que los adultos mayores no tenían correo electrónico configurado en sus teléfonos. La solución real fue enviar enlaces directos con un solo clic vía SMS y WhatsApp con confirmación automática.'
        },
        {
          id: 'opt-3',
          text: 'Suspender definitivamente el servicio de telemedicina y volver 100% a la atención presencial para evitar quejas.',
          isBest: false,
          score: 20,
          feedback: 'Esta opción elude la innovación y retrocede en cobertura sanitaria, afectando a pacientes que residen en zonas rurales apartadas.'
        }
      ],
      learningOutcome: 'El Design Thinking demuestra que las soluciones más efectivas no siempre requieren más tecnología compleja, sino un entendimiento más profundo y empático de las limitaciones reales de las personas usuarias.'
    },
    quiz: [
      {
        id: 'q1-dt',
        question: '¿Cuál es la premisa central que distingue al Design Thinking de otros enfoques tradicionales de gestión?',
        options: [
          'Garantizar que toda solución tecnológica tenga un costo de desarrollo inferior al 10% del presupuesto.',
          'Poner en el centro las necesidades emocionales, funcionales y sociales de las personas antes de la solución técnica.',
          'Eliminar por completo el análisis financiero y legal durante el ciclo de vida del proyecto.',
          'Asegurar que los proyectos nunca sufran cambios después de la primera semana de planificación.'
        ],
        correctIndex: 1,
        explanation: 'El Design Thinking es un enfoque Human-Centered (centrado en el ser humano). La tecnología y los modelos de negocio son habilitadores, pero el punto de partida es la empatía con la experiencia del usuario.'
      },
      {
        id: 'q2-dt',
        question: 'En la fase de "Definir", ¿qué compone adecuadamente un enunciado de Punto de Vista (POV)?',
        options: [
          'Un resumen de costos de licencias de software.',
          'Una lista de tareas asignadas al equipo de desarrollo con fechas de entrega.',
          'El usuario específico + su necesidad sentida + el insight profundo descubierto.',
          'Un acuerdo de confidencialidad firmado por la junta directiva.'
        ],
        correctIndex: 2,
        explanation: 'Un POV robusto articula claramente al usuario, la necesidad y el insight para enfocar los esfuerzos creativos posteriores.'
      },
      {
        id: 'q3-dt',
        question: '¿Por qué se aconseja priorizar los prototipos de "baja fidelidad" en etapas tempranas de un proyecto?',
        options: [
          'Porque permiten fallar rápido y barato, invitando al usuario a dar retroalimentación sincera sin apego emocional a la interfaz.',
          'Porque no requieren supervisión de los directores de la organización.',
          'Porque pueden ser comercializados directamente a los clientes finales.',
          'Porque eliminan la necesidad de hacer pruebas de usabilidad.'
        ],
        correctIndex: 0,
        explanation: 'Un prototipo de baja fidelidad (boceto, papel, maqueta ágil) se construye en horas, permitiendo validar hipótesis críticas antes de invertir meses de programación costosa.'
      },
      {
        id: 'q4-dt',
        question: '¿Qué combinación de factores define una verdadera innovación sostenible según el modelo de IDEO/Stanford?',
        options: [
          'Velocidad de entrega, bajo salario y automatización completa.',
          'Deseabilidad humana, Factibilidad tecnológica y Viabilidad económica.',
          'Publicidad masiva, exclusividad de patente y subsidios gubernamentales.',
          'Reemplazo de trabajadores por inteligencia artificial sin análisis de impacto.'
        ],
        correctIndex: 1,
        explanation: 'La intersección virtuosa entre Deseabilidad, Factibilidad y Viabilidad es el estándar universal de la innovación responsable.'
      }
    ]
  },
  {
    id: 'ciberseguridad',
    title: 'Ciberseguridad y Protección de Activos',
    shortTitle: 'Ciberseguridad',
    subtitle: 'Salvaguarda de la información, gestión de incidentes y resiliencia en la era digital',
    description: 'Domina los principios esenciales de la seguridad de la información: la tríada CIA, mitigación de ataques cibernéticos, autenticación robusta y concienciación contra la ingeniería social.',
    competencies: [
      'Garantía de la Tríada CIA (Confidencialidad, Integridad y Disponibilidad)',
      'Identificación y neutralización de vectores de ataque e ingeniería social',
      'Diseño de políticas de Zero Trust y control de identidades (IAM/MFA)',
      'Planificación de respuesta a incidentes y continuidad del negocio'
    ],
    duration: '4 Horas Académicas',
    level: 'Crítico e Intermedio',
    iconName: 'ShieldCheck',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    simulatorType: 'ciberseguridad',
    simulatorTitle: 'Centro de Operaciones de Seguridad (SOC) y Tríada CIA',
    sections: [
      {
        id: 'triada-cia',
        title: '1. Los Pilares Fundamentales: La Tríada CIA',
        summary: 'Arquitectura de seguridad basada en Confidencialidad, Integridad y Disponibilidad.',
        content: [
          'La ciberseguridad contemporánea no se limita a instalar antivirus; es una disciplina estratégica que protege el activo más valioso de las organizaciones: sus datos y la confianza de sus usuarios. Toda política de ciberseguridad se fundamenta en la Tríada CIA:',
          '• Confidencialidad: Garantizar que la información sea accesible únicamente por personas, entidades o procesos autorizados mediante cifrado fuerte (AES-256, RSA), principio de menor privilegio y políticas de clasificación de datos.\n• Integridad: Asegurar la exactitud, completitud y no alteración no autorizada de los datos a lo largo de su ciclo de vida, utilizando funciones hash criptográficas (SHA-256) y firmas digitales.\n• Disponibilidad: Garantizar que los sistemas, redes y datos estén operativos y accesibles oportunamente cuando los usuarios autorizados los requieran, mediante redundancia, balanceo de carga y planes de contingencia ante ataques de Denegación de Servicio (DDoS).'
        ],
        keyPoints: [
          'Principio de Menor Privilegio (PoLP): cada usuario o servicio debe tener solo los permisos estrictamente necesarios para su función.',
          'Cifrado en reposo (bases de datos) y en tránsito (TLS 1.3): capas ineludibles de protección.',
          'La seguridad es una cadena: el eslabón más débil siempre define la fortaleza total del sistema.'
        ],
        practicalApplication: 'En una universidad, la confidencialidad protege los historiales médicos y datos personales de los estudiantes; la integridad asegura que las calificaciones no puedan ser alteradas ilegítimamente; la disponibilidad garantiza que la plataforma de exámenes en línea no colapse durante la semana de evaluaciones finales.'
      },
      {
        id: 'amenazas-ingenieria-social',
        title: '2. Vectores de Amenazas e Ingeniería Social',
        summary: 'Análisis de ataques de Phishing, Ransomware, Man-in-the-Middle y el factor humano en la seguridad.',
        content: [
          'A pesar de los avanzados firewalls y algoritmos de inteligencia artificial, más del 85% de las brechas de seguridad exitosas involucran el factor humano. La ingeniería social manipula la psicología de las personas (urgencia, curiosidad, miedo o autoridad) para inducirlas a entregar credenciales o ejecutar software malicioso.',
          'Entre las principales amenazas destacan:\n1. Phishing y Spear Phishing: Correos electrónicos o mensajes fraudulentos personalizados que suplantan a entidades bancarias o directivos institucionales.\n2. Ransomware: Malware que cifra la información del servidor y exige rescates millonarios para devolver la clave de descifrado.\n3. Ataques a la Cadena de Suministro: Vulneración de proveedores externos de software para acceder a la red principal.'
        ],
        keyPoints: [
          'Zero Trust ("Nunca confíes, siempre verifica"): ningún usuario ni dispositivo dentro o fuera del perímetro es confiable por defecto.',
          'MFA (Autenticación Multifactor): añade una capa que bloquea el 99% de los ataques automatizados de robo de contraseña.',
          'Copias de seguridad 3-2-1 inmutables: 3 copias, 2 medios distintos, 1 fuera de línea (air-gapped).'
        ],
        practicalApplication: 'La implementación de campañas periódicas de simulación de phishing en instituciones educativas reduce la tasa de clics en enlaces maliciosos de un 38% a menos del 3% en solo 6 meses de entrenamiento constante.'
      },
      {
        id: 'respuesta-incidentes',
        title: '3. Gestión y Respuesta a Incidentes de Seguridad',
        summary: 'Protocolo de las 6 fases del NIST y continuidad operativa tras un compromiso de datos.',
        content: [
          'El estándar mundial del NIST (National Institute of Standards and Technology) establece que la seguridad no consiste en preguntarse si la organización será atacada, sino cuándo ocurrirá y qué tan rápido podrá responder y recuperarse.',
          'El ciclo de vida de respuesta a incidentes comprende:\n1. Preparación: Políticas, simulacros y herramientas de monitoreo (SIEM/EDR).\n2. Detección y Análisis: Detección temprana de anomalías en el tráfico o accesos inusuales.\n3. Contención: Aislar los servidores afectados para frenar la propagación lateral.\n4. Erradicación: Eliminar el malware y cerrar las vulnerabilidades explotadas.\n5. Recuperación: Restauración controlada de servicios desde copias limpias verificadas.\n6. Lecciones Aprendidas: Documentar la cronología para fortalecer las defensas futuras.'
        ],
        keyPoints: [
          'Aislamiento de red inmediato: cortar la conectividad de los equipos comprometidos antes de reiniciar o apagar.',
          'Preservación de evidencia forense para acciones legales y cumplimiento normativo (Habeas Data, GDPR).',
          'Comunicación transparente y coordinada con las partes interesadas y autoridades regulatorias.'
        ],
        practicalApplication: 'Protocolos de aislamiento de red implementados en menos de 15 minutos evitaron que una intrusión en el servidor de correo institucional se propagara hacia el sistema central de admisiones y registro académico.'
      }
    ],
    caseStudy: {
      id: 'caso-phishing-banco',
      title: 'Caso de Estudio: El Falso Correo de la Rectoría',
      companyScenario: 'El lunes a las 8:00 AM, 150 docentes y directivos de la institución recibieron un correo urgente con asunto: "URGENTE: Actualización del Bono Docente y Nómina Semestral", que incluía un enlace a una página idéntica al portal universitario solicitando usuario y contraseña.',
      contextBackground: 'Varios funcionarios ingresaron sus credenciales. Dos horas más tarde, el atacante utilizó esas cuentas para acceder a la base de datos de calificaciones y solicitar transferencias desde la tesorería.',
      dilemma: '¿Cuál es la respuesta de contención prioritaria e inmediata que debe ejecutar el equipo de seguridad informática?',
      options: [
        {
          id: 'opt-1',
          text: 'Enviar un correo a toda la universidad pidiendo amablemente que revisen si hicieron clic en el enlace.',
          isBest: false,
          score: 15,
          feedback: 'Inadecuado. No contiene el vector activo y da tiempo al atacante de exfiltrar información masiva o instalar persistencia en la red.'
        },
        {
          id: 'opt-2',
          text: 'Revocar inmediatamente las sesiones activas, forzar cambio de credenciales de las cuentas afectadas, bloquear el dominio atacante en el firewall perimetral y activar MFA obligatorio.',
          isBest: true,
          score: 100,
          feedback: '¡Correcto! Esta medida interrumpe de inmediato el acceso no autorizado, mitiga el movimiento lateral y protege de raíz las cuentas de usuario mediante el segundo factor de autenticación.'
        },
        {
          id: 'opt-3',
          text: 'Apagar todos los servidores de la universidad durante 4 días para limpiar los discos duros manualmente.',
          isBest: false,
          score: 25,
          feedback: 'Respuesta desproporcionada que destruye la disponibilidad institucional, afectando clases y operaciones críticas sin haber realizado un análisis forense enfocado.'
        }
      ],
      learningOutcome: 'En ciberseguridad, la velocidad de contención coordinada, la revocación de identidades y la autenticación multifactor (MFA) son la primera línea de defensa ante ataques de phishing dirigidos.'
    },
    quiz: [
      {
        id: 'q1-ciber',
        question: '¿Qué componente de la Tríada CIA se vulnera si un atacante altera las notas finales de un estudiante en la base de datos sin autorización?',
        options: [
          'Confidencialidad.',
          'Integridad.',
          'Disponibilidad.',
          'No repudio de envío.'
        ],
        correctIndex: 1,
        explanation: 'La Integridad garantiza que los datos se mantengan exactos y libres de manipulaciones o modificaciones no autorizadas.'
      },
      {
        id: 'q2-ciber',
        question: '¿Cuál es el propósito del modelo de seguridad "Zero Trust" (Confianza Cero)?',
        options: [
          'Desconfiar de los clientes externos pero otorgar acceso ilimitado a cualquier empleado que se conecte por cable dentro de la oficina.',
          'Asumir que toda solicitud de acceso puede ser hostil, verificando identidad, dispositivo y contexto de forma continua, incluso dentro de la red corporativa.',
          'Eliminar todas las contraseñas y depender únicamente de tarjetas de proximidad.',
          'Bloquear el acceso a internet a todos los departamentos de la empresa.'
        ],
        correctIndex: 1,
        explanation: 'Zero Trust rompe el viejo paradigma del "perímetro seguro". Todo tráfico, interno o externo, se autentica, autoriza y cifra continuamente.'
      },
      {
        id: 'q3-ciber',
        question: '¿Por qué la Autenticación Multifactor (MFA) es ampliamente recomendada frente a una contraseña tradicional compleja?',
        options: [
          'Porque evita que el usuario tenga que recordar fechas de entrega.',
          'Porque exige al menos dos factores distintos de prueba (algo que sabes, algo que tienes o algo que eres), inutilizando contraseñas robadas.',
          'Porque hace que los servidores web carguen al doble de velocidad.',
          'Porque reemplaza la necesidad de hacer copias de seguridad de datos.'
        ],
        correctIndex: 1,
        explanation: 'Incluso si un cibercriminal obtiene la contraseña mediante phishing, no podrá ingresar si no cuenta con el segundo factor (ej. código OTP temporal en el teléfono o token físico).'
      },
      {
        id: 'q4-ciber',
        question: 'En la regla de respaldo 3-2-1, ¿qué significa el "1"?',
        options: [
          'Tener solo 1 persona autorizada a ver los datos.',
          'Mantener al menos 1 copia de los respaldos en una ubicación externa o fuera de línea (aislada de la red).',
          'Hacer 1 solo respaldo por año fiscal.',
          'Usar 1 único disco duro externo para toda la empresa.'
        ],
        correctIndex: 1,
        explanation: 'Tener una copia externa o "air-gapped" (desconectada) asegura que, si un ransomware cifra la red corporativa entera, exista un respaldo limpio intacto para restaurar las operaciones.'
      }
    ]
  },
  {
    id: 'gestion-de-riesgos',
    title: 'Gestión Integral de Riesgos',
    shortTitle: 'Gestión de Riesgos',
    subtitle: 'Identificación, análisis cuantitativo/cualitativo y tratamiento proactivo bajo estándares ISO 31000',
    description: 'Aprende a anticipar incertidumbres operativas, financieras, tecnológicas y reputacionales. Construye matrices de calor, calcula severidad del riesgo y formula planes de contingencia efectivos.',
    competencies: [
      'Identificación sistemática de riesgos bajo normas ISO 31000 / COSO ERM',
      'Elaboración y calibración de Matrices de Calor 5x5 (Probabilidad vs. Impacto)',
      'Selección de estrategias de tratamiento: Mitigar, Transferir, Evitar o Aceptar',
      'Definición de Indicadores Clave de Riesgo (KRI) y planes de continuidad'
    ],
    duration: '4 Horas Académicas',
    level: 'Estratégico y Gerencial',
    iconName: 'AlertTriangle',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    simulatorType: 'riesgos',
    simulatorTitle: 'Matriz de Calor de Riesgos 5x5 e Índice de Severidad',
    sections: [
      {
        id: 'fundamentos-iso31000',
        title: '1. Fundamentos y Principios de la Gestión de Riesgos',
        summary: 'El riesgo como efecto de la incertidumbre sobre los objetivos organizacionales según la norma ISO 31000.',
        content: [
          'Históricamente, el riesgo se asociaba únicamente con pérdidas o desgracias financieras. La norma internacional ISO 31000 redefine el riesgo como "el efecto de la incertidumbre sobre los objetivos". Esto significa que el riesgo tiene dos dimensiones: la amenaza (que debe ser prevenida o minimizada) y la oportunidad (que puede ser aprovechada si se gestiona con rigor).',
          'Una gestión de riesgos madura no busca el "riesgo cero" (lo cual paralizaría toda actividad empresarial), sino alinear la exposición de la entidad con su Apetito de Riesgo: la cantidad y tipo de riesgo que una organización está dispuesta a asumir en la consecución de sus metas estratégicas.'
        ],
        keyPoints: [
          'El riesgo es inherente a la toma de decisiones estratégicas.',
          'Apetito de Riesgo vs. Tolerancia al Riesgo: límites claros fijados por la alta dirección.',
          'La gestión de riesgos debe integrarse en la cultura de gobierno y no ser un mero ejercicio de auditoría formal.'
        ],
        practicalApplication: 'Una institución de educación superior evalúa el riesgo de abrir un nuevo programa académico virtual: analiza la demanda de mercado, la capacidad tecnológica de los servidores, el cumplimiento de registros calificados y la disponibilidad docente.'
      },
      {
        id: 'evaluacion-matriz-calor',
        title: '2. Evaluación y Calificación: La Matriz de Calor 5x5',
        summary: 'Metodología cualitativa y semi-cuantitativa para estimar Probabilidad e Impacto.',
        content: [
          'La herramienta universal por excelencia en los comités de riesgo es la Matriz de Probabilidad e Impacto 5x5. Cada evento de riesgo se califica en dos ejes fundamentales:\n• Probabilidad (1: Raro, 2: Improbable, 3: Posible, 4: Probable, 5: Casi Seguro).\n• Impacto (1: Insignificante, 2: Menor, 3: Moderado, 4: Mayor, 5: Catastrófico).',
          'El Nivel de Riesgo Inherente es el producto de ambos factores (Severidad = Probabilidad × Impacto), generando una puntuación del 1 al 25 categorizada en 4 zonas cromáticas:\n- Verde (1 a 4): Riesgo Bajo o Aceptable.\n- Amarillo (5 a 9): Riesgo Moderado (Monitoreo regular).\n- Naranja (10 a 16): Riesgo Alto (Planes de mitigación obligatorios a corto plazo).\n- Rojo (20 a 25): Riesgo Extremo o Crítico (Acción ejecutiva inmediata y contingencia).'
        ],
        keyPoints: [
          'Riesgo Inherente: el nivel de riesgo antes de aplicar controles preventivos.',
          'Riesgo Residual: el nivel de riesgo remanente tras la aplicación eficaz de los controles.',
          'La matriz debe actualizarse dinámicamente frente a cambios económicos, climáticos o tecnológicos.'
        ],
        practicalApplication: 'El riesgo de apagones prolongados en la costa caribeña: antes de tener generadores eléctricos (Riesgo Inherente = 5 × 4 = 20, Crítico). Tras instalar plantas solares y baterías industriales de respaldo (Riesgo Residual = 2 × 2 = 4, Aceptable).'
      },
      {
        id: 'estrategias-tratamiento',
        title: '3. Estrategias de Tratamiento y Respuesta al Riesgo',
        summary: 'Las 4 decisiones tácticas: Mitigar, Transferir, Evitar o Aceptar.',
        content: [
          'Una vez evaluado el riesgo, la organización debe seleccionar la estrategia más costo-eficiente entre cuatro opciones universales:\n1. Mitigar (Reducir): Implementar controles internos, procedimientos redundantes o capacitación para bajar la probabilidad o el impacto.\n2. Transferir (Compartir): Trasladar el impacto financiero a un tercero mediante pólizas de seguros, garantías o contratos con proveedores especializados.\n3. Evitar: Decidir no iniciar o cancelar la actividad que genera el riesgo si este supera la capacidad de absorción de la empresa.\n4. Aceptar (Retener): Asumir conscientemente las consecuencias de eventos de bajo impacto cuyos costos de mitigación superarían las pérdidas potenciales.'
        ],
        keyPoints: [
          'Relación costo-beneficio del control: nunca invertir $10.000 para mitigar un riesgo potencial de $2.000.',
          'Controles Preventivos (actúan antes del evento) vs. Controles Correctivos (actúan después para restablecer el orden).',
          'KRI (Key Risk Indicators): alertas tempranas que avisan cuando un riesgo está a punto de materializarse.'
        ],
        practicalApplication: 'Para proteger el archivo digital histórico de la universidad: se contrata una póliza contra desastres naturales (Transferir), se habilitan réplicas en la nube cifradas (Mitigar) y se prohíbe el ingreso de líquidos a la sala de servidores (Evitar).'
      }
    ],
    caseStudy: {
      id: 'caso-cadena-suministro',
      title: 'Caso de Estudio: Dependencia Crítica de un Proveedor Único',
      companyScenario: 'La institución contrató a un único proveedor tecnológico internacional para alojar toda la infraestructura de matrícula y pagos en línea. En el contrato no se especificó un acuerdo de nivel de servicio (SLA) con penalidades ni cláusulas de respaldo redundante en otra región.',
      contextBackground: 'Tres días antes de finalizar el plazo de matrículas, el centro de datos del proveedor en el extranjero sufre una inundación que deja el servicio inoperativo por 72 horas.',
      dilemma: '¿Qué error de gestión de riesgos se cometió y cuál es la medida correctiva estructural adecuada?',
      options: [
        {
          id: 'opt-1',
          text: 'Esperar pacientemente a que el proveedor solucione el problema sin informar a los usuarios para no generar pánico.',
          isBest: false,
          score: 10,
          feedback: 'Grave falta de transparencia y comunicación de crisis que destruye la confianza institucional y agrava las pérdidas financieras.'
        },
        {
          id: 'opt-2',
          text: 'Diseñar una arquitectura multi-nube con redundancia geográfica (Mitigar), fijar SLAs contractuales con pólizas de garantía (Transferir) y activar un canal de matrícula alterno de contingencia.',
          isBest: true,
          score: 100,
          feedback: '¡Excelente gestión estratégica! Elimina el punto único de fallo (SPOF), transfiere contractualmente el riesgo financiero y garantiza la continuidad operativa institucional.'
        },
        {
          id: 'opt-3',
          text: 'Demandar judicialmente al proveedor inmediatamente y cancelar de por vida los canales de matrícula digital.',
          isBest: false,
          score: 20,
          feedback: 'Decisión visceral que no soluciona el problema de los estudiantes matriculándose en el presente y retrocede a procesos manuales costosos.'
        }
      ],
      learningOutcome: 'Identificar a tiempo puntos únicos de falla (Single Points of Failure) y exigir acuerdos contractuales de disponibilidad (SLAs) son lecciones esenciales en la gestión de riesgos tecnológicos.'
    },
    quiz: [
      {
        id: 'q1-riesgo',
        question: '¿Cómo define la norma ISO 31000 el concepto de "Riesgo"?',
        options: [
          'La probabilidad exacta de sufrir una sanción legal ante un ente regulador.',
          'El efecto de la incertidumbre sobre el logro de los objetivos organizacionales.',
          'Cualquier gasto financiero que supere las proyecciones presupuestales.',
          'La presencia de virus informáticos en los servidores corporativos.'
        ],
        correctIndex: 1,
        explanation: 'La ISO 31000 establece que el riesgo es el efecto de la incertidumbre sobre los objetivos, abarcando desviaciones tanto negativas como positivas.'
      },
      {
        id: 'q2-riesgo',
        question: 'Si un riesgo tiene una Probabilidad de 4 (Probable) y un Impacto de 5 (Catastrófico), ¿cuál es su Severidad y zona de atención?',
        options: [
          'Severidad 9, zona Verde (Aceptable).',
          'Severidad 20, zona Roja (Extremo / Crítico).',
          'Severidad 1, zona Neutra sin intervención.',
          'Severidad 100, fuera de la escala.'
        ],
        correctIndex: 1,
        explanation: 'En una matriz 5x5 estándar, Severidad = 4 × 5 = 20, lo cual sitúa al riesgo en la zona Roja Crítica, requiriendo acción ejecutiva inmediata.'
      },
      {
        id: 'q3-riesgo',
        question: '¿Qué diferencia existe entre "Riesgo Inherente" y "Riesgo Residual"?',
        options: [
          'El riesgo inherente es positivo y el residual es negativo.',
          'El riesgo inherente es el nivel sin controles aplicados; el residual es el nivel que permanece tras la aplicación eficaz de los controles.',
          'El riesgo inherente solo aplica a empresas públicas y el residual a empresas privadas.',
          'No existe diferencia, son términos sinónimos en auditoría.'
        ],
        correctIndex: 1,
        explanation: 'El riesgo inherente evalúa el escenario puro sin defensas, mientras que el riesgo residual mide la efectividad real de los controles implantados.'
      },
      {
        id: 'q4-riesgo',
        question: 'La contratación de una póliza de seguros contra incendios o ciberataques es un ejemplo clásico de qué estrategia de tratamiento:',
        options: [
          'Evitar el riesgo.',
          'Transferir o compartir el riesgo.',
          'Aceptar pasivamente el riesgo.',
          'Eliminar la probabilidad del evento.'
        ],
        correctIndex: 1,
        explanation: 'Transferir el riesgo traslada el impacto económico a un tercero (la compañía aseguradora) a cambio de una prima periódica.'
      }
    ]
  },
  {
    id: 'cultura-organizacional',
    title: 'Cultura Organizacional y Liderazgo',
    shortTitle: 'Cultura Organizacional',
    subtitle: 'Alineación de valores, diagnóstico cultural y fomento de equipos de alto rendimiento',
    description: 'Comprende el ADN invisible de las empresas: artefactos, valores declarados y supuestos básicos. Aprende a diagnosticar tipologías culturales con el modelo de Cameron & Quinn y fortalecer el compromiso.',
    competencies: [
      'Análisis de los niveles culturales de Edgar Schein (Artefactos, Valores y Supuestos)',
      'Diagnóstico de tipologías culturales (Clan, Adhocracia, Mercado y Jerarquía)',
      'Desarrollo de liderazgo transformacional y seguridad psicológica',
      'Alineación entre estrategia corporativa, cultura vivida y bienestar'
    ],
    duration: '4 Horas Académicas',
    level: 'Humano y Estratégico',
    iconName: 'Users',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    simulatorType: 'cultura',
    simulatorTitle: 'Radar Diagnóstico de Cultura Organizacional (Cameron & Quinn)',
    sections: [
      {
        id: 'niveles-cultura-schein',
        title: '1. Los Tres Niveles de la Cultura según Edgar Schein',
        summary: 'Descifrar lo visible y lo invisible en el comportamiento colectivo de una institución.',
        content: [
          'El sociólogo de MIT Edgar Schein definió la cultura como el patrón de supuestos básicos compartidos que una organización aprendió al resolver sus problemas de adaptación externa e integración interna, y que funciona tan bien como para ser transmitido a los nuevos miembros como la manera correcta de percibir, pensar y sentir.',
          'Schein propuso el modelo del iceberg cultural con tres niveles de profundidad:\n1. Artefactos (Visible): La arquitectura de las oficinas, el código de vestimenta, los rituales de bienvenida, el lenguaje cotidiano y las herramientas tecnológicas.\n2. Valores Espoleados o Declarados (Consciente): La misión, visión, código de ética y principios corporativos publicados en la pared o página web.\n3. Supuestos Básicos Subyacentes (Invisible e Inconsciente): Creencias profundas no cuestionadas sobre la naturaleza humana, el poder, el tiempo y el éxito.'
        ],
        keyPoints: [
          'La cultura no es lo que los líderes dicen en sus discursos, sino lo que premian, toleran y castigan con sus actos.',
          'Disonancia cultural: cuando los valores declarados en la pared contradicen los supuestos vividos a diario en los pasillos.',
          'Seguridad psicológica: la certeza de que nadie será humillado o castigado por admitir un error, hacer una pregunta o proponer una idea audaz.'
        ],
        practicalApplication: 'Si una empresa proclama "La innovación es nuestro valor número uno", pero despide al primer colaborador cuyo experimento piloto no arrojó ganancias inmediatas, el supuesto básico real es "el error es inaceptable", matando toda innovación futura.'
      },
      {
        id: 'modelo-cameron-quinn',
        title: '2. El Marco de Valores en Competencia (Cameron & Quinn)',
        summary: 'Las 4 tipologías esenciales: Clan, Adhocracia, Jerarquía y Mercado.',
        content: [
          'El modelo OCAI (Organizational Culture Assessment Instrument) de Kim Cameron y Robert Quinn clasifica las culturas a lo largo de dos ejes bipolares: Flexibilidad vs. Control, y Enfoque Interno vs. Enfoque Externo. De su cruce surgen cuatro grandes culturas organizacionales:\n• Cultura Clan (Interno + Flexible): Orientada a la familia, mentoría, lealtad y trabajo en equipo. Énfasis en el desarrollo humano.\n• Cultura Adhocracia (Externo + Flexible): Orientada al emprendimiento, la innovación disruptiva, la agilidad y la asunción de riesgos.\n• Cultura de Mercado (Externo + Control): Orientada a resultados, competencia implacable, cumplimiento de metas de ventas y cuota de mercado.\n• Cultura Jerárquica (Interno + Control): Orientada a la estabilidad, procesos estandarizados, normas estrictas, previsibilidad y eficiencia.'
        ],
        keyPoints: [
          'Ninguna cultura es universalmente "buena" o "mala"; su efectividad depende del entorno competitivo y del propósito institucional.',
          'Las organizaciones maduras equilibran características de los cuatro cuadrantes según sus distintas unidades de negocio.',
          'La cultura actual frente a la cultura deseada: medir la brecha orienta las intervenciones de liderazgo.'
        ],
        practicalApplication: 'Una universidad requiere elementos de Cultura Jerárquica para la custodia de títulos y registros académicos, pero debe cultivar activamente Cultura de Adhocracia en sus semilleros de investigación e incubadoras de empresas.'
      },
      {
        id: 'liderazgo-transformacional',
        title: '3. El Rol del Liderazgo y la Cohesión de Equipos',
        summary: 'Cómo los líderes moldean la cultura mediante el modelado de conductas, el reconocimiento y la retroalimentación continua.',
        content: [
          'Peter Drucker acuñó la famosa sentencia: "La cultura se come a la estrategia en el desayuno". Si la estrategia dice una cosa pero la cultura organizacional empuja en sentido contrario, la estrategia fracasará invariablemente.',
          'El liderazgo transformacional inspira a los colaboradores elevando su sentido de propósito por encima de los intereses particulares. Los líderes moldean la cultura a través de cinco mecanismos primarios de anclaje: a qué le prestan atención y miden con regularidad, cómo reaccionan ante situaciones de crisis, cómo asignan los recursos escasos, a quién contratan o ascienden, y a quién dejan partir de la organización.'
        ],
        keyPoints: [
          'Liderazgo servicial: el líder como facilitador de barreras y habilitador de talento.',
          'Rituales y narrativas: las historias de éxito heroico que se cuentan en la empresa refuerzan los comportamientos deseados.',
          'Medición continua del Clima Laboral: encuestas de pulso e índices de eNPS (Employee Net Promoter Score).'
        ],
        practicalApplication: 'Instituir reuniones semanales donde los directivos comparten abiertamente un fracaso propio y lo que aprendieron de él normaliza la cultura del aprendizaje y la humildad en toda la plantilla universitaria.'
      }
    ],
    caseStudy: {
      id: 'caso-fusion-empresarial',
      title: 'Caso de Estudio: El Choque Cultural en una Fusión Tecnológica',
      companyScenario: 'Una consultora tradicional con 30 años de trayectoria (Cultura fuertemente Jerárquica, estricto código de vestimenta, memorandos formales) adquirió una startup de desarrollo de software ágil (Cultura de Adhocracia, trabajo remoto flexible, toma de decisiones descentralizada).',
      contextBackground: 'Tras tres meses, el 40% de los mejores ingenieros de la startup renunció, argumentando que los nuevos procesos de aprobación burocráticos de 5 firmas para cada cambio de código hacían imposible trabajar con agilidad.',
      dilemma: '¿Cómo debe intervenir la dirección para retener el talento y armonizar la cultura organizacional?',
      options: [
        {
          id: 'opt-1',
          text: 'Obligar a todos los miembros de la startup a acatar sin excepciones el manual de procedimientos de la empresa compradora para mantener la disciplina.',
          isBest: false,
          score: 15,
          feedback: 'Grave error. Acelera la fuga de talento clave y destruye precisamente el valor innovador por el cual se compró la startup.'
        },
        {
          id: 'opt-2',
          text: 'Crear un equipo mixto de integración cultural, definir valores compartidos que respeten la agilidad técnica y flexibilizar los flujos de trabajo burocráticos para proyectos de innovación.',
          isBest: true,
          score: 100,
          feedback: '¡Excelente decisión! La integración cultural exitosa no es una imposición coercitiva, sino una co-creación que combina la estabilidad y respaldo de la empresa matriz con la agilidad e iniciativa del nuevo equipo.'
        },
        {
          id: 'opt-3',
          text: 'Ignorar las renuncias y contratar personal temporal más dócil que no cuestione los procesos.',
          isBest: false,
          score: 20,
          feedback: 'Afecta la calidad de los entregables y eleva desmedidamente los costos de reclutamiento y capacitación continua.'
        }
      ],
      learningOutcome: 'En fusiones y adquisiciones, la integración de la cultura y la preservación de la seguridad psicológica son tan decisivas como la auditoría financiera previa.'
    },
    quiz: [
      {
        id: 'q1-cultura',
        question: 'En el modelo de Edgar Schein, ¿cuál es el nivel más profundo e invisible que realmente guía la conducta colectiva?',
        options: [
          'Los artefactos visibles (oficinas y ropa).',
          'Los valores declarados en la página web institucional.',
          'Los supuestos básicos subyacentes e inconscientes.',
          'El organigrama departamental.'
        ],
        correctIndex: 2,
        explanation: 'Los supuestos básicos son las convicciones arraigadas e inconscientes que orientan la forma en que los miembros de la organización realmente piensan, reaccionan y deciden.'
      },
      {
        id: 'q2-cultura',
        question: 'Según el modelo de Valores en Competencia de Cameron & Quinn, ¿qué caracteriza a una "Cultura de Clan"?',
        options: [
          'Un enfoque feroz en aplastar a la competencia en el mercado externo.',
          'Un ambiente colaborativo y familiar con alto valor en la mentoría, el trabajo en equipo y el desarrollo de personas.',
          'Una obsesión exclusiva por el cumplimiento de reglas formales y auditorías de procesos.',
          'Una rotación de personal del 90% anual para reducir costos de planilla.'
        ],
        correctIndex: 1,
        explanation: 'La cultura Clan prioriza la cohesión interna, la confianza mutua, el sentido de pertenencia y el desarrollo integral de los colaboradores.'
      },
      {
        id: 'q3-cultura',
        question: '¿Qué significa el concepto de "Seguridad Psicológica" en un equipo de trabajo según Amy Edmondson?',
        options: [
          'Garantizar que todos los colaboradores tengan contratada una póliza de seguro de salud mental.',
          'La creencia compartida de que el equipo es un entorno seguro para asumir riesgos interpersonales, preguntar y equivocarse sin temor a castigo.',
          'Prohibir cualquier discusión o desacuerdo entre jefes y subordinados.',
          'Exigir exámenes psicométricos mensuales obligatorios.'
        ],
        correctIndex: 1,
        explanation: 'La seguridad psicológica es el predictor número uno del alto rendimiento en equipos: cuando las personas no temen parecer vulnerables o ignorantes, la innovación florece.'
      },
      {
        id: 'q4-cultura',
        question: '¿Por qué se afirma célebremente que "la cultura se come a la estrategia en el desayuno"?',
        options: [
          'Porque la estrategia solo se diseña por las tardes después del almuerzo.',
          'Porque por muy brillante que sea un plan estratégico, si la cultura no apoya los comportamientos requeridos, el plan fracasará irremediablemente.',
          'Porque los líderes corporativos deben priorizar el desayuno de trabajo antes de tomar decisiones.',
          'Porque la cultura no tiene relación alguna con los resultados financieros de la empresa.'
        ],
        correctIndex: 1,
        explanation: 'Los hábitos, creencias y dinámicas culturales cotidianas siempre prevalecerán sobre los objetivos teóricos fijados en un documento estratégico si no se gestionan en sincronía.'
      }
    ]
  },
  {
    id: 'gestion-del-cambio',
    title: 'Gestión del Cambio Organizacional',
    shortTitle: 'Gestión del Cambio',
    subtitle: 'Liderar transiciones sostenibles, superar la resistencia y anclar transformaciones según Kotter',
    description: 'Transformar una organización no es solo cambiar de software o procesos; es acompañar la curva emocional de las personas. Domina el modelo de 8 pasos de John Kotter y la curva de adaptación al cambio.',
    competencies: [
      'Implementación del modelo de 8 pasos de John Kotter para transformaciones exitosas',
      'Diagnóstico y acompañamiento de la Curva de Cambio (Kübler-Ross)',
      'Identificación y neutralización constructiva de fuentes de resistencia al cambio',
      'Diseño de planes de comunicación estratégica y victorias a corto plazo (Quick Wins)'
    ],
    duration: '4 Horas Académicas',
    level: 'Transformacional y Avanzado',
    iconName: 'RefreshCw',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    simulatorType: 'cambio',
    simulatorTitle: 'Simulador de los 8 Pasos de Kotter y Termómetro de Resistencia',
    sections: [
      {
        id: 'modelo-8-pasos-kotter',
        title: '1. El Modelo de los 8 Pasos de John Kotter',
        summary: 'La hoja de ruta clásica de Harvard Business School para liderar transformaciones estratégicas.',
        content: [
          'El profesor John Kotter de Harvard identificó que más del 70% de las grandes iniciativas de cambio organizacional fracasan porque las organizaciones intentan ejecutar el cambio técnico antes de preparar emocional y culturalmente a la gente.',
          'Kotter estructura el proceso en 8 fases secuenciales divididas en tres grandes etapas:\n• Crear el Clima para el Cambio:\n  1. Crear Sentido de Urgencia: demostrar por qué el statu quo ya no es una opción viable.\n  2. Formar una Coalición Conductora Potente: reunir líderes con credibilidad, autoridad y energía.\n  3. Desarrollar una Visión Estratégica e Iniciativas: pintar con claridad el destino deseado.\n• Comprometer y Habilitar a Toda la Organización:\n  4. Comunicar la Visión de Forma Masiva y Recurrente: multiplicar por diez los canales de diálogo.\n  5. Empoderar para la Acción Eliminando Obstáculos: remover políticas obsoletas y barreras burocráticas.\n  6. Generar Victorias a Corto Plazo (Quick Wins): celebrar logros visibles y tangibles en los primeros 90 días.\n• Consolidar y Sostener el Cambio:\n  7. Consolidar los Avances y Producir Más Cambio: no cantar victoria antes de tiempo.\n  8. Anclar los Nuevos Enfoques en la Cultura: institucionalizar las nuevas prácticas.'
        ],
        keyPoints: [
          'Sentido de Urgencia ≠ Miedo o Estrés: es la convicción compartida de que actuar hoy es imperativo.',
          'Quick Wins: victorias tempranas e indiscutibles que silencian el escepticismo inicial.',
          'El error fatal número 1 según Kotter es saltar directamente al paso 5 o cantar victoria prematuramente en el paso 6.'
        ],
        practicalApplication: 'La migración de una universidad hacia plataformas en la nube: en lugar de exigir el uso obligatorio el día uno, se entrenó a un grupo selecto de docentes influyentes (coalición conductora) que mostraron cómo calificar exámenes en la mitad del tiempo (quick win), inspirando orgánicamente al resto.'
      },
      {
        id: 'curva-del-cambio',
        title: '2. La Psicología de la Resistencia y la Curva de Transición',
        summary: 'Comprensión de las etapas emocionales: Negación, Resistencia, Exploración y Compromiso.',
        content: [
          'La resistencia al cambio no es rebeldía ni pereza; es una respuesta biológica y psicológica natural ante la pérdida de control, la amenaza al estatus o la incertidumbre sobre la propia competencia.',
          'Inspirada en el modelo de Elizabeth Kübler-Ross, la Curva del Cambio describe cuatro estaciones emocionales por las que transitan las personas:\n1. Negación: "Esto es una moda pasajera, ya volveremos a como se hacía antes".\n2. Resistencia / Enojo: Quejas, frustración activa y apego a los viejos hábitos.\n3. Exploración / Valle de la Esperanza: Primeros intentos de interactuar con la nueva realidad y descubrimiento de beneficios.\n4. Compromiso: Integración natural de la nueva metodología en la rutina diaria.'
        ],
        keyPoints: [
          'El rol del líder no es reprimir la resistencia, sino escuchar los miedos legítimos que la originan.',
          'Las personas no se resisten al cambio; se resisten a ser cambiadas sin ser escuchadas.',
          'Velocidades asimétricas: los líderes suelen ir meses adelante en la curva que sus equipos operativos.'
        ],
        practicalApplication: 'Durante la implementación de un nuevo sistema de evaluación docente, crear mesas de escucha y talleres de práctica sin consecuencias en la calificación reduce el tiempo de resistencia en un 60%.'
      },
      {
        id: 'comunicacion-estrategica',
        title: '3. Comunicación Estratégica y Sostenibilidad',
        summary: 'El modelo WIIFM (What’s in it for me?), escucha bidireccional y retroalimentación permanente.',
        content: [
          'Un error habitual en la gestión del cambio es comunicar únicamente el "Qué" y el "Cuándo", omitiendo el "Por qué" y el "Qué significa esto para mí" (principio WIIFM - What is in it for me?). Los colaboradores necesitan entender cómo la transformación los beneficiará individualmente en su desarrollo profesional y bienestar.',
          'La comunicación eficaz en procesos de cambio debe ser multidireccional, continua y transparente sobre los desafíos imprevistos. Celebrar el esfuerzo de aprendizaje y documentar las lecciones aprendidas permite que la organización desarrolle una auténtica capacidad de adaptabilidad continua.'
        ],
        keyPoints: [
          'Canales de escucha activa: buzones de retroalimentación abiertos y sesiones tipo "Town Hall".',
          'Alinear incentivos y reconocimientos formales con las conductas que el cambio promueve.',
          'El cambio exitoso concluye cuando la nueva forma de trabajar deja de llamarse "el proyecto nuevo" y pasa a ser simplemente "la forma en que hacemos las cosas aquí".'
        ],
        practicalApplication: 'Publicar testimonios de estudiantes y profesores contando en video cómo una nueva herramienta les devolvió tiempo para investigar convirtió a los detractores iniciales en los mayores promotores del cambio institucional.'
      }
    ],
    caseStudy: {
      id: 'caso-transformacion-academica',
      title: 'Caso de Estudio: La Digitalización Forzada del Currículo',
      companyScenario: 'La decanatura anunció mediante una circular por correo electrónico que a partir del siguiente lunes quedaba terminantemente prohibido usar papel y que todas las evaluaciones debían realizarse en una nueva plataforma LMS que el 80% de los docentes nunca había utilizado.',
      contextBackground: 'El resultado fue el caos: protestas del profesorado, calificaciones perdidas y solicitudes masivas de renuncia por estrés.',
      dilemma: '¿Cuál fue el fallo metodológico principal y cómo debió haberse gestionado según Kotter?',
      options: [
        {
          id: 'opt-1',
          text: 'Sancionar formalmente a los docentes que protestaron para sentar un precedente de autoridad.',
          isBest: false,
          score: 10,
          feedback: 'Agrava la crisis, destruye el clima organizacional y polariza irreversiblemente a la comunidad académica.'
        },
        {
          id: 'opt-2',
          text: 'Haber creado primero un sentido de urgencia compartido, capacitar a una coalición líder de docentes embajadores, implementar un piloto con victorias tempranas (quick wins) y brindar soporte continuo antes de la transición total.',
          isBest: true,
          score: 100,
          feedback: '¡Correcto! Kotter enseña que saltarse la preparación, la comunicación empática y la formación temprana garantiza el colapso de cualquier transformación.'
        },
        {
          id: 'opt-3',
          text: 'Dar marcha atrás definitivamente y prometer que nunca más se intentará usar computadores en la universidad.',
          isBest: false,
          score: 20,
          feedback: 'Condena a la institución a la obsolescencia y pierde la oportunidad de evolucionar pedagógicamente.'
        }
      ],
      learningOutcome: 'El cambio exitoso no ocurre por decreto administrativo; se construye ganando los corazones y mentes de las personas a través de empatía, formación y victorias tempranas.'
    },
    quiz: [
      {
        id: 'q1-cambio',
        question: '¿Cuál es el primer paso indispensable en el modelo de 8 fases de John Kotter?',
        options: [
          'Despedir a los colaboradores que expresen dudas sobre el proyecto.',
          'Crear un sentido de urgencia real sobre la necesidad ineludible de cambiar.',
          'Celebrar la fiesta de lanzamiento del nuevo software.',
          'Redactar el contrato con los proveedores tecnológicos.'
        ],
        correctIndex: 1,
        explanation: 'Sin un auténtico sentido de urgencia que convenza a la organización de que no cambiar es más riesgoso que cambiar, el esfuerzo carecerá de tracción.'
      },
      {
        id: 'q2-cambio',
        question: '¿Qué es una "Victoria a Corto Plazo" (Quick Win) y cuál es su valor estratégico?',
        options: [
          'Un bono económico secreto entregado solo al director del proyecto.',
          'Un logro visible, medible y alcanzable en los primeros meses que valida la dirección del cambio y desactiva el escepticismo.',
          'Una reducción de la jornada laboral a la mitad sin justificación.',
          'La eliminación de las evaluaciones de desempeño en la empresa.'
        ],
        correctIndex: 1,
        explanation: 'Los Quick Wins aportan evidencia irrefutable de que la transformación funciona, renovando la energía del equipo y silenciando a los detractores.'
      },
      {
        id: 'q3-cambio',
        question: 'En la curva emocional del cambio, ¿por qué es perjudicial que los líderes interpreten la resistencia inicial como rebeldía?',
        options: [
          'Porque la resistencia es ilegal según la legislación laboral.',
          'Porque la resistencia suele ser una reacción normal de miedo a la pérdida de competencia o control, que debe atenderse con escucha, claridad y capacitación.',
          'Porque los líderes nunca deben prestar atención a sus subordinados.',
          'Porque la resistencia siempre desaparece por sí sola en 24 horas.'
        ],
        correctIndex: 1,
        explanation: 'La resistencia es un síntoma de incertidumbre legítima. Abordarla con empatía y formación permite transformar la resistencia en compromiso.'
      },
      {
        id: 'q4-cambio',
        question: '¿Cuándo se considera verdaderamente consolidado y exitoso un cambio organizacional?',
        options: [
          'Cuando el director general envía el primer correo de presentación.',
          'Cuando el nuevo comportamiento se institucionaliza y se ancla de forma natural en la cultura cotidiana de la organización.',
          'Al cumplirse el primer mes de uso de la herramienta tecnológica.',
          'Cuando se gasta la totalidad del presupuesto asignado a la consultoría externa.'
        ],
        correctIndex: 1,
        explanation: 'El paso 8 de Kotter establece que el cambio solo perdura cuando echa raíces en la cultura: cuando se convierte en "la manera natural en que hacemos las cosas aquí".'
      }
    ]
  }
];
