/* ============ CONTROLLER: nối Model và View, đồng bộ URL hash ============ */
const Controller = {
  parse() {
    const h = location.hash.slice(1).split("-"), s = {};
    if (!CONFIG.lockRole && (h[0] === "ba" || h[0] === "tester")) s.role = h[0];
    if (h[1] === "vi" || h[1] === "en") s.lang = h[1];
    return s;
  },
  cur: "",
  // Scroll-spy: xác định section đang hiển thị và báo View đổi mục nav
  tick() {
    const ids = Model.data.nav.map(n => n[0]);
    const nav = document.querySelector(".nav");
    if (nav) nav.classList.toggle("sc", scrollY > 10);
    let id = ids[0];
    for (const k of ids) { const el = document.getElementById(k); if (el && el.getBoundingClientRect().top <= 130) id = k; }
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) id = ids[ids.length - 1];
    if (id !== this.cur) { this.cur = id; View.highlight(id); }
  },
  update(patch, fromHash) {
    const s = Model.state, n = Object.assign({}, s, patch);
    if (n.role === s.role && n.lang === s.lang) return;
    if (!fromHash) location.hash = n.role + "-" + n.lang;
    Model.set(n);
  },
  init() {
    Model.subscribe(() => { View.render(Model.vm()); this.cur = ""; this.tick(); });
    addEventListener("scroll", () => this.tick(), { passive: true });
    View.bind({ role: r => this.update({ role: r }), lang: l => this.update({ lang: l }), go: id => View.scrollTo(id) });
    addEventListener("hashchange", () => this.update(this.parse(), true));
    Model.set(this.parse());
  }
};
