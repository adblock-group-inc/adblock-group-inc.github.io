function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("adblock-cart") || "[]");
  const existing = cart.find((i) => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  localStorage.setItem("adblock-cart", JSON.stringify(cart));
}

const detailPage = document.querySelector(".product-detail-page");
if (detailPage) {
  const name = detailPage.querySelector(".product-card-info .flow h2")?.textContent.trim() ?? "";
  const flows = detailPage.querySelectorAll(".product-card-info > .flow");
  const price = flows[flows.length - 1]?.querySelector("h2")?.textContent.trim() ?? "";

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
