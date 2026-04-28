(function() {
  emailjs.init("YOUR_PUBLIC_KEY");

  // — page meta
  document.title = DATA.name + " · AI/ML Engineer";
  document.getElementById("footer-name").textContent = DATA.name;
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("nav-initials").textContent = DATA.initials;
  document.getElementById("nav-name-short").textContent = " " + DATA.name.split(" ")[0];
  document.getElementById("nav-resume").href = DATA.resumeUrl;
  document.getElementById("btn-resume").href = DATA.resumeUrl;

  // — hero
  document.getElementById("hero-name").textContent = DATA.name;
  document.getElementById("hero-tagline").textContent = DATA.tagline;

  const statsEl = document.getElementById("hero-stats");
  DATA.stats.forEach(s => {
    statsEl.innerHTML += `
      <div class="stat-item">
        <div class="stat-num">${s.num.replace(/(\d+)/g,'<span>$1</span>')}</div>
        <div class="stat-label">${s.label}</div>
      </div>`;
  });

  // — typing animation
  const typedEl = document.getElementById("typed-text");
  let ri = 0, ci = 0, del = false;
  function tick() {
    const role = DATA.roles[ri];
    if (!del) {
      typedEl.textContent = role.slice(0, ++ci);
      if (ci === role.length) { del = true; setTimeout(tick, 1800); return; }
    } else {
      typedEl.textContent = role.slice(0, --ci);
      if (ci === 0) { del = false; ri = (ri+1) % DATA.roles.length; setTimeout(tick, 300); return; }
    }
    setTimeout(tick, del ? 45 : 85);
  }
  tick();

  // — about
  const aboutText = document.getElementById("about-text");
  DATA.about.paragraphs.forEach(p => {
    aboutText.innerHTML += `<p>${p}</p>`;
  });
  const hlEl = document.getElementById("highlights-list");
  DATA.about.highlights.forEach(h => {
    hlEl.innerHTML += `<div class="highlight-pill"><div class="pill-dot"></div>${h}</div>`;
  });
  const achEl = document.getElementById("achieve-list");
  DATA.about.achievements.forEach(a => {
    achEl.innerHTML += `<div class="achieve-item"><span class="achieve-icon">${a.icon}</span>${a.text}</div>`;
  });

  // — skills
  const sg = document.getElementById("skills-grid");
  DATA.skills.forEach(cat => {
    const items = cat.items.map(s => `
      <div class="skill-item">
        <div class="skill-row">
          <span class="skill-name">${s.name}</span>
          <span class="skill-pct">${s.level}%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill${s.amber?' amber-fill':''}" data-level="${s.level}"></div></div>
      </div>`).join('');
    sg.innerHTML += `
      <div class="skill-cat">
        <div class="skill-cat-title"><span class="cat-icon">${cat.icon}</span>${cat.category}</div>
        ${items}
      </div>`;
  });

  // — experience timeline
  const tl = document.getElementById("timeline");
  DATA.experience.forEach(e => {
    const bullets = e.bullets.map(b=>`<li>${b}</li>`).join('');
    const tags = e.tags.map(t=>`<span class="tl-tag">${t}</span>`).join('');
    tl.innerHTML += `
      <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-period">${e.period}</div>
        <div class="tl-role">${e.role}</div>
        <div class="tl-company">${e.company}</div>
        <p class="tl-desc">${e.desc}</p>
        <ul class="tl-bullets">${bullets}</ul>
        <div class="tl-tags">${tags}</div>
      </div>`;
  });

  // — projects: collect unique categories
  const cats = ['all', ...new Set(DATA.projects.map(p=>p.category))];
  const catLabels = { all:'All', nlp:'NLP / LLMs', cv:'Computer Vision', mlops:'MLOps', data:'Data' };
  const pf = document.getElementById("proj-filters");
  cats.forEach((c,i) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (i===0?' active':'');
    btn.textContent = catLabels[c] || c.toUpperCase();
    btn.dataset.cat = c;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.proj-card').forEach(card => {
        card.classList.toggle('hidden', c !== 'all' && card.dataset.cat !== c);
      });
    });
    pf.appendChild(btn);
  });

  const pg = document.getElementById("proj-grid");
  DATA.projects.forEach(p => {
    const tags = p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('');
    const gh = p.github ? `<a href="${p.github}" class="proj-link" title="GitHub">↗</a>` : '';
    const dm = p.demo  ? `<a href="${p.demo}"   class="proj-link" title="Live Demo">▶</a>` : '';
    pg.innerHTML += `
      <div class="proj-card" data-cat="${p.category}">
        <div class="proj-header">
          <div class="proj-icon">${p.icon}</div>
          <div class="proj-links">${gh}${dm}</div>
        </div>
        <div class="proj-title">${p.title}</div>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tags">${tags}</div>
      </div>`;
  });

  // — education
  const eg = document.getElementById("edu-grid");
  DATA.education.forEach(e => {
    eg.innerHTML += `
      <div class="edu-card">
        <div class="edu-icon">${e.icon}</div>
        <div class="edu-school">${e.school}</div>
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-period">${e.period}</div>
        <div class="edu-meta"><span class="edu-gpa">GPA ${e.gpa}</span></div>
        <div class="edu-courses"><strong style="color:var(--text);font-size:11px;font-family:var(--font-mono);letter-spacing:1px;text-transform:uppercase;">Relevant Coursework</strong><br/>${e.courses}</div>
      </div>`;
  });

  // — contact
  const cl = document.getElementById("contact-links");
  cl.innerHTML = `
    <a href="mailto:${DATA.email}" class="contact-link"><div class="c-link-icon">✉</div>${DATA.email}</a>
    <a href="tel:${DATA.phone}" class="contact-link"><div class="c-link-icon">📞</div>${DATA.phone}</a>
    <a href="#" class="contact-link"><div class="c-link-icon">📍</div>${DATA.location}</a>`;

  document.getElementById("social-row").innerHTML = `
    <a href="${DATA.github}"   class="social-btn" title="GitHub">⚡</a>
    <a href="${DATA.linkedin}" class="social-btn" title="LinkedIn">in</a>
    <a href="${DATA.twitter}"  class="social-btn" title="Twitter / X">𝕏</a>`;

  const ss = document.getElementById("service-select");
  DATA.services.forEach(s => {
    const o = document.createElement('option');
    o.textContent = s;
    ss.appendChild(o);
  });

  // — contact form send
  document.getElementById("btn-send").addEventListener('click', function() {
    const btn     = document.getElementById("btn-send");
    const name    = document.getElementById("contact-name").value.trim();
    const email   = document.getElementById("contact-email").value.trim();
    const service = document.getElementById("service-select").value;
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !service || !message) {
      btn.textContent = "⚠ Please fill all fields";
      btn.style.background = "#b45309";
      setTimeout(() => { btn.textContent = "Send Message →"; btn.style.background = ""; }, 3000);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      btn.textContent = "⚠ Invalid email address";
      btn.style.background = "#b45309";
      setTimeout(() => { btn.textContent = "Send Message →"; btn.style.background = ""; }, 3000);
      return;
    }

    btn.textContent = "Sending…";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: name,
      reply_to:  email,
      service:   service,
      message:   message,
    })
    .then(function() {
      btn.textContent = "✓ Message Sent!";
      btn.style.background = "#0f6e56";
      btn.style.opacity = "1";
      document.getElementById("contact-name").value    = "";
      document.getElementById("contact-email").value   = "";
      document.getElementById("service-select").value  = "";
      document.getElementById("contact-message").value = "";
      setTimeout(() => { btn.textContent = "Send Message →"; btn.style.background = ""; btn.disabled = false; }, 4000);
    })
    .catch(function(err) {
      console.error("EmailJS error:", err);
      btn.textContent = "✗ Send Failed — Try Again";
      btn.style.background = "#991b1b";
      btn.style.opacity = "1";
      btn.disabled = false;
      setTimeout(() => { btn.textContent = "Send Message →"; btn.style.background = ""; }, 4000);
    });
  });

  // — hamburger
  const ham = document.getElementById("ham");
  const navLinks = document.getElementById("nav-links");
  ham.addEventListener('click', () => navLinks.classList.toggle('open'));

  // — active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));

  // — reveal on scroll
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // — skill bars animate on scroll
  const skillObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
        skillObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.skill-cat').forEach(el => skillObs.observe(el));

  // — theme toggle (dark ↔ light)
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("portfolio-theme") || "dark";
  if (saved === "light") root.setAttribute("data-theme", "light");

  toggleBtn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    if (next === "dark") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", "light");
    localStorage.setItem("portfolio-theme", next);
    // re-animate skill bars for the new theme
    document.querySelectorAll('.skill-fill').forEach(bar => {
      bar.style.width = "0";
      setTimeout(() => { bar.style.width = bar.dataset.level + "%"; }, 60);
    });
  });

})();