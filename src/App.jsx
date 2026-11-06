import { useState } from 'react';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaPython, FaJava, FaDocker, FaAws, FaDatabase, FaChartBar,
} from 'react-icons/fa';
import {
  SiSpringboot, SiPytorch, SiGit,
} from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'SQL / MySQL', icon: <FaDatabase /> },
  { name: 'Power BI', icon: <FaChartBar /> },
  { name: 'PyTorch', icon: <SiPytorch /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Git / GitHub', icon: <SiGit /> },
  { name: 'Power Query', icon: <FaChartBar /> },
];

const projects = [
  {
    title: 'Sistema de Inventario Multitenant',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Docker', 'AWS'],
    description:
      'Sistema de gestión de inventario para múltiples establecimientos con enfoque multitenant. Backend con Java y Spring Boot, APIs REST, persistencia con JPA/MySQL, gestión de productos, usuarios e inventario. Contenerizado con Docker.',
    link: 'https://github.com/amilkarbolivar',
  },
  {
    title: 'Visión por Computador con PyTorch',
    tech: ['Python', 'PyTorch'],
    description:
      'Exploración de un proyecto de visión por computador: revisión de dependencias, configuración del entorno y estructura del proyecto para integrar modelos de aprendizaje automático.',
    link: 'https://github.com/amilkarbolivar',
  },
  {
    title: 'Análisis y Visualización de Datos',
    tech: ['Power BI', 'Power Query', 'Python', 'SQL'],
    description:
      'Limpieza y transformación de datasets, construcción de modelos de datos y dashboards interactivos para analizar indicadores y tendencias.',
    link: 'https://github.com/amilkarbolivar',
  },
  {
    title: 'UniMental — Salud Mental Universitaria',
    tech: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'Docker'],
    description:
      'Plataforma web full stack con frontend React, API REST Node.js/Express, PostgreSQL y despliegue con Docker Compose. Incluye foros, directorio y cuestionarios informativos.',
    link: 'https://github.com/amilkarbolivar/web_salud.universitaria',
  },
];

const education = [
  {
    title: 'Ingeniería de Sistemas (en curso)',
    org: 'Universidad de Pamplona',
    date: 'Graduación estimada: 2027',
  },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-blue-400 font-medium mb-4 tracking-wide">Hola, soy</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Jorge Amilkar Bolívar Mora
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-2">Analista de datos · Desarrollador Full Stack</p>
          <p className="text-slate-400 mb-8">Python, SQL, Java, Spring Boot, Power BI, Docker & AWS</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#proyectos" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition shadow-lg shadow-blue-600/30">
              Ver proyectos
            </a>
            <a href="#contacto" className="px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-400 font-semibold transition">
              Contactar
            </a>
          </div>
          <div className="flex justify-center gap-5 mt-10 text-2xl text-slate-400">
            <a href="https://github.com/amilkarbolivar" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaGithub /></a>
            <a href="mailto:amilkarbolivar5@gmail.com" className="hover:text-white transition"><FaEnvelope /></a>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <Section id="sobre-mi" title="Sobre mí">
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
              <div key={i.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <div className="text-blue-400 text-xl mb-2">{i.icon}</div>
                <p className="text-xs text-slate-500">{i.label}</p>
                <p className="text-sm font-medium break-all">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Habilidades */}
      <Section id="habilidades" title="Habilidades técnicas">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-blue-500 hover:-translate-y-1 transition">
              <span className="text-3xl text-blue-400">{s.icon}</span>
              <span className="text-sm font-medium text-slate-200">{s.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Proyectos */}
      <Section id="proyectos" title="Proyectos destacados">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-400 text-sm font-medium hover:underline">
                Ver en GitHub →
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Educación */}
      <Section id="educacion" title="Formación académica">
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">{e.title}</h3>
              <p className="text-slate-400">{e.org}</p>
              <p className="text-sm text-blue-400 mt-1">{e.date}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contacto */}
      <Section id="contacto" title="Contacto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
          <p className="text-slate-300 mb-6">¿Tienes una oportunidad o proyecto? Hablemos.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:amilkarbolivar5@gmail.com" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition">
              Enviar email
            </a>
            <a href="https://github.com/amilkarbolivar" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-400 font-semibold transition">
              GitHub
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Jorge Amilkar Bolívar Mora. Hecho con React + Tailwind.
      </footer>
    </div>
  );
}