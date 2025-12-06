const reviews = [
    {
      name: "Помело",
      avatar: "images/pomelo.png",
      rating: 5,
      text: "Прекрасное место, нет сока-фруктов и не кричат 'где помело бля?!'"
    },
    {
      name: "Лайм",
      avatar: "images/lime.png",
      rating: 4,
      text: "Полностью согласен с помело!"
    },
    {
      name: "Бритый киви",
      avatar: "images/kiwi.png",
      rating: 3,
      text: "ПРОСТО БРИТЫЙ КИВИ АХЫХЫХАХЫЗЗЗАХАЫЗЫАХАХА"
    }
  ];
  
  function renderReviews() {
    const container = document.getElementById("reviews");
    container.innerHTML = "";
    reviews.forEach(review => {
      const card = document.createElement("div");
      card.className = "review-card";
  
      card.innerHTML = `
        <img src="${review.avatar}" alt="${review.name}" class="avatar">
        <div class="review-content">
          <div class="review-name">${review.name}</div>
          <div class="stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
          <div class="review-text">${review.text}</div>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // ... тот же массив reviews и функция renderReviews() ...

document.getElementById("reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const avatar = document.getElementById("avatar").value;
    const rating = parseInt(document.getElementById("rating").value);
    const text = document.getElementById("text").value;
  
    reviews.push({ name, avatar, rating, text });
  
    renderReviews();
    this.reset();
  });
  
  document.getElementById("showFormBtn").addEventListener("click", () => {
    const form = document.getElementById("reviewForm");
    form.classList.toggle("visible");
  });
  
  renderReviews();
  
  