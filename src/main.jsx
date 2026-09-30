import { Fragment, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Database } from '@phosphor-icons/react';
import '@fontsource-variable/newsreader';
import '@fontsource-variable/jetbrains-mono';
import './styles.css';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const contact = {
  email: 'jokubas.grieze@gmail.com',
  phone: '+37062191539',
  linkedin: 'https://www.linkedin.com/in/jokubas-grieze',
  github: 'https://github.com/TheWBs',
  cv: asset('assets/cv/jokubas-grieze-cv.pdf'),
};

const logos = {
  prodivi: asset('assets/logos/prodivi-logo.svg'),
  ktu: asset('assets/logos/ktu-logo.svg'),
  kasp: asset('assets/logos/kasp-logo.svg'),
};

const profilePhoto = asset('assets/profile/profile.jpg');

const hardSkills = [
  {
    group: 'Programming & Query',
    items: ['Python', 'SQL'],
  },
  {
    group: 'Data Engineering',
    items: ['Microsoft Fabric', 'Apache Kafka', 'Apache Spark', 'Apache Airflow', 'ETL/ELT pipelines', 'Data modeling'],
  },
  {
    group: 'Analytics & Business Intelligence',
    items: ['Power BI', 'DAX', 'Power Query', 'Power BI Service', 'Excel'],
  },
  {
    group: 'Databases & Warehousing',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MariaDB', 'Google BigQuery'],
  },
  {
    group: 'Data Processing',
    items: ['pandas', 'PySpark'],
  },
  {
    group: 'Infrastructure & Version Control',
    items: ['Docker', 'Docker Compose', 'Git', 'GitHub'],
  },
];

const certifications = [
  {
    issuer: 'Microsoft',
    name: 'Microsoft Certified: Fabric Data Engineer Associate',
    issued: 'August 2026',
    identifier: 'DP-700',
    description:
      'Microsoft certification covering data ingestion, transformation, orchestration and monitoring in Microsoft Fabric.',
    url: null,
  },
  {
    issuer: 'Microsoft Applied Skills',
    name: 'Implement a Real-Time Intelligence solution with Microsoft Fabric',
    issued: 'August 2026',
    identifier: null,
    description:
      'Hands-on credential focused on building and analyzing real-time data solutions in Microsoft Fabric.',
    url: null,
  },
  {
    issuer: 'Databricks',
    name: 'Databricks Fundamentals Accreditation',
    issued: 'July 2026',
    identifier: null,
    description:
      'Foundational accreditation covering the Databricks Lakehouse Platform and core data concepts.',
    url: null,
  },
];

const softSkills = [
  {
    name: 'Analytical thinking',
    evidence:
      'At Prodivi, I analyzed database structures, model relationships, and calculation logic to support reliable reporting.',
  },
  {
    name: 'Communication',
    evidence:
      'I clarified reporting requirements with clients at Prodivi and adapt difficult explanations to each student as a math tutor.',
  },
  {
    name: 'Problem-solving',
    evidence:
      'In my portfolio projects, I turn raw datasets and live event streams into structured pipelines, models, dashboards, and searchable outputs.',
  },
  {
    name: 'Curiosity and learning',
    evidence:
      'Jolita Vekteriene’s recommendation notes that I asked thoughtful questions and actively explored both analytics and data engineering concepts.',
  },
  {
    name: 'Teamwork and responsibility',
    evidence:
      'Serving in KASP requires working as part of a unit, taking responsibility for assigned duties, and supporting the team during training.',
  },
  {
    name: 'Discipline and resilience',
    evidence:
      'I continue to develop both through military training and service as a volunteer soldier in KASP.',
  },
];

