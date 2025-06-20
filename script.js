// 🌙 1. 暗黑模式切换按钮
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 绑定按钮事件
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });
}

// 初始化时加载主题设置
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

// 🍔 2. 移动端 Hamburger 菜单切换
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ✨ 3. IntersectionObserver：滚动时触发淡入动画
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// 应用观察器到所有 .fade-in 元素
const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach((el) => observer.observe(el));


