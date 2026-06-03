export interface PracticeArea {
  title: string;
  description: string;
  iconPath: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    title: "Criminal & Civil Advocacy",
    description:
      "Represent clients before police, prosecutors, and courts, focusing on trial preparation, strategic evidence management, and robust courtroom advocacy.",
    iconPath:
      "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V5a2 2 0 00-2-2H4a2 2 0 00-2 2v6a13.91 13.91 0 002.214 7.561l-.054.09m9.954-11.44A13.917 13.917 0 0115 11v6a2 2 0 01-2 2h-3a2 2 0 01-2-2v-6a13.916 13.916 0 012.753-9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 5V3",
  },
  {
    title: "Corporate Transactions & Governance",
    description:
      "Structuring, shareholder agreements, M&A, custom contracts, and board-level compliance to drive secure corporate growth.",
    iconPath:
      "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 00-2-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Restructuring & Insolvency",
    description:
      "PKPU, bankruptcy, creditor workouts, and asset recovery to maximize financial returns or preserve viable business operations.",
    iconPath:
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Alternative Dispute Mechanisms",
    description:
      "Disputes outside the courtroom through strategic mediation, arbitration, and settlement negotiations to secure enforceable commercial outcomes.",
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Employment Relations & Compliance",
    description:
      "HR policies, employment contracts, audits, and represent clients in bipartite, tripartite, and Industrial Relations Court disputes.",
    iconPath:
      "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Forensic Legal Services",
    description:
      "Internal fraud investigations, secure evidence, perform forensic reviews, and manage subsequent criminal or civil recovery actions.",
    iconPath:
      "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7",
  },
  {
    title: "Regulatory & Public-Private Advisory",
    description:
      "Policy development, regulatory drafting, feasibility assessments, and stakeholder engagement for infrastructure, transport, and energy sectors.",
    iconPath:
      "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
  },
  {
    title: "Natural Resources & Energy Projects",
    description:
      "Mining, oil & gas, and renewable energy projects through permitting, concessions, environmental clearances, and community consultations.",
    iconPath:
      "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z",
  },
  {
    title: "Transport Regulation & Logistics Law",
    description:
      "Carriage contracts, licensing, liability risk, and regulatory compliance for domestic and cross-border logistics operations.",
    iconPath:
      "M9 17a2 2 0 11-4 0 2 2 0 014 0zm11 0a2 2 0 11-4 0 2 2 0 014 0zm2-3H4V3a1 1 0 011-1h11a1 1 0 011 1v4h3a1 1 0 011 1v6z",
  },
  {
    title: "Privacy, Cybersecurity & Data Governance",
    description:
      "Data protection frameworks, privacy assessments, and incident response plans to ensure full compliance with data regulations.",
    iconPath:
      "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
];
