import type { EducationItem, FormulaItem, NavLink, ResearchItem, SkillGroup } from "../types";

export const navLinks: NavLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Educação", href: "#educacao" },
  { label: "Pesquisa", href: "#pesquisa" },
  { label: "Habilidades", href: "#habilidades" },
];

export const heroStats = [
  { num: "4k", label: "Instagram" },
  { num: "1k",  label: "YouTube" },
  { num: "1K", label: "TikTok" },
  { num: "2M", label: "Views" },
];

export const tickerFormulas: string[] = [
  "F = ma",
  "E = mc²",
  "iℏ ∂ψ/∂t = Ĥψ",
  "∇·E = ρ/ε₀",
  "γ = 1/√(1−v²/c²)",
  "ΔxΔp ≥ ℏ/2",
  "S = k·ln(Ω)",
  "λ = h/p",
];

export const tickerLabels: string[] = [
  "Newton",
  "Einstein",
  "Schrödinger",
  "Maxwell",
  "Lorentz",
  "Heisenberg",
  "Boltzmann",
  "de Broglie",
];

export const formulaCards: FormulaItem[] = [
  { eq: "E = mc²",                     name: "Equivalência Massa-Energia" },
  { eq: "iℏ ∂ψ/∂t = Ĥψ",            name: "Equação de Schrödinger" },
  { eq: "ΔxΔp ≥ ℏ/2",               name: "Princípio da Incerteza" },
  { eq: "Gμν + Λgμν = 8πG/c⁴ · Tμν", name: "Relatividade Geral — Einstein" },
];

export const educationItems: EducationItem[] = [
  {
    degree: "Bacharelado em Física",
    institution: "Universidade Federal · Minas Gerais, BR",
    description: "Cursando.",
    period: "2025 — Presente",
  },
  {
    degree: "Ensino Médio",
    institution: "Escola Estadual · Minas Gerais, BR",
    description: "Participação em olimpíadas de Física e Matemática.",
    period: "",
  },
];

export const researchItems: ResearchItem[] = [
  {
    title: "Mecânica Quântica e Fundamentos da Física",
    area: "Física Teórica",
    description:
      "Estudo aprofundado do formalismo de Dirac e da equação de Schrödinger, com foco nos princípios de superposição, entrelaçamento quântico e interpretações da função de onda.",
    formula: "Ĥ|ψ⟩ = E|ψ⟩",
    formulaLabel: "Equação de autovalor",
    tags: ["Mecânica Quântica", "Formalismo de Dirac", "Espaço de Hilbert"],
  },
  {
    title: "Relatividade Especial e Geral",
    area: "Gravitação & Cosmologia",
    description:
      "Investigação da geometria do espaço-tempo curvo e das consequências das equações de campo de Einstein para cosmologia e buracos negros.",
    formula: "ds² = −c²dt² + a(t)²[dr²/(1−kr²) + r²dΩ²]",
    formulaLabel: "Métrica FLRW — Cosmologia",
    tags: ["Relatividade Geral", "Cosmologia", "Tensor de Einstein"],
  },
  {
    title: "Eletrodinâmica Clássica",
    area: "Física Clássica",
    description:
      "Estudo das equações de Maxwell no vácuo e em meios materiais, propagação de ondas eletromagnéticas e radiação de dipolo.",
    formula: "∇ × B = μ₀J + μ₀ε₀ ∂E/∂t",
    formulaLabel: "4ª Equação de Maxwell — Ampère-Maxwell",
    tags: ["Equações de Maxwell", "Ondas EM", "Eletrodinâmica"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programação",
    color: "gold",
    skills: ["Python", "NumPy / SciPy", "Matplotlib", "HTML / CSS", "LaTeX"],
  },
  {
    title: "Física & Matemática",
    color: "blue",
    skills: ["Cálculo Diferencial e Integral", "Geometria Analítica", "Álgebra Linear", "Física I", "Física II"],
  },
  {
    title: "Idiomas & Soft Skills",
    color: "purple",
    skills: ["Português — Nativo", "Inglês — Intermediário", "Escrita Acadêmica", "Pensamento Analítico"],
  },
];
