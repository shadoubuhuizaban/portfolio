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

// 📬 4. 表单提交后清空字段 + 弹出提示
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
  });
}

// 🔝 5. 滚动到顶部按钮
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.id = 'scrollToTop';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '2rem';
scrollBtn.style.right = '2rem';
scrollBtn.style.padding = '0.5rem 1rem';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '4px';
scrollBtn.style.background = '#0984e3';
scrollBtn.style.color = '#fff';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '999';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

