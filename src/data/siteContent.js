export const lumina = {
  name: "LÚMINA",
  tagline: "Una luz que acompaña cuando más se necesita.",
  heroTitle: "No estás sola. Hay una luz que acompaña.",
  heroSubtitle:
    "LÚMINA es un espacio seguro de orientación y prevención en bienestar emocional para mujeres, niños y adolescentes. Sin juicio. Con empatía. Con límites éticos claros.",

  ethicalNote:
    "LÚMINA no reemplaza atención profesional de salud mental. No diagnosticamos ni brindamos terapia clínica. Si estás en riesgo inmediato, busca ayuda urgente.",

  mission:
    "Acompañar emocionalmente de forma preventiva, accesible y ética, ayudando a dar el primer paso antes de que el dolor crezca.",

  vision:
    "Ser una plataforma referente en prevención y bienestar emocional, integrable con educación e instituciones, manteniendo ética, privacidad y humanidad.",

  pillars: [
    { title: "Prevención", desc: "Llegar a tiempo cambia historias." },
    { title: "Acompañamiento", desc: "Escucha, guía y contención inicial." },
    { title: "Educación emocional", desc: "Herramientas simples para la vida real." },
    { title: "Tecnología con propósito", desc: "IA ética al servicio de las personas." },
  ],

  howItWorks: [
    { step: "1", title: "Escribes con calma", desc: "Cuentas lo que sientes, a tu ritmo, sin formularios ni preguntas clínicas." },
    { step: "2", title: "Lumina escucha y orienta", desc: "Contención emocional, ejercicios de autocuidado y recursos según lo que compartas." },
    { step: "3", title: "Tú decides si necesitas más", desc: "Si hay señales de riesgo, Lumina te muestra las líneas de ayuda reales — pero la decisión de llamar siempre es tuya." },
  ],

  roadmap: [
    { title: "Chat con Lumina", status: "En desarrollo", desc: "Conversación por texto, disponible primero en la web." },
    { title: "Mensajes de voz", status: "Próximamente", desc: "Podrás enviar audios y Lumina te responderá igual, sin perder el hilo de la conversación." },
    { title: "Videollamada con psicólogo", status: "Próximamente", desc: "Cuando el riesgo lo amerite, conexión directa por video con un profesional real, no un algoritmo evaluando tu rostro." },
  ],

  audiences: [
    {
      icon: "woman",
      title: "Mujeres",
      image: { src: "https://picsum.photos/seed/lumina-mujeres/600/375", alt: "Mujer en un momento de calma" }, // TODO: foto real, sin cliché de tristeza
      bullets: ["Ansiedad y carga mental", "Violencia emocional", "Soledad y estrés", "Orientación para dar el primer paso"],
    },
    {
      icon: "teen",
      title: "Adolescentes",
      image: { src: "https://picsum.photos/seed/lumina-adolescentes/600/375", alt: "Adolescente en un momento tranquilo" }, // TODO: foto real
      bullets: ["Estrés y presión social", "Confusión emocional", "Autoestima", "Orientación anónima y sin juicio"],
    },
    {
      icon: "child",
      title: "Niños (a través de adultos)",
      image: { src: "https://picsum.photos/seed/lumina-ninos/600/375", alt: "Adulto y niño en un momento de conexión" }, // TODO: foto real
      bullets: ["Guías para madres/padres/tutores", "Rutinas emocionales simples", "Lenguaje emocional", "Acompañamiento seguro"],
    },
  ],

  do: [
    "Orientación emocional básica y contención inicial",
    "Recursos gratuitos: guías, ejercicios, artículos breves",
    "Educación emocional por etapas",
    "Derivación a ayuda real cuando sea necesario",
  ],
  dont: [
    "Diagnósticos clínicos",
    "Terapia psicológica o psiquiátrica",
    "Intervención legal/policial directa",
    "Tratamientos médicos",
  ],

  manifesto: [
    "Vivimos en una época donde muchas personas sonríen por fuera, pero cargan silencios, miedos y heridas por dentro.",
    "En LÚMINA creemos que la salud mental no empieza en una consulta; empieza cuando alguien se siente escuchado y acompañado antes de llegar a una crisis.",
    "Pedir ayuda no es debilidad. Hablar a tiempo puede salvar vidas. La prevención es un acto profundamente humano.",
    "LÚMINA acompaña a mujeres, niños y adolescentes. No juzgamos. No diagnosticamos. No reemplazamos profesionales. Orientamos, acompañamos y prevenimos.",
    "Usamos tecnología para amplificar el cuidado, no para reemplazar lo humano. La IA en LÚMINA es ética, responsable y privada.",
    "No estás sola. No estás solo. Hay una luz que acompaña. Esa luz es LÚMINA.",
  ],

  resources: [
    {
      slug: "respira",
      title: "Respira: 60 segundos para volver al presente",
      desc: "Ejercicio breve para bajar la intensidad emocional.",
      linkText: "Ver guía",
      body: [
        "Cuando una emoción se siente muy intensa, el cuerpo suele llegar antes que la mente. Por eso empezar por la respiración, en vez de por 'pensar distinto', suele funcionar mejor en el momento.",
        "Prueba esta técnica, conocida como suspiro fisiológico: inhala por la nariz, y justo cuando sientas que los pulmones están casi llenos, toma una segunda inhalación corta antes de exhalar, lenta y larga, por la boca. Repite de 3 a 5 veces.",
        "No es magia ni hace desaparecer el problema. Lo que hace es bajar la activación del cuerpo lo suficiente para pensar con más claridad los siguientes pasos.",
        "Si después de intentarlo la sensación sigue siendo muy fuerte, o notas que se repite muy seguido, no tienes que resolverlo sola o solo — en la sección de Ayuda urgente encuentras líneas gratuitas y confidenciales.",
      ],
    },
    {
      slug: "senales-alerta",
      title: "Señales de alerta emocional (sin pánico)",
      desc: "Cómo reconocer cuándo pedir ayuda.",
      linkText: "Leer artículo",
      body: [
        "No existe una señal única que indique 'ya es momento de pedir ayuda'. Lo que sí existe es un patrón: cuando varias de estas cosas aparecen juntas y se sostienen por semanas, no días, vale la pena tomarlas en serio.",
        "Cambios en el sueño o el apetito que no tienen una causa clara. Perder el interés en cosas que antes disfrutabas. Sentirse agotado o sin esperanza de forma persistente. Aislarse de las personas cercanas. Irritabilidad que no reconoces en ti misma o en ti mismo.",
        "Usar alcohol u otras sustancias para poder pasar el día. Sentir que eres una carga para otros. Hablar, aunque sea de forma indirecta, de no querer seguir o de no ver salida.",
        "Ninguna de estas señales por sí sola significa que algo está mal — todos tenemos días difíciles. Pero si te reconoces en varias de ellas, o las reconoces en alguien cercano, ese es exactamente el momento de buscar apoyo, no de esperar a que empeore.",
        "Pedir ayuda no es el último recurso. Es el primer paso inteligente.",
      ],
    },
    {
      slug: "rutina-adolescentes",
      title: "Rutina emocional para adolescentes (5 minutos)",
      desc: "Checklist diario para autocuidado básico.",
      linkText: "Abrir rutina",
      body: [
        "No hace falta una hora de meditación ni un diario elaborado. Esta rutina toma cinco minutos y funciona mejor si la haces siempre a la misma hora — por ejemplo, antes de dormir.",
        "1. Nombra cómo te sientes. No 'bien' o 'mal' — intenta ser más específico: ansioso, aliviado, aburrido, con rabia, tranquilo. Ponerle nombre a la emoción ya reduce su intensidad.",
        "2. Un minuto de respiración. Cierra los ojos si puedes, respira lento cinco veces, y nota dónde sientes tensión en el cuerpo.",
        "3. Una acción pequeña de autocuidado. Tomar agua, estirarte, salir un momento al aire libre — algo que puedas hacer en menos de dos minutos.",
        "4. Una conexión real. Manda un mensaje o habla con alguien de confianza, aunque sea para contar algo sin importancia. El aislamiento alimenta el malestar; la conexión, aunque sea pequeña, lo baja.",
        "5. Cierra con algo que sí funcionó hoy, por mínimo que sea. No para 'ser positivo' a la fuerza, sino porque el cerebro necesita práctica notando eso también, no solo lo que salió mal.",
      ],
    },
  ],

  urgent: {
    title: "Ayuda urgente",
    desc:
      "Si estás en riesgo inmediato o sientes que podrías hacerte daño, busca ayuda profesional ahora. LÚMINA no reemplaza emergencias.",
    tips: [
      "Si puedes, busca a una persona de confianza y no te quedes sola/solo.",
      "Estas líneas son gratuitas, confidenciales y atienden las 24 horas.",
      "No necesitas dar tu nombre si no quieres.",
    ],
    lines: [
      {
        name: "Línea 100",
        org: "Ministerio de la Mujer (MIMP)",
        desc: "Violencia familiar y sexual. Orientación, contención emocional y derivación a un Centro de Emergencia Mujer (CEM). Atiende en español, quechua y aimara.",
        contact: "Marca 100",
      },
      {
        name: "Línea 113, opción 5",
        org: "Ministerio de Salud (MINSA)",
        desc: "Orientación psicológica gratuita: tristeza profunda, ansiedad, crisis emocional o preocupación por alguien cercano.",
        contact: "Marca 113 y elige la opción 5",
        extra: "También por WhatsApp: 955 557 000 o 952 842 623",
      },
      {
        name: "SAMU",
        org: "Emergencia médica",
        desc: "Si hay riesgo inmediato para la vida (intento de autolesión, sobredosis, lesión grave).",
        contact: "Marca 106",
      },
      {
        name: "Policía Nacional",
        org: "Emergencia",
        desc: "Si hay violencia activa ahora mismo o peligro inmediato para ti u otra persona.",
        contact: "Marca 105",
      },
    ],
    outsidePeru:
      "Si estás fuera de Perú: busca el número de emergencias de tu país o la línea nacional de salud mental de tu región — la mayoría funciona igual de rápido y son gratuitas.",
  },
};
