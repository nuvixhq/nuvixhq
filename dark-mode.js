// Sayfa yüklendiğinde karanlık mod açık mı diye kontrol et
window.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark');
    const toggleBtn = document.getElementById('darkModeToggle');
    if (toggleBtn) toggleBtn.innerText = "☀️ Aydınlık Mod";
  }
});

// Karanlık modu aç/kapat
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  const toggleBtn = document.getElementById('darkModeToggle');
  if (toggleBtn) toggleBtn.innerText = isDark ? "☀️ Aydınlık Mod" : "🌙 Karanlık Mod";
  localStorage.setItem("darkMode", isDark);
}
