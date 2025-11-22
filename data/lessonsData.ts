export type LocalizedText = {
  en: string;
  es: string;
  fr: string;
  pt: string;
};

export type LocalizedScripture = {
  ref: string;
  text?: LocalizedText;
};

export type LocalizedQuiz = {
  question: LocalizedText;
  options: LocalizedText[];
  answerIndex: number;
};

export type Lesson = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  scriptures: LocalizedScripture[];
  quiz: LocalizedQuiz[];
};

export const LESSONS: Lesson[] = [
  {
    id: 'L1',
    title: {
      en: 'The Restoration of the Gospel of Jesus Christ',
      es: 'La Restauración del Evangelio de Jesucristo',
      fr: "La Restauration de l'Évangile de Jésus-Christ",
      pt: 'A Restauração do Evangelho de Jesus Cristo',
    },
    description: {
      en: 'God reveals His gospel through prophets; apostasy; Restoration by Joseph Smith; the Book of Mormon; invitation to pray.',
      es: 'Dios revela su evangelio mediante profetas; apostasía; Restauración por medio de José Smith; el Libro de Mormón; invitación a orar.',
      fr: "Dieu révèle son évangile par des prophètes ; apostasie ; Restauration par Joseph Smith ; le Livre de Mormon ; invitation à prier.",
      pt: 'Deus revela Seu evangelho por meio de profetas; apostasia; Restauração por Joseph Smith; o Livro de Mórmon; convite para orar.',
    },
    scriptures: [
      { ref: 'James 1:5' },
      { ref: 'Ephesians 2:19–20' },
      { ref: '3 Nephi 11:10–11' },
    ],
    quiz: [
      {
        question: {
          en: 'What did Joseph Smith do when seeking wisdom?',
          es: '¿Qué hizo José Smith al buscar sabiduría?',
          fr: "Qu'a fait Joseph Smith en cherchant la sagesse ?",
          pt: 'O que Joseph Smith fez ao buscar sabedoria?',
        },
        options: [
          { en: 'He prayed to God', es: 'Oró a Dios', fr: 'Il a prié Dieu', pt: 'Ele orou a Deus' },
          { en: 'He read the entire NT', es: 'Leyó todo el NT', fr: 'Il a lu tout le NT', pt: 'Ele leu todo o NT' },
          { en: 'He traveled to Jerusalem', es: 'Viajó a Jerusalén', fr: 'Il a voyagé à Jérusalem', pt: 'Ele viajou a Jerusalém' },
          { en: 'He did nothing', es: 'No hizo nada', fr: "Il n'a rien fait", pt: 'Ele não fez nada' },
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'L2',
    title: {
      en: 'The Plan of Salvation',
      es: 'El Plan de Salvación',
      fr: 'Le Plan du Salut',
      pt: 'O Plano de Salvação',
    },
    description: {
      en: "Heavenly Father's plan: premortal life, purpose on earth, the Fall, Jesus Christ and His Atonement, spirit world, resurrection and degrees of glory.",
      es: 'El plan de nuestro Padre Celestial: vida premortal, propósito en la tierra, la Caída, Jesucristo y Su expiación, mundo de los espíritus, resurrección y grados de gloria.',
      fr: 'Le plan du Père céleste : vie prémortelle, dessein sur terre, la Chute, Jésus-Christ et Son Expiation, monde des esprits, résurrection et degrés de gloire.',
      pt: 'O plano do Pai Celestial: vida pré-mortal, propósito na terra, a Queda, Jesus Cristo e Sua Expiação, mundo dos espíritos, ressurreição e graus de glória.',
    },
    scriptures: [
      { ref: '2 Nephi 2:25' },
      { ref: 'Alma 34:32' },
      { ref: '1 Corinthians 15:20–22' },
    ],
    quiz: [
      {
        question: {
          en: "What is the main purpose of mortal life according to God's plan?",
          es: '¿Cuál es el propósito principal de la vida terrenal según el plan de Dios?',
          fr: 'Quel est le but principal de la vie terrestre selon le plan de Dieu ?',
          pt: 'Qual é o propósito principal da vida mortal segundo o plano de Deus?',
        },
        options: [
          { en: 'To seek joy and learn to choose the good', es: 'Buscar el gozo y aprender a elegir lo bueno', fr: 'Chercher la joie et apprendre à choisir le bien', pt: 'Buscar a alegria e aprender a escolher o bem' },
          { en: 'To accumulate wealth', es: 'Acumular riquezas', fr: 'Accumuler des richesses', pt: 'Acumular riquezas' },
          { en: 'To travel the world', es: 'Viajar por el mundo', fr: 'Voyager dans le monde', pt: 'Viajar pelo mundo' },
          { en: 'To avoid responsibility', es: 'Evitar responsabilidades', fr: 'Éviter les responsabilités', pt: 'Evitar responsabilidades' },
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'L3',
    title: {
      en: 'The Gospel of Jesus Christ',
      es: 'El Evangelio de Jesucristo',
      fr: "L'Évangile de Jésus-Christ",
      pt: 'O Evangelho de Jesus Cristo',
    },
    description: {
      en: 'Faith in Jesus Christ, repentance, baptism by immersion, receiving the gift of the Holy Ghost, and enduring to the end.',
      es: 'Fe en Jesucristo, arrepentimiento, bautismo por inmersión, recibir el don del Espíritu Santo y perseverar hasta el fin.',
      fr: "Foi en Jésus-Christ, repentance, baptême par immersion, recevoir le don du Saint-Esprit et persévérer jusqu'à la fin.",
      pt: 'Fé em Jesus Cristo, arrependimento, batismo por imersão, receber o dom do Espírito Santo e perseverar até o fim.',
    },
    scriptures: [
      { ref: '2 Nephi 31:5' },
      { ref: 'Acts 2:38' },
      { ref: '3 Nephi 27:20' },
    ],
    quiz: [
      {
        question: {
          en: 'What are the first principles and ordinances of the gospel?',
          es: '¿Cuáles son los primeros principios y ordenanzas del evangelio?',
          fr: "Quels sont les premiers principes et ordonnances de l'évangile ?",
          pt: 'Quais são os primeiros princípios e ordenanças do evangelho?',
        },
        options: [
          { en: 'Faith, repentance, baptism, Holy Ghost', es: 'Fe, arrepentimiento, bautismo, Espíritu Santo', fr: 'Foi, repentance, baptême, Saint-Esprit', pt: 'Fé, arrependimento, batismo, Espírito Santo' },
          { en: 'Prayer, fasting, tithing, service', es: 'Oración, ayuno, diezmo, servicio', fr: 'Prière, jeûne, dîme, service', pt: 'Oração, jejum, dízimo, serviço' },
          { en: 'Love, hope, charity, patience', es: 'Amor, esperanza, caridad, paciencia', fr: 'Amour, espérance, charité, patience', pt: 'Amor, esperança, caridade, paciência' },
          { en: 'Honesty, integrity, virtue, knowledge', es: 'Honestidad, integridad, virtud, conocimiento', fr: 'Honnêteté, intégrité, vertu, connaissance', pt: 'Honestidade, integridade, virtude, conhecimento' },
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'L4',
    title: {
      en: 'Commandments',
      es: 'Mandamientos',
      fr: 'Commandements',
      pt: 'Mandamentos',
    },
    description: {
      en: 'Living the commandments brings blessings and happiness; the Ten Commandments; modern commandments including the Word of Wisdom.',
      es: 'Vivir los mandamientos trae bendiciones y felicidad; los Diez Mandamientos; mandamientos modernos incluyendo la Palabra de Sabiduría.',
      fr: 'Vivre les commandements apporte des bénédictions et du bonheur ; les Dix Commandements ; commandements modernes incluant la Parole de Sagesse.',
      pt: 'Viver os mandamentos traz bênçãos e felicidade; os Dez Mandamentos; mandamentos modernos incluindo a Palavra de Sabedoria.',
    },
    scriptures: [
      { ref: 'Exodus 20:3–17' },
      { ref: 'D&C 89:18–21' },
      { ref: 'John 14:15' },
    ],
    quiz: [
      {
        question: {
          en: 'Why should we keep the commandments?',
          es: '¿Por qué debemos guardar los mandamientos?',
          fr: 'Pourquoi devons-nous garder les commandements ?',
          pt: 'Por que devemos guardar os mandamentos?',
        },
        options: [
          { en: 'To receive blessings and show love for God', es: 'Para recibir bendiciones y mostrar amor a Dios', fr: "Pour recevoir des bénédictions et montrer l'amour pour Dieu", pt: 'Para receber bênçãos e mostrar amor a Deus' },
          { en: 'To avoid punishment', es: 'Para evitar castigo', fr: 'Pour éviter la punition', pt: 'Para evitar punição' },
          { en: 'To impress others', es: 'Para impresionar a otros', fr: 'Pour impressionner les autres', pt: 'Para impressionar outros' },
          { en: 'To earn salvation', es: 'Para ganar salvación', fr: 'Pour gagner le salut', pt: 'Para ganhar salvação' },
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'L5',
    title: {
      en: 'Laws and Ordinances',
      es: 'Leyes y Ordenanzas',
      fr: 'Lois et Ordonnances',
      pt: 'Leis e Ordenanças',
    },
    description: {
      en: 'Understanding the difference between laws and ordinances; priesthood authority; essential ordinances for salvation.',
      es: 'Entender la diferencia entre leyes y ordenanzas; autoridad del sacerdocio; ordenanzas esenciales para la salvación.',
      fr: 'Comprendre la différence entre lois et ordonnances ; autorité de la prêtrise ; ordonnances essentielles pour le salut.',
      pt: 'Entender a diferença entre leis e ordenanças; autoridade do sacerdócio; ordenanças essenciais para a salvação.',
    },
    scriptures: [
      { ref: 'D&C 84:19–22' },
      { ref: 'Hebrews 5:4' },
      { ref: 'D&C 132:7' },
    ],
    quiz: [
      {
        question: {
          en: 'What is required for ordinances to be valid?',
          es: '¿Qué se requiere para que las ordenanzas sean válidas?',
          fr: 'Que faut-il pour que les ordonnances soient valides ?',
          pt: 'O que é necessário para que as ordenanças sejam válidas?',
        },
        options: [
          { en: 'Proper priesthood authority', es: 'Autoridad apropiada del sacerdocio', fr: 'Autorité appropriée de la prêtrise', pt: 'Autoridade apropriada do sacerdócio' },
          { en: 'Large congregations', es: 'Grandes congregaciones', fr: 'Grandes congrégations', pt: 'Grandes congregações' },
          { en: 'Beautiful buildings', es: 'Edificios hermosos', fr: 'Beaux bâtiments', pt: 'Belos edifícios' },
          { en: 'Expensive ceremonies', es: 'Ceremonias costosas', fr: 'Cérémonies coûteuses', pt: 'Cerimônias caras' },
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'L6',
    title: {
      en: 'Preparing for Baptism',
      es: 'Preparación para el Bautismo',
      fr: 'Préparation au Baptême',
      pt: 'Preparação para o Batismo',
    },
    description: {
      en: 'Steps to prepare for baptism: faith, repentance, understanding covenants, choosing to follow Christ.',
      es: 'Pasos para prepararse para el bautismo: fe, arrepentimiento, entender convenios, elegir seguir a Cristo.',
      fr: 'Étapes pour se préparer au baptême : foi, repentance, comprendre les alliances, choisir de suivre le Christ.',
      pt: 'Passos para se preparar para o batismo: fé, arrependimento, entender convênios, escolher seguir Cristo.',
    },
    scriptures: [
      { ref: 'Mosiah 18:8–10' },
      { ref: 'Romans 6:3–4' },
      { ref: 'D&C 20:37' },
    ],
    quiz: [
      {
        question: {
          en: 'What does baptism symbolize?',
          es: '¿Qué simboliza el bautismo?',
          fr: 'Que symbolise le baptême ?',
          pt: 'O que o batismo simboliza?',
        },
        options: [
          { en: 'Death and resurrection of Christ', es: 'Muerte y resurrección de Cristo', fr: 'Mort et résurrection du Christ', pt: 'Morte e ressurreição de Cristo' },
          { en: 'Washing away dirt', es: 'Lavar la suciedad', fr: 'Laver la saleté', pt: 'Lavar a sujeira' },
          { en: 'Joining a club', es: 'Unirse a un club', fr: 'Rejoindre un club', pt: 'Entrar em um clube' },
          { en: 'Making friends', es: 'Hacer amigos', fr: 'Se faire des amis', pt: 'Fazer amigos' },
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'L7',
    title: {
      en: 'Preparing for the Temple',
      es: 'Preparación para el Templo',
      fr: 'Préparation au Temple',
      pt: 'Preparação para o Templo',
    },
    description: {
      en: 'Understanding temple worship; worthiness requirements; temple ordinances and their eternal significance.',
      es: 'Entender la adoración en el templo; requisitos de dignidad; ordenanzas del templo y su significado eterno.',
      fr: "Comprendre l'adoration au temple ; exigences de dignité ; ordonnances du temple et leur signification éternelle.",
      pt: 'Entender a adoração no templo; requisitos de dignidade; ordenanças do templo e seu significado eterno.',
    },
    scriptures: [
      { ref: 'D&C 97:15–16' },
      { ref: 'D&C 109:8' },
      { ref: 'Malachi 3:1' },
    ],
    quiz: [
      {
        question: {
          en: 'What is the purpose of temple ordinances?',
          es: '¿Cuál es el propósito de las ordenanzas del templo?',
          fr: 'Quel est le but des ordonnances du temple ?',
          pt: 'Qual é o propósito das ordenanças do templo?',
        },
        options: [
          { en: 'To unite families eternally', es: 'Para unir familias eternamente', fr: 'Pour unir les familles éternellement', pt: 'Para unir famílias eternamente' },
          { en: 'To impress visitors', es: 'Para impresionar visitantes', fr: 'Pour impressionner les visiteurs', pt: 'Para impressionar visitantes' },
          { en: 'To show wealth', es: 'Para mostrar riqueza', fr: 'Pour montrer la richesse', pt: 'Para mostrar riqueza' },
          { en: 'To have parties', es: 'Para tener fiestas', fr: 'Pour faire des fêtes', pt: 'Para fazer festas' },
        ],
        answerIndex: 0,
      },
    ],
  },
];

export const getLocalized = (
  l: LocalizedText,
  locale: 'es' | 'en' | 'fr' | 'pt'
) => l[locale] ?? l.en;