const projects = [
  {
    name: 'AVAX Streaming Data Pipeline',
    type: 'Real-time data engineering pipeline',
    emphasis: 'engineering',
    repo: 'https://github.com/TheWBs/avax-streaming-data-pipeline',
    image: asset('assets/projects/avax/architecture-diagram.svg'),
    imageAlt: 'Architecture diagram for AVAX streaming data pipeline',
    problem:
      'Ingest live Binance AVAXUSDT trades and transform streaming market events into analytics-ready aggregates.',
    built:
      'Built a containerized pipeline from Binance WebSocket to Kafka, Spark Structured Streaming, Airflow rollups, parquet minute aggregates, and BigQuery daily analytics.',
    tools: ['Python', 'Kafka', 'Spark', 'Airflow', 'BigQuery', 'Docker Compose'],
    result:
      'The repo includes runnable services, a documented architecture, minute-level OHLC metrics, and screenshots of pipeline status, Kafka messages, Spark output, and BigQuery results.',
  },
  {
    name: 'News Ingestion & Semantic Search Pipeline',
    type: 'ETL and semantic retrieval pipeline',
    emphasis: 'engineering',
    repo: 'https://github.com/TheWBs/news-ingestion-search-pipeline',
    image: null,
    imageAlt: '',
    problem:
      'Design a production-style workflow for crawling, processing, embedding, storing, and searching news articles.',
    built:
      'Implemented a Dockerized pipeline with Scrapy crawling, URL queue management, MariaDB raw storage, text cleaning, chunking, embedding generation, and semantic search.',
    tools: ['Python', 'Docker', 'Scrapy', 'MariaDB', 'PyMySQL', 'Vector embeddings'],
    result:
      'The README documents queue-driven ingestion, idempotent crawling, scalable batch processing, and use in AI-based software for misinformation detection and citation support.',
  },
  {
    name: 'NYC FHV Trips Power BI Dashboard',
    type: 'Business intelligence dashboard',
    emphasis: 'analytics',
    repo: 'https://github.com/TheWBs/nyc-fhv-trips-power-bi-dashboard',
    image: asset('assets/projects/nyc-fhv/zone-overview.png'),
    imageAlt: 'Power BI zone overview dashboard for NYC for-hire vehicle trip analysis',
    problem:
      'Turn raw NYC high-volume for-hire vehicle trip records into a practical report for analyzing activity, fares, zones, and driver earnings.',
    built:
      'Built a Power BI report with a star-schema model, DAX measures, dynamic metric selection, KPI cards, trend views, company comparisons, map visuals, and role-level filtering for Uber/Lyft views.',
    tools: ['Power BI', 'DAX', 'Power Query', 'Data modeling', 'Dataflow Gen-1'],
    result:
      'The repository documents three report pages, 25 DAX measures, company-specific views, and a reproducible PBIX workflow using public NYC TLC data.',
  },
  {
    name: 'CNN Image Classification',
    type: 'Reproducible machine learning experiments',
    repo: 'https://github.com/TheWBs/cnn-image-classification',
    image: asset('assets/projects/cnn/classification-workflow.svg'),
    imageAlt: 'CNN image classification workflow with input images, feature maps, and class probabilities',
    problem:
      'Compare image-classification approaches and understand the impact of architecture choice, transfer learning, and dataset size.',
    built:
      'Created reproducible training pipelines and notebooks for a fashion-subset CNN benchmark and a multi-source flower classifier with augmentation and transfer learning.',
    tools: ['TensorFlow', 'Keras', 'Python', 'pandas', 'Matplotlib', 'Scikit-learn'],
    result:
      'Documented benchmark results include balanced accuracy of 0.9574 on the fashion subset and test accuracy of 0.8542 for the flower classification experiment.',
  },
];

const navItems = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Certifications', '#certifications'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Recommendation', '#recommendation'],
  ['Contact', '#contact'],
];

async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through for browsers that expose Clipboard API but block access.
    }
  }

  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand('copy');
  document.body.removeChild(field);
  if (!copied) {
    throw new Error('Unable to copy email address');
  }
}

