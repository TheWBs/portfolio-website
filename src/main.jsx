import { Fragment, useState } from 'react';
import { createRoot } from 'react-dom/client';
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

const profilePhoto = asset('assets/profile/profile.png');

const hardSkills = [
  {
    group: 'Languages',
    items: ['Python', 'SQL', 'DAX', 'C++', 'C#'],
  },
  {
    group: 'Data Engineering',
    items: ['Kafka', 'Spark', 'Airflow', 'ETL/ELT pipelines', 'Data modeling'],
  },
  {
    group: 'Business Intelligence',
    items: ['Power BI', 'DAX', 'Power Query', 'Power BI Service', 'Excel'],
  },
  {
    group: 'Databases',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MariaDB'],
  },
  {
    group: 'Cloud & Infrastructure',
    items: ['Google Cloud (BigQuery)', 'Microsoft Power Platform', 'Microsoft Fabric', 'Dataflows', 'Docker', 'Docker Compose'],
  },
  {
    group: 'Data Processing',
    items: ['pandas', 'PySpark', 'Power Query'],
  },
  {
    group: 'Version Control',
    items: ['Git', 'GitHub'],
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
    name: 'NYC FHV Trips Power BI Dashboard',
    type: 'Business intelligence dashboard',
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
    name: 'AVAX Streaming Data Pipeline',
    type: 'Real-time data engineering pipeline',
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
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Recommendation', '#recommendation'],
  ['Contact', '#contact'],
];

function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  document.execCommand('copy');
  document.body.removeChild(field);
  return Promise.resolve();
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Jokūbas Griežė home">
        {'<JG/>'}
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-link" href={contact.cv} target="_blank" rel="noreferrer">
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
    window.setTimeout(() => setEmailStatus('Copy email'), 2200);
  };

  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <h1>Jokūbas Griežė</h1>
        <p className="role">Junior Data Engineer | Data Analyst</p>
        <p className="hero-text">
          I build practical analytics and data-engineering work: SQL models, Power BI reports, ETL logic,
          Microsoft Fabric workflows, and data pipelines that make business data clearer and easier to use.
        </p>
        <div className="hero-actions" aria-label="Primary contact links">
          <a className="button primary" href={contact.cv} target="_blank" rel="noreferrer">
            Download CV <ArrowIcon />
          </a>
          <a className="button secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button secondary" href={contact.github} target="_blank" rel="noreferrer">
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
          I am a Data Science and Engineering student at Kaunas University of Technology with hands-on
          experience in data engineering, business intelligence, and analytics.
        </p>
        <p>
          During my Data Analyst internship at Prodivi, I worked with SQL, Power BI, DAX, data models,
          reporting logic, ETL logic, Microsoft Fabric, and Power BI Service workflows. I helped analyze
          database structures, improve model relationships, validate calculations, and clarify reporting
          requirements.
        </p>
        <p>
          I am especially interested in analytics engineering, data warehousing, reliable reporting
          systems, and practical use of LLMs in business and technical workflows.
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
          {softSkills.map((skill, index) => (
            <li key={skill.name}>
              <span className="soft-skill-index">{String(index + 1).padStart(2, '0')}</span>
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
    // No screenshot available in the source repository; this code-native pipeline visual keeps the card useful without adding a visible disclaimer.
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
          <article className="project-card" key={project.name}>
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
              <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">
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
      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-heading">
            <LogoBadge src={logos.prodivi} alt="PRODIVI logo" tone="dark" />
            <div>
              <h3>Intern Data Analyst</h3>
              <p>PRODIVI, UAB · May 2026 - July 2026 · Kaunas, Lithuania</p>
            </div>
          </div>
          <ul>
            <li>Worked on SQL and Power BI-based business intelligence solutions for client reporting projects.</li>
            <li>Designed database structures with ETL logic and improved database, DWH, data model, and relationship structures.</li>
            <li>Created DAX measures, validated calculation logic, and supported Power BI report model improvements.</li>
            <li>Communicated with clients to clarify reporting requirements and data-related questions.</li>
          </ul>
        </article>
        <article className="timeline-item">
          <div className="timeline-heading">
            <LogoBadge src={logos.kasp} alt="KASP logo" />
            <div>
              <h3>Infantry Soldier</h3>
              <p>KASP · Jun 2025 - Present · Lithuanian National Defence Volunteer Forces</p>
            </div>
          </div>
          <p>
            Volunteer Soldier — Lithuanian National Defence Volunteer Forces (KASP). Serving as a volunteer in
            the Lithuanian National Defence Volunteer Forces, developing discipline, teamwork, responsibility
            and resilience through military training and service.
          </p>
        </article>
        <article className="timeline-item">
          <div className="timeline-heading">
            <LogoBadge text="π" alt="Mathematics tutor" />
            <div>
              <h3>Math Tutor</h3>
              <p>Self-employed · Nov 2022 - Present</p>
            </div>
          </div>
          <p>
            With a strong background in mathematics, I help students understand difficult concepts through
            clear explanations, logical thinking and practical problem-solving.
          </p>
        </article>
      </div>
    </section>
  );
}

function LogoBadge({ src, alt, text, tone = 'light' }) {
  return (
    <span className={`logo-badge ${tone === 'dark' ? 'logo-badge-dark' : ''}`} aria-label={alt}>
      {src ? <img src={src} alt={alt} loading="eager" /> : <strong>{text}</strong>}
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
            Bachelor of Applied Science, <strong>Data Science and Engineering</strong>
          </p>
          <p>2023 - to date</p>
          <p>
            Coursework focused on data engineering, data analytics, databases, statistical analysis, and machine learning.
          </p>
        </article>
        <article className="language-card">
          <h3>Languages</h3>
          <p>Lithuanian - native</p>
          <p>English - fluent</p>
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
    window.setTimeout(() => setEmailStatus('Copy email'), 2200);
  };

  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="section-label">Contact</p>
        <h2>Open to data analyst, analytics engineer, BI, and junior data engineering roles.</h2>
      </div>
      <div className="contact-card">
        <button type="button" onClick={handleEmailCopy}>
          {emailStatus === 'Email copied' ? 'Email copied' : contact.email}
        </button>
        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn profile
        </a>
        <a href={contact.github} target="_blank" rel="noreferrer">
          GitHub profile
        </a>
        <a href={contact.cv} target="_blank" rel="noreferrer">
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
