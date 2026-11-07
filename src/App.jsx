import { useState } from 'react';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaPython, FaJava, FaDocker, FaAws, FaDatabase, FaChartBar, FaCertificate,
} from 'react-icons/fa';
import {
  SiSpringboot, SiPytorch, SiGit,
} from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython />, desc: 'Análisis de datos, automatización y prototipos de IA.' },
  { name: 'Java', icon: <FaJava />, desc: 'Desarrollo backend robusto y orientado a objetos.' },
  { name: 'Spring Boot', icon: <SiSpringboot />, desc: 'APIs REST, seguridad JWT y arquitectura por capas.' },
  { name: 'SQL / MySQL', icon: <FaDatabase />, desc: 'Modelado relacional, consultas y CRUD.' },
  { name: 'Power BI', icon: <FaChartBar />, desc: 'Dashboards interactivos y modelos de datos.' },
  { name: 'PyTorch', icon: <SiPytorch />, desc: 'Visión por computador y aprendizaje automático.' },
  { name: 'Docker', icon: <FaDocker />, desc: 'Contenerización y despliegue de aplicaciones.' },
  { name: 'AWS', icon: <FaAws />, desc: 'Servicios cloud y despliegue en EC2.' },
  { name: 'Git / GitHub', icon: <SiGit />, desc: 'Control de versiones y trabajo colaborativo.' },
  { name: 'Power Query', icon: <FaChartBar />, desc: 'Limpieza y transformación de datos.' },
];

const projects = [
  {
    title: 'Vikos Store — Tienda en línea',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    description:
      'Tienda en línea desplegada en AWS con frontend moderno y backend robusto. Incluye catálogo de productos, carrito de compras y gestión de pedidos, con despliegue automatizado en contenedores.',
    highlight: 'E-commerce completo desplegado en producción con HTTPS.',
    link: 'https://github.com/amilkarbolivar/Vikos_store',
    live: 'https://vikosstore.duckdns.org/',
  },
  {
    title: 'Sistema de Inventario Multitenant',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Docker', 'AWS'],
    description:
      'Sistema de gestión de inventario para múltiples establecimientos (multitenant). Backend con Java y Spring Boot, APIs REST seguras con JWT, persistencia con JPA/MySQL, gestión de productos, usuarios, compras, ventas e inventario. Contenerizado con Docker y desplegado en AWS.',
    highlight: 'Arquitectura multitenant con aislamiento por establecimiento.',
    link: 'https://github.com/amilkarbolivar/Inventario',
    frontend: 'https://github.com/amilkarbolivar/Inventario_frontend',
    live: 'https://inventariosupermercado.duckdns.org/',
  },
  {
    title: 'UniMental — Salud Mental Universitaria',
    tech: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    description:
      'Plataforma web full stack con frontend React, API REST Node.js/Express, PostgreSQL y despliegue con Docker Compose en AWS EC2. Incluye foros comunitarios, directorio de servicios de salud, artículos informativos y cuestionarios de autoevaluación con disclaimer profesional.',
    highlight: 'Despliegue completo con HTTPS (Caddy + Let\'s Encrypt) y CI/CD.',
    link: 'https://github.com/amilkarbolivar/web_salud.universitaria',
    live: 'https://saluduniversitaria.duckdns.org',
  },
  {
    title: 'Portafolio Profesional',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Docker', 'AWS'],
    description:
      'Portafolio web moderno con animaciones, sección de proyectos, certificaciones y contacto. Desplegado en AWS con HTTPS automático.',
    highlight: 'Diseño moderno con animaciones 3D y certificaciones SENA.',
    link: 'https://github.com/amilkarbolivar/portafolio',
    live: 'https://portafolioamilkar.duckdns.org',
  },

];

