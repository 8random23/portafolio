/* ============================================================================
   PORTAFOLIO DE PABLO SAIM ISIDRO CASTILLO
   ----------------------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA CAMBIAR LOS TEXTOS.
   Cambia lo que está entre comillas, guarda el archivo y recarga la página.
   No borres las comas ni las llaves. Si algo falla, vuelve a una copia.
   ========================================================================== */

window.PORTAFOLIO = {

  /* ------------------------------------------------------------------ */
  /* 1. DATOS PERSONALES                                                */
  /* ------------------------------------------------------------------ */
  persona: {
    nombre: "Pablo Saim Isidro Castillo",
    nombreCorto: "Pablo Saim",
    iniciales: "PS",
    marca: "pablo@senati:~$",
    rol: "Ingeniería en Ciberseguridad | SENATI",
    estado: "Disponible para prácticas en ciberseguridad y redes",
    resumen: "Estudiante de Ciberseguridad con formación en redes, sistemas Linux y laboratorios prácticos. Busco sumar a un equipo técnico y aprender desde el primer día.",
    foto: "assets/avatar.svg",
    correo: "saimisidrocastillo@gmail.com",
    telefono: "956936679",
    ubicacion: "Lima, Perú",
    institucion: "SENATI Independencia — Ingeniería en Ciberseguridad"
  },

  /* ------------------------------------------------------------------ */
  /* 2. MENÚ                                                            */
  /* ------------------------------------------------------------------ */
  navegacion: [
    { texto: "Sobre mí", id: "sobre-mi" },
    { texto: "Experiencia", id: "experiencia" },
    { texto: "Habilidades", id: "habilidades" },
    { texto: "Habilidades blandas", id: "blandas" },
    { texto: "Portafolio", id: "proyectos" },
    { texto: "Contacto", id: "contacto" }
  ],

  /* ------------------------------------------------------------------ */
  /* 3. INICIO                                                          */
  /* ------------------------------------------------------------------ */
  hero: {
    terminal: [
      { tipo: "cmd", texto: "whoami" },
      { tipo: "out", texto: "Pablo Saim Isidro Castillo" },
      { tipo: "cmd", texto: "cat perfil.json" },
      { tipo: "out", texto: '{\n  "carrera": "Ingeniería en Ciberseguridad",\n  "ciclo": "5.º ciclo",\n  "sede": "SENATI Independencia",\n  "foco": "Redes · Linux · Pentesting",\n  "busca": "prácticas en redes y seguridad"\n}' }
    ],
    stats: [
      { valor: "5.º", etiqueta: "ciclo SENATI" },
      { valor: "16", etiqueta: "semanas de práctica" },
      { valor: "6", etiqueta: "áreas técnicas" },
      { valor: "2", etiqueta: "proyectos destacados" }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* 4. SOBRE MÍ                                                        */
  /* ------------------------------------------------------------------ */
  sobreMi: {
    parrafos: [
      "Soy estudiante de Ingeniería en Ciberseguridad en SENATI Independencia (Lima). Mi formación combina teoría de redes con laboratorios donde configuro firewalls, VPN y herramientas de monitoreo.",
      "Hago mi formación práctica en soporte técnico y videovigilancia, donde trabajo con equipos reales y atención a usuarios. En mi tiempo de estudio practico en máquinas de Hack The Box y armo laboratorios en VirtualBox, GNS3 y PNETLab."
    ],
    ficha: [
      { etiqueta: "Edad", valor: "20 años" },
      { etiqueta: "Ciclo", valor: "5.º ciclo" },
      { etiqueta: "Sede", valor: "SENATI Independencia" },
      { etiqueta: "Ubicación", valor: "Lima, Perú" },
      { etiqueta: "Disponibilidad", valor: "Prácticas / primer empleo" },
      { etiqueta: "Enfoque", valor: "Redes, Linux y seguridad" }
    ],
    enfoque: [
      {
        icono: "network",
        titulo: "Redes e infraestructura",
        texto: "Direccionamiento IP, VLAN, ACL, cableado estructurado y simulación de topologías."
      },
      {
        icono: "shield",
        titulo: "Seguridad y pentesting",
        texto: "Laboratorios de Hack The Box, auditorías Wi-Fi y análisis de vulnerabilidades en entornos autorizados."
      },
      {
        icono: "tool",
        titulo: "Soporte técnico real",
        texto: "Mantenimiento de CCTV, equipos de cómputo, impresoras y redes en un entorno empresarial."
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* 5. EXPERIENCIA                                                     */
  /* ------------------------------------------------------------------ */
  experiencia: {
    intro: "Mi formación profesional dual en SENATI me permitió aplicar lo aprendido en un entorno real de soporte técnico, redes y videovigilancia.",
    puestos: [
      {
        empresa: "MM Telecomunicaciones y Seguridad del Perú S.R.L.",
        cargo: "Practicante de Soporte Técnico y Videovigilancia",
        area: "Área de Sistemas / Soporte técnico y cableado estructurado",
        periodo: "17 ago 2026 — 05 dic 2026",
        duracion: "16 semanas",
        modalidad: "Formación Profesional Dual — SENATI",
        ubicacion: "Lima, Perú",
        resumen: "Soporte técnico a infraestructura de red, CCTV y equipos de cómputo. Participé en instalaciones de cableado estructurado, montaje y configuración de NVR, mantenimiento preventivo/correctivo y optimización de sistemas Windows.",
        logros: [
          "Instalé cableado estructurado UTP Cat 5e y conectoricé RJ-45 bajo norma T568B, verificando continuidad con tester.",
          "Monté e interconecté un NVR Tiandy, configuré el almacenamiento y formateé el HDD SATA para grabación continua.",
          "Diagnostiqué y corregí fallas de señal en CCTV: reemplazo de balun HD y ajuste de conectores BNC/UTP.",
          "Optimicé equipos Windows con sfc /scannow, limpieza de software y ajustes con WinUtil vía PowerShell.",
          "Realicé mantenimiento preventivo y correctivo de impresoras de red, con limpieza de rodillos y pruebas de impresión.",
          "Verifiqué conectividad y equipos de red (ONT ZTE, firewall Fortinet, switches) para asegurar la disponibilidad del sistema."
        ],
        herramientas: [
          "UTP Cat 5e", "RJ-45 / T568B", "NVR Tiandy", "CCTV", "Balun HD",
          "Windows", "PowerShell", "Fortinet", "ONT ZTE"
        ],
        imagenes: [
          {
            src: "assets/exp-cctv-1.jpg",
            alt: "Evidencia de mantenimiento de CCTV",
            caption: "Revisión y mantenimiento de canales de videovigilancia."
          },
          {
            src: "assets/exp-cctv-2.jpg",
            alt: "Evidencia de soporte técnico en CCTV",
            caption: "Diagnóstico de señal y revisión de equipos de CCTV."
          },
          {
            src: "assets/exp-cctv-3.jpg",
            alt: "Evidencia de infraestructura y soporte",
            caption: "Soporte a infraestructura tecnológica y equipos de red."
          }
        ]
      }
    ],
    formacion: {
      titulo: "Ingeniería en Ciberseguridad",
      institucion: "SENATI — Independencia, Lima",
      periodo: "En curso · 5.º ciclo",
      detalle: "Formación profesional dual con énfasis en redes, seguridad de la información, sistemas Linux y laboratorios prácticos.",
      materias: [
        "Redes y comunicaciones",
        "Seguridad de la información",
        "Sistemas operativos Linux",
        "Firewalls y VPN",
        "Ciberseguridad inalámbrica",
        "Monitoreo y logs"
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  /* 6. HABILIDADES TÉCNICAS                                            */
  /* ------------------------------------------------------------------ */
  habilidades: {
    intro: "Lo que he practicado en clase, en laboratorios y en mis prácticas.",
    items: [
      {
        icono: "shield",
        titulo: "Fundamentos de ciberseguridad",
        texto: "Confidencialidad, integridad y disponibilidad, análisis de vulnerabilidades y buenas prácticas de protección."
      },
      {
        icono: "network",
        titulo: "Redes y infraestructura",
        texto: "Direccionamiento IP, modelo OSI/TCP-IP, VLAN, ACL y simulación en Packet Tracer y GNS3."
      },
      {
        icono: "wifi",
        titulo: "Seguridad en redes inalámbricas",
        texto: "Auditoría WPA2 con la suite Aircrack-ng en modo monitor, usando un adaptador USB compatible."
      },
      {
        icono: "lock",
        titulo: "Firewalls y VPN",
        texto: "Laboratorios con pfSense y FortiGate: NAT, reglas, IPsec y SD-WAN con monitoreo de SLA."
      },
      {
        icono: "terminal",
        titulo: "Linux y pentesting",
        texto: "Línea de comandos en Kali y Ubuntu, enumeración y explotación en entornos controlados de Hack The Box."
      },
      {
        icono: "chart",
        titulo: "Monitoreo y logs",
        texto: "Envío de logs a Wazuh y revisión de eventos en laboratorios de detección."
      }
    ],
    herramientas: [
      "Kali Linux", "Ubuntu", "Nmap", "Wireshark", "Aircrack-ng",
      "pfSense", "FortiGate", "Packet Tracer", "GNS3", "VirtualBox",
      "PNETLab", "Wazuh", "Hack The Box", "PowerShell"
    ]
  },

  /* ------------------------------------------------------------------ */
  /* 7. HABILIDADES BLANDAS                                             */
  /* ------------------------------------------------------------------ */
  blandas: {
    intro: "Aptitudes que aplico en el trabajo diario, en el aula y en los laboratorios.",
    items: [
      { icono: "users", titulo: "Trabajo en equipo", texto: "Colaboro y comparto hallazgos para resolver problemas en conjunto." },
      { icono: "clock", titulo: "Puntualidad", texto: "Cumplo horarios y entregas con disciplina." },
      { icono: "sliders", titulo: "Adaptabilidad", texto: "Me ajusto a nuevos entornos, herramientas y retos." },
      { icono: "check", titulo: "Responsabilidad", texto: "Asumo mis tareas y cuido la calidad del trabajo." },
      { icono: "handshake", titulo: "Respeto", texto: "Mantengo un trato cordial y profesional." },
      { icono: "brain", titulo: "Aprendizaje práctico", texto: "Aprendo haciendo y documentando cada proceso." }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* 8. PORTAFOLIO                                                      */
  /* ------------------------------------------------------------------ */
  proyectos: {
    intro: "Prácticas de laboratorio y auditorías realizadas en entornos propios o autorizados.",
    items: [
      {
        id: "htb-devhub",
        tipo: "Hack The Box · Pentesting",
        titulo: "DevHub: de ejecución remota a root",
        subtitulo: "Máquina Linux · Enumeración, pivote y escalada de privilegios",
        resumen: "Evaluación de seguridad de la máquina DevHub en un laboratorio autorizado de Hack The Box. Documenté el reconocimiento, el acceso inicial mediante un servicio MCP, el pivote a un usuario analyst y la escalada a root.",
        contexto: "DevHub es una máquina Linux de Hack The Box. El objetivo fue enumerar los servicios expuestos, obtener una shell, moverse lateralmente y demostrar la escalada de privilegios hasta root. Todo el trabajo se realizó en un entorno de laboratorio autorizado.",
        ficha: [
          ["Entorno", "Hack The Box · Laboratorio autorizado"],
          ["Sistema", "Linux"],
          ["Rol", "Analista de pentesting"],
          ["Resultado", "Acceso user y root · flags capturadas"]
        ],
        proceso: [
          {
            titulo: "Reconocimiento y conectividad",
            texto: "Verifiqué la conectividad con la instancia, revisé variables y perfiles VPN, y solucioné problemas de túnel antes de iniciar el análisis."
          },
          {
            titulo: "Enumeración de servicios",
            texto: "Ejecuté reconocimiento con Nmap y revisé la aplicación web. Identifiqué un servicio MCP y un proceso Jupyter escuchando solo en localhost."
          },
          {
            titulo: "Acceso inicial",
            texto: "Preparé un listener y aproveché el servicio MCP para obtener ejecución remota. La primera petición falló; tras validar la VPN y el listener, repetí el procedimiento y obtuve una shell como mcp-dev."
          },
          {
            titulo: "Pivote a analyst",
            texto: "Enumeré procesos y puertos locales. Encontré Jupyter ejecutándose como analyst en 127.0.0.1:8888 y extraje el token de los argumentos del proceso para crear un kernel y ejecutar código en ese contexto."
          },
          {
            titulo: "Escalada a root",
            texto: "Leí la credencial de OPSMCP en /home/analyst/.opsmcp_key, interactué con la API interna en 127.0.0.1:5000, obtuve acceso a las claves SSH y confirmé la sesión como root con uid=0."
          }
        ],
        resultados: [
          "Shell inicial como mcp-dev a través del servicio MCP.",
          "Pivote al contexto del usuario analyst mediante Jupyter.",
          "Acceso a la API interna y a las claves SSH del servicio.",
          "Escalada a root confirmada con uid=0 y lectura de root.txt."
        ],
        aprendizajes: [
          "La enumeración de procesos y puertos locales es clave para el pivote.",
          "Documentar los intentos fallidos ayuda a explicar el proceso y a no repetir errores.",
          "La reutilización de credenciales y tokens internos puede romper el aislamiento entre servicios."
        ],
        etiquetas: ["Pentesting", "Linux", "Nmap", "Jupyter", "MCP", "Escalada de privilegios"],
        imagen: "assets/htb-nmap.png",
        galeria: [
          { src: "assets/htb-nmap.png", alt: "Escaneo de puertos con Nmap", caption: "Reconocimiento inicial con Nmap." },
          { src: "assets/htb-shell.png", alt: "Shell remota en la máquina DevHub", caption: "Obtención de la shell inicial como mcp-dev." },
          { src: "assets/htb-discovery.png", alt: "Enumeración de servicios internos", caption: "Descubrimiento del servicio Jupyter en localhost." },
          { src: "assets/htb-jupyter.png", alt: "Ejecución de código en Jupyter", caption: "Pivote al contexto del usuario analyst." }
        ]
      },
      {
        id: "wifi-wpa2",
        tipo: "Auditoría Wi-Fi · Ciberseguridad inalámbrica",
        titulo: "Captura de handshake WPA2 y recuperación de clave",
        subtitulo: "Laboratorio Ciberlab09 · Suite Aircrack-ng",
        resumen: "Auditoría educativa de una red inalámbrica en un laboratorio controlado. Capturé el handshake EAPOL con la suite Aircrack-ng y recuperé la clave mediante un ataque de diccionario, para luego analizar el impacto de una contraseña débil.",
        contexto: "Actividad realizada en el laboratorio Ciberlab09 con una red propia o autorizada. El objetivo fue comprender el flujo de una auditoría Wi-Fi: modo monitor, enumeración de redes, captura del handshake y prueba de diccionario. La técnica se aplicó únicamente con fines educativos y dentro del marco legal. La clave recuperada no se publica en este portafolio.",
        ficha: [
          ["Entorno", "Ciberlab09 · Red de laboratorio"],
          ["Rol", "Analista de seguridad inalámbrica"],
          ["Herramientas", "Aircrack-ng, Kali Linux, adaptador USB"],
          ["Resultado", "Handshake capturado y clave recuperada"]
        ],
        proceso: [
          {
            titulo: "Modo monitor",
            texto: "Puse la interfaz inalámbrica en modo monitor con airmon-ng para capturar todos los paquetes del aire, no solo los dirigidos a mi equipo."
          },
          {
            titulo: "Enumeración de redes",
            texto: "Con airodump-ng identifiqué redes cercanas, BSSID, ESSID, canal, tipo de cifrado y clientes conectados."
          },
          {
            titulo: "Captura dirigida",
            texto: "Fijé el canal y el BSSID de la red objetivo y guardé la captura en un archivo para analizarla."
          },
          {
            titulo: "Handshake EAPOL",
            texto: "Envié paquetes de desautenticación con aireplay-ng para forzar la reconexión de un cliente y capturar el intercambio EAPOL."
          },
          {
            titulo: "Ataque de diccionario",
            texto: "Verifiqué que el handshake estuviera completo y ejecuté aircrack-ng con un diccionario. La clave se recuperó por ser débil."
          }
        ],
        resultados: [
          "Handshake EAPOL capturado correctamente.",
          "Clave de la red recuperada mediante diccionario en el laboratorio.",
          "Evidencia del riesgo de usar contraseñas cortas o predecibles en WPA2-PSK.",
          "Documentación del flujo completo de la auditoría."
        ],
        aprendizajes: [
          "WPA2-PSK depende en gran medida de la fortaleza de la contraseña.",
          "El modo monitor y la captura dirigida son la base de una auditoría Wi-Fi.",
          "La desautenticación acelera la captura del handshake, pero debe usarse solo en redes autorizadas.",
          "Una contraseña larga y aleatoria reduce drásticamente la viabilidad de un ataque de diccionario."
        ],
        recomendaciones: [
          "Usar contraseñas largas, aleatorias y únicas; evitar nombres, fechas o palabras comunes.",
          "Migrar a WPA3 cuando el hardware lo permita y deshabilitar WPS.",
          "Monitorear intentos de desautenticación y equipos desconocidos en la red.",
          "Segmentar la red de invitados y aplicar políticas de acceso."
        ],
        etiquetas: ["Aircrack-ng", "WPA2", "Linux", "Wi-Fi", "Handshake", "Diccionario"],
        imagen: "assets/wifi-handshake.jpg",
        galeria: [
          { src: "assets/wifi-monitor.jpg", alt: "Interfaz inalámbrica en modo monitor", caption: "Configuración de la interfaz en modo monitor." },
          { src: "assets/wifi-scan.jpg", alt: "Escaneo de redes Wi-Fi con airodump-ng", caption: "Enumeración de redes con airodump-ng." },
          { src: "assets/wifi-handshake.jpg", alt: "Handshake EAPOL capturado y comando de aircrack-ng", caption: "Handshake EAPOL capturado y comando de prueba con aircrack-ng." },
          { src: "assets/wifi-deauth.jpg", alt: "Envío de paquetes de desautenticación con aireplay-ng", caption: "Paquetes de desautenticación con aireplay-ng." }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* 9. CONTACTO                                                        */
  /* ------------------------------------------------------------------ */
  contacto: {
    intro: "Disponible para incorporarme como practicante en infraestructura, redes o ciberseguridad.",
    items: [
      {
        icono: "mail",
        etiqueta: "Correo",
        valor: "saimisidrocastillo@gmail.com",
        href: "mailto:saimisidrocastillo@gmail.com",
        copiar: true
      },
      {
        icono: "phone",
        etiqueta: "Teléfono",
        valor: "956936679",
        href: "tel:+51956936679",
        copiar: true
      },
      {
        icono: "pin",
        etiqueta: "Ubicación",
        valor: "Lima, Perú"
      },
      {
        icono: "building",
        etiqueta: "Institución",
        valor: "SENATI Independencia — Ingeniería en Ciberseguridad"
      }
    ],
    cta: {
      texto: "Enviar correo",
      href: "mailto:saimisidrocastillo@gmail.com"
    }
  },

  /* ------------------------------------------------------------------ */
  /* 10. PIE DE PÁGINA                                                  */
  /* ------------------------------------------------------------------ */
  footer: {
    texto: "Diseñado y desarrollado con HTML, CSS y JavaScript.",
    nota: "Portafolio de ciberseguridad y redes · SENATI"
  }

};
