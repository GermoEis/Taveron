const sharedImages = {
  documentWorkflow: "images/dokumenditootlus-launcher.png",
  ocr: "images/ocr-module-sanitized.png",
  smartMeta: "images/smartmeta.png",
  excel: "images/excel-control-blurred.png",
  raimRuudus: "images/raim-ruudus-home.png",
};

export const projectsByLanguage = {
  et: [
    {
      title: "Dokumenditöötluse töölaud",
      type: "Sisemise töövoo automatiseerimine",
      summary: "Ühest vaatest juhitav dokumenditöötluse rakendus.",
      description: "Rakendus ühendab OCR-i, dokumentide jagamise, metaandmete töötlemise ja andmekontrolli üheks töövooks.",
      roleShort: "tööprotsessi kaardistamine, lahenduse ülesehitus ja arendus",
      modules: [
        { name: "OCR", text: "Tuvastab skaneeritud dokumentide teksti ja parandab lehekülgede suunda." },
        { name: "Splittija", text: "Jagab mahuka lähtefaili eraldi dokumentideks." },
        { name: "SmartMeta", text: "Tuvastab metaandmed ja koondab need ülevaatamiseks." },
        { name: "Exceli kontroll", text: "Kontrollib koondatud andmeid ja toob erinevused välja." },
      ],
      image: sharedImages.documentWorkflow,
      imageAlt: "Dokumenditöötluse rakenduse moodulite käivitusvaade",
      gallery: [
        {
          src: sharedImages.documentWorkflow,
          alt: "Dokumenditöötluse rakenduse moodulite käivitusvaade",
          label: "Moodulite käivitusvaade",
        },
        {
          src: sharedImages.ocr,
          alt: "OCR ja pööramise moodul serveriprofiili seadistusega",
          label: "OCR ja pööramine",
        },
        {
          src: sharedImages.smartMeta,
          alt: "SmartMeta metaandmete tuvastamise ja kontrolli vaade",
          label: "SmartMeta metaandmed",
        },
        {
          src: sharedImages.excel,
          alt: "Exceli kontrolli moodul",
          label: "Exceli kontroll",
        },
      ],
      problem:
        "Eri dokumenditöötluse mooduleid tuli käivitada ja jälgida eraldi.",
      system:
        "Sidusin moodulid ühise käivitusvaate, faililoogika ja kontrollireeglitega.",
      simplified:
        "Kindlad tulemused liiguvad edasi. Ebaselged andmed jäävad kasutajale kontrollida.",
      role:
        "Kaardistasin töö etapid, sidusin moodulid kokku ning ehitasin reeglid, logid ja kontrollpunktid.",
      technologies: ["Python", "OCR", "SmartMeta", "Excel", "XML", "PostgreSQL", "SQL"],
    },
    {
      title: "Kontopildi sorteerija",
      type: "Sisemine failitöötluse automatiseerimine",
      summary: "Windowsi tööriist kontopiltide tuvastamiseks ja sorteerimiseks.",
      description: "Rakendus loeb pildilt konto- või kliendinumbri, kontrollib seda PostgreSQL-ist ja liigutab faili sobivasse kausta. Ebaselge vaste jääb kasutajale üle vaadata.",
      roleShort: "otsustusreeglid, kasutajaliides ja rakenduse arendus",
      visualLabel: "Fail → tuvastus → kontroll → õige kaust",
      problem:
        "Iga fail tuli avada, number lugeda, andmebaasist kontrollida ja õigesse kausta tõsta.",
      system:
        "Rakendus loeb numbri, kontrollib seda PostgreSQL-ist ja valib faili sihtkausta.",
      simplified:
        "Kindel vaste liigub automaatselt. Ebaselge jääb kasutajale kontrollida.",
      role:
        "Kaardistasin otsustusreeglid ning ehitasin kasutajaliidese, kaustajälgimise, AI-tuvastuse ja andmekontrolli.",
      technologies: ["C#", ".NET 8", "WPF", "AI-nägemine", "PostgreSQL"],
    },
    {
      title: "Räim Ruudus",
      type: "Ettevõtte veeb ja iseteeninduslik sisuhaldus",
      summary: "Reacti veebileht koos sisuhaldusega.",
      description: "Ehitasin veebilehe, kus omanik saab admin-vaates muuta menüüd, lahtiolekuaegu ja teateid.",
      roleShort: "lahenduse kavandamine, arendus ja kasutuselevõtt",
      image: sharedImages.raimRuudus,
      imageAlt: "Räim Ruudus veebilehe avaleht",
      problem:
        "Menüü ja teated muutusid sageli, kuid iga uuendus sõltus arendajast.",
      system:
        "Ehitasin Reacti veebilehe koos admin-vaate ja Supabase'i sisuhaldusega.",
      simplified:
        "Omanik saab menüüd ja teateid lähtekoodi muutmata uuendada.",
      role:
        "Tegin avaliku ja admin-vaate, sisuhalduse ühenduse ning seadistasin avaldamise, domeeni, SEO ja analüütika.",
      technologies: ["React", "Vite", "Supabase", "GitHub Pages", "SEO"],
      liveUrl: "https://www.raimruudus.ee/",
    },
  ],
  en: [
    {
      title: "Document Processing Workbench",
      type: "Internal workflow automation",
      summary: "A document-processing application controlled from a single interface.",
      description: "The application connects OCR, document splitting, metadata extraction and data validation into one workflow.",
      roleShort: "workflow mapping, solution design and development",
      modules: [
        { name: "OCR", text: "Recognises text in scanned documents and corrects page orientation." },
        { name: "Splitter", text: "Separates a large source file into individual documents." },
        { name: "SmartMeta", text: "Identifies metadata and brings it together for review." },
        { name: "Excel validation", text: "Checks the collected data and highlights differences." },
      ],
      image: sharedImages.documentWorkflow,
      imageAlt: "Launcher view for the document processing application",
      gallery: [
        {
          src: sharedImages.documentWorkflow,
          alt: "Launcher view for the document processing application",
          label: "Module launcher",
        },
        {
          src: sharedImages.ocr,
          alt: "OCR and rotation module with server profile settings",
          label: "OCR and rotation",
        },
        {
          src: sharedImages.smartMeta,
          alt: "SmartMeta metadata recognition and validation view",
          label: "SmartMeta metadata",
        },
        {
          src: sharedImages.excel,
          alt: "Excel validation module",
          label: "Excel validation",
        },
      ],
      problem:
        "The document-processing modules had to be started and tracked separately.",
      system:
        "I connected them through a shared launcher, file routing and validation rules.",
      simplified:
        "Clear results continue automatically; uncertain data is left for review.",
      role:
        "I mapped the stages, connected the modules and built the rules, logs and checkpoints.",
      technologies: ["Python", "OCR", "SmartMeta", "Excel", "XML", "PostgreSQL", "SQL"],
    },
    {
      title: "Account image sorter",
      type: "Internal file-processing automation",
      summary: "A Windows tool for identifying and sorting account images.",
      description: "The application reads an account or customer number from an image, checks it against PostgreSQL and moves the file to the matching folder. Uncertain matches are left for review.",
      roleShort: "decision rules, user interface and application development",
      visualLabel: "File → recognition → validation → correct folder",
      problem:
        "Each file had to be opened, read, checked against the database and moved by hand.",
      system:
        "The application reads the number, checks it against PostgreSQL and selects the destination folder.",
      simplified:
        "A confident match moves automatically; an uncertain one is left for review.",
      role:
        "I defined the decision rules and built the interface, folder monitoring, AI extraction and data validation.",
      technologies: ["C#", ".NET 8", "WPF", "AI vision", "PostgreSQL"],
    },
    {
      title: "Räim Ruudus",
      type: "Business website with self-service content management",
      summary: "A React website with an admin interface.",
      description: "I built a website where the owner can update menus, opening hours and notices through an admin view.",
      roleShort: "solution design, development and deployment",
      image: sharedImages.raimRuudus,
      imageAlt: "Räim Ruudus website home page",
      problem:
        "Menus and notices changed often, but every update depended on a developer.",
      system:
        "I built a React website with an admin view and Supabase content management.",
      simplified:
        "The owner can update menus and notices without editing the code.",
      role:
        "I built the public and admin views, connected content management, and configured deployment, the domain, SEO and analytics.",
      technologies: ["React", "Vite", "Supabase", "GitHub Pages", "SEO"],
      liveUrl: "https://www.raimruudus.ee/",
    },
  ],
};

export const projects = projectsByLanguage.et;
