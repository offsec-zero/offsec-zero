const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  });
}
const search = document.querySelector('#project-search');
if (search) {
  const cards = [...document.querySelectorAll('[data-search]')];
  const empty = document.querySelector('.empty-state');
  const count = document.querySelector('.filter-count');
  search.addEventListener('input', () => {
    const term = search.value.trim().toLowerCase();
    const visible = cards.filter(card => { const show = card.dataset.search.includes(term); card.hidden = !show; return show; });
    if (empty) empty.hidden = visible.length !== 0;
    if (count) count.textContent = `${visible.length} project${visible.length === 1 ? '' : 's'}`;
  });
}
