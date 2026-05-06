// lib/copy.js — Sav vidljiv sadržaj na landing stranici.
// Sve tekstualne promene se prave ovde. Komponente čitaju samo iz ovog objekta.

export const copy = {
  metadata: {
    title: "EcoHerbal — Pravi ručno rađene sapune koji se prodaju sami",
    description:
      "EcoHerbal kurs za ručno rađene sapune i prirodnu kozmetiku: nauči da praviš prirodne sapune uz preko 27 priručnika, 500 recepata i 8 BESPLATNIH bonusa. Doživotni pristup sa 80% popusta.",
    lang: "sr",
  },

  brand: {
    name: "EcoHerbal",
    tagline: "Biljna eko lepota",
  },

  hero: {
    banner: "OVA PONUDA + BESPLATNI BONUSI ISTIČE ZA:",
    timerLabels: { days: "Dani", hours: "Sati", minutes: "Min", seconds: "Sek" },
    kicker: "Preko 2.586 ljudi već stvara svoje proizvode",
    headlinePre: "STRUČNJAK ZA KOZMETIKU OTKRIVA",
    headlineHighlight: "kako da napraviš neodoljive sapune,",
    headlinePost: "koji neguju i obnavljaju kožu već od prvog dana",
    supporting:
      "Idealno za sve koji žele da počnu ODMAH i ostvare stvaran prihod od svojih prirodnih sapuna.",
    cta: "Želim pristup odmah 🧼",
    imageAlt: "Žena sa negovanom i blistavom kožom zahvaljujući prirodnoj EcoHerbal kozmetici",
    trustChips: [
      { icon: "⭐", text: "Preko 2.586 polaznika" },
      { icon: "🎁", text: "8 BESPLATNIH bonusa" },
      { icon: "🛡️", text: "7 dana garancije" },
    ],
  },

  instructorIntro: {
    quote:
      "Napravila sam ovaj ekskluzivni kurs baš za tebe – za tebe koja voliš da stvaraš svojim rukama i želiš da usvojiš isplative veštine.",
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
      { icon: "TrendingUp", text: "Pretvori svoj hobi u ozbiljan izvor zarade." },
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
      "za samo par dana naučićeš da praviš moderne sapune koji se prodaju sami",
    imageAlt: "Ručno rađeni sapuni sa modernim mermernim efektom",
  },

  courseContent: {
    headline: "ovde ćemo te naučiti baš svemu",
    subheadline: "upoznaj se sa celim sadržajem",
    sectionLabel: "u preko 27 e-knjiga naći ćeš...",
    paragraphs: [
      {
        bold: "Pristup kompletnom znanju",
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
      { bold: "Detaljno uputstvo korak po korak", rest: " od početnika do profesionalca" },
      { bold: "500 recepata", rest: " za svaki mogući tip kože" },
      { bold: "Napravi svoja sopstvena", rest: " eterična ulja" },
      { bold: "Nauči da praviš", rest: " prirodne tečne sapune" },
    ],
    imageAlt: "Prikaz mega paketa za ručno rađene sapune EcoHerbal",
  },

  bonuses: {
    kicker: "BESPLATNI BONUSI",
    headline: "Ako iskoristiš priliku danas, dobijaš 8 BESPLATNIH bonusa!",
    subheadline: "27 priručnika u digitalnom PDF formatu spremnih za preuzimanje.",
    badge: "BONUS #",
    freeLabel: "BESPLATNO",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Kozmetika za telo", desc: "Prirodni recepti za kompletnu negu tela." },
      { image: "/bonuses/bonus-2.webp", title: "Kozmetika za lice", desc: "Kreme, serumi i tonici za blistavu kožu." },
      { image: "/bonuses/bonus-3.webp", title: "Prirodni dezodorans", desc: "Nežne i efikasne formule bez trunke hemije." },
      { image: "/bonuses/bonus-4.webp", title: "Čvrsta vodica za usta", desc: "Pobrini se za zdravlje zuba prirodnim sastojcima." },
      { image: "/bonuses/bonus-5.webp", title: "Prirodna pasta za zube", desc: "Dubinsko čišćenje bez fluorida i sulfata." },
      { image: "/bonuses/bonus-6.webp", title: "Soli za kupanje", desc: "Opusti se uz domaće aromatične soli." },
      { image: "/bonuses/bonus-7.webp", title: "Čvrsti šampon", desc: "Zdrava kosa, bez plastične ambalaže." },
      { image: "/bonuses/bonus-8.webp", title: "Ručno rađene sveće", desc: "Kompletan bonus kurs za pravljenje dekorativnih sveća." },
    ],
    footer: "Svi bonusi se isporučuju 100% digitalno, istog trenutka.",
  },

  features: {
    headline: "Sve što dobijaš",
    subheadline: "Pun pristup, materijali za preuzimanje (PDF) i sertifikat.",
    items: [
      { icon: "Wifi", title: "100% online", desc: "Pristupi lekcijama kad god poželiš i odakle god da si." },
      { icon: "FolderOpen", title: "Sadržaj na Google Drive-u", desc: "Organizovano tako da napreduješ bez ikakvih komplikacija." },
      { icon: "Infinity", title: "Doživotni pristup kursu", desc: "Uči svojim tempom, potpuno bez ograničenja." },
      { icon: "BookOpen", title: "E-knjige ostaju tvoje", desc: "Preuzmi ih ili ih čitaj online bez vremenskog ograničenja." },
      { icon: "Award", title: "Sertifikat o učešću", desc: "Potvrdi sve što si naučila zvaničnim priznanjem." },
      { icon: "ShieldCheck", title: "Garancija 7 dana", desc: "Ako nisi zadovoljna, vraćamo ti 100% novca." },
    ],
  },

  primaryPricing: {
    discountBadge: "80% POPUSTA",
    valuedAtLabel: "Prava vrednost programa",
    regularPrice: "4.950 din",
    offerPrice: "990 din",
    cta: "PREUZMI POPUST",
    payInfo: "Jednokratno plaćanje uz doživotni pristup",
    imageAlt: "Prikaz programa EcoHerbal sa ekskluzivnim popustom",
    socialImageAlt: "Skrinšotovi stvarnih poruka zadovoljnih polaznika",
  },

  socialProof: {
    headline: "NE PROPUŠTAJ PRILIKU!",
    subheadlinePre: "Preko",
    countHighlight: "2.586 ljudi",
    subheadlinePost: "već uveliko uživa u svojim ličnim kozmetičkim proizvodima!",
  },

  reviewScreenshots: {
    headline: "Stvarne poruke naših polaznica",
    subheadline: "Ovakve poruke dobijamo na WhatsApp-u svakog dana.",
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
          { text: "Prodala sam 12 sapuna na jednom bazaru u subotu 😱" },
          { text: "Ljudi su se bukvalno razgrabili, nisam mogla da verujem 🙌" },
          { text: "Hvala za kurs, stvarno ❤️" },
        ],
      },
      {
        name: "Jelena",
        timeLabel: "12:05",
        messages: [
          { text: "Počela sam pre 2 nedelje i već imam svoj brend 💕" },
          { text: "Recepti se prate baš lako, nikakva filozofija" },
          { text: "A BESPLATNI bonusi vrede svaku paru 🎁" },
        ],
      },
      {
        name: "Marija",
        timeLabel: "danas",
        messages: [
          { text: "Ćao! Samo da ti javim da sam zatvorila prvu prodaju" },
          { text: "10 sapuna za jednu eko prodavnicu 🌿" },
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
          "EcoHerbal sapuni mod. 1",
          "EcoHerbal sapuni mod. 2",
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
        title: "BESPLATAN BONUS | Kurs za ručno rađene sveće",
        lessons: [
          "Izrada sveća 1",
          "Izrada sveća 2",
          "Sveće od pčelinjeg voska",
          "Sveće od sojinog voska",
          "Dekoracija sveća",
          "Vodič za ručno rađene sveće",
          "Ekstra: Lava lampe",
        ],
      },
      {
        title: "BESPLATAN BONUS | Prirodna kozmetika",
        lessons: [
          "BESPLATAN BONUS Kozmetika za telo",
          "BESPLATAN BONUS Kozmetika za lice",
          "BESPLATAN BONUS Dezodorans",
          "BESPLATAN BONUS Čvrsta vodica za usta",
          "BESPLATAN BONUS Pasta za zube",
          "BESPLATAN BONUS Soli za kupanje",
          "BESPLATAN BONUS Čvrsti šampon",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80% POPUSTA",
    plus: "+ 8 BESPLATNIH bonusa",
    middle: "uz tvoju kupovinu do",
    deadline: "14. DECEMBRA",
    or: "ili do popunjavanja preostalih",
    slots: "26 MESTA",
  },

  finalCta: {
    preHeadline: "TVOJ TRENUTAK JE SADA",
    urgencyTop: "80% POPUSTA",
    headline: "Preuzmi DANAS EcoHerbal mega paket uz brutalan popust",
    subUrgency:
      "Preko 2.586 ljudi već pravi svoje sapune i kozmetiku. Danas si ti na redu.",
    bundleList: [
      "Kompletan kurs za ručno rađene sapune (4 modula)",
      "500 jedinstvenih recepata za svaki tip kože",
      "Kurs za tečne sapune korak po korak",
      "Kurs za eterična ulja",
      "BONUS — Kompletan kurs za ručno rađene sveće",
      "BONUS — 7 priručnika za prirodnu kozmetiku",
      "Doživotni pristup (PDF/online) + Sertifikat o učešću",
    ],
    guaranteeText:
      "Garancija 7 dana. Ako ti se kurs ne dopadne, vraćamo ti 100% novca, bez dodatnih pitanja.",
    guaranteeImageAlt: "Pečat za garanciju od 7 dana",
    regularPriceLabel: "Pre",
    regularPrice: "4.950 din",
    offerPrice: "990 din",
    discountBadge: "80% POPUSTA",
    urgencyText: "Jednokratno plaćanje uz doživotni pristup",
    bottomUrgency: "Ova ponuda ističe kada tajmer dođe do nule.",
    button: "PREUZMI MEGA PAKET ODMAH",
    trustRow: "100% sigurno plaćanje · Momentalni pristup · 7 dana garancije",
  },

  instructorBio: {
    name: "Jelena Vasiljević",
    title: "Ekspert za prirodnu kozmetiku",
    bio: "Zdravo, ja sam Jelena. Prirodnom kozmetikom i pravljenjem sapuna bavim se već više od 8 godina. Ono što je počelo kao lična potreba da negujem svoju kožu bez hemije, pretvorilo se u moju najveću strast... a i u moj način života. Tokom godina sam razvila desetine sopstvenih formula i pomogla mnogim ženama baš kao što si ti da naprave prve korake u ovom fantastičnom svetu. Od toga da naprave svoj prvi sapun od domaćih sastojaka, pa do pretvaranja te umetnosti u profitabilan i stabilan biznis. Znam kako je to početi od nule, bez iskustva, sa strahom od greške ili prosto kad ne znaš odakle da kreneš. Zato u ovom kursu delim sve što sam naučila – jasno, praktično i bez nepotrebnih komplikacija.",
    imageAlt: "Jelena Vasiljević, ekspert za prirodnu kozmetiku i ručno rađene sapune",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Ručno rađeni sapuni koje je napravila Jelena",
      "Rad u radionici za prirodnu kozmetiku",
      "Gotovi proizvodi spremni za prodaju",
    ],
    yearsLabel: "Preko 8 godina",
    yearsText: "stvaranja prirodne kozmetike",
    studentsLabel: "Preko 2.586",
    studentsText: "zadovoljnih polaznica",
  },

  testimonials: {
    headline: "Pored ovoga moći ćeš da dobiješ i svoj sertifikat",
    subheadline: "Pogledaj šta kažu oni koji su već prošli EcoHerbal kurs.",
    productLabel: "EcoHerbal — Kurs za ručno rađene sapune",
    reviewedLabel: "napisao/la je recenziju za",
    actions: { like: "Sviđa mi se", comment: "Komentariši", share: "Podeli" },
    items: [
      {
        name: "Jana Dimitrijević",
        handle: "@jana_d",
        text: "Kurs mi se baš svideo. Vežbala sam sve tačno onako kako nas je mentorka učila i za manje od mesec dana sam uspela da pokrenem svoj posao i ostvarim prve prodaje. Sada pravim sve više sapuna i čak razmišljam da otvorim svoju malu prodavnicu. Hvala za ovaj kurs, stvarno vredi.",
      },
      {
        name: "Maja Veljković",
        handle: "",
        text: "Pre nedelju dana sam završila kurs i oduševljena sam. Već sam napravila prve sapune, probali smo ih kod kuće i svi smo raspamećeni. Sada spremam sve kako bih počela da ih prodajem, baš kao što su nas učili. Već me pitaju prijatelji od prijatelja da kupe. Mnogo vam hvala na ovoj prilici. Vredi svaku paru.",
      },
      {
        name: "Snežana Krstić",
        handle: "",
        text: "Ostavljam ovaj komentar jer sam nedavno prošla kurs i odmah nakon toga krenula da razvijam biznis. Iskreno, stvari su krenule jako dobro, a juče sam sklopila ugovor sa jednim brendom da počnu da prodaju par mojih proizvoda. Nikad nisam mislila da ću doći do ovoga, tako da, ogromno HVALA. Ovaj kurs je neverovatno dobra investicija.",
      },
      {
        name: "Dejan Jovanović",
        handle: "@deki_j",
        text: "Fenomenalan sadržaj, sve je jako jasno i profesionalno. Što se tiče bonusa... ako imate priliku da ih uzmete, uradite to. Jako vredne informacije. Živi bili i veliko hvala što nam delite ovo znanje da možemo da pokrenemo svoj posao.",
      },
    ],
    cta: "ŽELIM DA POČNEM DANAS",
  },

  closingProof: {
    headlinePre: "Naši polaznici već prave svoje proizvode za",
    headlineHighlight: "manje od 3 dana",
    headlinePost: ". Šta čekaš?",
    ctaLabel: "POČNI DANAS",
  },

  guarantee: {
    badgeLabel: "7 DANA GARANCIJE",
    headline: "OPUSTI SE, MI PREUZIMAMO RIZIK NA SEBE.",
    text: "Imaćeš nedelju dana da testiraš kurs, i ako ti se ne svidi ili ne ispuni tvoja očekivanja, vraćamo ti 100% novca.",
    badgeAlt: "Pečat za garanciju od 7 dana kompanije EcoHerbal",
    certs: [
      { icon: "Award", label: "Zvanični sertifikat" },
      { icon: "ShieldCheck", label: "100% sigurno plaćanje" },
      { icon: "Lock", label: "Zaštićeni podaci" },
      { icon: "BadgeCheck", label: "Proveren kvalitet" },
    ],
  },

  faq: {
    headline: "Često postavljana pitanja",
    subheadline: "Sve što treba da znaš pre nego što kreneš.",
    items: [
      {
        q: "Da li je plaćanje sigurno?",
        a: "Da, plaćanje se vrši preko Hotmart-a, jedne od najsigurnijih i najpoznatijih digitalnih platformi na svetu koja posluje u preko 160 zemalja i ima najmodernije bezbednosne sertifikate. Tvoji podaci o plaćanju biće maksimalno zaštićeni i 100% su poverljivi, što ti garantuje bezbednu i pouzdanu kupovinu.",
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
        q: "Da li je skupo započeti?",
        a: "Ne! Prirodna kozmetika zahteva jako niska početna ulaganja, a mi te učimo kako da iskoristiš lako dostupne materijale i započneš posao bez bespotrebnih troškova.",
      },
      {
        q: "Kada kurs tačno počinje?",
        a: "Čim kupiš kurs, odmah dobijaš link za pristup (i digitalne PDF knjige), što ti omogućava da odmah uđeš na platformu i prelaziš lekcije kada tebi najviše odgovara. Kurs ti ostaje na raspolaganju doživotno.",
      },
      {
        q: "Šta sve uključuje kurs?",
        a: "Kurs obuhvata doživotni pristup, e-knjige sa instrukcijama korak po korak, materijale za preuzimanje (PDF), tehničku podršku i zvanični sertifikat nakon što ga završiš.",
      },
      {
        q: "Da li izdajete sertifikat?",
        a: "Naravno, čim završiš kurs i pošalješ nam email sa zahtevom, šaljemo ti tvoj sertifikat.",
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