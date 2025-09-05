document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.getElementById("userIcon");
  const loginModal = document.getElementById("loginModal");
  const closeModal = document.getElementById("closeModal");

  const loginFormDiv = document.getElementById("loginFormDiv");
  const registerFormDiv = document.getElementById("registerFormDiv");
  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");

  userIcon.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "flex";
    loginFormDiv.style.display = "block";
    registerFormDiv.style.display = "none";
  });

  closeModal.addEventListener("click", () => { loginModal.style.display = "none"; });

  window.addEventListener("click", (e) => { if (e.target === loginModal) loginModal.style.display = "none"; });

  showRegister.addEventListener("click", (e) => {
    e.preventDefault();
    loginFormDiv.style.display = "none";
    registerFormDiv.style.display = "block";
  });

  showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    registerFormDiv.style.display = "none";
    loginFormDiv.style.display = "block";
  });

  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("تم تسجيل الدخول بنجاح!");
    loginModal.style.display = "none";
  });

  const registerForm = document.getElementById("registerForm");
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("تم إنشاء الحساب بنجاح!");
    loginModal.style.display = "none";
  });

  document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", () => {
      const input = icon.previousElementSibling;
      if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      } else {
        input.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      }
    });
  });

  const cartBadge = document.getElementById("cartBadge");
  const cardsList = document.getElementById("cards-list");
  let cartItems = []; 

  cartBadge.style.display = "none";

  cardsList.addEventListener("click", (e) => {
    const button = e.target.closest(".more-details");
    if (button) {
      e.preventDefault();

      const card = button.closest(".project-card");
      const productName = card.querySelector(".project-category").innerText.split("\n")[0];

      if (!cartItems.includes(productName)) {
        cartItems.push(productName);
        cartBadge.textContent = cartItems.length;
        cartBadge.style.display = "inline-block";
        cartBadge.classList.add("show");
      } else {
        alert("هذا المنتج موجود بالسلة بالفعل!");
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("add-product-form");
  const cardsList = document.getElementById("cards-list"); 
  const exploreBtn = document.getElementById("explore-btn");


  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.dispatchEvent(new Event("submit")); 
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const imageInput = document.getElementById("product-image");

    if (imageInput.files.length > 0) {
      const reader = new FileReader();

      reader.onload = function(event) {
        const newCard = document.createElement("div");
        newCard.classList.add("project-card");

        newCard.innerHTML = `
          <div class="project-image">
            <img src="${event.target.result}" alt="${name}" />
          </div>
          <div class="project-info">
            <p class="project-category">
              ${name}<br>${price}
            </p>
            <a href="#" class="more-details">
              <i class="fa-solid fa-plus"></i>
            </a>
          </div>
        `;

        cardsList.appendChild(newCard); 
        form.reset()
      };

      reader.readAsDataURL(imageInput.files[0]); 
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollLeftBtn = document.querySelector(".scroll-btn.left");
  const scrollRightBtn = document.querySelector(".scroll-btn.right");
  const cardsContainer = document.querySelector(".cards-list");

  scrollLeftBtn.addEventListener("click", () => {
    cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    document.getElementById("slide0"),
    document.getElementById("slide1"),
    document.getElementById("slide2")
  ];

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = (i === index) ? "block" : "none";
    }
  }

  showSlide(currentIndex);

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    document.getElementById('my-card1'),
    document.getElementById('my-card2'),
    document.getElementById('my-card3')
  ];

  const indicators = [
    document.getElementById('indicator1'),
    document.getElementById('indicator2'),
    document.getElementById('indicator3')
  ];

  function showCard(index) {
    cards.forEach((card, i) => {
      card.style.display = i === index ? 'block' : 'none';
      indicators[i].classList.toggle('my-card-indicator-active', i === index);
    });
  }

  showCard(0);

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => showCard(i));
  });
});

