document.addEventListener("DOMContentLoaded", function () {

  const commentForm = document.getElementById("commentForm");
  const commentOutput = document.getElementById("commentOutput");

  if (commentForm && commentOutput) {
    commentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        alert("Mohon lengkapi semua field komentar.");
        return;
      }

      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment-item");

      commentDiv.innerHTML = `
        <div class="comment-item-name">${name}</div>
        <div class="comment-item-email">${email}</div>
        <div class="comment-item-message">${message}</div>
      `;

      commentOutput.prepend(commentDiv);

      commentForm.reset();
    });
  }

  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();

      if (!query) {
        alert("Masukkan kata kunci pencarian.");
        return;
      }

      const cards = document.querySelectorAll(".habitat-card");
      let found = false;

      cards.forEach(card => {
        const titleEl = card.querySelector(".habitat-title");
        const textEl = card.querySelector(".card-text");

        const title = titleEl ? titleEl.textContent.toLowerCase() : "";
        const text = textEl ? textEl.textContent.toLowerCase() : "";

        if (title.includes(query) || text.includes(query)) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.classList.add("search-highlight");
          setTimeout(() => card.classList.remove("search-highlight"), 1500);
          found = true;
        }
      });

      if (!found) {
        alert("Habitat yang kamu cari belum tersedia.");
      }
    });
  }
});

const style = document.createElement("style");
style.innerHTML = `
  .search-highlight {
    outline: 3px solid #ffc107;
    outline-offset: 4px;
  }
`;
document.head.appendChild(style);