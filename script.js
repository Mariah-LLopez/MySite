// Global interactions and motion system
(() => {
  const body = document.body;
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const themeToggle = document.querySelector('.theme-toggle');
  const langBtn = document.querySelector('.lang-btn');
  const backToTop = document.querySelector('.back-to-top');

  // ── Translations ─────────────────────────────────────────────────────────
  const translations = {
    en: {
      // Common
      'skip.link': 'Skip to main content',
      'nav.about': 'About',
      'nav.work': 'Work',
      'nav.contact': 'Contact',
      'nav.resume': 'Resume',
      'footer.tagline': 'Digital Product Specialist | UX/UI Engineer | Technical Writer | Business Analyst',
      'footer.github': 'GitHub',
      'footer.linkedin': 'LinkedIn',
      'footer.email': 'Email',
      'footer.copyright': 'Mariah L Buckley. All rights reserved.',
      'footer.egg': '✨ You found a hidden interaction. Thanks for exploring!',
      'footer.longpress': 'Long press any one keyboard button for a surprise interaction animation.',
      'back.top': 'Back to top',
      // index
      'home.eyebrow': 'DIGITAL PRODUCT SPECIALIST /// MULTIDISCIPLINARY',
      'home.supporting': 'I believe information should be easy to find, easy to understand, and easy to use. My work combines UX/UI engineering, technical writing, and business analysis to improve access to information and optimize the way people interact with digital products and processes. By reducing friction and increasing clarity, I help organizations improve efficiency, accelerate progress, and create better experiences for users and stakeholders alike.',
      'trust.uxui': 'UX/UI Engineering',
      'trust.writing': 'Technical Writing',
      'trust.analysis': 'Business Analysis',
      'value.h2': 'Turning complexity into clarity',
      'feature1.h3': 'Struggling to make complex information usable?',
      'feature1.p': 'I turn research, requirements, and content into clear digital experiences.',
      'feature2.h3': 'Need documentation people actually understand?',
      'feature2.p': 'I create structured guides, SOPs, knowledge bases, and technical content.',
      'feature3.h3': 'Trying to make better product or business decisions?',
      'feature3.p': 'I analyze workflows, data, stakeholder needs, and user problems to support better outcomes.',
      'discipline1.h3': 'UX/UI Engineer',
      'discipline1.p': 'I design accessible interfaces and build responsive front-end systems rooted in research and usability.',
      'discipline2.h3': 'Technical Writer',
      'discipline2.p': 'I structure documentation and SOPs so people can move through systems with confidence.',
      'discipline3.h3': 'Business Analyst',
      'discipline3.p': 'I translate data, workflows, and stakeholder needs into practical product direction.',
      'work.h2': 'Selected work',
      'filter.all': 'All',
      'filter.uxui': 'UX/UI',
      'filter.technical-writing': 'Technical Writing',
      'filter.accessibility': 'Accessibility',
      'filter.development': 'Development',
      'filter.business-analysis': 'Business Analysis',
      'filter.research': 'Research',
      'filter.strategy': 'Strategy',
      'proj1.category': 'UX/UI Design',
      'proj1.h3': 'Outdoor Pikes Peak Datahub Redesign',
      'proj1.p': 'Redesigned an outdoor resource platform with improved navigation and user flows.',
      'proj1.tools': 'Tools: Figma, UX Research, HTML/CSS',
      'proj1.link': 'View Case Study →',
      'proj2.category': 'Technical Writing + UX',
      'proj2.h3': 'Pikes Peak Library Localization',
      'proj2.p': 'Created Spanish localization, accessibility improvements, and clearer content structure.',
      'proj2.tools': 'Tools: Plain Language, Localization, WAVE',
      'proj2.link': 'View Case Study →',
      'proj3.category': 'Technical Writing',
      'proj3.h3': 'AI Augmentation Documentation Project',
      'proj3.p': 'Developed structured documentation and reports for AI-assisted research.',
      'proj3.tools': 'Tools: Markdown, SOPs, Knowledge Base',
      'proj3.link': 'View Case Study →',
      'proj4.category': 'Accessibility',
      'proj4.h3': 'Accessibility Audit',
      'proj4.p': 'Reviewed digital content for barriers using usability and accessibility testing tools.',
      'proj4.tools': 'Tools: WAVE, WCAG, Usability Testing',
      'proj4.link': 'View Case Study →',
      'proj5.category': 'Web Development',
      'proj5.h3': 'Portfolio Website',
      'proj5.p': 'Designed and developed a responsive portfolio to communicate multidisciplinary work.',
      'proj5.tools': 'Tools: HTML/CSS/JavaScript, GitHub Pages',
      'proj5.link': 'View Case Study →',
      'proj6.category': 'UX/UI + Development',
      'proj6.h3': 'Design System Prototype Sprint',
      'proj6.p': 'Built reusable patterns and tested faster handoffs between design and engineering.',
      'proj6.tools': 'Tools: Figma, Components, HTML/CSS',
      'proj6.link': 'View Case Study →',
      'proj7.category': 'Documentation Strategy',
      'proj7.h3': 'Workflow Documentation Overhaul',
      'proj7.p': 'Mapped process gaps and rebuilt documentation to reduce onboarding friction.',
      'proj7.tools': 'Tools: SOPs, Process Mapping, Research',
      'proj7.link': 'View Case Study →',
      'proj8.category': 'Accessibility + UX',
      'proj8.h3': 'Inclusive Navigation Refresh',
      'proj8.p': 'Refined IA and interaction states to improve clarity across key user journeys.',
      'proj8.tools': 'Tools: WCAG, IA, Usability Testing',
      'proj8.link': 'View Case Study →',
      'proj9.category': 'Business Analysis',
      'proj9.h3': 'Service Intake Workflow Analysis',
      'proj9.p': 'Evaluated intake pathways to uncover delays, handoff gaps, and reporting blind spots.',
      'proj9.tools': 'Tools: Journey Mapping, SQL, Stakeholder Interviews',
      'proj9.link': 'View Case Study →',
      'proj10.category': 'UX/UI Accessibility Engineering',
      'proj10.h3': 'Accessible Component Library Refresh',
      'proj10.p': 'Reworked shared UI components for stronger contrast, keyboard access, and reuse.',
      'proj10.tools': 'Tools: Design Systems, WCAG, JavaScript',
      'proj10.link': 'View Case Study →',
      'proj11.category': 'Requirements & SOP Design',
      'proj11.h3': 'Cross-Team Release Documentation',
      'proj11.p': 'Standardized release checklists and decision logs for product, support, and ops.',
      'proj11.tools': 'Tools: Confluence, SOP Templates, Decision Logs',
      'proj11.link': 'View Case Study →',
      'proj12.category': 'Product Strategy Research',
      'proj12.h3': 'Customer Journey Decision Dashboard',
      'proj12.p': 'Translated customer signals into a dashboard that prioritized roadmap opportunities.',
      'proj12.tools': 'Tools: Power BI, Research Synthesis, Prioritization',
      'proj12.link': 'View Case Study →',
      'lab.h2': 'Digital Product Lab',
      'lab1.h3': 'UX/UI Engineer',
      'lab1.p': 'I combine user-centered design, accessibility, research, and front-end development to create intuitive digital products and interfaces.',
      'lab2.h3': 'Technical Writer',
      'lab2.p': 'I create clear, structured, and user-focused documentation that helps people understand complex systems, processes, and technologies.',
      'lab3.h3': 'Business Analyst',
      'lab3.p': 'I use research, data, stakeholder insights, requirements, and process analysis to support better product and business decisions.',
      'toolkit.h2': 'Toolkit',
      'figma.p': 'Wireframes, prototypes, and interface design.',
      'github.p': 'Version control, collaboration, and hosting.',
      'vscode.p': 'Code editing and documentation workflows.',
      'html.p': 'Responsive websites and interactions.',
      'markdown.p': 'Structured documentation and writing.',
      'msoffice.p': 'Reports, presentations, and business docs.',
      'gworkspace.p': 'Collaboration and research workflows.',
      'adobe.p': 'Visual design and creative assets.',
      'canva.p': 'Presentations and digital content.',
      'wave.p': 'Accessibility testing and auditing.',
      'jira.p': 'Project tracking and task management.',
      'confluence.p': 'Knowledge management and documentation.',
      'sql.p': 'Data queries and analysis.',
      'powerbi.p': 'Dashboards and reporting.',
      'tableau.p': 'Data visualization and storytelling.',
      'claude.p': 'Brainstorming, synthesis, and faster drafting across product work.',
      'writing.preview.h2': 'Writing',
      'writing1.h3': 'Designing for Clarity in Complex Workflows',
      'writing1.p': 'How I reduce friction by translating complexity into interface decisions.',
      'writing1.link': 'Read More →',
      'writing2.h3': 'Building SOPs People Actually Use',
      'writing2.p': 'A practical approach to structure, voice, and content architecture.',
      'writing2.link': 'Read More →',
      'writing3.h3': 'From Requirements to Better Decisions',
      'writing3.p': 'Connecting stakeholder goals, data, and user outcomes with confidence.',
      'writing3.link': 'Read More →',
      'cta.h2': "Let's build something clear, useful, and decision-driven.",
      'cta.p': "Whether you need a better interface, stronger documentation, or clearer product requirements, I'd love to connect.",
      'cta.contact': 'Contact Me',
      'cta.github': 'View GitHub',
      'cta.linkedin': 'LinkedIn',
      'game.title': 'Click anywhere in the game area to drop a shrimp, snail, or fish and watch the octopus grab it.',
      'game.feed': 'Feed the octopus',
      'game.hint': 'Like an octopus with many arms, I bring multidisciplinary skills across UX/UI, writing, and analysis to every project I touch.',
      // about
      'about.eyebrow': 'ABOUT',
      'about.bio.h2': 'Professional bio',
      'about.bio.p': 'I am a Digital Product Specialist focused on UX/UI Engineering, Technical Writing, and Business Analysis. My work centers on transforming research, requirements, content, and data into user-friendly experiences, clear documentation, and actionable insights.',
      'about.focus.h3': 'Professional focus areas',
      'about.focus.li1': 'UX/UI Engineering and accessibility-first interfaces',
      'about.focus.li2': 'Technical writing, SOPs, and user documentation',
      'about.focus.li3': 'Business analysis, workflows, and product strategy',
      'about.focus.li4': 'Research synthesis and decision support',
      'about.education.h2': 'Education',
      'about.education.p': 'Academic and continuing education focused on digital product systems, communication, and analytics.',
      'about.certs.h2': 'Accomplishments',
      'about.certs.p': 'Professional certifications in UX, technical writing, accessibility, and analytics.',
      'about.values.h2': 'Values',
      'about.resume': 'Download Resume',
      'doc1.h3': 'SOPs',
      'doc1.p': 'Operational clarity for repeatable work.',
      'doc2.h3': 'User Guides',
      'doc2.p': 'Task-based guidance with plain language.',
      'doc3.h3': 'Research Notes',
      'doc3.p': 'Insights translated into design direction.',
      'doc4.h3': 'Wireframes',
      'doc4.p': 'Visual structure before engineering.',
      'doc5.h3': 'Requirements',
      'doc5.p': 'Shared expectations across stakeholders.',
      'doc6.h3': 'Journey Maps',
      'doc6.p': 'Context for touchpoints and pain points.',
      'values.clarity': 'Clarity',
      'values.accessibility': 'Accessibility',
      'values.evidence': 'Evidence-based decisions',
      'values.empathy': 'Empathy',
      'values.systems': 'Systems thinking',
      'values.learning': 'Continuous learning',
      // projects
      'projects.eyebrow': 'PROJECTS',
      'projects.supporting': 'Filter by discipline, search quickly, and explore placeholder case studies.',
      'projects.search.placeholder': 'Search projects...',
      'case.h2': 'Standard Project Storytelling Structure',
      'case.li1': 'Hero', 'case.li2': 'Overview', 'case.li3': 'Problem', 'case.li4': 'Research',
      'case.li5': 'Insights', 'case.li6': 'Process', 'case.li7': 'Wireframes', 'case.li8': 'Iterations',
      'case.li9': 'Final Solution', 'case.li10': 'Results', 'case.li11': 'Reflection', 'case.li12': 'Next Project',
      'pcase1.p': 'Navigation and interface structure improvements.',
      'pcase1.link': 'View Case Study →',
      'pcase2.p': 'Localization and content accessibility improvements.',
      'pcase2.link': 'View Case Study →',
      'pcase3.p': 'Documentation for AI-assisted research workflows.',
      'pcase3.link': 'View Case Study →',
      'pcase4.p': 'Testing and barrier analysis with recommendations.',
      'pcase4.link': 'View Case Study →',
      'pcase5.p': 'Responsive storytelling portfolio architecture.',
      'pcase5.link': 'View Case Study →',
      // writing page
      'writing.eyebrow': 'WRITING',
      'writing.search.placeholder': 'Search writing...',
      'wtag.ux': 'UX',
      'wtag.technical': 'Technical Writing',
      'wtag.business': 'Business Analysis',
      'wtag.accessibility': 'Accessibility',
      'wtag.research': 'Research',
      'wcard1.category': 'UX/UI',
      'wcard1.h3': 'Designing Decision-Centered Interfaces',
      'wcard1.p': 'Making complex systems easier to understand and use.',
      'wcard1.link': 'Read More →',
      'wcard2.category': 'Technical Writing',
      'wcard2.h3': 'From Notes to Knowledge Bases',
      'wcard2.p': 'Structuring documentation so teams can execute faster.',
      'wcard2.link': 'Read More →',
      'wcard3.category': 'Business Analysis',
      'wcard3.h3': 'Requirement Clarity as Product Strategy',
      'wcard3.p': 'How clear requirements reduce risk and rework.',
      'wcard3.link': 'Read More →',
      'wcard4.category': 'Accessibility',
      'wcard4.h3': 'Audit Findings That Actually Drive Change',
      'wcard4.p': 'Turning compliance reviews into practical improvements.',
      'wcard4.link': 'Read More →',
      'wcard5.category': 'UX/UI',
      'wcard5.h3': 'Prototype Testing with Stakeholder Confidence',
      'wcard5.p': 'Evidence-driven conversations for better design outcomes.',
      'wcard5.link': 'Read More →',
      'wcard6.category': 'Business Analysis',
      'wcard6.h3': 'Mapping Processes for Better Product Decisions',
      'wcard6.p': 'Connecting workflows, goals, and implementation choices.',
      'wcard6.link': 'Read More →',
      // contact
      'contact.eyebrow': 'CONTACT',
      'contact.supporting': "Tell me what you're building and what clarity looks like for your team.",
      'contact.form.h2': 'Contact form',
      'contact.name.label': 'Name',
      'contact.email.label': 'Email',
      'contact.subject.label': 'Subject',
      'contact.message.label': 'Message',
      'contact.submit': 'Submit',
      'contact.connect.h2': 'Connect With Me',
      'contact.faq.h2': 'FAQ',
      'faq1.q': 'What kinds of projects do you work on?',
      'faq1.a': 'I work on UX/UI engineering, technical writing, business analysis, accessibility, documentation, and digital product projects.',
      'faq2.q': 'Are you open to freelance or contract work?',
      'faq2.a': 'Yes, I am open to discussing freelance, contract, and collaborative opportunities.',
      'faq3.q': 'What tools do you use most often?',
      'faq3.a': 'I use tools such as Figma, GitHub, VS Code, HTML, CSS, JavaScript, SQL, Power BI, Jira, Confluence, and accessibility testing tools.',
      'faq4.q': 'Can you help with documentation-only projects?',
      'faq4.a': 'Yes, I can help with documentation, SOPs, user guides, knowledge bases, technical content, and content organization.',
      'faq5.q': 'How can someone contact you?',
      'faq5.a': 'Use the contact form or connect with me through LinkedIn, GitHub, or email.',
      // marquee
      'marquee.keywords': ['Prototype','Usability Testing','Plain Language','Content Design','Accessibility','Journey Maps','Wireframing','Process Mapping','Requirements','Strategy','Information Architecture','Content Strategy','Workflow Analysis','Interaction Design','Data Storytelling','User Flows','Research Synthesis','Service Design','Stakeholder Alignment','Documentation'],
      // about h1 (html)
      'about.h1.html': 'Designing clarity across product, content, and decisions.',
      // index h1 (html)
      'home.h1.html': 'Data-driven Design, Documentation, and Decisions',
      // projects h1 (html)
      'projects.h1.html': 'Case-study driven product work.',
      // writing h1 (html)
      'writing.h1.html': 'Insights across UX/UI, technical writing, and business analysis.',
      // contact h1 (html)
      'contact.h1.html': "Let's connect.",
    },
    es: {
      // Common
      'skip.link': 'Saltar al contenido principal',
      'nav.about': 'Sobre mí',
      'nav.work': 'Trabajo',
      'nav.contact': 'Contacto',
      'nav.resume': 'Currículum',
      'footer.tagline': 'Especialista en Producto Digital | Ingeniera UX/UI | Escritora Técnica | Analista de Negocios',
      'footer.github': 'GitHub',
      'footer.linkedin': 'LinkedIn',
      'footer.email': 'Correo',
      'footer.copyright': 'Mariah L Buckley. Todos los derechos reservados.',
      'footer.egg': '✨ Encontraste una interacción oculta. ¡Gracias por explorar!',
      'footer.longpress': 'Mantén presionada una tecla del teclado para una animación sorpresa.',
      'back.top': 'Volver arriba',
      // index
      'home.eyebrow': 'ESPECIALISTA EN PRODUCTO DIGITAL /// MULTIDISCIPLINARIA',
      'home.supporting': 'Diseño, documentación y decisiones basadas en datos a través de ingeniería UX/UI, escritura técnica y análisis de negocios.',
      'trust.uxui': 'Ingeniería UX/UI',
      'trust.writing': 'Escritura Técnica',
      'trust.analysis': 'Análisis de Negocios',
      'value.h2': 'Convirtiendo la complejidad en claridad',
      'feature1.h3': '¿Dificultades para hacer que la información compleja sea utilizable?',
      'feature1.p': 'Convierto investigaciones, requisitos y contenido en experiencias digitales claras.',
      'feature2.h3': '¿Necesitas documentación que la gente realmente entienda?',
      'feature2.p': 'Creo guías estructuradas, SOPs, bases de conocimiento y contenido técnico.',
      'feature3.h3': '¿Tratando de tomar mejores decisiones de producto o negocio?',
      'feature3.p': 'Analizo flujos de trabajo, datos, necesidades de partes interesadas y problemas de usuarios para apoyar mejores resultados.',
      'discipline1.h3': 'Ingeniera UX/UI',
      'discipline1.p': 'Diseño interfaces accesibles y construyo sistemas front-end responsivos basados en investigación y usabilidad.',
      'discipline2.h3': 'Escritora Técnica',
      'discipline2.p': 'Estructuro documentación y SOPs para que las personas puedan navegar sistemas con confianza.',
      'discipline3.h3': 'Analista de Negocios',
      'discipline3.p': 'Traduzco datos, flujos de trabajo y necesidades de partes interesadas en dirección práctica de producto.',
      'work.h2': 'Trabajo seleccionado',
      'filter.all': 'Todos',
      'filter.uxui': 'UX/UI',
      'filter.technical-writing': 'Escritura Técnica',
      'filter.accessibility': 'Accesibilidad',
      'filter.development': 'Desarrollo',
      'filter.business-analysis': 'Análisis de Negocios',
      'filter.research': 'Investigación',
      'filter.strategy': 'Estrategia',
      'proj1.category': 'Diseño UX/UI',
      'proj1.h3': 'Rediseño del Datahub de Outdoor Pikes Peak',
      'proj1.p': 'Rediseñé una plataforma de recursos al aire libre con navegación y flujos de usuario mejorados.',
      'proj1.tools': 'Herramientas: Figma, Investigación UX, HTML/CSS',
      'proj1.link': 'Ver Caso de Estudio →',
      'proj2.category': 'Escritura Técnica + UX',
      'proj2.h3': 'Localización de la Biblioteca Pikes Peak',
      'proj2.p': 'Creé localización al español, mejoras de accesibilidad y estructura de contenido más clara.',
      'proj2.tools': 'Herramientas: Lenguaje Claro, Localización, WAVE',
      'proj2.link': 'Ver Caso de Estudio →',
      'proj3.category': 'Escritura Técnica',
      'proj3.h3': 'Proyecto de Documentación de Aumento con IA',
      'proj3.p': 'Desarrollé documentación estructurada e informes para investigación asistida por IA.',
      'proj3.tools': 'Herramientas: Markdown, SOPs, Base de Conocimiento',
      'proj3.link': 'Ver Caso de Estudio →',
      'proj4.category': 'Accesibilidad',
      'proj4.h3': 'Auditoría de Accesibilidad',
      'proj4.p': 'Revisé contenido digital en busca de barreras usando herramientas de prueba de usabilidad y accesibilidad.',
      'proj4.tools': 'Herramientas: WAVE, WCAG, Pruebas de Usabilidad',
      'proj4.link': 'Ver Caso de Estudio →',
      'proj5.category': 'Desarrollo Web',
      'proj5.h3': 'Sitio Web de Portafolio',
      'proj5.p': 'Diseñé y desarrollé un portafolio responsivo para comunicar trabajo multidisciplinario.',
      'proj5.tools': 'Herramientas: HTML/CSS/JavaScript, GitHub Pages',
      'proj5.link': 'Ver Caso de Estudio →',
      'proj6.category': 'UX/UI + Desarrollo',
      'proj6.h3': 'Sprint de Prototipos de Sistema de Diseño',
      'proj6.p': 'Construí patrones reutilizables y validé entregas más rápidas entre diseño e ingeniería.',
      'proj6.tools': 'Herramientas: Figma, Componentes, HTML/CSS',
      'proj6.link': 'Ver Caso de Estudio →',
      'proj7.category': 'Estrategia de Documentación',
      'proj7.h3': 'Renovación de Documentación de Flujos',
      'proj7.p': 'Mapeé brechas de procesos y reconstruí documentación para reducir fricción en onboarding.',
      'proj7.tools': 'Herramientas: SOPs, Mapeo de Procesos, Investigación',
      'proj7.link': 'Ver Caso de Estudio →',
      'proj8.category': 'Accesibilidad + UX',
      'proj8.h3': 'Actualización de Navegación Inclusiva',
      'proj8.p': 'Mejoré la arquitectura de información y estados de interacción para mayor claridad.',
      'proj8.tools': 'Herramientas: WCAG, IA, Pruebas de Usabilidad',
      'proj8.link': 'Ver Caso de Estudio →',
      'proj9.category': 'Análisis de Negocios',
      'proj9.h3': 'Análisis del Flujo de Ingreso de Servicios',
      'proj9.p': 'Evalué rutas de ingreso para detectar retrasos, vacíos de traspaso y puntos ciegos de reporte.',
      'proj9.tools': 'Herramientas: Mapeo de Recorrido, SQL, Entrevistas con Stakeholders',
      'proj9.link': 'Ver Caso de Estudio →',
      'proj10.category': 'Ingeniería de Accesibilidad UX/UI',
      'proj10.h3': 'Actualización de Librería de Componentes Accesibles',
      'proj10.p': 'Reestructuré componentes compartidos para mejorar contraste, navegación por teclado y reutilización.',
      'proj10.tools': 'Herramientas: Sistemas de Diseño, WCAG, JavaScript',
      'proj10.link': 'Ver Caso de Estudio →',
      'proj11.category': 'Diseño de Requisitos y SOPs',
      'proj11.h3': 'Documentación de Lanzamientos Entre Equipos',
      'proj11.p': 'Estandaricé listas de verificación de lanzamiento y registros de decisiones para producto, soporte y operaciones.',
      'proj11.tools': 'Herramientas: Confluence, Plantillas SOP, Registros de Decisión',
      'proj11.link': 'Ver Caso de Estudio →',
      'proj12.category': 'Investigación de Estrategia de Producto',
      'proj12.h3': 'Panel de Decisiones para Journey del Cliente',
      'proj12.p': 'Convertí señales de clientes en un panel que priorizó oportunidades del roadmap.',
      'proj12.tools': 'Herramientas: Power BI, Síntesis de Investigación, Priorización',
      'proj12.link': 'Ver Caso de Estudio →',
      'lab.h2': 'Laboratorio de Producto Digital',
      'lab1.h3': 'Ingeniera UX/UI',
      'lab1.p': 'Combino diseño centrado en el usuario, accesibilidad, investigación y desarrollo front-end para crear productos e interfaces digitales intuitivos.',
      'lab2.h3': 'Escritora Técnica',
      'lab2.p': 'Creo documentación clara, estructurada y centrada en el usuario que ayuda a las personas a entender sistemas, procesos y tecnologías complejos.',
      'lab3.h3': 'Analista de Negocios',
      'lab3.p': 'Uso investigación, datos, perspectivas de partes interesadas, requisitos y análisis de procesos para apoyar mejores decisiones de producto y negocio.',
      'toolkit.h2': 'Herramientas',
      'figma.p': 'Wireframes, prototipos y diseño de interfaces.',
      'github.p': 'Control de versiones, colaboración y alojamiento.',
      'vscode.p': 'Edición de código y flujos de documentación.',
      'html.p': 'Sitios web responsivos e interacciones.',
      'markdown.p': 'Documentación estructurada y escritura.',
      'msoffice.p': 'Informes, presentaciones y documentos de negocio.',
      'gworkspace.p': 'Flujos de colaboración e investigación.',
      'adobe.p': 'Diseño visual y recursos creativos.',
      'canva.p': 'Presentaciones y contenido digital.',
      'wave.p': 'Pruebas y auditoría de accesibilidad.',
      'jira.p': 'Seguimiento de proyectos y gestión de tareas.',
      'confluence.p': 'Gestión del conocimiento y documentación.',
      'sql.p': 'Consultas de datos y análisis.',
      'powerbi.p': 'Paneles e informes.',
      'tableau.p': 'Visualización de datos y narrativa.',
      'claude.p': 'Lluvia de ideas, síntesis y redacción más rápida en trabajo de producto.',
      'writing.preview.h2': 'Escritura',
      'writing1.h3': 'Diseñando para la Claridad en Flujos de Trabajo Complejos',
      'writing1.p': 'Cómo reduzco la fricción traduciendo la complejidad en decisiones de interfaz.',
      'writing1.link': 'Leer Más →',
      'writing2.h3': 'Construyendo SOPs que la Gente Realmente Usa',
      'writing2.p': 'Un enfoque práctico para estructura, voz y arquitectura de contenido.',
      'writing2.link': 'Leer Más →',
      'writing3.h3': 'De Requisitos a Mejores Decisiones',
      'writing3.p': 'Conectando metas de partes interesadas, datos y resultados de usuarios con confianza.',
      'writing3.link': 'Leer Más →',
      'cta.h2': 'Construyamos algo claro, útil y orientado a decisiones.',
      'cta.p': 'Ya sea que necesites una mejor interfaz, documentación más sólida o requisitos de producto más claros, me encantaría conectar.',
      'cta.contact': 'Contáctame',
      'cta.github': 'Ver GitHub',
      'cta.linkedin': 'LinkedIn',
      'game.title': 'Juego: alimenta al pulpo',
      'game.feed': 'Alimentar al pulpo',
      'game.hint': 'Haz clic en el área del juego para soltar un camarón, caracol o pez y ver cómo el pulpo lo atrapa.',
      // about
      'about.eyebrow': 'SOBRE MÍ',
      'about.bio.h2': 'Biografía profesional',
      'about.bio.p': 'Soy una Especialista en Producto Digital enfocada en Ingeniería UX/UI, Escritura Técnica y Análisis de Negocios. Mi trabajo se centra en transformar investigaciones, requisitos, contenido y datos en experiencias digitales fáciles de usar, documentación clara e información procesable.',
      'about.focus.h3': 'Áreas de enfoque profesional',
      'about.focus.li1': 'Ingeniería UX/UI e interfaces con accesibilidad prioritaria',
      'about.focus.li2': 'Escritura técnica, SOPs y documentación de usuario',
      'about.focus.li3': 'Análisis de negocios, flujos de trabajo y estrategia de producto',
      'about.focus.li4': 'Síntesis de investigación y apoyo a decisiones',
      'about.education.h2': 'Educación',
      'about.education.p': 'Educación académica y continua enfocada en sistemas de producto digital, comunicación y análisis.',
      'about.certs.h2': 'Certificaciones',
      'about.certs.p': 'Certificaciones profesionales en UX, escritura técnica, accesibilidad y análisis.',
      'about.values.h2': 'Valores',
      'about.resume': 'Descargar Currículum',
      'about.docgarden.h2': 'Jardín de Documentación Interactivo',
      'about.docgarden.p': 'Pasa el cursor sobre cada bloque para ver cómo se conectan la documentación y los artefactos de producto.',
      'doc1.h3': 'SOPs',
      'doc1.p': 'Claridad operativa para trabajo repetible.',
      'doc2.h3': 'Guías de Usuario',
      'doc2.p': 'Orientación basada en tareas con lenguaje claro.',
      'doc3.h3': 'Notas de Investigación',
      'doc3.p': 'Perspectivas traducidas en dirección de diseño.',
      'doc4.h3': 'Wireframes',
      'doc4.p': 'Estructura visual antes de la ingeniería.',
      'doc5.h3': 'Requisitos',
      'doc5.p': 'Expectativas compartidas entre partes interesadas.',
      'doc6.h3': 'Mapas de Recorrido',
      'doc6.p': 'Contexto para puntos de contacto y puntos de dolor.',
      'values.clarity': 'Claridad',
      'values.accessibility': 'Accesibilidad',
      'values.evidence': 'Decisiones basadas en evidencia',
      'values.empathy': 'Empatía',
      'values.systems': 'Pensamiento sistémico',
      'values.learning': 'Aprendizaje continuo',
      // projects
      'projects.eyebrow': 'PROYECTOS',
      'projects.supporting': 'Filtra por disciplina, busca rápidamente y explora casos de estudio de ejemplo.',
      'projects.search.placeholder': 'Buscar proyectos...',
      'case.h2': 'Estructura Estándar de Narrativa de Proyecto',
      'case.li1': 'Héroe', 'case.li2': 'Descripción', 'case.li3': 'Problema', 'case.li4': 'Investigación',
      'case.li5': 'Perspectivas', 'case.li6': 'Proceso', 'case.li7': 'Wireframes', 'case.li8': 'Iteraciones',
      'case.li9': 'Solución Final', 'case.li10': 'Resultados', 'case.li11': 'Reflexión', 'case.li12': 'Próximo Proyecto',
      'pcase1.p': 'Mejoras de estructura de navegación e interfaz.',
      'pcase1.link': 'Ver Caso de Estudio →',
      'pcase2.p': 'Localización y mejoras de accesibilidad de contenido.',
      'pcase2.link': 'Ver Caso de Estudio →',
      'pcase3.p': 'Documentación para flujos de trabajo de investigación asistida por IA.',
      'pcase3.link': 'Ver Caso de Estudio →',
      'pcase4.p': 'Pruebas y análisis de barreras con recomendaciones.',
      'pcase4.link': 'Ver Caso de Estudio →',
      'pcase5.p': 'Arquitectura de portafolio narrativo responsivo.',
      'pcase5.link': 'Ver Caso de Estudio →',
      // writing page
      'writing.eyebrow': 'ESCRITURA',
      'writing.search.placeholder': 'Buscar escritura...',
      'wtag.ux': 'UX',
      'wtag.technical': 'Escritura Técnica',
      'wtag.business': 'Análisis de Negocios',
      'wtag.accessibility': 'Accesibilidad',
      'wtag.research': 'Investigación',
      'wcard1.category': 'UX/UI',
      'wcard1.h3': 'Diseñando Interfaces Centradas en Decisiones',
      'wcard1.p': 'Haciendo sistemas complejos más fáciles de entender y usar.',
      'wcard1.link': 'Leer Más →',
      'wcard2.category': 'Escritura Técnica',
      'wcard2.h3': 'De Notas a Bases de Conocimiento',
      'wcard2.p': 'Estructurando documentación para que los equipos puedan ejecutar más rápido.',
      'wcard2.link': 'Leer Más →',
      'wcard3.category': 'Análisis de Negocios',
      'wcard3.h3': 'La Claridad de Requisitos como Estrategia de Producto',
      'wcard3.p': 'Cómo los requisitos claros reducen el riesgo y el retrabajo.',
      'wcard3.link': 'Leer Más →',
      'wcard4.category': 'Accesibilidad',
      'wcard4.h3': 'Hallazgos de Auditoría que Realmente Impulsan el Cambio',
      'wcard4.p': 'Convirtiendo revisiones de cumplimiento en mejoras prácticas.',
      'wcard4.link': 'Leer Más →',
      'wcard5.category': 'UX/UI',
      'wcard5.h3': 'Pruebas de Prototipo con Confianza de las Partes Interesadas',
      'wcard5.p': 'Conversaciones basadas en evidencia para mejores resultados de diseño.',
      'wcard5.link': 'Leer Más →',
      'wcard6.category': 'Análisis de Negocios',
      'wcard6.h3': 'Mapeo de Procesos para Mejores Decisiones de Producto',
      'wcard6.p': 'Conectando flujos de trabajo, metas y opciones de implementación.',
      'wcard6.link': 'Leer Más →',
      // contact
      'contact.eyebrow': 'CONTACTO',
      'contact.supporting': 'Cuéntame qué estás construyendo y cómo se ve la claridad para tu equipo.',
      'contact.form.h2': 'Formulario de contacto',
      'contact.name.label': 'Nombre',
      'contact.email.label': 'Correo electrónico',
      'contact.subject.label': 'Asunto',
      'contact.message.label': 'Mensaje',
      'contact.submit': 'Enviar',
      'contact.connect.h2': 'Conéctate Conmigo',
      'contact.faq.h2': 'Preguntas Frecuentes',
      'faq1.q': '¿En qué tipos de proyectos trabajas?',
      'faq1.a': 'Trabajo en ingeniería UX/UI, escritura técnica, análisis de negocios, accesibilidad, documentación y proyectos de producto digital.',
      'faq2.q': '¿Estás abierta a trabajo freelance o por contrato?',
      'faq2.a': 'Sí, estoy abierta a discutir oportunidades freelance, por contrato y colaborativas.',
      'faq3.q': '¿Qué herramientas usas con más frecuencia?',
      'faq3.a': 'Uso herramientas como Figma, GitHub, VS Code, HTML, CSS, JavaScript, SQL, Power BI, Jira, Confluence y herramientas de prueba de accesibilidad.',
      'faq4.q': '¿Puedes ayudar con proyectos solo de documentación?',
      'faq4.a': 'Sí, puedo ayudar con documentación, SOPs, guías de usuario, bases de conocimiento, contenido técnico y organización de contenido.',
      'faq5.q': '¿Cómo pueden contactarte?',
      'faq5.a': 'Usa el formulario de contacto o conéctate conmigo a través de LinkedIn, GitHub o correo electrónico.',
      // marquee
      'marquee.keywords': ['Prototipo','Pruebas de Usabilidad','Lenguaje Claro','Diseño de Contenido','Accesibilidad','Mapas de Recorrido','Wireframing','Mapeo de Procesos','Requisitos','Estrategia','Arquitectura de Información','Estrategia de Contenido','Análisis de Flujos','Diseño de Interacción','Narrativa de Datos','Flujos de Usuario','Síntesis de Investigación','Diseño de Servicios','Alineación de Stakeholders','Documentación'],
      // h1 (html)
      'about.h1.html': 'Diseñando claridad en producto, contenido y decisiones.',
      'home.h1.html': 'Toma decisiones con confianza.<br />Transformo sistemas complejos en herramientas que la gente realmente usa.',
      'projects.h1.html': 'Trabajo de producto basado en casos de estudio.',
      'writing.h1.html': 'Perspectivas sobre UX/UI, escritura técnica y análisis de negocios.',
      'contact.h1.html': 'Conectemos.',
    },
  };

  let currentLang = localStorage.getItem('lang') || 'en';

  const applyTranslations = (lang) => {
    const t = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    // textContent
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Marquee: rebuild both halves with translated keywords
    const marqueeTrack = document.querySelector('.keyword-track');
    if (marqueeTrack && Array.isArray(t['marquee.keywords'])) {
      const kws = t['marquee.keywords'];
      marqueeTrack.innerHTML = [...kws, ...kws].map((kw) => `<span>${kw}</span>`).join('');
    }
  };

  // Apply saved language on page load
  applyTranslations(currentLang);
  if (langBtn) langBtn.textContent = currentLang.toUpperCase();

  // Active navigation state
  const page = body.dataset.page;
  const navPage = ['projects', 'writing'].includes(page) ? 'work' : page;
  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.dataset.nav === navPage) link.setAttribute('aria-current', 'page');
  });

  // Mobile navigation
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open');
    });
  }

  // Theme toggle
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') body.setAttribute('data-theme', 'dark');
  else if (savedTheme === 'light') body.removeAttribute('data-theme');
  if (themeToggle) {
    const syncThemeIcon = () => {
      themeToggle.textContent = body.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    };
    syncThemeIcon();
    themeToggle.addEventListener('click', () => {
      const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      if (next === 'light') body.removeAttribute('data-theme');
      else body.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      syncThemeIcon();
    });
  }

  // Language toggle
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'es' : 'en';
      langBtn.textContent = currentLang.toUpperCase();
      localStorage.setItem('lang', currentLang);
      applyTranslations(currentLang);
    });
  }

  // Scroll reveal animations
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // Back to top button
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Footer easter egg
  const footerEgg = document.getElementById('footer-easter-egg');
  const hiddenMessage = document.querySelector('.hidden-message');
  if (footerEgg && hiddenMessage) {
    footerEgg.addEventListener('click', () => {
      const t = translations[currentLang] || translations.en;
      hiddenMessage.textContent = t['footer.egg'] || '';
      setTimeout(() => { hiddenMessage.textContent = ''; }, 2600);
    });
  }

  // Generic filter groups
  document.querySelectorAll('[data-filter-group]').forEach((group) => {
    const target = document.querySelector(`[data-filter-target="${group.dataset.filterGroup}"]`) || document.getElementById(group.dataset.filterGroup);
    if (!target) return;

    const cards = target.querySelectorAll('[data-category]');
    group.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.filter-btn').forEach((node) => node.classList.remove('active'));
        btn.classList.add('active');
        const value = btn.dataset.filter.toLowerCase();
        cards.forEach((card) => {
          const categories = card.dataset.category.toLowerCase();
          const match = value === 'all' || categories.includes(value);
          card.style.display = match ? '' : 'none';
        });
      });
    });
  });

  // Search for projects and writing
  document.querySelectorAll('[data-search-input]').forEach((input) => {
    const target = document.querySelector(input.dataset.searchInput);
    if (!target) return;
    const cards = target.querySelectorAll('[data-category], .project-card, .writing-card');

    input.addEventListener('input', () => {
      const query = input.value.trim().toLowerCase();
      cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      question.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // Project card tilt and depth
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.transform = `rotateX(${(0.5 - y) * 4}deg) rotateY(${(x - 0.5) * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // Magnetic button hover
  document.querySelectorAll('.magnetic').forEach((button) => {
    button.addEventListener('mousemove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });

  // Cursor-reactive parallax blocks
  document.querySelectorAll('[data-parallax]').forEach((item) => {
    item.addEventListener('mousemove', (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
      item.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0)`;
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
    });
  });

  // Keyboard playground effect
  const keyContainer = document.getElementById('keyboard-playground');
  const PARTY_COLORS = ['#FF7300', '#F757FF', '#7ED957', '#00CEC8'];
  const LONG_PRESS_DELAY_MS = 420;
  const PARTY_SPAWN_COUNT = 18;
  let longPressTimer;
  let longPressTriggered = false;
  let activeKey = null;

  const spawnKeyPop = (label, surprise = false) => {
    if (!keyContainer) return;
    const pop = document.createElement('span');
    pop.className = `key-pop${surprise ? ' surprise' : ''}`;
    pop.textContent = label;
    pop.style.left = `${Math.random() * 90 + 5}%`;
    pop.style.top = `${Math.random() * 70 + 15}%`;
    if (surprise) {
      const color = PARTY_COLORS[Math.floor(Math.random() * PARTY_COLORS.length)];
      pop.style.background = color;
      pop.style.color = '#fff';
      pop.style.borderColor = 'transparent';
    }
    keyContainer.appendChild(pop);
    setTimeout(() => pop.remove(), surprise ? 1300 : 1000);
  };

  document.addEventListener('keydown', (event) => {
    const tag = document.activeElement?.tagName;
    if (!keyContainer || tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (event.repeat) return;

    const label = event.key.length === 1 ? event.key.toUpperCase() : event.key;
    spawnKeyPop(label);
    activeKey = label;
    longPressTriggered = false;
    clearTimeout(longPressTimer);
    longPressTimer = setTimeout(() => {
      longPressTriggered = true;
      Array.from({ length: PARTY_SPAWN_COUNT }).forEach(() => spawnKeyPop(activeKey, true));
    }, LONG_PRESS_DELAY_MS);
  });

  document.addEventListener('keyup', () => {
    clearTimeout(longPressTimer);
    activeKey = null;
    longPressTriggered = false;
  });

  // Feed-the-octopus mini-game
  const feedCanvas = document.getElementById('octo-feed-canvas');
  const feedBtn = document.querySelector('.octo-feed-btn');
  if (feedCanvas) {
    const ctx = feedCanvas.getContext('2d');
    const WATER_COLORS = ['#FF7300', '#F757FF', '#7ED957', '#00CEC8'];
    const FOOD_TYPES = ['shrimp', 'snail', 'fish'];
    const FOOD_MIN_X_OFFSET = 170;
    const FOOD_X_PADDING = 200;
    const FOOD_MIN_Y_OFFSET = 40;
    const FOOD_Y_PADDING = 80;
    const foods = [];
    const octo = { x: 120, y: 140, target: null, color: WATER_COLORS[1], wobble: 0 };

    const resizeFeedCanvas = () => {
      const area = feedCanvas.parentElement;
      feedCanvas.width = area.clientWidth - 2;
      feedCanvas.height = 260;
      octo.y = Math.min(Math.max(octo.y, 65), feedCanvas.height - 40);
    };

    const addFood = (x, y) => {
      const type = FOOD_TYPES[Math.floor(Math.random() * FOOD_TYPES.length)];
      foods.push({
        x,
        y,
        type,
        color: WATER_COLORS[Math.floor(Math.random() * WATER_COLORS.length)],
        size: 13 + Math.random() * 7,
      });
    };

    const drawFood = (food) => {
      ctx.save();
      ctx.translate(food.x, food.y);
      ctx.lineWidth = 2;
      ctx.strokeStyle = food.color;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      const s = food.size;

      if (food.type === 'fish') {
        // Body outline
        ctx.beginPath();
        ctx.ellipse(0, 0, s, s * 0.55, 0, 0, Math.PI * 2);
        ctx.stroke();
        // Forked tail
        ctx.beginPath();
        ctx.moveTo(s * 0.85, 0);
        ctx.lineTo(s * 1.55, -s * 0.45);
        ctx.moveTo(s * 0.85, 0);
        ctx.lineTo(s * 1.55, s * 0.45);
        ctx.stroke();
        // Dorsal fin
        ctx.beginPath();
        ctx.moveTo(-s * 0.15, -s * 0.55);
        ctx.quadraticCurveTo(s * 0.1, -s * 0.95, s * 0.35, -s * 0.55);
        ctx.stroke();
        // Eye
        ctx.beginPath();
        ctx.arc(-s * 0.5, -s * 0.08, s * 0.1, 0, Math.PI * 2);
        ctx.stroke();
        // Eye pupil
        ctx.fillStyle = food.color;
        ctx.beginPath();
        ctx.arc(-s * 0.5, -s * 0.08, s * 0.04, 0, Math.PI * 2);
        ctx.fill();
        // Mouth
        ctx.beginPath();
        ctx.arc(-s * 0.85, 0, s * 0.12, -0.4, 0.4);
        ctx.stroke();
        // Gill line
        ctx.beginPath();
        ctx.arc(-s * 0.2, 0, s * 0.32, Math.PI * 0.6, Math.PI * 1.4);
        ctx.stroke();
      } else if (food.type === 'shrimp') {
        // Curved segmented body
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.72, Math.PI * 0.15, Math.PI * 1.45);
        ctx.stroke();
        // Body segments (3 short perpendicular lines)
        for (let seg = 0; seg < 3; seg++) {
          const t = Math.PI * (0.35 + seg * 0.32);
          const bx = Math.cos(t) * s * 0.72;
          const by = Math.sin(t) * s * 0.72;
          const nx = -Math.sin(t) * s * 0.18;
          const ny = Math.cos(t) * s * 0.18;
          ctx.beginPath();
          ctx.moveTo(bx - nx, by - ny);
          ctx.lineTo(bx + nx, by + ny);
          ctx.stroke();
        }
        // Head
        ctx.beginPath();
        const hx = Math.cos(Math.PI * 0.15) * s * 0.72;
        const hy = Math.sin(Math.PI * 0.15) * s * 0.72;
        ctx.arc(hx, hy, s * 0.14, 0, Math.PI * 2);
        ctx.stroke();
        // Eye
        ctx.fillStyle = food.color;
        ctx.beginPath();
        ctx.arc(hx, hy - s * 0.05, s * 0.06, 0, Math.PI * 2);
        ctx.fill();
        // Antennae
        ctx.beginPath();
        ctx.moveTo(hx, hy - s * 0.14);
        ctx.lineTo(hx - s * 0.35, hy - s * 0.65);
        ctx.moveTo(hx + s * 0.08, hy - s * 0.14);
        ctx.lineTo(hx + s * 0.22, hy - s * 0.72);
        ctx.stroke();
        // Tail fan
        const tx = Math.cos(Math.PI * 1.45) * s * 0.72;
        const ty = Math.sin(Math.PI * 1.45) * s * 0.72;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx - s * 0.28, ty + s * 0.35);
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx + s * 0.28, ty + s * 0.35);
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx, ty + s * 0.42);
        ctx.stroke();
      } else {
        // Snail – spiral shell + body
        // Shell spiral
        ctx.beginPath();
        const spiralTurns = 2.2;
        const maxSR = s * 0.55;
        const steps = 64;
        for (let j = 0; j <= steps; j++) {
          const t = (j / steps) * spiralTurns * Math.PI * 2;
          const sr = (j / steps) * maxSR;
          const px = s * 0.05 + sr * Math.cos(t + Math.PI);
          const py = -s * 0.18 + sr * Math.sin(t + Math.PI);
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        // Shell outline circle
        ctx.beginPath();
        ctx.arc(s * 0.05, -s * 0.18, maxSR, 0, Math.PI * 2);
        ctx.stroke();
        // Body/foot
        ctx.beginPath();
        ctx.moveTo(-s * 0.7, s * 0.38);
        ctx.quadraticCurveTo(-s * 0.1, s * 0.62, s * 0.55, s * 0.38);
        ctx.stroke();
        // Head bump
        ctx.beginPath();
        ctx.arc(-s * 0.55, s * 0.2, s * 0.14, Math.PI, Math.PI * 2);
        ctx.stroke();
        // Eye dots on antennae
        ctx.beginPath();
        ctx.moveTo(-s * 0.6, s * 0.06);
        ctx.lineTo(-s * 0.8, -s * 0.28);
        ctx.moveTo(-s * 0.45, s * 0.06);
        ctx.lineTo(-s * 0.52, -s * 0.3);
        ctx.stroke();
        ctx.fillStyle = food.color;
        ctx.beginPath();
        ctx.arc(-s * 0.8, -s * 0.28, s * 0.07, 0, Math.PI * 2);
        ctx.arc(-s * 0.52, -s * 0.3, s * 0.07, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const drawGameOctopus = () => {
      const r = 32;
      ctx.save();
      ctx.translate(octo.x, octo.y);
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      // Rainbow gradient matching the footer text
      const grad = ctx.createLinearGradient(-r, -r * 1.2, r, r * 1.2);
      grad.addColorStop(0, '#FF7300');
      grad.addColorStop(0.35, '#F757FF');
      grad.addColorStop(0.68, '#7ED957');
      grad.addColorStop(1, '#00CEC8');

      // Tentacles — hero style with dark outline + gradient color
      for (let i = 0; i < 8; i++) {
        const spread = (i / 7 - 0.5) * Math.PI * 0.95;
        const baseAngle = Math.PI / 2 + spread;
        const bx = Math.cos(baseAngle) * r * 0.5;
        const by = r * 0.35 + Math.sin(baseAngle) * r * 0.18;
        const wave = Math.sin(octo.wobble + i * 0.8) * r * 0.22;
        const len = r * (0.78 + (i % 2) * 0.18);
        const cpx = bx + Math.cos(baseAngle) * len * 0.28 + wave;
        const cpy = by + len * 0.45;
        const ex = bx + Math.cos(baseAngle) * len * 0.2 + wave * 0.85;
        const ey = by + len;

        ctx.strokeStyle = '#0b0f1a';
        ctx.lineWidth = r * 0.26;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.quadraticCurveTo(cpx, cpy, ex, ey);
        ctx.stroke();

        ctx.strokeStyle = grad;
        ctx.lineWidth = r * 0.18;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.quadraticCurveTo(cpx, cpy, ex, ey);
        ctx.stroke();
      }

      // Body fill
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(-r * 0.82, r * 0.28);
      ctx.bezierCurveTo(-r * 0.98, -r * 0.3, -r * 0.48, -r * 0.95, 0, -r * 0.95);
      ctx.bezierCurveTo(r * 0.48, -r * 0.95, r * 0.98, -r * 0.3, r * 0.82, r * 0.28);
      ctx.quadraticCurveTo(0, r * 0.95, -r * 0.82, r * 0.28);
      ctx.fill();

      // Body outline
      ctx.strokeStyle = '#0b0f1a';
      ctx.lineWidth = Math.max(2, r * 0.12);
      ctx.stroke();

      // Highlight
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.ellipse(-r * 0.24, -r * 0.42, r * 0.34, r * 0.2, -0.28, 0, Math.PI * 2);
      ctx.fill();

      // Eyes
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#0b0f1a';
      ctx.beginPath();
      ctx.arc(-r * 0.27, -r * 0.08, r * 0.09, 0, Math.PI * 2);
      ctx.arc(r * 0.27, -r * 0.08, r * 0.09, 0, Math.PI * 2);
      ctx.fill();

      // Smile
      ctx.strokeStyle = '#0b0f1a';
      ctx.lineWidth = Math.max(2, r * 0.08);
      ctx.beginPath();
      ctx.arc(0, r * 0.16, r * 0.24, 0.2 * Math.PI, 0.8 * Math.PI, false);
      ctx.stroke();

      // Cheek blush
      ctx.fillStyle = 'rgba(243, 122, 157, 0.55)';
      ctx.beginPath();
      ctx.arc(-r * 0.43, r * 0.12, r * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(r * 0.43, r * 0.12, r * 0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const animateFeedGame = () => {
      ctx.clearRect(0, 0, feedCanvas.width, feedCanvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      for (let x = 0; x < feedCanvas.width; x += 26) {
        for (let y = 0; y < feedCanvas.height; y += 26) {
          ctx.fillRect(x, y, 2, 2);
        }
      }

      if (!octo.target && foods.length) {
        octo.target = foods.reduce((best, item) => {
          const d = Math.hypot(item.x - octo.x, item.y - octo.y);
          if (!best || d < best.d) return { d, item };
          return best;
        }, null)?.item || null;
      }

      if (octo.target) {
        const dx = octo.target.x - octo.x;
        const dy = octo.target.y - octo.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 10) {
          const eaten = foods.indexOf(octo.target);
          if (eaten >= 0) foods.splice(eaten, 1);
          octo.target = null;
          octo.color = WATER_COLORS[Math.floor(Math.random() * WATER_COLORS.length)];
        } else {
          octo.x += (dx / dist) * 2.3;
          octo.y += (dy / dist) * 2.3;
        }
      } else {
        octo.x += Math.sin(octo.wobble * 0.45) * 0.35;
      }

      octo.wobble += 0.08;
      foods.forEach(drawFood);
      drawGameOctopus();
      requestAnimationFrame(animateFeedGame);
    };

    feedCanvas.addEventListener('click', (event) => {
      const rect = feedCanvas.getBoundingClientRect();
      addFood(event.clientX - rect.left, event.clientY - rect.top);
    });
    feedCanvas.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      addFood(
        FOOD_MIN_X_OFFSET + Math.random() * Math.max(1, feedCanvas.width - FOOD_X_PADDING),
        FOOD_MIN_Y_OFFSET + Math.random() * Math.max(1, feedCanvas.height - FOOD_Y_PADDING)
      );
    });

    if (feedBtn) {
      feedBtn.addEventListener('click', () => {
        addFood(
          FOOD_MIN_X_OFFSET + Math.random() * Math.max(1, feedCanvas.width - FOOD_X_PADDING),
          FOOD_MIN_Y_OFFSET + Math.random() * Math.max(1, feedCanvas.height - FOOD_Y_PADDING)
        );
      });
    }

    window.addEventListener('resize', resizeFeedCanvas);
    resizeFeedCanvas();
    animateFeedGame();
  }

  // Octopus hero canvas
  const canvas = document.getElementById('octopus-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const OCTOPUS_COLORS = ['#f757ff', '#ff7300', '#7ED957', '#00CEC8', '#ff7300'];
    const FLEE_RADIUS = 140;
    const MAX_SPEED = 3.8;
    let mouse = { x: -9999, y: -9999 };
    let octopuses = [];

    const isMobile = () => window.innerWidth < 760;

    const initOctopuses = () => {
      const count = isMobile() ? 5 : 15;
      const baseR = isMobile() ? 4 : 16;
      const randR = isMobile() ? 3 : 8;
      octopuses = Array.from({ length: count }, (_, i) => ({
        x: 80 + Math.random() * Math.max(1, canvas.width - 160),
        y: 80 + Math.random() * Math.max(1, canvas.height - 160),
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        color: OCTOPUS_COLORS[i % OCTOPUS_COLORS.length],
        r: baseR + Math.random() * randR,
        wobble: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const hero = canvas.parentElement;
      canvas.width = hero.clientWidth;
      canvas.height = hero.clientHeight;
      initOctopuses();
    };

    const drawOctopus = ({ x, y, r, color, wobble }) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.shadowColor = 'rgba(17, 24, 39, 0.08)';
      ctx.shadowBlur = r * 0.4;
      ctx.shadowOffsetY = r * 0.12;

      for (let i = 0; i < 8; i++) {
        const spread = (i / 7 - 0.5) * Math.PI * 0.95;
        const baseAngle = Math.PI / 2 + spread;
        const bx = Math.cos(baseAngle) * r * 0.5;
        const by = r * 0.35 + Math.sin(baseAngle) * r * 0.18;
        const wave = Math.sin(wobble + i * 0.8) * r * 0.22;
        const len = r * (0.78 + (i % 2) * 0.18);
        const cpx = bx + Math.cos(baseAngle) * len * 0.28 + wave;
        const cpy = by + len * 0.45;
        const ex = bx + Math.cos(baseAngle) * len * 0.2 + wave * 0.85;
        const ey = by + len;

        ctx.globalAlpha = 1;
        ctx.strokeStyle = '#0b0f1a';
        ctx.lineWidth = r * 0.26;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.quadraticCurveTo(cpx, cpy, ex, ey);
        ctx.stroke();

        ctx.strokeStyle = color;
        ctx.lineWidth = r * 0.18;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.quadraticCurveTo(cpx, cpy, ex, ey);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowColor = 'transparent';

      ctx.globalAlpha = 1;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(-r * 0.82, r * 0.28);
      ctx.bezierCurveTo(-r * 0.98, -r * 0.3, -r * 0.48, -r * 0.95, 0, -r * 0.95);
      ctx.bezierCurveTo(r * 0.48, -r * 0.95, r * 0.98, -r * 0.3, r * 0.82, r * 0.28);
      ctx.quadraticCurveTo(0, r * 0.95, -r * 0.82, r * 0.28);
      ctx.fill();

      ctx.strokeStyle = '#0b0f1a';
      ctx.lineWidth = Math.max(2, r * 0.12);
      ctx.stroke();

      ctx.globalAlpha = 0.3;
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.ellipse(-r * 0.24, -r * 0.42, r * 0.34, r * 0.2, -0.28, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
      ctx.fillStyle = '#0b0f1a';
      ctx.beginPath();
      ctx.arc(-r * 0.27, -r * 0.08, r * 0.09, 0, Math.PI * 2);
      ctx.arc(r * 0.27, -r * 0.08, r * 0.09, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#0b0f1a';
      ctx.lineWidth = Math.max(2, r * 0.08);
      ctx.beginPath();
      ctx.arc(0, r * 0.16, r * 0.24, 0.2 * Math.PI, 0.8 * Math.PI, false);
      ctx.stroke();

      ctx.fillStyle = 'rgba(243, 122, 157, 0.55)';
      ctx.beginPath();
      ctx.arc(-r * 0.43, r * 0.12, r * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(r * 0.43, r * 0.12, r * 0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      octopuses.forEach((oct) => {
        const dx = oct.x - mouse.x;
        const dy = oct.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < FLEE_RADIUS && dist > 0) {
          const force = ((FLEE_RADIUS - dist) / FLEE_RADIUS) * 0.42;
          oct.vx += (dx / dist) * force;
          oct.vy += (dy / dist) * force;
        }

        const speed = Math.hypot(oct.vx, oct.vy);
        if (speed > MAX_SPEED) {
          oct.vx = (oct.vx / speed) * MAX_SPEED;
          oct.vy = (oct.vy / speed) * MAX_SPEED;
        }

        oct.vx *= 0.97;
        oct.vy *= 0.97;
        oct.vx += (Math.random() - 0.5) * 0.04;
        oct.vy += (Math.random() - 0.5) * 0.04;

        oct.x += oct.vx;
        oct.y += oct.vy;
        oct.wobble += 0.05;

        const pad = oct.r * 2;
        if (oct.x < pad) { oct.x = pad; oct.vx = Math.abs(oct.vx); }
        if (oct.x > canvas.width - pad) { oct.x = canvas.width - pad; oct.vx = -Math.abs(oct.vx); }
        if (oct.y < pad) { oct.y = pad; oct.vy = Math.abs(oct.vy); }
        if (oct.y > canvas.height - pad) { oct.y = canvas.height - pad; oct.vy = -Math.abs(oct.vy); }

        drawOctopus(oct);
      });

      requestAnimationFrame(animate);
    };

    const hero = canvas.parentElement;
    window.addEventListener('resize', resize);
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    });
    hero.addEventListener('mouseleave', () => { mouse = { x: -9999, y: -9999 }; });

    resize();
    animate();
  }

  // Stagger animation for grid children
  const STAGGER_DELAY = 80;
  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const children = [...entry.target.children];
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('stagger-visible'), i * STAGGER_DELAY);
        });
        staggerObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.stagger-children').forEach((el) => staggerObserver.observe(el));

  // Section heading glow-in on scroll
  const headingGlowObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('glow-in');
          headingGlowObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll('.section-heading h2').forEach((el) => headingGlowObserver.observe(el));

  // Sliding tab-bar indicator for filter groups
  document.querySelectorAll('[data-filter-group]').forEach((group) => {
    const indicator = document.createElement('span');
    indicator.className = 'tab-indicator';
    indicator.setAttribute('aria-hidden', 'true');
    group.insertBefore(indicator, group.firstChild);

    const moveIndicator = (btn) => {
      indicator.style.width = `${btn.offsetWidth}px`;
      indicator.style.height = `${btn.offsetHeight}px`;
      indicator.style.left = `${btn.offsetLeft}px`;
      indicator.style.top = `${btn.offsetTop}px`;
    };

    const activeOnLoad = group.querySelector('.filter-btn.active');
    if (activeOnLoad) {
      // Position without transition on first render, then restore CSS transition
      indicator.style.transition = 'none';
      moveIndicator(activeOnLoad);
      requestAnimationFrame(() => { indicator.style.transition = null; });
    }

    group.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => moveIndicator(btn));
    });
  });

  // Button ripple effect
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  // Footer year
  document.querySelectorAll('#year').forEach((year) => {
    year.textContent = String(new Date().getFullYear());
  });
})();
