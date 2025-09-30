// Theme toggler + current year + (optional) publications JSON fetch
(function() {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (prefersLight) root.classList.add('light');
  btn?.addEventListener('click', () => root.classList.toggle('light'));
  document.getElementById('year').textContent = new Date().getFullYear();

  // If publications.json exists, render it
  fetch('publications.json')
    .then(r => r.ok ? r.json() : [])
    .then(list => {
      if (!Array.isArray(list) || !list.length) return;
      const ul = document.querySelector('.pubs');
      ul.innerHTML = '';
      list.forEach(p => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="pub-title">${p.title}</span>
                        <span class="pub-venue">${p.venue || ''}</span>
                        ${p.link ? `<a class="pub-link" href="${p.link}" target="_blank" rel="noopener">Link</a>` : ''}`;
        ul.appendChild(li);
      });
    })
    .catch(() => {});
})();