// speakers mock
export const SPEAKERS = [
  {
    name: 'Iveta Jurčíková',
    session: 'Experimental Kotlin coroutines',
    lang: '',
    bio: 'I am a Slovak living in Prague, working as an Android developer in STRV. I am passionate about coding and love creating exciting projects for mobile. When I am not coding at work, I am probably coding somewhere else, or spending time in the gym, as I was on the Slovak national powerlifting team for 8 years.',
    summary: 'Kotlin coroutines have become a stable feature in Kotlin 1.3. We can finally get rid of the experimental flag and dive into the world of concurrency. However, there are still some experimental and obsolete declarations which may get changed or redesigned in the future. In this talk, we will focus on these features, going through Channel, Actor, and Select expression so that you will get familiar with the forthcoming part of the coroutines API.',
    pic: 'iveta',
    twitter: 'IJurcikova'
  },
  {
    name: 'Mónica Sánchez Calzado',
    session: 'Como hice mi juego de navegador online de cartas con websockets',
    lang: '',
    bio: 'Soy una mujer trans, llevo desarrollando en web 10 años, empece el desarrollo web antes de transicionar como hobbie, y para animarme, ya que en aquel momento, no supe como decir que era trans, empece a hacer juegos de navegador, como los primeros que salieron estilo Ogame, Bitefight, Ikariam, grepolis, pero por la depresion de no poder transicionar, y ver que pasaban los años y no me atrevia, abandone los proyectos que empeze. Al empezar a transicionar, hace unos años, volvi a retomar lo que deje, actualmente estoy desarrollando un juego de navegador de cartas online, por turnos en tiempo real mediante websockets, con lo que voy mejorando poco a poco.',
    summary: 'Explicare mi primera motivación de porque empece a hacer un juego online de cartas, como lo lleve a pesar de muchas dificultades que he tenido durante el desarrollo, tecnicas, sentimentales (porque lo empece a mitad de mi transicion con hormonas, y despues de haber pasado un mal momento), y como estoy abordando la construcción del juego.',
    pic: 'monica',
    twitter: 'monica_teamTM'
  },
  {
    name: 'Esther Lozano',
    session: 'Aterrizando en JS: consejos para [node]sesperar en el intento',
    lang: '',
    pic: 'esther',
    twitter: 'esloho',
    bio: 'Informática de mal asiento que migró de la investigación al desarrollo en empresa y cuya relación con JS ha pasado de `it is complicated` a `call me back`. Desarrolladora en seedtag; seriéfila y aprendiz de batería en su casa; feminista everywhere.',
    summary: 'Cuando pasé de desarrollar en Java a adentrarme en el oscuro mundo JS mi día era una sucesión de: "pero... what is this?" (pun intended). Con el tiempo, lecturas varias y la ayuda de mis compis fui viendo la luz de la mano de Node, Typescript (¡no sin mis tipos!) y demás amigas del festival JS. Porque no, JS no es malvado... sólo rarito de conocer :P Así que, para quien aún mire a JS con recelo o quiera repasar algunos de sus aspectos clave, os traigo una serie de consejos que, espero, os hagan ver JS con mejores ojos.'
  },
  {
    name: 'Marcia Villalba',
    session: 'Building serverless applications with GraphQL',
    lang: '',
    pic: 'marcia',
    twitter: 'mavi888uy',
    bio: 'Marcia es una ingeniera en informática con más de 10 años de experiencia. Marcia desde 2015 esta trabajando con tecnologías sin servidor (serverless) y gracias a su amplia experiencia en esta área, fue nombrada por AWS como AWS Serverless Hero. Marcia trabaja para Rovio, la creadora de Angry Birds, como programadora pero en su tiempo libre es la anfitriona de un canal de Youtube llamado FooBar donde todas las semanas hay videos sobre Serverless y el desarrollo de aplicaciones en la nube.',
    summary: 'How to build a serverless application with the least amount of code needed? In this talk, I will show you how to architect serverless applications with GraphQL, using AppSync. I will introduce you to the AppSync service and all its different components. AppSync is a managed service from AWS and is a GraphQL server. It has a lot of out of the box functionalities that are really helpful when building applications like authorization or subscriptions, and it connects directly to services like DynamoDB so you don`t need to code that interface yourself.'
  },
  {
    name: 'Laura Rodríguez Castillo',
    session: 'Metodología y arquitectura CSS para obtener estilos ordenados, flexibles y mantenibles a largo plazo.',
    lang: '',
    pic: 'laura',
    twitter: 'superpensando',
    bio: 'Laura tiene más de 17 años de experiencia en programación web. Estudió Física y en 1994 vivió el nacimiento de internet casi a tiempo real. Y también, la transformación de la descripción de los puestos de trabajo a lo largo de estos años. Ahora es front-end developer especializada en User Interface. Mañana? Quién sabe!',
    summary: 'Desde que me dedico a la programación web, el mundo de los CSS es el gran olvidado y contínuamente me encuentro con "proyectos frankeinstein" donde se ha generado un verdadero CAOS en los CSS y no se puede reaprovechar nada. Trabajar con Metodologías y arquitecturas CSS ya no sólo como buenas prácticas, sino como necesidad.'
  },
  {
    name: 'Alejandra Ventura',
    session: 'Hunting threats with open source tools',
    lang: '',
    pic: 'alejandra',
    twitter: 'venturita',
    bio: 'Alejandra es ingeniera en informática con más de 10 años de experiencia en el sector TIC y actualmente trabaja en el departamento de Inteligencia de INCIBE como Técnico de Ciberseguridad.',
    summary: 'Esta charla tiene como objetivo mostrar las posibilidades que brindan las herramientas open source para llevar a cabo investigaciones sobre posibles amenazas de ciberseguridad. Entre las ventajas de usar herramientas open source tenemos el bajo coste y la flexibilidad de configuración que permiten, en contraposición al tiempo que requiere establecer dicha configuración y el mantenimiento de las propias herramientas. Durante la charla también demostraré lo que hacemos desde INCIBE usando honeypots, junto a otras herramientas, para identificar las posibles amenazas y analizarlas.'
  },
  {
    name: 'Isabel Garrido',
    session: 'Event storming para todos',
    lang: '',
    pic: 'isabel',
    twitter: 'isabeliita90',
    bio: 'Nací en Madrid, donde he vivido trabajado la mayor parte de mi vida, ahora mismo tengo 28 años y llevo unos 5 años trabajando como web developer principalmente como Backend pero he hecho también varias cosas como Frontend, que me encanta. Hace tiempo que hecho una mano a una protectora de animales con su web y, aunque hace tiempo que me interesa el tema, este año he empezado a involucrarme más activamente en la diversidad en el mundo Tech, colaboro en el equipo de diversidad de Letgo, la empresa donde trabajo, y he dado una charla sobre testing en sus oficinas gracias a vosotras también.',
    summary: 'Me gustaría presentar esta herramienta, que permite encontrar un punto de unión para desarrolladores y stakeholders, explicar por qué es muy útil y dar algunas técnicas, incluso si fuera posible exponer un caso práctico. Facilité una sesión de event storming, para añadir una funcionalidad muy pequeña, que fue muy útil y creo que podría ser un tema interesante para gente técnica y no técnica, además no está muy extendida y puede ahorrar mucho tiempo de desarrollo que al final no llegue a producción porque los requisitos no estaban claros entre ambas partes'
  },
  {
    name: 'Núria Soriano',
    session: 'Videojuegos con Vue: lessons learned',
    lang: '',
    pic: 'nuria',
    twitter: 'pincfloit',
    bio: 'Con un grado en diseño gráfico, empezó trabajando en diseño web, pero un poco harta de ver tan pocas mujeres programadoras decidió meterse a equilibrar los números, encontrando así su verdadera pasión. Ahora trabaja como developer en Codegram, especializada en front-end pero trasteando todo el stack. El tiempo libre lo gasta organizando meetups, achuchando a su gata y jugando a videojuegos (y a veces programándolos también).',
    summary: '¿Qué pasa cuando quieres desarrollar videojuegos pero no sabes como? Hay quien muy acertadamente decide aprender, leer libros, hacer cursos… Yo decidí saltar a la piscina y empezar a hacer juegos con lo que ya sabía: JavaScript, concretamente Vue. ¿Qué podía salir mal? Muchas cosas! En esta charla hablaré sobre errores y lecciones aprendidas durante el desarrollo de Live http://nuria-fl.github.io/live y EuroBattle https://nuria.itch.io/eurobattle, también de lo que no salió del todo mal, y por qué estoy haciendo mi siguiente juego con Phaser. Algunos puntos a tratar: - Control del tiempo con javascript - Control del estado del videojuego con Vuex - Control del input del usuario - Cuando es mejor usar un framework especializado como Phaser'
  },
  {
    name: 'Garance Flore Vallat',
    session: 'Web Accessibility: don’t be Beyoncé.',
    lang: '',
    pic: 'garance',
    twitter: 'GaranceVallat',
    bio: 'I am a 20-something software engineer striving for faster and easier to use websites during the day. At night, I wait for Christmas. I work in Barcelona at Marfeel, where we transform the way newspapers publish mobile content. Interested in web accessibility since I started my career, I want to spread the word!',
    summary: 'We can make the web more accessible, for everyone. Earlier this year, Beyoncé`s website was hit with a lawsuit, claiming Beyonce.com denies visually impaired users equal access. As more aspects of our daily lives are conducted online, every web developer can do more to make their content accessible for users with vision, hearing, or motor function difficulties. This talk will show you the ways Beyoncé`s website can be made more accessible, why it matters, and what you can do to improve the online experience, for everyone. '
  },
  {
    name: 'Marta Bellés Muñoz',
    session: 'Beyond cyptography',
    lang: '',
    pic: 'marta',
    twitter: '',
    bio: 'Estudié la carrera de matemáticas aquí y después un máster, también en matemáticas y con especial foco en criptografía y curvas elípticas, en Dinamarca. Al volver aquí empecé a trabajar en iden3, una empresa tecnológica que se dedica a identidad, y donde yo me encargo de los protocolos de zero-knowledge (protocolos de conocimiento cero). Parelalmente, doy clases de matemáticas en la universidad Pompeu Fabra.',
    summary: 'En esta charla, me gustaría explicar cómo ha ido evolucionando la criptografía a lo largo de la historia, juntamente con las diferentes herramientas matemáticas que se han usado, y enseñar por qué y de dónde surgen algunos de los sistemas criptográficos de hoy en día. Algunos de éstos parecen muy complicados pero a menudo los problemas matemáticos que se esconden detrás son similares a los que encontramos en la criptografía clásica. Además de la criptografía simétrica y asimétrica, presento otros protocolos, a veces menos conocidos pero muy interesantes y con gran aplicación a blockchain, como son por ejemplo las signaturas o las pruebas zero-knowledge.'
  },
  {
    name: 'Zuzanna Kruszczynska',
    session: 'Principles of functional programming with examples in Java and Haskell',
    lang: '',
    pic: 'zuzanna',
    twitter: 'OMG_zuzia',
    bio: 'I`m a Java developer at King creating the tools that enable us to operate tens of millions daily active players. I have a degree in mathematics from the University of Oxford and started programming by interning at a startup that was reinventing train ticketing. I`m interested in Functional Programming to keep in touch with the mathematics part of my education. In my spare time, you`ll find me playing volleyball or learning about music.',
    summary: 'What differentiates functional programming from other paradigms, what are its benefits. How simple programmes written functionally look in an object-oriented language and in a functional language. If you don`t know Haskell, don`t worry, it`s not necessary to understand the talk. We will use Haskell to see examples of functional programming and I will explain it as we go. Who knows, maybe you will leave wanting more and become a Haskell developer ;)'
  },
  {
    name: 'Magdalena Pajda',
    session: 'Focus on your code: introduction to serverless using AWS Lambda',
    lang: '',
    pic: 'magda',
    twitter: 'mgdaries',
    bio: 'I`m Magda and I come from Poland. I studied mathematics in Cracow and I did my last semester in Barcelona at UPC. I fell in love with this city and I decided to stay here. I got into tech totally by accident, starting as a QA. Currently, I work as a backend engineer at New Relic building monitoring solutions for cloud infrastructure. In my free time, I love traveling, reading books and baking.',
    summary: 'Serverless is becoming more and more popular. Big companies like Netflix, Coca Cola and Nordstrom have already moved most of their workloads to serverless technology, as it makes it easier for anyone to just focus on their code, sparing the need to manage application servers. In this talk, we will do an introduction to serverless with AWS Lambda. And as it is so easy to start using it, we will go through the process of creating our own AWS Lambda function and connecting it with some other AWS services in real time.  We will present the benefits of AWS Lambda and talk about when it makes sense to use it.'
  },
  {
    name: 'Patricia Ferreiro Alonso',
    session: 'Setting up a DevOps homelab',
    lang: '',
    pic: 'patricia',
    twitter: 'pferreiro92',
    bio: 'I discovered my passion for technology after finishing my university degree, 2 years ago. Having studied Electrical Engineering I didn`t know much about open-source software and the amazing community built around it until I landed my first internship as a DBA. I had always been mostly self-taught and didn`t enjoy the majority of compulsory classes one bit, but was absolutely thrilled at the materials available online. I could learn almost ANYTHING at my own pace, with teachers from all over the world and a thriving community to interact with. I have been able to widen my knowledge by doing a Data Science internship and later starting my professional career as a DevOps. I am currently pursuing a MSc in Data Science while I work at IBM as a Big Data and Analytics Architect, building small ad-hoc systems with open source components. I enjoy attending local meetups and other conventions when possible. My next goals are learning Golang, Chinese and building a playground for testing IoT and Blockchain interaction in my Homelab.  Knowing this is only the beginning of my career and that there`s still so much to learn makes me even more excited (and of course technology keeps evolving faster every day!).',
    summary: 'Live set-up of a modular Raspberry K8s cluster and Kubernetes and basic DevOps toolset deployment and configuration (Gitea, Drone CI, Docker registry...). Also possible to demo a mini Data Science or Blockchain environment deployed on top.'
  },
  {
    name: 'Solange Gasengayire Umuhire',
    session: 'How a Culture of Mentorship and Collaboration Makes You Grow 10x Faster',
    lang: '',
    pic: 'solange',
    twitter: 'sgasengayire',
    bio: 'With a passion for lifelong learning, Solange is always seeking out opportunities to expand her knowledge across a wide variety of fields. She fell in love with software development in her university years, when she realized how computer science concepts could be applied and utilized to solve real-world problems in so many other different industries, like education and healthcare particularly. With extensive experience as a Java professional and team lead, her will to contribute to large-scale, well-crafted, open-source projects unearthed a strong desire for continuous betterment alongside the best Software Craftspeople and mentors. It is with a multicultural background, a creative drive and a commitment to learning that she recently joined Codurance as a craftswoman.',
    summary: 'A little over four months ago I joined Codurance as an apprentice, eager to learn and sharpen my technical skills in an environment that fosters quality software and continuous improvement. In this talk, I would like to share my experience, and show how a culture of learning, mentorship and collaboration helps you grow 10 times faster, and empowers you with skills you cannot learn from books alone. The apprentice program at Codurance is built around a culture of collaboration with colleagues of diverse experience levels and backgrounds. This helps develop strong communication skills within a team-focused environment. Nothing is set in stone, all points of view are valid and taken into account. During the apprentice program, I was taught by not less than 9 mentors, with diverse experience levels and backgrounds, all condensed in 3 months. The diversity of approaches in group discussions, or pair collaborations provided an invaluable multi-dimensional experience that one can hardly learn alone. And lastly, continuous improvement creates a culture of humbleness and lifelong learning that will benefit you not only in your career, but in every other aspect of your life as well. My intention is to show how valuable a mentorship program can be, and inspire other companies or programs with my experience.'
  }
];
