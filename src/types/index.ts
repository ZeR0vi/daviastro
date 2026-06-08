export interface FormulaItem {
  eq: string;
  name: string;
}

export interface ResearchItem {
  title: string;
  area: string;
  description: string;
  formula?: string;
  formulaLabel?: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  description: string;
  period: string;
}

export interface SkillGroup {
  title: string;
  color: "gold" | "blue" | "purple";
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
