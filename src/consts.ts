/**
 * Single source of truth for site content.
 * Update copy here and it propagates to every component/page.
 */

export const SITE = {
  name: 'Fidelity Healthcare Group',
  shortName: 'Fidelity HCG',
  url: 'https://www.fidelitymd.com',
  domain: 'fidelitymd.com',
  phone: '404.820.3413',
  phoneHref: 'tel:4048203413',
  email: 'info@fidelitymd.com',
  location: 'Atlanta, GA',
  tagline: 'In-Community Student Health',
  description:
    'In-community sports physicals and mental health & wellness support for schools, districts, and families.',
} as const;

/**
 * Logo artwork. To use the official file instead of the built-in SVG:
 *   1. Drop your files in /public  →  fidelity-logo.png (full color lockup),
 *      and optionally fidelity-logo-white.png (white knockout for dark
 *      backgrounds like the footer) and fidelity-mark.png (shield only).
 *   2. Set `useImage: true` below.
 * Any format works (png/svg/webp) — just match the filenames or edit paths.
 */
export const LOGO = {
  useImage: true,
  // Official transparent vector lockup. On dark backgrounds it is rendered
  // as a white knockout (see Logo.astro `.knockout`).
  // Paths are relative to the site base (prefixed with BASE_URL in Logo.astro).
  src: 'fidelity-logo.svg',
  srcLight: 'fidelity-logo.svg',
  mark: 'fidelity-logo.svg',
} as const;

