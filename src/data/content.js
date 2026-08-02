export const base = import.meta.env.BASE_URL;
export const certificateUrl = `${base}sertifikaat.pdf`;

export const siteContent = {
  et: {
    meta: {
      title: "Tarkvaraarendaja | Germo Eismann",
      description: "Teen ettevõtetele rätseplahendusi tööde jaoks, mida olemasolev tarkvara ei lahenda piisavalt hästi.",
    },
    brandSubtitle: "Tarkvaraarendaja",
    nav: [
      { href: "#minust", label: "Minust" },
      { href: "#projektid", label: "Projektid" },
      { href: "#lahendused", label: "Mida ma ehitan" },
      { href: "#tooviis", label: "Kuidas ma töötan" },
      { href: "#kontakt", label: "Kontakt" },
    ],
    hero: {
      eyebrow: "Tarkvaraarendaja",
      lead: "Teen ettevõtetele rätseplahendusi tööde jaoks, mida olemasolev tarkvara ei lahenda piisavalt hästi.",
    },
    about: {
      title: "Minust",
      paragraphs: [
        "Enamik minu projekte algab korduva käsitöö märkamisest: faile liigutatakse, andmeid võrreldakse või samu otsuseid tehakse ikka ja jälle.",
        "Vaatan koos kliendiga läbi, kuidas töö praegu käib ja milline osa sellest vajab paremat lahendust. Seejärel teen konkreetse töö jaoks rakenduse või täiendan olemasolevat süsteemi nii, et seda oleks lihtsam ja kiirem kasutada.",
      ],
    },
    work: {
      title: "Projektid",
      lead: "Kolm projekti, mis algasid käsitsi tehtud tööprotsessist.",
      roleLabel: "Minu osa",
      openWebsite: "Ava veebileht",
    },
    solutions: {
      title: "Mida ma ehitan",
      services: [
        { title: "Sisetarkvara", text: "Veebi- ja töölauarakendused, mis on tehtud konkreetse meeskonna töö ja vajaduste järgi." },
        { title: "Töövoogude automatiseerimine", text: "Rakendused, mis vähendavad käsitsi sisestamist, kontrollimist, failide liigutamist ja muid korduvaid tööetappe." },
        { title: "Olemasoleva tarkvara täiendamine", text: "Kui kasutusel olevast programmist on puudu mõni oluline funktsioon või vaade, teen selle kõrvale sobiva lahenduse." },
        { title: "Süsteemide ühendamine", text: "Ühendan rakenduse olemasolevate andmeallikate, failide ja muude ettevõttes kasutatavate süsteemidega." },
      ],
      certificate: "Täienduskoolituse tunnistus",
    },
    process: {
      title: "Kuidas ma töötan",
      lead: "Lähen projektile järgmiselt.",
      principles: [
        "Vaatan koos kliendiga läbi, kuidas töö praegu käib ja mis kõige rohkem aega võtab.",
        "Panen paika, mida uus lahendus peab tegema ja millised erandid vajavad kasutaja tähelepanu.",
        "Teen esmalt väiksema versiooni, mis lahendab kõige olulisema osa probleemist.",
        "Katsetan seda päris failide, andmete ja tööolukordadega.",
        "Võtan lahenduse kasutusele ja täiendan seda kasutajate tagasiside põhjal.",
      ],
    },
    contact: {
      title: "Kontakt",
      text: "Kirjuta, kui mõni töö võtab liiga kaua, olemasolev tarkvara ei sobi või sinu ettevõttel on vaja konkreetse ülesande jaoks oma rakendust.",
      form: {
        title: "Kirjuta mulle",
        help: "Kirjelda, kuidas töö praegu käib ja mida sooviksid lihtsamaks teha. Tehnilist lahendust ei pea ette teadma.",
        name: "Nimi",
        email: "E-post",
        message: "Kirjelda tööprotsessi või probleemi",
        submit: "Saada sõnum",
        submitting: "Saadan...",
        success: "Aitäh! Kirjeldus jõudis minuni. Vastan esimesel võimalusel.",
        error: "Sõnumi saatmine ebaõnnestus. Palun proovi mõne hetke pärast uuesti.",
      },
    },
    controls: {
      language: "Vali keel",
      skipToContent: "Liigu põhisisu juurde",
      lightTheme: "Kasuta heledat režiimi",
      darkTheme: "Kasuta tumedat režiimi",
    },
  },
  en: {
    meta: {
      title: "Software Developer | Germo Eismann",
      description: "I build custom software for business tasks that existing tools do not handle well enough.",
    },
    brandSubtitle: "Software Developer",
    nav: [
      { href: "#minust", label: "About" },
      { href: "#projektid", label: "Projects" },
      { href: "#lahendused", label: "What I build" },
      { href: "#tooviis", label: "How I work" },
      { href: "#kontakt", label: "Contact" },
    ],
    hero: {
      eyebrow: "Software Developer",
      lead: "I build custom software for business tasks that existing tools do not handle well enough.",
    },
    about: {
      title: "About",
      paragraphs: [
        "Most of my projects start with work being repeated by hand: moving files, comparing data or making the same decisions again and again.",
        "I review the current workflow with the client and identify where a better solution is needed. I then build an application for that task or extend the existing system to make the work simpler and faster.",
      ],
    },
    work: {
      title: "Projects",
      lead: "Three projects that started with a manual workflow.",
      roleLabel: "My role",
      openWebsite: "Open website",
    },
    solutions: {
      title: "What I build",
      services: [
        { title: "Internal software", text: "Web and desktop applications built around a specific team's work and needs." },
        { title: "Workflow automation", text: "Applications that reduce manual data entry, checking, file handling and other repetitive steps." },
        { title: "Extending existing software", text: "When an existing program is missing an important feature or view, I build a compatible tool alongside it." },
        { title: "System integration", text: "I connect applications to existing data sources, files and other systems used by the business." },
      ],
      certificate: "Training certificate",
    },
    process: {
      title: "How I work",
      lead: "I approach each project in five steps.",
      principles: [
        "I review the current workflow with the client and identify what takes the most time.",
        "I define what the new solution must do and which exceptions need the user's attention.",
        "I start with a smaller version that solves the most important part of the problem.",
        "I test it with real files, data and day-to-day work scenarios.",
        "I put the solution into use and improve it based on user feedback.",
      ],
    },
    contact: {
      title: "Contact",
      text: "Get in touch if a task takes too long, existing software does not fit the task or your business needs an application for a specific job.",
      form: {
        title: "Send me a message",
        help: "Describe how the work is done today and what you would like to make easier. You do not need to define the technical solution.",
        name: "Name",
        email: "Email",
        message: "Describe the workflow or problem",
        submit: "Send message",
        submitting: "Sending...",
        success: "Thank you! I received your message and will get back to you as soon as I can.",
        error: "The message could not be sent. Please try again in a moment.",
      },
    },
    controls: {
      language: "Choose language",
      skipToContent: "Skip to main content",
      lightTheme: "Use light mode",
      darkTheme: "Use dark mode",
    },
  },
};
