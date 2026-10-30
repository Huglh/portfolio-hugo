# Portfólio — Hugo Thiago Lima Menezes

Portfólio pessoal em **HTML, CSS e JavaScript puro** (sem frameworks, sem build step).

## Onde editar o conteúdo

Todo o conteúdo dinâmico (que aparece em cards/listas) vive em `js/script.js`, no topo do
arquivo, na seção `DADOS`:

| Array           | O que controla                                  |
|-----------------|--------------------------------------------------|
| `hardSkills`    | Chips de "Hard Skills" (Sobre Mim)                |
| `softSkills`    | Chips de "Soft Skills" (Sobre Mim)                 |
| `experiences`   | Cards de "Experiência" (Formação & Experiência)   |
| `education`     | Cards de "Formação" (Formação & Experiência)      |
| `certificates`  | Cards de "Licenças & Certificados"                |
| `socialLinks`   | Links da seção "Conecte-se comigo" (Contato)      |

Textos fixos (nome, cargo, tagline do Hero, textos das seções) ficam direto no `index.html`.

## Formulário de contato

O site é 100% estático (sem backend/servidor), então o envio é feito em segundo plano
através de um serviço externo gratuito, o **[Formspree](https://formspree.io)** —
sem abrir nenhum cliente de e-mail (Outlook, Gmail etc.) no navegador do visitante.

O endpoint já está configurado em `js/script.js`, na constante `FORM_ENDPOINT` (dentro
de `initContactForm()`). Se um dia precisar trocar o e-mail de destino ou criar um novo
formulário no Formspree, basta atualizar essa mesma constante com a nova URL.

## Recursos incluídos

- Tema claro/escuro com persistência em `localStorage`
- Command Palette / "Console" (atalho `Ctrl+K`)
- Menu mobile em drawer lateral
- Paginação de certificados
- Popover de proficiência ao clicar numa Hard Skill
- Hover card ao passar o mouse nos links sociais
- Diálogo de confirmação para download do CV
- Animações de entrada ao rolar a página (`IntersectionObserver`)
