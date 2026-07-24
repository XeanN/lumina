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
    "La mayoría de crisis emocionales no aparecen de un día para otro. Se construyen en silencio, semana tras semana, mientras la persona sigue funcionando por fuera —yendo a trabajar, cuidando a otros, sonriendo cuando toca— hasta que ya no puede sostenerlo más. Ahí es donde queremos llegar antes: no después de la crisis, sino durante el silencio que la precede.",
    "Creemos en la prevención porque hemos visto, una y otra vez, que el obstáculo más grande no es la falta de ayuda profesional disponible — es la distancia entre sentir que algo anda mal y decidir que vale la pena decirlo en voz alta. Esa distancia es la que LÚMINA existe para acortar.",
    "Cuando hablamos de tecnología ética, no hablamos de una promesa de marketing. Hablamos de límites concretos: LÚMINA no diagnostica, no reemplaza terapia, y ante cualquier señal de riesgo real, prioriza conectar a la persona con ayuda humana verificada antes que sostener la conversación. La decisión de buscar esa ayuda siempre es de la persona, nunca del sistema.",
    "Pedir ayuda no es debilidad. Hablar a tiempo puede salvar vidas. La prevención es un acto profundamente humano.",
    "LÚMINA acompaña a mujeres, niños y adolescentes. No juzgamos. No diagnosticamos. No reemplazamos profesionales. Orientamos, acompañamos y prevenimos.",
    "Usamos tecnología para amplificar el cuidado, no para reemplazar lo humano. La IA en LÚMINA es ética, responsable y privada.",
    "No estás sola. No estás solo. Hay una luz que acompaña. Esa luz es LÚMINA.",
  ],

  resources: [
    {
      slug: "respira",
      title: "Respira: 60 segundos para volver al presente",
      desc: "Técnica de respiración para bajar la intensidad emocional en momentos de ansiedad.",
      linkText: "Ver guía",
      image: { src: "https://picsum.photos/seed/lumina-respira/1200/700", alt: "Persona respirando con calma" },
      body: [
        "Cuando una emoción se siente muy intensa, el cuerpo suele llegar antes que la mente. Por eso, para bajar la ansiedad rápido, empezar por la respiración funciona mejor que intentar 'pensar distinto' en el momento.",
        "## La técnica: suspiro fisiológico",
        "Inhala por la nariz, y justo cuando sientas que los pulmones están casi llenos, toma una segunda inhalación corta antes de exhalar, lenta y larga, por la boca. Repite de 3 a 5 veces. Esta técnica de respiración para la ansiedad activa el sistema nervioso parasimpático, el que le dice al cuerpo que ya puede bajar la guardia.",
        "No es magia ni hace desaparecer el problema. Lo que hace es bajar la activación del cuerpo lo suficiente para pensar con más claridad los siguientes pasos.",
        "## Cuándo esto no es suficiente",
        "Si después de intentarlo la sensación sigue siendo muy fuerte, o notas que se repite muy seguido, no tienes que resolverlo sola o solo — en la sección de Ayuda urgente encuentras líneas gratuitas y confidenciales.",
      ],
    },
    {
      slug: "senales-alerta",
      title: "Señales de alerta emocional: cómo reconocerlas sin pánico",
      desc: "Guía para identificar cuándo una emoción difícil se convierte en una señal de alerta que merece atención.",
      linkText: "Leer artículo",
      image: { src: "https://picsum.photos/seed/lumina-senales/1200/700", alt: "Persona reflexionando en calma" },
      body: [
        "No existe una señal única de alerta emocional que indique 'ya es momento de pedir ayuda'. Lo que sí existe es un patrón: cuando varias de estas cosas aparecen juntas y se sostienen por semanas, no días, vale la pena tomarlas en serio.",
        "## Señales que suelen aparecer juntas",
        "Cambios en el sueño o el apetito sin una causa clara. Perder el interés en cosas que antes disfrutabas. Sentirse agotado o sin esperanza de forma persistente. Aislarse de las personas cercanas. Irritabilidad que no reconoces en ti misma o en ti mismo. Usar alcohol u otras sustancias para poder pasar el día. Sentir que eres una carga para otros.",
        "## Ninguna señal aislada significa que algo está mal",
        "Todos tenemos días difíciles. Pero si te reconoces en varias de estas señales de alerta emocional, o las reconoces en alguien cercano, ese es exactamente el momento de buscar apoyo, no de esperar a que empeore. Pedir ayuda no es el último recurso — es el primer paso inteligente.",
      ],
    },
    {
      slug: "rutina-adolescentes",
      title: "Rutina emocional para adolescentes: 5 minutos al día",
      desc: "Checklist diario de autocuidado emocional pensado para adolescentes, sin necesitar más de cinco minutos.",
      linkText: "Abrir rutina",
      image: { src: "https://picsum.photos/seed/lumina-rutina/1200/700", alt: "Adolescente en un momento tranquilo" },
      body: [
        "No hace falta una hora de meditación ni un diario elaborado. Esta rutina emocional para adolescentes toma cinco minutos y funciona mejor si la haces siempre a la misma hora — por ejemplo, antes de dormir.",
        "## Los 5 pasos",
        "1. Nombra cómo te sientes. No 'bien' o 'mal' — intenta ser más específico: ansioso, aliviado, aburrido, con rabia, tranquilo. Ponerle nombre a la emoción ya reduce su intensidad.",
        "2. Un minuto de respiración. Cierra los ojos si puedes, respira lento cinco veces, y nota dónde sientes tensión en el cuerpo.",
        "3. Una acción pequeña de autocuidado. Tomar agua, estirarte, salir un momento al aire libre.",
        "4. Una conexión real. Manda un mensaje o habla con alguien de confianza, aunque sea para contar algo sin importancia.",
        "5. Cierra con algo que sí funcionó hoy, por mínimo que sea.",
      ],
    },
    {
      slug: "violencia-emocional-en-la-pareja",
      title: "Cómo reconocer violencia emocional en una relación de pareja",
      desc: "Señales de violencia emocional que muchas veces no se identifican como tal hasta que llevan tiempo.",
      linkText: "Leer guía",
      image: { src: "https://picsum.photos/seed/lumina-violencia-pareja/1200/700", alt: "Mujer reflexionando sola en un espacio tranquilo" },
      body: [
        "La violencia emocional en una relación de pareja no siempre se ve como 'violencia' mientras está pasando — a menudo se disfraza de celos, de 'preocupación', o de bromas que se repiten hasta doler.",
        "## Formas comunes que toma",
        "Controlar con quién hablas o a dónde vas. Minimizar constantemente lo que sientes ('estás exagerando', 'eres muy sensible'). Amenazas veladas de terminar la relación cuando no se hace lo que la otra persona quiere. Aislarte poco a poco de amigos y familia. Humillaciones disfrazadas de humor, dichas frente a otros.",
        "## Por qué es difícil reconocerla",
        "Porque suele avanzar de forma gradual, y porque quien la ejerce casi siempre alterna con momentos de mucho cariño — eso hace que la persona que la vive dude de su propia percepción. Si algo de esto te suena familiar, no significa que estés exagerando: significa que vale la pena hablarlo con alguien externo a la relación.",
        "## Qué hacer",
        "Habla con una persona de confianza, no solo contigo misma — la distancia ayuda a ver con más claridad. La Línea 100 del MIMP en Perú orienta específicamente en temas de violencia familiar, es gratuita y confidencial. Revisa la sección de Ayuda urgente para el contacto directo.",
      ],
    },
    {
      slug: "ansiedad-y-carga-mental",
      title: "Ansiedad y carga mental: primeros pasos para bajarla",
      desc: "Qué es la carga mental, por qué se acumula sin darte cuenta, y tres pasos concretos para empezar a aligerarla.",
      linkText: "Leer guía",
      image: { src: "https://picsum.photos/seed/lumina-carga-mental", alt: "Persona organizando sus pensamientos con calma" },
      body: [
        "La carga mental es distinta al estrés puntual: es esa sensación de tener demasiadas cosas 'abiertas' en la cabeza al mismo tiempo — pendientes, preocupaciones, responsabilidades de otras personas — que no se apaga ni cuando por fin tienes un momento de descanso.",
        "## Por qué se acumula sin que lo notes",
        "Porque cada tarea pequeña que 'solo tienes que recordar' ocupa espacio mental real, aunque no la estés haciendo en ese momento. Se acumula en silencio hasta que un día cualquier cosa pequeña se siente insoportable.",
        "## Tres pasos para empezar a bajarla",
        "Sácalo de tu cabeza y ponlo en papel — una lista simple de todo lo pendiente, sin organizarla todavía, solo para dejar de cargarlo mentalmente. Elige una sola cosa para hoy, no las diez — la carga mental empeora cuando sentimos que todo es urgente a la vez. Y date permiso de no resolverlo todo sola o solo: pedir ayuda con una tarea concreta no es lo mismo que fallar.",
        "Si la ansiedad se siente constante, no solo en momentos puntuales, puede ser momento de hablar con un profesional — LÚMINA puede orientarte hacia dónde, pero no reemplaza esa conversación.",
      ],
    },
    {
      slug: "hablar-de-emociones-con-ninos",
      title: "Cómo hablar de emociones con niños pequeños: guía para padres",
      desc: "Herramientas simples para que madres, padres y tutores puedan hablar de emociones con niños sin abrumarlos.",
      linkText: "Leer guía",
      image: { src: "https://picsum.photos/seed/lumina-ninos-emociones", alt: "Adulto y niño conversando con calma" },
      body: [
        "Hablar de emociones con niños pequeños no requiere un vocabulario complicado — requiere paciencia y algunas herramientas simples que puedes usar desde hoy.",
        "## Empieza por nombrar, no por resolver",
        "Cuando un niño está molesto, el primer paso no es explicarle por qué no debería sentirse así, sino ayudarlo a ponerle nombre: '¿estás triste porque se rompió tu juguete?'. Nombrar la emoción antes de intentar solucionarla hace que el niño se sienta comprendido, y eso solo ya baja la intensidad.",
        "## Usa ejemplos concretos, no abstractos",
        "'La rabia es como una olla que hierve' funciona mejor que explicaciones largas. Los niños entienden emociones a través de imágenes y comparaciones, no de definiciones.",
        "## Modela tú también",
        "Decir en voz alta 'hoy estoy un poco cansada, necesito un momento' les enseña que nombrar emociones es normal — lo aprenden viéndolo, no solo escuchándolo.",
        "## Cuándo pedir apoyo externo",
        "Si notas cambios sostenidos en el comportamiento del niño (aislamiento, miedo repentino, regresión en hábitos ya adquiridos) que no mejoran con estas herramientas básicas, es momento de conversar con un psicólogo infantil — LÚMINA orienta, pero no reemplaza esa evaluación.",
      ],
    },
    {
      slug: "autoestima-en-la-adolescencia",
      title: "Autoestima en la adolescencia: señales y qué hacer",
      desc: "Cómo identificar baja autoestima en la adolescencia y qué acciones concretas ayudan a fortalecerla.",
      linkText: "Leer guía",
      image: { src: "https://picsum.photos/seed/lumina-autoestima-adolescente", alt: "Adolescente mirando con confianza" },
      body: [
        "La adolescencia es una etapa donde la autoestima se construye —y se desestabiliza— más rápido que en cualquier otra. Es normal que fluctúe. Lo que importa es reconocer cuándo se vuelve un patrón sostenido.",
        "## Señales de baja autoestima en la adolescencia",
        "Compararse constantemente con otros, sobre todo en redes sociales. Dificultad para aceptar cumplidos. Miedo excesivo a equivocarse o a la opinión de otros. Autoexigencia extrema, o lo contrario: dejar de intentar cosas nuevas 'para no fallar'.",
        "## Qué realmente ayuda",
        "No son frases motivacionales genéricas. Ayuda más reconocer esfuerzos concretos ('noté que seguiste intentando aunque era difícil') que elogiar resultados ('eres el mejor'). También ayuda reducir el tiempo en comparación constante en redes, y tener al menos un espacio donde el adolescente se sienta escuchado sin ser corregido todo el tiempo.",
        "## El rol de los adultos cercanos",
        "No se trata de resolverlo por ellos, sino de estar disponibles sin forzar la conversación. A veces la mejor pregunta no es '¿qué te pasa?' sino '¿quieres hablar, o solo que esté aquí?'.",
      ],
    },
    {
      slug: "acompanar-en-un-duelo",
      title: "Cómo acompañar a alguien que está pasando por un duelo",
      desc: "Qué decir, qué evitar, y cómo sostener a alguien que está en duelo sin necesidad de tener todas las respuestas.",
      linkText: "Leer guía",
      image: { src: "https://picsum.photos/seed/lumina-duelo", alt: "Dos personas en un momento de acompañamiento silencioso" },
      body: [
        "Acompañar a alguien en duelo genera una presión que muchas veces no es necesaria: la sensación de que hay que decir algo perfecto para que se sienta mejor. No la hay, y está bien no tenerla.",
        "## Lo que suele ayudar más",
        "Estar presente sin intentar arreglar el dolor. Escuchar sin apurar el proceso ('ya va a pasar', 'tienes que ser fuerte' suelen sentirse invalidantes, aunque la intención sea buena). Ofrecer ayuda concreta en vez de genérica: no '¿en qué te ayudo?', sino 'te traigo algo de comer' o 'te acompaño el jueves a...'.",
        "## Lo que conviene evitar",
        "Comparar el duelo con el tuyo propio ('yo también perdí a alguien y...'). Poner plazos al proceso ('ya pasó un mes, deberías estar mejor'). Desaparecer después de las primeras semanas, que es justo cuando el apoyo empieza a escasear y más falta hace.",
        "## Cuándo el duelo necesita apoyo profesional",
        "El duelo no sigue un cronograma fijo, pero si después de varios meses la persona no puede sostener rutinas básicas, se aísla por completo, o expresa que no ve sentido en seguir, es momento de una derivación profesional real — no de esperar a que 'se le pase solo'.",
      ],
    },
    {
      slug: "estres-laboral-y-burnout",
      title: "Salud mental en el trabajo: estrés y agotamiento (burnout)",
      desc: "Cómo diferenciar el estrés laboral normal del burnout, y qué señales indican que ya cruzaste esa línea.",
      linkText: "Leer guía",
      image: { src: "https://picsum.photos/seed/lumina-burnout", alt: "Persona tomando una pausa en su espacio de trabajo" },
      body: [
        "El estrés laboral es parte normal de tener responsabilidades. El burnout es distinto: es agotamiento que ya no se resuelve con un fin de semana de descanso, y que empieza a afectar cómo te sientes contigo misma o contigo mismo, no solo con el trabajo.",
        "## Las tres señales que definen el burnout",
        "Agotamiento que no mejora al descansar. Cinismo o distancia emocional creciente respecto al trabajo, incluso si antes te importaba. Sensación de ineficacia — sentir que nada de lo que haces alcanza, aunque objetivamente estés cumpliendo.",
        "## Por qué se acumula sin que lo notes a tiempo",
        "Porque en muchos entornos laborales el cansancio extremo se normaliza como 'compromiso' o 'productividad'. Para cuando se identifica como burnout, suele llevar meses acumulándose.",
        "## Primeros pasos si te reconoces en esto",
        "Habla con alguien de confianza, dentro o fuera del trabajo — nombrar lo que sientes en voz alta ya reduce parte del peso. Identifica qué parte es del puesto y qué parte es de cómo lo estás llevando tú, porque las soluciones son distintas. Y si el agotamiento ya afecta tu sueño, tu ánimo general o tus relaciones fuera del trabajo, esa es la señal de buscar apoyo profesional, no de 'aguantar un poco más'.",
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