const certifications = [
  {
    title: 'Despliegue de Aplicaciones y Servicios en Contenedores Docker',
    org: 'SENA — Centro de Electricidad, Electrónica y Telecomunicaciones',
    date: 'Octubre 2026 · 48 horas',
    desc: 'Formación en contenerización de aplicaciones con Docker: imágenes, contenedores, redes, volúmenes y despliegue de servicios.',
  },
  {
    title: 'Aplicación de la Inteligencia Artificial en la Integración de Datos',
    org: 'SENA — Centro de Industria y Construcción',
    date: 'Septiembre 2026 · 48 horas',
    desc: 'Integración de datos y aplicación de IA para análisis, identificación de patrones y soporte a la toma de decisiones.',
  },
];

const education = [
  {
    title: 'Ingeniería de Sistemas (en curso)',
    org: 'Universidad de Pamplona',
    date: 'Graduación estimada: 2027',
  },
];

function Section({ id, title, children, delay = 0 }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20 animate-fade-up" style={{ animationDelay: `${delay}ms` }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [contactError, setContactError] = useState('');

  const handleContact = async (e) => {
    e.preventDefault();
    setSending(true);
    setContactError('');
    try {
      const res = await fetch('https://formspree.io/f/mdeevgno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: contact.name, email: contact.email, message: contact.message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Error al enviar');
      }
      setSent(true);
      setContact({ name: '', email: '', message: '' });
    } catch (err) {
      setContactError(err.message || 'No se pudo enviar el mensaje');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Nav */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold text-lg">
            <span className="text-blue-400">Amilkar</span> Bolívar
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            {[
              ['Sobre mí', 'sobre-mi'],
              ['Habilidades', 'habilidades'],
              ['Proyectos', 'proyectos'],
              ['Certificaciones', 'certificaciones'],
              ['Educación', 'educacion'],
              ['Contacto', 'contacto'],
            ].map(([l, id]) => (
              <a key={l} href={`#${id}`} className="hover:text-white transition">
                {l}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-slate-300" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-3 text-sm">
            {[
              ['Sobre mí', 'sobre-mi'],
              ['Habilidades', 'habilidades'],
              ['Proyectos', 'proyectos'],
              ['Certificaciones', 'certificaciones'],
              ['Educación', 'educacion'],
              ['Contacto', 'contacto'],
            ].map(([l, id]) => (
              <a key={l} href={`#${id}`} onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">
                {l}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950" />
        <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-up">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <img
              src="/profile.png"
              alt="Jorge Amilkar Bolívar Mora"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow-xl shadow-blue-500/30 animate-float"
            />
            <div className="text-center md:text-left">
              <p className="text-blue-400 font-medium mb-2 tracking-wide">Hola, soy</p>
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                Jorge Amilkar Bolívar Mora
              </h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-slate-300 mb-2">Desarrollador Full Stack</p>
          <p className="text-slate-400 mb-8">Python, SQL, Java, Spring Boot, Power BI, Docker & AWS</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#proyectos" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition shadow-lg shadow-blue-600/30 hover:-translate-y-1">
              Ver proyectos
            </a>
            <a href="#contacto" className="px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-400 font-semibold transition hover:-translate-y-1">
              Contactar
            </a>
            <a href="/CV-AMILKAR2(2).pdf" download className="px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-400 font-semibold transition hover:-translate-y-1">
              Descargar CV
            </a>
          </div>
          <div className="flex justify-center gap-5 mt-10 text-2xl text-slate-400">
            <a href="https://github.com/amilkarbolivar" target="_blank" rel="noreferrer" className="hover:text-white transition hover:scale-110"><FaGithub /></a>
            <a href="mailto:amilkarbolivar5@gmail.com" className="hover:text-white transition hover:scale-110"><FaEnvelope /></a>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <Section id="sobre-mi" title="Sobre mí" delay={100}>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-slate-300 leading-relaxed space-y-4">
            <p>
              Estudiante de Ingeniería de Sistemas con formación en desarrollo de software, bases de datos,
              integración de datos y herramientas de analítica. Conocimientos en Java, Spring Boot, Python, SQL
              y Power BI, orientados al procesamiento de información, automatización de tareas y construcción
              de soluciones tecnológicas.
            </p>
            <p>
              He desarrollado proyectos académicos y personales relacionados con sistemas de información, gestión
              de datos y visualización de indicadores. Me interesa aplicar técnicas de análisis exploratorio,
              estadística e inteligencia artificial para identificar patrones y apoyar la toma de decisiones
              basada en datos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Ubicación', value: 'Cúcuta, Colombia', icon: <FaMapMarkerAlt /> },
              { label: 'Teléfono', value: '+57 312 337 4341', icon: <FaPhone /> },
              { label: 'Email', value: 'amilkarbolivar5@gmail.com', icon: <FaEnvelope /> },
              { label: 'GitHub', value: 'amilkarbolivar', icon: <FaGithub /> },
            ].map((i) => (
              <div key={i.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 hover:border-blue-500 hover:-translate-y-1 transition">
                <div className="text-blue-400 text-xl mb-2">{i.icon}</div>
                <p className="text-xs text-slate-500">{i.label}</p>
                <p className="text-sm font-medium break-all">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Habilidades */}
      <Section id="habilidades" title="Habilidades técnicas" delay={200}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="card-3d bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-blue-500 group">
              <span className="text-3xl text-blue-400 group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
              <span className="text-sm font-medium text-slate-200">{s.name}</span>
              <span className="text-xs text-slate-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{s.desc}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Proyectos */}
      <Section id="proyectos" title="Proyectos destacados" delay={300}>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="card-3d bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {p.tech[0]}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-1">{p.description}</p>
              <p className="text-blue-300 text-xs italic mb-4">★ {p.highlight}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="space-y-1 self-start">
                <a href={p.link} target="_blank" rel="noreferrer" className="block text-blue-400 text-xs font-mono hover:underline break-all">
                  {p.link}
                </a>
                {p.frontend && (
                  <a href={p.frontend} target="_blank" rel="noreferrer" className="block text-purple-400 text-xs font-mono hover:underline break-all">
                    {p.frontend}
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="block text-cyan-400 text-xs font-mono hover:underline break-all">
                    {p.live}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certificaciones */}
      <Section id="certificaciones" title="Certificaciones" delay={400}>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((c) => (
            <div key={c.title} className="card-3d bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl text-yellow-400"><FaCertificate /></span>
                <h3 className="text-lg font-semibold">{c.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-1">{c.desc}</p>
              <p className="text-xs text-slate-500">{c.org}</p>
              <p className="text-xs text-blue-400 mt-1">{c.date}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-6 text-center">
          Certificados emitidos por el SENA. Verificables en certificados.sena.edu.co
        </p>
      </Section>

      {/* Educación */}
      <Section id="educacion" title="Formación académica" delay={500}>
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
              <h3 className="font-semibold text-lg">{e.title}</h3>
              <p className="text-slate-400">{e.org}</p>
              <p className="text-sm text-blue-400 mt-1">{e.date}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contacto */}
      <Section id="contacto" title="Contacto" delay={600}>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <p className="text-slate-300 mb-6 text-center">¿Tienes una oportunidad o proyecto? Hablemos.</p>
          <form onSubmit={handleContact} className="max-w-xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none text-white"
            />
            <input
              type="email"
              placeholder="Tu email"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none text-white"
            />
            <textarea
              placeholder="Tu mensaje"
              value={contact.message}
              onChange={(e) => setContact({ ...contact, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none text-white resize-none"
            />
            {contactError && <p className="text-red-400 text-sm">{contactError}</p>}
            {sent && <p className="text-green-400 text-sm">¡Mensaje enviado correctamente!</p>}
            <div className="flex justify-center gap-4 flex-wrap">
              <button type="submit" disabled={sending} className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition hover:-translate-y-1 disabled:opacity-60">
                {sending ? 'Enviando...' : 'Enviar mensaje'}
              </button>
              <a href="https://github.com/amilkarbolivar" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-400 font-semibold transition hover:-translate-y-1">
                GitHub
              </a>
            </div>
          </form>
        </div>
      </Section>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Jorge Amilkar Bolívar Mora. Hecho con React + Tailwind.
      </footer>
    </div>
  );
}