function ArrowIcon() {
  return <ArrowUpRight aria-hidden="true" className="icon" weight="bold" />;
}

function Header() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const sections = ['about', 'experience', 'certifications', 'projects', 'skills', 'education', 'recommendation', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const updateActiveSection = () => {
      if (window.scrollY < window.innerHeight * 0.25) {
        setActiveSection('top');
        return;
      }

      const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atPageEnd) {
        setActiveSection('contact');
        return;
      }

      const scanLine = window.innerHeight * 0.35;
      const currentSection = sections.filter((section) => section.getBoundingClientRect().top <= scanLine).at(-1);
      if (currentSection) setActiveSection(currentSection.id);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Jokūbas Griežė home">
        {'<JG/>'}
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={() => setActiveSection(href.slice(1))}
            className={activeSection === href.slice(1) ? 'active' : undefined}
            aria-current={activeSection === href.slice(1) ? 'location' : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
      <a className="header-link" href={contact.cv} target="_blank" rel="noopener noreferrer">
        Open CV
      </a>
    </header>
  );
}

function Hero() {
  const [emailStatus, setEmailStatus] = useState('Copy email');

  const handleEmailCopy = async () => {
    await copyToClipboard(contact.email);
    setEmailStatus('Email copied');
    window.setTimeout(() => setEmailStatus('Copy email'), 5000);
  };

  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <h1>Jokūbas Griežė</h1>
        <p className="role">Data Engineer | Data Analytics &amp; BI</p>
        <p className="hero-text">
          I build reliable data pipelines, data models and analytics solutions with Python, SQL, Microsoft
          Fabric and Power BI, turning raw data into systems businesses can trust and use.
        </p>
        <a className="hero-credential" href="#certifications">
          <span>Microsoft Certified</span>
          Fabric Data Engineer Associate (DP-700)
          <ArrowIcon />
        </a>
        <div className="hero-actions" aria-label="Primary contact links">
          <a className="button primary" href={contact.cv} target="_blank" rel="noopener noreferrer">
            Open CV <ArrowIcon />
          </a>
          <a className="button secondary" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="button secondary" href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <button className="button secondary" type="button" onClick={handleEmailCopy}>
            {emailStatus}
          </button>
        </div>
        <p className="copy-status" aria-live="polite">
          {emailStatus === 'Email copied' ? `${contact.email} copied to clipboard` : ''}
        </p>
      </div>
      <div className="hero-side">
        <figure className="profile-card">
          <img src={profilePhoto} alt="Jokūbas Griežė profile portrait" loading="eager" />
        </figure>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-intro">{children}</div> : null}
    </div>
  );
}

