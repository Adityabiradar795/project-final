function showPage(pageId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
// if (currentTheme === 'dark') {
//     document.body.classList.add('dark-mode');
//     themeToggle.textContent = "☀ Light Mode";
// }
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
        themeToggle.textContent = "☀ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
    localStorage.setItem('theme', theme);
});