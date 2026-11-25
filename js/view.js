/* ============ VIEW: chỉ render DOM và bắt sự kiện ============ */
const View = {
  $: s => document.querySelector(s),
  seg(items, cur, attr) {
    return '<div class="seg">' + items.map(([k, l]) => `<button data-${attr}="${k}"${k === cur ? ' class="on"' : ""}>${l}</button>`).join("") + "</div>";
  },
  render(m) {
    const u = m.ui, c = m.contact, ok = !!m.photo;
    document.documentElement.lang = m.lang;
    document.title = m.name + " – " + m.title;
    this.$("#hdr").innerHTML =
      '<a class="logo" href="#" data-go="home"><i>W</i>ILLIAM</a>' +
      '<nav class="links">' + m.nav.map(n => `<a href="#" data-go="${n[0]}">${n[1]}</a>`).join("") + "</nav>" +
      '<div class="tg">' + (CONFIG.lockRole ? "" : this.seg(m.roles, m.role, "role")) + this.seg(m.langs, m.lang, "lang") + "</div>";
    const row = (k, v) => `<div class="rw"><b>${k}</b><span>${v}</span></div>`;
    this.$("#app").innerHTML =
      '<section class="hero" id="home">' + (ok ? `<img class="bg" alt="" src="${m.photo}">` : "") +
      '<div class="panel"><div><span class="hi">' + u.hi + '</span><div class="rl">' + m.title + "</div>" +
      row(u.name, m.name) + row(u.pos, m.title) + row(u.loc, u.city) +
      row(u.phone, `<a href="tel:${c.phone.replace(/ /g, "")}">${c.phone}</a>`) +
      row(u.mail, `<a href="mailto:${c.email}">${c.email}</a>`) + row(u.edu, m.edu.school) + "</div>" +
      '<div class="ph">' + (ok ? `<img alt="${m.name}" src="${m.photo}">` : '<div class="ph0">TT</div>') + "</div></div></section>" +
      `<section class="sec" id="summary"><h2>${u.summary}</h2><p class="sum">${m.sum}</p></section>` +
      `<section class="sec" id="skills"><h2>${u.skills}</h2><div class="sk">` +
        m.skills.map(g => `<div><b>${g[0]}</b>` + g[1].map(s => `<span class="chip">${s}</span>`).join("") + "</div>").join("") + "</div></section>" +
      `<section class="sec" id="exp"><h2>${u.exp}</h2>` +
        m.jobs.map(j => `<div class="job"><div class="jh"><b>${j.co}</b><span>${j.date}</span></div><div class="jr">${j.role}</div><ul>` +
          j.items.map(t => `<li>${t}</li>`).join("") + "</ul></div>").join("") + "</section>" +
      `<section class="sec" id="edu"><h2>${u.edu}</h2><div class="ed"><div><b>${m.edu.school}</b><br>${m.edu.major}</div><span>${m.edu.date}</span></div>` +
        `<div class="ed"><div><b>${u.cert}</b><br>${m.edu.cert}</div><span>${m.edu.certDate}</span></div></section>` +
      `<section class="sec" id="contact"><h2>${u.contact}</h2><a class="cb" href="mailto:${c.email}">${c.email}</a><a class="cb" href="tel:${c.phone.replace(/ /g, "")}">${c.phone}</a></section>` +
      `<footer>© 2026 ${m.name}</footer>`;
  },
  highlight(id) {
    document.querySelectorAll(".links a").forEach(a => a.classList.toggle("on", a.dataset.go === id));
    const bar = this.$(".links"), on = this.$(".links a.on");
    if (bar && on) {
      const r = on.getBoundingClientRect(), b = bar.getBoundingClientRect();
      bar.scrollTo({ left: bar.scrollLeft + r.left - b.left - b.width / 2 + r.width / 2, behavior: "smooth" });
    }
  },
  scrollTo(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); },
  bind(h) {
    document.addEventListener("click", e => {
      const b = e.target.closest("[data-role],[data-lang],[data-go]");
      if (!b) return;
      e.preventDefault();
      const d = b.dataset;
      if (d.role) h.role(d.role); else if (d.lang) h.lang(d.lang); else h.go(d.go);
    });
  }
};
