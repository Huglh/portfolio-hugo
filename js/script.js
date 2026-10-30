(() => {
  'use strict';

  /* =========================================================
     DADOS (equivalentes aos arrays dos componentes .tsx)
  ========================================================= */
  const hardSkills = [
    { name: 'Java', icon: 'fa-code', desc: 'Aprendi Java na faculdade com foco em lógica, POO e desenvolvimento back-end' },
    { name: 'PL/SQL', icon: 'fa-database', desc: 'Aprendi PL/SQL no ensino médio e aprofundei na faculdade com procedures, triggers e cursores' },
    { name: 'HTML', icon: 'fa-code', desc: 'Estruturação semântica de páginas' },
    { name: 'CSS', icon: 'fa-code', desc: 'Layouts responsivos e animações' },
    { name: 'Kotlin', icon: 'fa-mobile-screen', desc: 'Aprendi Kotlin na faculdade, desenvolvendo aplicativos Android básicos e tendo meu primeiro contato com APIs' },
    { name: 'C#', icon: 'fa-terminal', desc: 'Aprendi os fundamentos da programação, lógica, algoritmos e estruturas de dados, formando uma base sólida para o desenvolvimento de software' },
    { name: 'PHP', icon: 'fa-code', desc: 'Back-end básico para sites dinâmicos' },
    { name: 'Python', icon: 'fa-terminal', desc: 'Scripts, automação e lógica geral' },
    { name: 'JavaScript', icon: 'fa-code', desc: 'Interatividade e lógica de front-end — usado para construir este próprio portfólio' }
  ];

  const softSkills = [
    { name: 'Organização', icon: 'fa-bullseye' },
    { name: 'Comunicação', icon: 'fa-comment' },
    { name: 'Proatividade', icon: 'fa-lightbulb' },
    { name: 'Trabalho em Equipe', icon: 'fa-users' },
    { name: 'Atendimento ao Usuários e Cliente', icon: 'fa-headset' }
  ];

  const experiences = [
    {
      title: 'Estágio - Suporte Técnico',
      institution: 'Procuradoria da República',
      description: 'Prestando suporte técnico e soluções em TI',
      period: 'Set/2024 - Atual'
    },
    {
      title: 'Estágio - Suporte Técnico',
      institution: 'Clínica do Micro',
      description: 'Atendimento ao cliente e manutenção de máquinas.',
      period: 'Set/2023 - Jan/2024'
    }
  ];

  const education = [
    {
      title: 'Sistema de Informação',
      institution: 'Faculdade Cotemig',
      description: 'Graduação em andamento',
      period: '2023 - 2027'
    },
    {
      title: 'Técnico em Informática',
      institution: 'Colégio Cotemig',
      description: 'Formação técnica completa',
      period: 'Concluído'
    }
  ];

  const certificates = [
    {
      title: 'Code Club Brasil Certified',
      issuer: 'Code Club Brasil',
      date: 'Nov/2022',
      url: 'https://codeclub.org/en/'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/Huglh', color: '#E6E6E6', desc: 'Repositórios dos meus projetos e códigos.' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/hugo-thiago-lima-menezes/', color: '#2B4C7E', desc: 'Trajetória profissional e conexões.' },
    { name: 'E-mail', icon: 'fa-solid fa-envelope', url: 'mailto:thiagohugo009@gmail.com', color: '#E49B0F', desc: 'Fale comigo diretamente por e-mail.' }
  ];

  const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  /* =========================================================
     RENDERIZAÇÃO DINÂMICA
  ========================================================= */
  function renderSkills() {
    document.getElementById('softSkills').innerHTML = softSkills.map(s => `
      <div class="skill-chip">
        <i class="fa-solid ${s.icon}"></i>
        <span>${esc(s.name)}</span>
      </div>
    `).join('');

    document.getElementById('hardSkills').innerHTML = hardSkills.map((s, i) => `
      <span class="badge" data-skill-index="${i}">
        <i class="fa-solid ${s.icon}"></i>${esc(s.name)}
      </span>
    `).join('');
  }

  function timelineItem(item, isEducation) {
    return `
      <div class="timeline-item ${isEducation ? 'is-education' : ''}">
        <div class="timeline-period">
          <i class="fa-solid fa-calendar-days"></i>
          <span>${esc(item.period)}</span>
        </div>
        <h4>${esc(item.title)}</h4>
        <p class="timeline-inst">${esc(item.institution)}</p>
        <p class="timeline-desc">${esc(item.description)}</p>
      </div>
    `;
  }

  function renderExperience() {
    document.getElementById('experienceList').innerHTML =
      experiences.map(e => timelineItem(e, false)).join('');
    document.getElementById('educationList').innerHTML =
      education.map(e => timelineItem(e, true)).join('');
  }

  /* =========================================================
     CERTIFICADOS (paginação)
  ========================================================= */
  const CERTS_PER_PAGE = 3;
  let certsCurrentPage = 1;

  function renderCertificates() {
    const totalPages = Math.ceil(certificates.length / CERTS_PER_PAGE);
    certsCurrentPage = Math.min(Math.max(1, certsCurrentPage), totalPages);
    const start = (certsCurrentPage - 1) * CERTS_PER_PAGE;
    const pageItems = certificates.slice(start, start + CERTS_PER_PAGE);

    document.getElementById('certificatesList').innerHTML = pageItems.map(c => `
      <div class="card hud-card cert-card">
        <div class="cert-head">
          <div class="cert-icon"><i class="fa-solid fa-award"></i></div>
          <div>
            <h4>${esc(c.title)}</h4>
            <p class="cert-issuer">${esc(c.issuer)}</p>
          </div>
        </div>
        <div class="cert-meta">
          <div class="cert-date"><i class="fa-solid fa-calendar-days"></i><span>${esc(c.date)}</span></div>
          ${c.credentialId ? `<div class="cert-id">ID: ${esc(c.credentialId)}</div>` : ''}
        </div>
        ${c.url ? `
          <button class="btn btn--outline-amber btn--block" data-link="${esc(c.url)}">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Ver Certificado
          </button>` : ''}
      </div>
    `).join('');

    renderCertPagination(totalPages);
  }

  function renderCertPagination(totalPages) {
    const nav = document.getElementById('certificatesPagination');
    if (!nav || totalPages <= 1) { if (nav) nav.innerHTML = ''; return; }

    let html = `
      <button class="pagination-btn" data-page="${certsCurrentPage - 1}" ${certsCurrentPage === 1 ? 'disabled' : ''} aria-label="Página anterior">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    `;
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="pagination-btn ${i === certsCurrentPage ? 'is-active' : ''}" data-page="${i}" aria-label="Página ${i}">${i}</button>`;
    }
    html += `
      <button class="pagination-btn" data-page="${certsCurrentPage + 1}" ${certsCurrentPage === totalPages ? 'disabled' : ''} aria-label="Próxima página">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    `;
    nav.innerHTML = html;

    nav.querySelectorAll('.pagination-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        certsCurrentPage = Number(btn.dataset.page);
        renderCertificates();
        document.getElementById('certificates').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* =========================================================
     POPOVER: proficiência da hard skill (abre ao clicar no badge)
  ========================================================= */
  function initSkillPopover() {
    const popover = document.getElementById('skillPopover');
    const title = document.getElementById('skillPopoverTitle');
    const value = document.getElementById('skillPopoverValue');

    function open(badge) {
      const skill = hardSkills[Number(badge.dataset.skillIndex)];
      if (!skill) return;

      title.textContent = skill.name;
      value.textContent = skill.desc;

      const rect = badge.getBoundingClientRect();
      popover.hidden = false;
      const top = Math.min(rect.bottom + 8, window.innerHeight - 140);
      const left = Math.min(rect.left, window.innerWidth - 236);
      popover.style.top = `${Math.max(8, top)}px`;
      popover.style.left = `${Math.max(8, left)}px`;
    }

    function close() { popover.hidden = true; }

    document.addEventListener('click', (e) => {
      const badge = e.target.closest('[data-skill-index]');
      if (badge) { open(badge); return; }
      if (!e.target.closest('#skillPopover')) close();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    window.addEventListener('scroll', close, true);
  }

  function renderSocialLinks() {
    document.getElementById('socialList').innerHTML = socialLinks.map((link, i) => `
      <a class="social-link" href="${esc(link.url)}" target="_blank" rel="noopener noreferrer" data-social-index="${i}">
        <span class="social-icon" style="background:${link.color}20;">
          <i class="${link.icon}" style="color:${link.color};"></i>
        </span>
        <span>
          <span class="social-name" style="display:block;">${esc(link.name)}</span>
          <span class="social-url">${esc(link.url.replace('https://', '').replace('mailto:', ''))}</span>
        </span>
      </a>
    `).join('');
  }

  /* =========================================================
     HOVER CARD: preview dos links sociais (desktop)
  ========================================================= */
  function initSocialHoverCard() {
    const card = document.getElementById('socialHoverCard');
    const iconEl = document.getElementById('hoverCardIcon');
    const nameEl = document.getElementById('hoverCardName');
    const descEl = document.getElementById('hoverCardDesc');
    let hideTimer = null;

    document.addEventListener('mouseover', (e) => {
      const link = e.target.closest('[data-social-index]');
      if (!link) return;
      const social = socialLinks[Number(link.dataset.socialIndex)];
      if (!social) return;

      clearTimeout(hideTimer);
      iconEl.innerHTML = `<i class="${social.icon}" style="color:${social.color};"></i>`;
      nameEl.textContent = social.name;
      descEl.textContent = social.desc;

      const rect = link.getBoundingClientRect();
      card.hidden = false;
      card.style.top = `${rect.top}px`;
      card.style.left = `${Math.min(rect.right + 12, window.innerWidth - 256)}px`;
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('[data-social-index]') || e.target.closest('#socialHoverCard')) {
        hideTimer = setTimeout(() => { card.hidden = true; }, 150);
      }
    });
  }

  /* =========================================================
     DROPDOWN MENU: Compartilhar perfil
  ========================================================= */
  function initShareDropdown() {
    const trigger = document.getElementById('shareTrigger');
    const menu = document.getElementById('shareMenu');
    if (!trigger || !menu) return;

    const close = () => { menu.hidden = true; trigger.setAttribute('aria-expanded', 'false'); };
    const open = () => { menu.hidden = false; trigger.setAttribute('aria-expanded', 'true'); };

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.hidden ? open() : close();
    });
    document.addEventListener('click', (e) => { if (!e.target.closest('.dropdown')) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    menu.querySelectorAll('.dropdown-item').forEach((item) => {
      item.addEventListener('click', () => {
        const pageUrl = window.location.href;
        const action = item.dataset.share;

        if (action === 'copy') {
          navigator.clipboard?.writeText(pageUrl)
            .then(() => showToast('Link copiado para a área de transferência!', 'success'))
            .catch(() => showToast('Não foi possível copiar o link.', 'error'));
        } else if (action === 'email') {
          window.location.href = `mailto:?subject=${encodeURIComponent('Confira meu portfólio')}&body=${encodeURIComponent(pageUrl)}`;
        } else if (action === 'whatsapp') {
          window.open(`https://wa.me/?text=${encodeURIComponent('Confira meu portfólio: ' + pageUrl)}`, '_blank');
        }
        close();
      });
    });
  }

  /* =========================================================
     SWITCH: alternar tema claro/escuro
  ========================================================= */
  function initThemeSwitch() {
    const sw = document.getElementById('themeSwitch');
    if (!sw) return;
    const root = document.documentElement;
    const STORAGE_KEY = 'portfolio-theme';

    function apply(theme) {
      root.setAttribute('data-theme', theme);
      sw.setAttribute('aria-checked', String(theme === 'light'));
    }

    let saved = 'dark';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'dark'; } catch (err) { /* localStorage indisponível */ }
    apply(saved);

    function toggle() {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      apply(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (err) { /* localStorage indisponível */ }
    }

    sw.addEventListener('click', toggle);
    sw.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); }
    });
  }

  /* =========================================================
     SELECT: assunto do formulário de contato
  ========================================================= */
  function initSubjectSelect() {
    const trigger = document.getElementById('subjectTrigger');
    const content = document.getElementById('subjectContent');
    const valueEl = document.getElementById('subjectValue');
    const hiddenInput = document.getElementById('subject');
    if (!trigger) return;

    const close = () => { content.hidden = true; trigger.setAttribute('aria-expanded', 'false'); };
    const open = () => { content.hidden = false; trigger.setAttribute('aria-expanded', 'true'); };

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      content.hidden ? open() : close();
    });
    document.addEventListener('click', (e) => { if (!e.target.closest('.select')) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    content.querySelectorAll('.select-item').forEach((item) => {
      item.addEventListener('click', () => {
        valueEl.textContent = item.dataset.value;
        hiddenInput.value = item.dataset.value;
        content.querySelectorAll('.select-item').forEach((i) => i.classList.remove('is-selected'));
        item.classList.add('is-selected');
        close();
      });
    });
  }

  /* Delega cliques em botões "Ver Código / Demo / Certificado" (abre em nova aba) */
  function bindDynamicLinks() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-link]');
      if (btn) window.open(btn.dataset.link, '_blank', 'noopener,noreferrer');
    });
  }

  /* =========================================================
     COMMAND PALETTE / "CONSOLE" (substitui cmdk)
  ========================================================= */
  function initCommandPalette() {
    const overlay = document.getElementById('cmdOverlay');
    const input = document.getElementById('cmdInput');
    const list = document.getElementById('cmdList');
    const trigger = document.getElementById('cmdTrigger');

    const commands = [
      { group: 'Navegação', icon: 'fa-solid fa-house', label: 'Ir para Início', action: () => goTo('home') },
      { group: 'Navegação', icon: 'fa-solid fa-user', label: 'Ir para Sobre', action: () => goTo('about') },
      { group: 'Navegação', icon: 'fa-solid fa-briefcase', label: 'Ir para Experiência', action: () => goTo('experience') },
      { group: 'Navegação', icon: 'fa-solid fa-award', label: 'Ir para Certificados', action: () => goTo('certificates') },
      { group: 'Navegação', icon: 'fa-solid fa-envelope', label: 'Ir para Contato', action: () => goTo('contact') },
      { group: 'Ações', icon: 'fa-solid fa-download', label: 'Baixar CV', action: () => document.getElementById('downloadCvBtn').click() },
      { group: 'Links', icon: 'fa-brands fa-github', label: 'Abrir GitHub', action: () => window.open('https://github.com/Huglh', '_blank') },
      { group: 'Links', icon: 'fa-brands fa-linkedin', label: 'Abrir LinkedIn', action: () => window.open('https://linkedin.com/in/hugo-thiago-lima-menezes', '_blank') },
      { group: 'Curiosidade', icon: 'fa-solid fa-gamepad', label: 'gg', action: () => showToast('gg wp — nas horas vagas eu jogo Counter-Strike 🎮', 'success') }
    ];

    function goTo(id) {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }

    function renderList(filter = '') {
      const q = filter.trim().toLowerCase();
      const filtered = commands.filter((c) => c.label.toLowerCase().includes(q));

      if (!filtered.length) {
        list.innerHTML = '<div class="cmd-empty">Nenhum comando encontrado.</div>';
        return;
      }

      let lastGroup = '';
      list.innerHTML = filtered.map((c, i) => {
        const groupHtml = c.group !== lastGroup ? `<div class="cmd-group-label">${esc(c.group)}</div>` : '';
        lastGroup = c.group;
        return `${groupHtml}
          <div class="cmd-item ${i === 0 ? 'is-active' : ''}" data-index="${i}">
            <i class="${c.icon}"></i>
            <span>${esc(c.label)}</span>
          </div>`;
      }).join('');

      list.querySelectorAll('.cmd-item').forEach((el) => {
        el.addEventListener('click', () => {
          filtered[Number(el.dataset.index)].action();
          close();
        });
      });
    }

    function open() {
      overlay.hidden = false;
      input.value = '';
      renderList('');
      setTimeout(() => input.focus(), 10);
      document.body.style.overflow = 'hidden';
    }

    function close() {
      overlay.hidden = true;
      document.body.style.overflow = '';
    }

    trigger.addEventListener('click', open);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    input.addEventListener('input', () => renderList(input.value));

    document.addEventListener('keydown', (e) => {
      const isK = e.key === 'k' || e.key === 'K';
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        overlay.hidden ? open() : close();
      }
      if (e.key === 'Escape' && !overlay.hidden) close();
    });
  }

  /* =========================================================
     ALERT DIALOG: Baixar CV
  ========================================================= */
  function initCvDialog() {
    const overlay = document.getElementById('cvDialogOverlay');
    const cancelBtn = document.getElementById('cvDialogCancel');
    const confirmLink = document.getElementById('cvDialogConfirm');

    const open = () => { overlay.hidden = false; document.body.style.overflow = 'hidden'; };
    const close = () => { overlay.hidden = true; document.body.style.overflow = ''; };

    document.getElementById('downloadCvBtn').addEventListener('click', open);
    cancelBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) close(); });

    confirmLink.addEventListener('click', () => {
      showToast('Download iniciado!', 'success');
      close();
    });
  }

  /* =========================================================
     HEADER: estado de scroll + menu mobile + scroll suave
  ========================================================= */
  function initHeader() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerClose = document.getElementById('drawerClose');
    const cmdTriggerMobile = document.getElementById('cmdTriggerMobile');

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const openDrawer = () => {
      drawerOverlay.hidden = false;
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    const closeDrawer = () => {
      drawerOverlay.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', (e) => { if (e.target === drawerOverlay) closeDrawer(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !drawerOverlay.hidden) closeDrawer(); });
    drawerOverlay.querySelectorAll('[data-scroll]').forEach((el) => el.addEventListener('click', closeDrawer));
    cmdTriggerMobile.addEventListener('click', () => {
      closeDrawer();
      document.getElementById('cmdTrigger').click();
    });

    document.querySelectorAll('[data-scroll]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('data-scroll');
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  /* =========================================================
     REVEAL ON SCROLL (substitui useInView / motion do Framer Motion)
  ========================================================= */
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.delay ? Number(el.dataset.delay) : 0;
          setTimeout(() => el.classList.add('is-visible'), delay);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    items.forEach((el) => observer.observe(el));
  }

  /* =========================================================
     TOASTS (substitui a lib "sonner")
  ========================================================= */
  function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast--out');
      toast.addEventListener('animationend', () => toast.remove(), { once: true });
    }, 3500);
  }

  /* =========================================================
     FORMULÁRIO DE CONTATO
  ========================================================= */
  // Endpoint do Formspree (ou serviço equivalente) para envio silencioso,
  // em segundo plano, sem abrir o cliente de e-mail do visitante.
  //
  // Como obter o seu:
  //   1. Crie uma conta gratuita em https://formspree.io
  //   2. Clique em "+ New Form" e coloque o e-mail de destino
  //   3. Copie a URL gerada (algo como "https://formspree.io/f/xxxxxxxx")
  //   4. Cole essa URL na constante abaixo, no lugar do placeholder
  const FORM_ENDPOINT = 'https://formspree.io/f/xeebbkew';

  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const submitBtnLabel = submitBtn ? submitBtn.innerHTML : '';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      [form.name, form.email, form.message].forEach((f) => f.closest('.field').classList.remove('invalid'));

      if (!name || !email || !message) {
        if (!name) form.name.closest('.field').classList.add('invalid');
        if (!email) form.email.closest('.field').classList.add('invalid');
        if (!message) form.message.closest('.field').classList.add('invalid');
        showToast('Por favor, preencha todos os campos!', 'error');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        form.email.closest('.field').classList.add('invalid');
        showToast('Digite um e-mail válido.', 'error');
        return;
      }

      if (FORM_ENDPOINT.includes('SEU_ID_AQUI')) {
        showToast('Formulário ainda não configurado (falta o endpoint do Formspree).', 'error');
        console.warn('[Contato] Defina FORM_ENDPOINT em script.js com a URL do seu formulário Formspree.');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
      }

      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message })
        });

        if (!response.ok) throw new Error('Falha no envio');

        showToast('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
        form.reset();

        // Reset visual do select customizado de "Assunto" (form.reset() só
        // limpa o input escondido, não o texto exibido no botão).
        const subjectValueEl = document.getElementById('subjectValue');
        const subjectItems = document.querySelectorAll('#subjectContent .select-item');
        if (subjectValueEl) subjectValueEl.textContent = 'Selecione um assunto';
        subjectItems.forEach((i) => i.classList.remove('is-selected'));
      } catch (err) {
        showToast('Não foi possível enviar agora. Tente novamente em instantes.', 'error');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = submitBtnLabel;
        }
      }
    });
  }

  /* =========================================================
     FOOTER: ano dinâmico
  ========================================================= */
  function initFooterYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
  }

  /* =========================================================
     SKELETON: estado de carregamento breve (cards de projeto/certificado)
  ========================================================= */
  function showSkeleton(containerId, count) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = Array.from({ length: count }).map(() => `
      <div class="card hud-card skeleton-card" data-slot="skeleton">
        <div class="skeleton skeleton-line skeleton-line--icon"></div>
        <div class="skeleton skeleton-line skeleton-line--title"></div>
        <div class="skeleton skeleton-line"></div>
        <div class="skeleton skeleton-line skeleton-line--short"></div>
      </div>
    `).join('');
  }

  /* =========================================================
     INIT
  ========================================================= */
  document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderExperience();
    renderSocialLinks();
    bindDynamicLinks();

    initThemeSwitch();
    initHeader();
    initReveal();
    initContactForm();
    initSubjectSelect();
    initSkillPopover();
    initSocialHoverCard();
    initShareDropdown();
    initCommandPalette();
    initCvDialog();
    initFooterYear();

    // Skeleton breve antes de exibir os Certificados
    showSkeleton('certificatesList', 3);
    setTimeout(() => {
      renderCertificates();
    }, 450);
  });
})();
