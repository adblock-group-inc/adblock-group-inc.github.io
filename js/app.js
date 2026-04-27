
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("adblock-cart") || "[]");
  const qty = cart.reduce((sum, item) => sum + item.qty, 0);
  const link = document.querySelector('nav a[href*="checkout"]');
  if (!link) return;
  link.classList.add("cart-link");
  let badge = link.querySelector(".cart-badge");
  if (!badge) {
    badge = document.createElement("span");
    badge.className = "cart-badge";
    link.appendChild(badge);
  }
  badge.textContent = qty;
  badge.hidden = qty === 0;
}

updateCartBadge();
window.addEventListener('cart-changed', updateCartBadge);

function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("adblock-cart") || "[]");
  const existing = cart.find((i) => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  localStorage.setItem("adblock-cart", JSON.stringify(cart));
  updateCartBadge();
}

const detailPage = document.querySelector(".product-detail-page");
if (detailPage) {
  const name = detailPage.querySelector(".product-data h2")?.textContent.trim() ?? "";
  const price = detailPage.querySelector(".price")?.textContent.trim() ?? "";

  detailPage.querySelectorAll(".btn.yellow-btn:not([data-action])").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(name, price);
      const orig = btn.textContent;
      btn.style.width = btn.offsetWidth + "px";
      btn.textContent = "tillagd!";
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.width = "";
      }, 1200);
    });
  });
}

const testaGratisBtn = document.querySelector("[data-action='testa-gratis']");
if (testaGratisBtn) {
  const modal = document.getElementById("testaGratisModal");
  const audio = document.getElementById("jackHammer");

  testaGratisBtn.addEventListener("click", () => {
    modal.showModal();
    audio.currentTime = 0;
    audio.play();
  });

  document.getElementById("testaGratisClose").addEventListener("click", () => {
    modal.close();
    audio.pause();
    audio.currentTime = 0;
  });
}