function About() {
  return (
    <section className="section split" id="about">
      <SectionHeading eyebrow="About" title="Summary about me." />
      <div className="body-copy">
        <p>
          Data Science and Engineering student at Kaunas University of Technology and Microsoft Certified
          Fabric Data Engineer Associate (DP-700). Currently working as a Data Engineer in a stealth startup,
          developing a synthetic data generation platform and its supporting data pipelines.
        </p>
        <p>
          I have hands-on experience with Python, SQL, Microsoft Fabric, Power BI, DAX, data modeling,
          ETL/ELT and data warehousing. I focus on building reliable data systems while also turning data
          into useful analytics and business insights.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading eyebrow="Skills" title="Hard skills." />
      <div className="skill-grid">
        {hardSkills.map((group) => (
          <article className="skill-card" key={group.group}>
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="soft-skills">
        <div className="soft-skills-heading">
          <p>Applied strengths</p>
          <h3>Soft skills.</h3>
        </div>
        <ol className="soft-skill-list">
          {softSkills.map((skill) => (
            <li key={skill.name}>
              <strong>{skill.name}</strong>
              <p>{skill.evidence}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectVisual({ project }) {
  if (!project.image) {
    return (
      <div className="pipeline-visual" aria-label="Pipeline flow visualization">
        {['Crawl', 'Store', 'Clean', 'Embed', 'Search'].map((step, index) => (
          <Fragment key={step}>
            <span>{step}</span>
            {index < 4 ? <i aria-hidden="true" /> : null}
          </Fragment>
        ))}
      </div>
    );
  }

  return <img src={project.image} alt={project.imageAlt} loading="eager" />;
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeading eyebrow="Projects" title="Selected data engineering and analytics projects.">
        <p>
          Projects that show how I turn raw data into reliable pipelines, models, dashboards, and analysis.
        </p>
      </SectionHeading>
      <div className="project-list">
        {projects.map((project) => (
          <article className={`project-card project-card--${project.emphasis || 'additional'}`} key={project.name}>
            <div className="project-media">
              <ProjectVisual project={project} />
            </div>
            <div className="project-content">
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <dl>
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>What I built</dt>
                  <dd>{project.built}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{project.result}</dd>
                </div>
              </dl>
              <div className="tool-list" aria-label={`Tools used for ${project.name}`}>
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">
                View repository <ArrowIcon />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section split" id="experience">
      <SectionHeading eyebrow="Experience" title="Relevant experience." />
      <div className="experience-content">
        <div className="technical-experience">
          <article className="timeline-item timeline-item--featured">
            <div className="timeline-heading">
              <LogoBadge icon={Database} alt="Data Engineering role" tone="dark" />
              <div>
                <h3>Data Engineer</h3>
                <p>Stealth Startup · July 2026 – Present</p>
              </div>
            </div>
            <ul>
              <li>Developing a synthetic data platform that preserves dataset structure and statistical relationships.</li>
              <li>Building data ingestion, profiling and transformation pipelines for structured data.</li>
              <li>Designing schema inference and semantic column classification logic.</li>
              <li>Implementing privacy safeguards and data quality validation for BI, AI and testing use cases.</li>
            </ul>
          </article>
          <article className="timeline-item timeline-item--technical">
          <div className="timeline-heading">
            <LogoBadge src={logos.prodivi} alt="PRODIVI logo" tone="dark" />
            <div>
                <h3>Data Analyst Intern</h3>
                <p>PRODIVI, UAB · May 2026 – July 2026 · Kaunas, Lithuania</p>
            </div>
          </div>
          <ul>
              <li>Worked on SQL and Power BI business intelligence solutions for client projects.</li>
              <li>Designed and improved database and DWH structures, data models and ETL logic.</li>
              <li>Built and validated DAX measures, relationships and reporting logic.</li>
              <li>Worked with clients to clarify reporting requirements and data definitions.</li>
          </ul>
        </article>
        </div>
        <div className="additional-experience">
          <div className="additional-experience-heading">
            <p>Additional Experience</p>
          </div>
          <article className="additional-experience-item">
          <div className="timeline-heading">
            <LogoBadge src={logos.kasp} alt="KASP logo" />
            <div>
              <h3>Infantry Soldier</h3>
                <p>KASP · June 2025 – Present · Lithuanian National Defence Volunteer Forces</p>
            </div>
          </div>
          <p>
              Volunteer service developing teamwork, discipline, responsibility and resilience through military
              training and service.
          </p>
        </article>
          <article className="additional-experience-item">
          <div className="timeline-heading">
            <LogoBadge text="π" alt="Mathematics tutor" />
            <div>
              <h3>Math Tutor</h3>
                <p>Self-employed · November 2022 – May 2026</p>
            </div>
          </div>
          <p>
              Helping students understand complex concepts through clear explanations, analytical thinking and
              practical problem-solving.
          </p>
        </article>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section certifications-section" id="certifications">
      <SectionHeading eyebrow="Certifications" title="Verified foundations for modern data platforms.">
        <p>Credentials in Microsoft Fabric data engineering, real-time intelligence and Databricks fundamentals.</p>
      </SectionHeading>
      <div className="certification-list">
        {certifications.map((certification, index) => (
          <article className={index === 0 ? 'certification-card certification-card--featured' : 'certification-card'} key={certification.name}>
            <div className="certification-meta">
              <span>{certification.issuer}</span>
              <span>{certification.issued}</span>
            </div>
            <h3>{certification.name}</h3>
            {certification.identifier ? <p className="certification-id">Identifier: {certification.identifier}</p> : null}
            <p>{certification.description}</p>
            {certification.url ? (
              <a className="text-link" href={certification.url} target="_blank" rel="noopener noreferrer">
                See credential <ArrowIcon />
              </a>
            ) : null}
          </article>
        ))}
      </div>
      <a className="certifications-profile-link text-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
        View licenses and certifications on LinkedIn <ArrowIcon />
      </a>
    </section>
  );
}

function LogoBadge({ src, alt, text, icon: Icon, tone = 'light' }) {
  return (
    <span className={`logo-badge ${tone === 'dark' ? 'logo-badge-dark' : ''}`} aria-label={alt}>
      {src ? <img src={src} alt={alt} loading="eager" /> : Icon ? <Icon aria-hidden="true" weight="duotone" /> : <strong>{text}</strong>}
    </span>
  );
}

function Recommendation() {
  return (
    <section className="section recommendation-section" id="recommendation">
      <SectionHeading eyebrow="Recommendation" title="Recommendations." />
      <figure className="quote-card">
        <blockquote>
          <p>
            “I had the opportunity to work with Jokūbas during his Data Analyst internship at Prodivi. He
            showed strong motivation, curiosity and a responsible attitude toward his work. During the
            internship, he worked with SQL, Power BI, DAX, data models and reporting logic, while also
            contributing to analysis and documentation of data flows and business rules.
          </p>
          <p>
            Jokūbas was eager to learn, asked thoughtful questions and showed a genuine interest in
            understanding both data analytics and data engineering concepts. I believe he has a strong
            foundation for roles in data analytics, BI or data engineering, and would be a valuable addition
            to a team that values curiosity, learning and analytical thinking.”
          </p>
        </blockquote>
        <figcaption>
          <LogoBadge src={logos.prodivi} alt="PRODIVI logo" tone="dark" />
          <div>
            <strong>Jolita Vekteriene</strong>
            <span>Human Resources Manager at Prodivi, UAB · July 9, 2026</span>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <SectionHeading eyebrow="Education" title="Education and languages." />
      <div className="education-grid">
        <article>
          <div className="education-heading">
            <LogoBadge src={logos.ktu} alt="KTU logo" />
            <h3>Kaunas University of Technology</h3>
          </div>
          <p className="degree">
            <strong>Bachelor’s in Data Science and Engineering</strong>
          </p>
          <p>2023 – Present</p>
          <p>Coursework in data engineering, analytics, databases, statistics and machine learning.</p>
        </article>
        <article className="language-card">
          <h3>Languages</h3>
          <p>Lithuanian – Native</p>
          <p>English – Fluent</p>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  const [emailStatus, setEmailStatus] = useState('Copy email');

  const handleEmailCopy = async () => {
    await copyToClipboard(contact.email);
    setEmailStatus('Email copied');
    window.setTimeout(() => setEmailStatus('Copy email'), 5000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="section-label">Contact</p>
        <h2>Open to Data Engineering, Analytics Engineering, Data Analyst and BI opportunities.</h2>
      </div>
      <div className="contact-card">
        <button type="button" onClick={handleEmailCopy}>
          {emailStatus === 'Email copied' ? 'Email copied' : contact.email}
        </button>
        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn profile
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub profile
        </a>
        <a href={contact.cv} target="_blank" rel="noopener noreferrer">
          Open CV
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <Skills />
        <Education />
        <Recommendation />
        <Contact />
      </main>
      <footer>
        <span>© 2026 Jokūbas Griežė</span>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
