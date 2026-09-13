(() => {
  const savedTheme = localStorage.getItem('portalTheme') || 'light';
  document.documentElement.dataset.theme = savedTheme;
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    const updateLabel = () => {
      const dark = document.documentElement.dataset.theme === 'dark';
      toggle.textContent = dark ? 'Light mode' : 'Dark mode';
      toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    };
    toggle.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem('portalTheme', nextTheme);
      updateLabel();
    });
    updateLabel();
  });
})();
