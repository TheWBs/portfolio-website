import { Fragment } from 'react';
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

const skills = [
  {
    group: 'BI & Visualization',
    items: ['Power BI', 'DAX', 'Power Query', 'Power BI Service', 'Excel', 'KPI reporting'],
  },
  {
    group: 'SQL & Data Modeling',
    items: ['SQL', 'Star schema', 'Data modeling', 'SQL Server', 'PostgreSQL', 'MySQL', 'MariaDB'],
  },
  {
    group: 'Data Engineering / Cloud',
    items: ['ETL/ELT pipelines', 'Microsoft Fabric', 'Dataflows', 'Kafka', 'Spark', 'Airflow', 'BigQuery', 'Docker'],
  },
  {
    group: 'Programming',
    items: ['Python', 'pandas', 'PySpark', 'Scrapy', 'PyMySQL', 'Git', 'GitHub'],
  },
  {
    group: 'Business & Consulting',
    items: ['Requirements clarification', 'Report logic', 'Business rules', 'Client communication', 'Analytical thinking'],
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
    image: asset('assets/projects/cnn/task1-model-comparison.png'),
    imageAlt: 'CNN model comparison chart from image classification project',
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
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
];

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
        JG
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
          <a className="button secondary" href={`mailto:${contact.email}`}>
            Email
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-label="Portfolio focus summary">
        <div className="panel-topline">
          <span>Portfolio focus</span>
          <strong>BI + Data Engineering</strong>
        </div>
        <div className="focus-grid">
          <div>
            <span>Reports</span>
            <strong>Power BI, DAX, KPIs</strong>
          </div>
          <div>
            <span>Models</span>
            <strong>Star schema, SQL, relationships</strong>
          </div>
          <div>
            <span>Pipelines</span>
            <strong>Kafka, Spark, Airflow, Docker</strong>
          </div>
          <div>
            <span>Cloud</span>
            <strong>Fabric, Dataflows, BigQuery</strong>
          </div>
        </div>
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
      <SectionHeading eyebrow="About" title="Practical analytics work, built from the data model up.">
        <p>
          I am a Data Science and Engineering student at Kaunas University of Technology with hands-on
          experience in data engineering, business intelligence, and analytics.
        </p>
      </SectionHeading>
      <div className="body-copy">
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
      <SectionHeading eyebrow="Skills" title="Tools grouped by how recruiters scan data roles." />
      <div className="skill-grid">
        {skills.map((group) => (
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
      <SectionHeading eyebrow="Projects" title="Selected work with evidence from CV and GitHub.">
        <p>
          These are the strongest job-relevant projects from the CV, LinkedIn material, and public GitHub
          repositories.
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
                  <dt>Result / evidence</dt>
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
      <SectionHeading eyebrow="Experience" title="Relevant experience from the CV." />
      <div className="timeline">
        <article className="timeline-item">
          <div>
            <h3>Intern Data Analyst</h3>
            <p>PRODIVI, UAB · May 2026 - July 2026 · Kaunas, Lithuania</p>
          </div>
          <ul>
            <li>Worked on SQL and Power BI-based business intelligence solutions for client reporting projects.</li>
            <li>Designed database structures with ETL logic and improved database, DWH, data model, and relationship structures.</li>
            <li>Created DAX measures, validated calculation logic, and supported Power BI report model improvements.</li>
            <li>Communicated with clients to clarify reporting requirements and data-related questions.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <SectionHeading eyebrow="Education" title="Education and languages." />
      <div className="education-grid">
        <article>
          <h3>Kaunas University of Technology</h3>
          <p>Bachelor of Applied Science, Data Science and Engineering</p>
          <p>2023 - to date</p>
          <p>
            Coursework focused on data engineering, databases, statistical analysis, and machine learning.
          </p>
        </article>
        <article>
          <h3>Languages</h3>
          <p>Lithuanian - native</p>
          <p>English - fluent</p>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="section-label">Contact</p>
        <h2>Open to data analyst, analytics engineer, BI, and junior data engineering roles.</h2>
      </div>
      <div className="contact-card">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
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
        <Skills />
        <Projects />
        <Experience />
        <Education />
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
