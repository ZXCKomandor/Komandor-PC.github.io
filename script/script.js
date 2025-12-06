// можно добавить интерактив — подсветку активных кнопок или отправку заявок

document.querySelectorAll('nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('nav button.active').classList.remove('active');
    btn.classList.add('active');
  });
});
function scrollToBlock() {
  document.getElementById("why").scrollIntoView({ 
    behavior: "smooth" 
  });
}

// Анимация активных кнопок навигации
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav a.active').classList.remove('active');
    link.classList.add('active');
  });
});

// Параллакс эффект для манекенов
window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;
  const leftMannequin = document.querySelector('.mannequin.left');
  const rightMannequin = document.querySelector('.mannequin.right');
  
  if (leftMannequin && rightMannequin) {
    leftMannequin.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    rightMannequin.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  }
});

// Анимация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  // Запуск анимаций, которые определены в CSS
  document.body.classList.add('loaded');
});
document.querySelectorAll('.price-card button').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
  });
  
  button.addEventListener('click', function(e) {
    e.preventDefault();
   
    alert('Форма бронирования будет здесь!');
  });
});

// Параллакс для карточек товаров
window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card, index) => {
    const speed = 0.1 + (index * 0.05);
    card.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});

// Инициализация анимаций
document.addEventListener('DOMContentLoaded', function() {
  // Задержка для плавного появления
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 300);
  
  // Анимация иконок при наведении
  const icons = document.querySelectorAll('.card ul li img.icon');
  icons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'rotate(10deg) scale(1.2)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'rotate(0) scale(1)';
    });
  });
});