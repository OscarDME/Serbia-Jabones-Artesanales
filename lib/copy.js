// lib/copy.js — Sav vidljiv sadržaj na landing stranici.
// Sve tekstualne promene se prave ovde. Komponente čitaju samo iz ovog objekta.

export const copy = {
  metadata: {
    title: "EkoBiljka — Pravi ručno rađene sapune i prirodnu kozmetiku kod kuće",
    description:
      "EkoBiljka kurs za ručno rađene sapune i prirodnu kozmetiku: nauči da praviš prirodne proizvode za sebe i svoju porodicu uz preko 27 priručnika, 500 recepata i 3 BESPLATNA bonusa. Doživotni pristup sa 80% popusta.",
    lang: "sr",
  },

  brand: {
    name: "EkoBiljka",
    tagline: "Biljna eko lepota",
  },

  hero: {
    banner: "OVA PONUDA + BESPLATNI BONUSI ISTIČU ZA:",
    timerLabels: { days: "Dani", hours: "Sati", minutes: "Min", seconds: "Sek" },
    kicker: "Preko 2.586 ljudi već stvara svoje proizvode kod kuće",
    headlinePre: "STRUČNJAK ZA PRIRODNU KOZMETIKU OTKRIVA",
    headlineHighlight: "kako da napraviš mirisne sapune,",
    headlinePost: "koji će negovati tvoju kožu već od prvog dana",
    supporting:
      "Idealno za sve koji žele ODMAH da počnu da prave svoje prirodne sapune — bez hemije, bez nepotrebnih troškova i sa pravim užitkom.",
    cta: "Želim pristup odmah 🧼",
    imageAlt: "Žena sa negovanom i blistavom kožom zahvaljujući prirodnoj EkoBiljka kozmetici",
    trustChips: [
      { icon: "⭐", text: "Preko 2.586 polaznica" },
      { icon: "🎁", text: "3 BESPLATNA bonusa" },
      { icon: "🛡️", text: "14 dana garancije" },
    ],
  },

  instructorIntro: {
    quote:
      "Napravila sam ovaj kurs baš za tebe – za tebe koja voliš da stvaraš svojim rukama i želiš da brineš o sebi i svojim najbližima na prirodan način.",
  },

  soapCarousel: {
    items: [
      { image: "/carousel/soap-1.webp", alt: "Sveže napravljeni domaći sapuni" },
      { image: "/carousel/soap-2.webp", alt: "Sapuni sa mermernim efektom" },
      { image: "/carousel/soap-3.webp", alt: "Sapun sa dekorativnim zelenim talasom" },
      { image: "/carousel/soap-4.webp", alt: "Prirodni sapun sa lavandom" },
      { image: "/carousel/soap-5.webp", alt: "Asortiman ručno rađenih sapuna" },
      { image: "/carousel/soap-6.webp", alt: "Detalji dekorativnih sapuna" },
    ],
  },

  benefits: {
    headline:
      "...možeš da počneš sa MALIM BUDŽETOM i dobiješ ove PREDNOSTI!",
    items: [
      { icon: "Leaf", text: "Koristi prirodne i potpuno bezbedne sastojke." },
      { icon: "ShieldCheck", text: "Zaboravi na suvu kožu, iritacije i alergije." },
      { icon: "Sparkles", text: "Napravi svaki sapun koji možeš da zamisliš." },
      { icon: "TrendingUp", text: "Pretvori stvaranje u pravi užitak kod kuće." },
    ],
    checklist: [
      "Kraj upropašćenim receptima",
      "Nije potrebno da budeš ekspert",
      "Bez rasporeda i pritiska",
    ],
    imageAlt: "Ruke drže tek napravljene ručno rađene sapune",
  },

  trending: {
    kicker: "TREND ZA 2026",
    headline:
      "za samo par dana naučićeš da praviš moderne sapune kojima ćeš sve oduševiti",
    imageAlt: "Ručno rađeni sapuni sa modernim mermernim efektom",
  },

  courseContent: {
    headline: "ovde ćemo te naučiti baš svemu",
    subheadline: "upoznaj se sa celim sadržajem",
    sectionLabel: "u preko 27 e-knjiga naći ćeš...",
    paragraphs: [
      {
        bold: "Pristup kompletnom znanju,",
        rest: " kako bi dizajnirala, pravila i čuvala prirodne sapune kao pravi profesionalac.",
      },
      {
        bold: "Kraj metodu pokušaja i grešaka:",
        rest:
          " prati jasno i isprobano uputstvo sa praktičnim savetima koji ti štede i vreme i živce.",
      },
    ],
  },

  megapack: {
    kicker: "MEGA PAKET",
    headline: "mega paket uključuje",
    items: [
      { bold: "Detaljno uputstvo korak po korak —", rest: " od početnice do naprednog nivoa" },
      { bold: "500 recepata", rest: " za svaki mogući tip kože" },
      { bold: "Napravi svoja sopstvena", rest: " eterična ulja" },
      { bold: "Nauči da praviš", rest: " prirodne tečne sapune" },
    ],
    imageAlt: "Prikaz mega paketa za ručno rađene sapune EkoBiljka",
  },

  bonuses: {
    kicker: "BESPLATNI BONUSI",
    headline: "Ako iskoristiš priliku danas, dobijaš 3 BESPLATNA bonusa!",
    subheadline: "Dodatni priručnici u digitalnom PDF formatu spremni za preuzimanje.",
    badge: "BONUS #",
    freeLabel: "BESPLATNO",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Kozmetika za telo", desc: "Prirodni recepti za maslace, losione i piling za kompletnu negu tela." },
      { image: "/bonuses/bonus-6.webp", title: "Soli za kupanje", desc: "Opusti se uz domaće aromatične soli i šumeće bombice za kupanje." },
      { image: "/bonuses/bonus-7.webp", title: "Čvrsti šampon", desc: "Zdrava kosa, bez plastične ambalaže i bez hemije." },
    ],
    footer: "Svi bonusi se isporučuju 100% digitalno, istog trenutka.",
  },

  features: {
    headline: "Sve što dobijaš",
    subheadline: "Pun pristup i materijali za preuzimanje (PDF).",
    items: [
      { icon: "Wifi", title: "100% online", desc: "Pristupi lekcijama kad god poželiš i odakle god da si." },
      { icon: "FolderOpen", title: "Sadržaj na Google Drive-u", desc: "Organizovano tako da napreduješ bez ikakvih komplikacija." },
      { icon: "Infinity", title: "Doživotni pristup kursu", desc: "Uči svojim tempom, potpuno bez ograničenja." },
      { icon: "BookOpen", title: "E-knjige ostaju tvoje", desc: "Preuzmi ih ili ih čitaj online bez vremenskog ograničenja." },
      { icon: "Sparkles", title: "Praktično znanje", desc: "Sve što ti treba kako bi odmah napravila svoje prve proizvode." },
      { icon: "ShieldCheck", title: "Garancija 14 dana", desc: "Ako nisi zadovoljna, vraćamo ti 100% novca." },
    ],
  },

  primaryPricing: {
    discountBadge: "80% POPUSTA",
    valuedAtLabel: "Prava vrednost programa",
    regularPrice: "4.950 din",
    offerPrice: "990 din",
    cta: "PREUZMI POPUST",
    payInfo: "Jednokratno plaćanje uz doživotni pristup",
    imageAlt: "Prikaz programa EkoBiljka sa ekskluzivnim popustom",
    socialImageAlt: "Skrinšotovi stvarnih poruka zadovoljnih polaznica",
  },

  socialProof: {
    headline: "NE PROPUŠTAJ PRILIKU!",
    subheadlinePre: "Preko",
    countHighlight: "2.586 ljudi",
    subheadlinePost: "već uveliko uživa u svojim ličnim prirodnim proizvodima kod kuće!",
  },

  reviewScreenshots: {
    headline: "Stvarne poruke naših polaznica",
    subheadline: "Ovakve poruke dobijamo svakog dana.",
    onlineLabel: "na mreži",
    typingLabel: "kuca…",
    items: [
      {
        name: "Jovana",
        timeLabel: "10:24",
        messages: [
          { text: "Napravila sam svoje prve sapune po tvom uputstvu! 🌸" },
          { text: "Ispali su predivni, a koža mi je super mekana ✨" },
          { text: "Kad ćeš ubaciti još recepata?" },
        ],
      },
      {
        name: "Milica",
        timeLabel: "juče",
        messages: [
          { text: "Sinoć sam napravila sapune sa lavandom za celu porodicu 💜" },
          { text: "Mama ih obožava, kaže da joj je koža potpuno drugačija 🙌" },
          { text: "Hvala za kurs, stvarno ❤️" },
        ],
      },
      {
        name: "Jelena",
        timeLabel: "12:05",
        messages: [
          { text: "Počela sam pre 2 nedelje i već imam celu kolekciju 💕" },
          { text: "Recepti se prate baš lako, nikakva filozofija" },
          { text: "A BESPLATNI bonusi vrede svaku paru 🎁" },
        ],
      },
      {
        name: "Marija",
        timeLabel: "danas",
        messages: [
          { text: "Ćao! Samo da ti se zahvalim 🌿" },
          { text: "Napravila sam sebi čvrsti šampon i koža više nije suva" },
          { text: "Hiljadu puta hvala, ulepšala si mi dan 🌷" },
        ],
      },
    ],
  },

  curriculum: {
    headline: "Sadržaj kursa",
    subheadline: "Klikni na menije da vidiš šta sve dobijaš.",
    courses: [
      {
        title: "Kurs | Ručno rađeni sapuni",
        lessons: [
          "EkoBiljka sapuni mod. 1",
          "EkoBiljka sapuni mod. 2",
          "Izrada sapuna mod. 1",
          "Izrada sapuna mod. 2",
          "Osnovne tehnike",
          "Sastojci i procesi",
          "Neverovatni sastojci i njihova svojstva",
        ],
      },
      {
        title: "Kurs | 500 recepata za sapune",
        lessons: [
          "E-knjiga (PDF) sa 500 jedinstvenih recepata.",
          "Vodič za prilagođavanje sastojaka.",
        ],
      },
      {
        title: "Kurs | Napravi tečne sapune",
        lessons: [
          "Kompletan vodič korak po korak za pravljenje tvojih tečnih glicerinskih sapuna.",
        ],
      },
      {
        title: "Kurs | Napravi eterična ulja",
        lessons: [
          "Kompletan vodič korak po korak za pravljenje sopstvenih eteričnih ulja.",
        ],
      },
      {
        title: "BESPLATAN BONUS | Prirodna kozmetika",
        lessons: [
          "BESPLATAN BONUS — Kozmetika za telo",
          "BESPLATAN BONUS — Soli za kupanje",
          "BESPLATAN BONUS — Čvrsti šampon",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80% POPUSTA",
    plus: "+ 3 BESPLATNA bonusa",
    middle: "uz tvoju kupovinu do",
    deadline: "14. DECEMBRA",
    or: "ili do popunjavanja preostalih",
    slots: "26 MESTA",
  },

  finalCta: {
    preHeadline: "TVOJ TRENUTAK JE SADA",
    urgencyTop: "80% POPUSTA",
    headline: "Preuzmi DANAS EkoBiljka mega paket uz brutalan popust",
    subUrgency:
      "Preko 2.586 ljudi već pravi svoje sapune i kozmetiku kod kuće. Danas si ti na redu.",
    bundleList: [
      "Kompletan kurs za ručno rađene sapune (4 modula)",
      "500 jedinstvenih recepata za svaki tip kože",
      "Kurs za tečne sapune korak po korak",
      "Kurs za eterična ulja",
      "BONUS — Kozmetika za telo",
      "BONUS — Soli za kupanje",
      "BONUS — Čvrsti šampon",
      "Doživotni pristup (PDF/online)",
    ],
    guaranteeText:
      "Puna garancija 14 dana. Ako ti se kurs ne dopadne, vraćamo ti 100% novca, bez dodatnih pitanja.",
    guaranteeImageAlt: "Pečat za garanciju od 14 dana",
    regularPriceLabel: "Pre",
    regularPrice: "4.950 din",
    offerPrice: "990 din",
    discountBadge: "80% POPUSTA",
    urgencyText: "Jednokratno plaćanje uz doživotni pristup",
    bottomUrgency: "Ova ponuda ističe kada tajmer dođe do nule.",
    button: "PREUZMI MEGA PAKET ODMAH",
    trustRow: "100% sigurno plaćanje · Momentalni pristup · 14 dana garancije",
  },

  instructorBio: {
    name: "Jelena Vasiljević",
    title: "Ekspert za prirodnu kozmetiku",
    bio: "Zdravo, ja sam Jelena. Prirodnom kozmetikom i pravljenjem sapuna bavim se već više od 8 godina. Ono što je počelo kao lična potreba da negujem svoju kožu bez hemije, pretvorilo se u moju najveću strast... a i u moj način života. Tokom godina sam razvila desetine sopstvenih formula i pomogla mnogim ženama baš kao što si ti da naprave prve korake u ovom fantastičnom svetu — da naprave svoj prvi sapun od domaćih sastojaka i otkriju radost brige o sebi i svojim najbližima na prirodan način. Znam kako je to početi od nule, bez iskustva, sa strahom od greške ili prosto kad ne znaš odakle da kreneš. Zato u ovom kursu delim sve što sam naučila – jasno, praktično i bez nepotrebnih komplikacija.",
    imageAlt: "Jelena Vasiljević, ekspert za prirodnu kozmetiku i ručno rađene sapune",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Ručno rađeni sapuni koje je napravila Jelena",
      "Rad u radionici za prirodnu kozmetiku",
      "Gotovi prirodni proizvodi",
    ],
    yearsLabel: "Preko 8 godina",
    yearsText: "stvaranja prirodne kozmetike",
    studentsLabel: "Preko 2.586",
    studentsText: "zadovoljnih polaznica",
  },

  testimonials: {
    headline: "Pogledaj šta kažu oni koji su već prošli kurs",
    subheadline: "Stvarne recenzije naših polaznica EkoBiljka kursa.",
    productLabel: "EkoBiljka — Kurs za ručno rađene sapune",
    reviewedLabel: "napisao/la je recenziju za",
    actions: { like: "Sviđa mi se", comment: "Komentariši", share: "Podeli" },
    items: [
      {
        name: "Jana Dimitrijević",
        handle: "@jana_d",
        text: "Kurs mi se baš svideo. Vežbala sam sve tačno onako kako nas je mentorka učila i za manje od mesec dana sam imala celu kolekciju svojih sapuna za celu porodicu. Koža moje dece se značajno popravila otkako koristimo samo moje domaće prirodne proizvode. Hvala za ovaj kurs, stvarno vredi.",
      },
      {
        name: "Maja Veljković",
        handle: "",
        text: "Pre nedelju dana sam završila kurs i oduševljena sam. Već sam napravila prve sapune, probali smo ih kod kuće i svi smo raspamećeni. Koža mi je mnogo mekša i hidriranija, a mirisi su neverovatni. Mnogo vam hvala na ovoj prilici. Vredi svaku paru.",
      },
      {
        name: "Snežana Krstić",
        handle: "",
        text: "Ostavljam ovaj komentar jer sam nedavno prošla kurs i od tada nisam kupila nijedan industrijski sapun. Cela porodica koristi moje prirodne proizvode i razlika za kožu je ogromna. Nikad nisam mislila da kod kuće mogu da napravim ovako kvalitetne stvari. HVALA. Ovaj kurs je neverovatno dobra investicija.",
      },
      {
        name: "Dejan Jovanović",
        handle: "@deki_j",
        text: "Fenomenalan sadržaj, sve je jako jasno i profesionalno. Što se tiče bonusa... ako imate priliku da ih uzmete, uradite to. Jako vredne informacije. Živi bili i veliko hvala što nam delite ovo znanje.",
      },
    ],
    cta: "ŽELIM DA POČNEM DANAS",
  },

  closingProof: {
    headlinePre: "Naše polaznice prave svoje prve sapune",
    headlineHighlight: "već u prvoj nedelji",
    headlinePost: ". Šta čekaš?",
    ctaLabel: "POČNI DANAS",
  },

  guarantee: {
    badgeLabel: "14 DANA GARANCIJE",
    headline: "OPUSTI SE, MI PREUZIMAMO RIZIK NA SEBE.",
    text: "Imaćeš dve nedelje da testiraš kurs i ako ti se ne svidi ili ne ispuni tvoja očekivanja, vraćamo ti 100% novca.",
    badgeAlt: "Pečat za garanciju od 14 dana kompanije EkoBiljka",
    certs: [
      { icon: "Award", label: "Proveren kvalitet" },
      { icon: "ShieldCheck", label: "100% sigurno plaćanje" },
      { icon: "Lock", label: "Zaštićeni podaci" },
      { icon: "BadgeCheck", label: "Zadovoljne polaznice" },
    ],
  },

  faq: {
    headline: "Često postavljana pitanja",
    subheadline: "Sve što treba da znaš pre nego što kreneš.",
    items: [
      {
        q: "Da li je plaćanje sigurno?",
        a: "Da, plaćanje se vrši preko Hotmart-a — jedne od najsigurnijih i najpoznatijih digitalnih platformi na svetu koja posluje u preko 160 zemalja i ima najmodernije bezbednosne sertifikate. Tvoji podaci o plaćanju biće maksimalno zaštićeni i 100% su poverljivi, što ti garantuje bezbednu i pouzdanu kupovinu.",
      },
      {
        q: "Mogu li da pratim kurs ako ne znam baš ništa o ovome?",
        a: "Naravno! Sve e-knjige su jako detaljne i realno, jedino što ti treba je volja. Ceo proces je objašnjen veoma jednostavno i koristićeš vrlo praktične alate.",
      },
      {
        q: "Mogu li da pristupim kursu sa bilo kog uređaja?",
        a: "Da, možeš da pristupiš kursu sa svakog uređaja! Bilo da si za kompjuterom, na tabletu ili telefonu, moći ćeš da pratiš sadržaj bez obzira da li koristiš Windows, macOS, iOS ili Android. Uz to, imaš opciju da skineš Hotmart aplikaciju za još lakši pristup preko mobilnog.",
      },
      {
        q: "Da li mi je potrebno veliko ulaganje da bih počela?",
        a: "Ne! Prirodna kozmetika zahteva jako niska početna ulaganja, a mi te učimo kako da iskoristiš lako dostupne materijale i počneš bez bespotrebnih troškova.",
      },
      {
        q: "Kada kurs tačno počinje?",
        a: "Čim kupiš kurs, odmah dobijaš link za pristup (i digitalne PDF knjige), što ti omogućava da odmah uđeš na platformu i prelaziš lekcije kada tebi najviše odgovara. Kurs ti ostaje na raspolaganju doživotno.",
      },
      {
        q: "Šta sve uključuje kurs?",
        a: "Kurs obuhvata doživotni pristup, e-knjige sa instrukcijama korak po korak, materijale za preuzimanje (PDF) i tehničku podršku.",
      },
      {
        q: "Šta ako mi se kurs ne svidi?",
        a: "Imaš punu garanciju od 14 dana. Ako iz bilo kog razloga nisi zadovoljna, samo nam pošalji poruku i vraćamo ti 100% novca, bez dodatnih pitanja.",
      },
    ],
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "Ovaj veb-sajt nije deo Facebook veb-sajta ili Facebook Inc. Pored toga, ovaj sajt NIJE podržan niti sponzorisan od strane Facebook-a na bilo koji način.",
    trademark: "FACEBOOK je registrovani zaštitni znak kompanije FACEBOOK, Inc.",
  },
};