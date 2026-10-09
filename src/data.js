const favicon = (domain) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=256`

export const categories = [
  { id: 'todos', name: 'Todos' },
  { id: 'institucional', name: 'Acceso institucional' },
  { id: 'investigacion', name: 'Investigación' },
  { id: 'estudio', name: 'Estudio' },
  { id: 'matematicas-ocr', name: 'Matemáticas / OCR' },
  { id: 'crear', name: 'Crear' },
]

export const resources = [
  {
    id: 'perplexity',
    name: 'Perplexity',
    description:
      'Busca información en la web y consulta respuestas con fuentes verificables.',
    category: 'investigacion',
    url: 'https://www.perplexity.ai/',
    image: favicon('perplexity.ai'),
    imagePosition: 'center',
    tag: 'Investigación web',
    access: 'free',
  },
  {
    id: 'consensus',
    name: 'Consensus',
    description:
      'Encuentra y sintetiza evidencia a partir de artículos científicos revisados por pares.',
    category: 'investigacion',
    url: 'https://consensus.app/',
    image: 'https://consensus.app/images/consensus-logo.png',
    imageFallback: favicon('consensus.app'),
    imagePosition: 'center',
    tag: 'Papers científicos',
    access: 'free',
  },
  {
    id: 'scopus',
    name: 'Scopus',
    description:
      'Busca literatura científica, consulta citas y analiza la producción académica para respaldar tus investigaciones.',
    category: 'investigacion',
    url: 'https://webaloe.ulima.edu.pe/portalUL/bi/baseDatosEtech/index.jsp?BD=BI_RUTA_SCOP',
    image: 'https://contenidos.ulima.edu.pe/bibliofiles/logosRE/SCOPUS.jpg',
    imagePosition: 'center',
    tag: 'Base de datos científica',
    access: 'institutional',
    accessLabel: 'Ofrecido por la universidad',
    accessDescription:
      'Accede a Scopus mediante la plataforma de recursos electrónicos de la Universidad de Lima.',
  },
  {
    id: 'web-of-science',
    name: 'Web of Science',
    description:
      'Consulta publicaciones científicas, rastrea citas y descubre investigaciones relevantes mediante índices académicos.',
    category: 'investigacion',
    url: 'https://webaloe.ulima.edu.pe/portalUL/bi/baseDatosEtech/index.jsp?BD=BI_RUTA_WOS',
    image: 'https://contenidos.ulima.edu.pe/bibliofiles/logosRE/WebofScience.jpg',
    imagePosition: 'center',
    tag: 'Índice de citas',
    access: 'institutional',
    accessLabel: 'Ofrecido por la universidad',
    accessDescription:
      'Accede a Web of Science mediante la plataforma de recursos electrónicos de la Universidad de Lima.',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description:
      'Asistente de IA para explicar conceptos, trabajar con documentos, escribir y programar.',
    category: 'estudio',
    url: 'https://chatgpt.com/',
    image:
      'https://www.freelogovectors.net/wp-content/uploads/2024/02/chatgpt-logo-02-freelogovectors.net_.png',
    imagePosition: 'center',
    tag: 'IA general',
    access: 'institutional',
    accessLabel: 'Ofrecido por la universidad',
    accessDescription:
      'La Universidad de Lima proporciona acceso institucional a este recurso.',
  },
  {
    id: 'claude',
    name: 'Claude',
    description:
      'Asistente de IA para trabajar con textos, documentos, análisis y código.',
    category: 'estudio',
    url: 'https://claude.ai/',
    image: 'https://anylogo.ai/blog/claude-logo/hero.png',
    imagePosition: 'center',
    tag: 'IA general',
    access: 'institutional',
    accessLabel: 'Ofrecido por la universidad',
    accessDescription:
      'La Universidad de Lima proporciona acceso institucional a este recurso.',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description:
      'Asistente de Google para aprender, resumir información y desarrollar ideas.',
    category: 'estudio',
    url: 'https://gemini.google.com/',
    image:
      'https://cdn.beebom.com/content/2025/07/google-gemini-new-rainbow-colours.jpg',
    imagePosition: 'center',
    tag: 'IA general',
    access: 'free',
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    description:
      'Trabaja con tus propias fuentes para resumir, preguntar y preparar material de estudio.',
    category: 'estudio',
    url: 'https://notebooklm.google.com/',
    image:
      'https://substackcdn.com/image/fetch/$s_!hbhf!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F17ec5461-3225-4627-beae-48ef36b17d14_1920x1200.webp',
    imagePosition: 'center',
    tag: 'Lecturas y apuntes',
    access: 'free',
  },
  {
    id: 'wolfram',
    name: 'Wolfram Alpha',
    description:
      'Motor computacional para matemáticas, estadística, física, ingeniería y más.',
    category: 'matematicas-ocr',
    url: 'https://www.wolframalpha.com/',
    image:
      'https://www.stickpng.com/img/icons-logos-emojis/search-engines/wolfram-alpha-logo',
    imageFallback: favicon('wolframalpha.com'),
    imagePosition: 'center',
    tag: 'Cálculo',
    access: 'free',
  },
  {
    id: 'photomath',
    name: 'Photomath',
    description:
      'Escanea ejercicios matemáticos y muestra pasos para entender cómo resolverlos.',
    category: 'matematicas-ocr',
    url: 'https://photomath.com/',
    image: 'https://i.vimeocdn.com/portrait/15539096_640x640',
    imagePosition: 'center',
    tag: 'Matemáticas + OCR',
    access: 'free',
  },
  {
    id: 'deepl',
    name: 'DeepL',
    description:
      'Traduce y mejora textos, especialmente útil para trabajar con fuentes en otros idiomas.',
    category: 'crear',
    url: 'https://www.deepl.com/',
    image:
      'https://seeklogo.com/images/D/deepl-logo-7B9C4D3D2A-seeklogo.com.png',
    imageFallback: favicon('deepl.com'),
    imagePosition: 'center',
    tag: 'Traducción',
    access: 'free',
  },
  {
    id: 'canva',
    name: 'Canva',
    description:
      'Crea presentaciones, infografías, documentos y piezas visuales con herramientas de IA.',
    category: 'crear',
    url: 'https://www.canva.com/',
    image:
      'https://images.squarespace-cdn.com/content/v1/5fbbf85160bed233ad707fc6/1635519759173-D2TNPIXPIEE8RZQG13VB/Untitled%2Bdesign-11.png',
    imagePosition: 'center',
    tag: 'Diseño',
    access: 'free',
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description:
      'Asistente de programación para escribir, explicar y revisar código.',
    category: 'crear',
    url: 'https://github.com/features/copilot',
    image:
      'https://developer.arm.com/-/jssmedia/global/developer-hub/uat-new/ai/Proof%2010/developer-hub-GitHub-logo-1040x500px.png',
    imagePosition: 'center',
    tag: 'Programación',
    access: 'free',
  },
]