export const NAV = [
  { label: 'Community Services', href: '#services' },
  { label: 'Wellness Screener', href: '#screener' },
  { label: 'Founders', href: '#founders' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SERVICES = [
  {
    key: 'physicals',
    tone: 'navy' as const,
    title: 'Sports Physicals',
    body:
      'Fast, thorough pre-participation physicals that clear student athletes to compete — delivered on-site at your school or community event.',
    points: [
      'On-site, high-volume clinics',
      'Standardized clearance documentation',
      'Fast turnaround for athletic departments',
    ],
  },
  {
    key: 'wellness',
    tone: 'blue' as const,
    title: 'Mental Health Assessment & Wellness Framework',
    body:
      'Evidence-based screening plus a structured wellness framework that helps counseling teams spot needs early and connect students to the right support.',
    points: [
      'Validated wellness screening',
      'Referral support framework for counselors',
      'District-level insights & reporting',
    ],
  },
] as const;

export const SCREENER_FEATURES = [
  {
    title: 'Guided, student-friendly questions',
    body: 'Plain-language prompts students actually understand.',
  },
  {
    title: 'Instant, consistent scoring',
    body: 'Every student assessed against the same framework.',
  },
  {
    title: 'Clear referral pathways',
    body: 'Flagged students routed to counselor follow-up.',
  },
] as const;

export const FOUNDERS = [
  {
    name: 'Adriana Glen',
    role: 'Co-Founder',
    bio: 'Short founder bio placeholder — background, mission, and what drives their work in student health.',
    img: 'founders/AdrianaGlen_FidelityHeadshot.png',
  },
  {
    name: 'Qaran Glen',
    role: 'Co-Founder',
    bio: 'Short founder bio placeholder — background, mission, and what drives their work in student health.',
    img: 'founders/QaranGlen_FidelityHeadshot.png',
  },
] as const;

export const TESTIMONIALS = [
  {
    initials: 'MC',
    quote:
      "I've been a school counselor for many years, and I truly believed I knew which students were struggling. One student's assessment completely changed my perspective. On paper, this student was thriving — a leader, involved in multiple activities, academically successful. But the Wellness Tool revealed severe depression. When I met with the student, they shared just how much they had been silently carrying. That conversation reminded me that we can't always see what students are experiencing. This tool helped us identify a student who needed support before it became a crisis.",
    name: 'Middle School Counselor',
    detail: '',
  },
  {
    initials: 'P',
    quote:
      "As a parent, I appreciated that the assessment looked beyond academics and athletics to focus on my child's overall well-being. When the school reached out, I realized my child had been hiding their struggles from us. Because concerns were identified early, we were able to get help before the situation became much worse. I'm grateful our school chose to make mental wellness just as important as physical health.",
    name: 'Parent of a High School Student',
    detail: '',
  },
] as const;

export const FAQ_GROUPS = [
  {
    category: 'Sports Physicals',
    items: [
      {
        q: 'How does an on-site sports physical day work?',
        a: 'Our team works with your school to coordinate scheduling, communication, and the physical day itself. We strive to make the process efficient for students, families, and school staff while minimizing disruption to the school day. Every school is different — contact us to discuss the best approach for your campus.',
      },
      {
        q: 'Who can participate?',
        a: 'Our on-site physicals are available for middle schools, high schools, private schools, charter schools, and youth athletic organizations.',
      },
      {
        q: 'When should we schedule sports physicals?',
        a: 'Most schools schedule physicals before the start of each athletic season or during the summer. We work with your calendar to determine the best time for your students and programs.',
      },
      {
        q: 'What does a sports physical include?',
        a: 'Our providers perform a comprehensive pre-participation evaluation designed to identify potential health concerns and determine whether a student is medically cleared to participate in athletics.',
      },
      {
        q: 'Do parents need to be present?',
        a: "Requirements vary by organization and state regulations. We'll help your school communicate exactly what documentation and permissions are needed before physical day. Parents can typically fill out and sign paperwork beforehand and do not need to be present for the actual physical examination.",
      },
      {
        q: 'How many students can you accommodate?',
        a: "Our process is scalable. Whether your school has 50 athletes or 500+, we'll work with you to create an efficient plan.",
      },
      {
        q: 'How much does it cost?',
        a: 'Pricing depends on the size of your organization and the services requested. Contact us for a customized quote.',
      },
      {
        q: 'Why choose on-site physicals instead of sending families to individual providers?',
        a: 'On-site physicals save families time, reduce administrative burden for schools, and help ensure more students complete their required physicals before participation deadlines.',
      },
    ],
  },
  {
    category: 'Mental Wellness Assessments',
    items: [
      {
        q: 'What is the Fidelity Wellness Tool?',
        a: 'The Fidelity Wellness Tool is a structured mental wellness assessment that helps schools better understand student well-being and identify students who may benefit from additional support.',
      },
      {
        q: 'Why should schools conduct mental wellness assessments?',
        a: 'Schools have long recognized the importance of physical health through annual sports physicals. Mental wellness deserves the same proactive attention. Early identification can help schools connect students with appropriate resources before concerns become crises.',
      },
      {
        q: 'Is this a mental health diagnosis?',
        a: '<strong>No.</strong> The Wellness Tool is not a diagnostic evaluation. It is a screening resource designed to help schools identify students who may benefit from additional conversation, support, or referral.',
      },
      {
        q: 'How long does the assessment take?',
        a: 'Most students complete the assessment in just a few minutes, making it easy to administer with minimal disruption to the school day.',
      },
      {
        q: 'Is student information confidential?',
        a: '<strong>Yes.</strong> Protecting student privacy is a priority. We work closely with each school to ensure the assessment process and reporting align with applicable privacy requirements and district policies.',
      },
      {
        q: 'What happens after students complete the assessment?',
        a: 'Schools receive organized reporting that helps identify trends and students who may benefit from additional follow-up. Fidelity Healthcare Group works with each school to determine the most appropriate next steps based on available resources and established protocols.',
      },
      {
        q: 'Will this create more work for our counselors?',
        a: 'Our goal is exactly the opposite. The Wellness Tool helps schools prioritize students who may need immediate attention, allowing counselors to focus their time where it can have the greatest impact.',
      },
      {
        q: 'Can this be customized for our district?',
        a: '<strong>Yes.</strong> We work collaboratively with schools and districts to implement the assessment in a way that aligns with their goals, resources, and existing student support processes.',
      },
      {
        q: 'How do we get started?',
        a: "Every school is different, which is why we begin with a conversation. We'll learn about your district's goals, explain the implementation process, and recommend an approach that fits your needs. Schedule a consultation to learn how the Wellness Tool could support your school.",
      },
      {
        q: 'Why does Fidelity Healthcare Group offer both sports physicals and mental wellness assessments?',
        a: "We believe schools shouldn't have to choose between supporting students' physical health and their mental well-being. Just as annual sports physicals help ensure students are physically ready to participate, proactive mental wellness assessments help schools identify emotional needs early and connect students with appropriate support. Together, these services create a more complete approach to <strong>Whole Student Health.</strong>",
      },
    ],
  },
] as const;

export const FAQ_CLOSING = {
  title: "Didn't see your question?",
  body:
    "Every school and district has unique needs. We'd love to learn more about your goals, answer your questions, and discuss how Fidelity Healthcare Group can support your students.",
  cta: 'Schedule a Consultation',
} as const;
