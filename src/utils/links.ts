import { BookBookmark, BookOpenText, Chalkboard, ClipboardText, House, Nut, Student, UsersThree } from "@/utils/icons";

const dashboardAside = [
  { name: "Menu", href: "/menu", icon: House },
  { name: "Turmas", href: "/class", icon: UsersThree },
  { name: "Alunos", href: "/students", icon: Student },
  { name: "Mentores", href: "/mentors", icon: Chalkboard },
  { name: "Conteúdo Educacional", href: "/educational-content", icon: BookBookmark },
  { name: "Instruções dos Mentores", href: "/instructions-mentors", icon: BookOpenText },
  { name: "Formulários", href: [
    { name: "Alunos", href: "/students-form" },
    { name: "Mentores", href: "/mentors-form" },
  ], icon: ClipboardText },
  { name: "Configurações", href: "/settings", icon: Nut },
];

const BreadCrumbsLink = [
  { name: "Menu", href: "/menu" },
  { name: "Turmas", href: "/class" },
  { name: "Alunos", href: "/students" },
  { name: "Mentores", href: "/mentors" },
  { name: "Conteúdo Educacional", href: "/educational-content" },
  { name: "Instruções dos Mentores", href: "/instructions-mentors" },
  { name: "Configurações", href: "/settings" },
  { name: "Nova atividade", href: "/new-class" },
  { name: "Editar", href: "/edit" },
  { name: "Módulo", href: "/modulo" },
  { name: "Semanas", href: "/weeks" },
  { name: "Formulário de Alunos", href: "/students-form" },
  { name: "Formulário de Mentores", href: "/mentors-form" },
  // { name: "Dinâmicas", href: "/dynamics" },
  // { name: "Detalhes da Dinâmica", href: "/dynamics/[week]" }
]


export {
  dashboardAside,
  BreadCrumbsLink
}