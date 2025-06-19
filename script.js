const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// 初始化时检查是否已设置
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

