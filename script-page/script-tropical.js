const animals = {
  macan: {
    name: "Macan",
    latin: "Panthera tigris",
    habitat: "Hutan tropis & hutan lebat",
    diet: "Karnivora",
    lifespan: "10–15 tahun",
    size: "Hingga ±3 m",
    category: "Mammal",
    image: "Tropical-img/Macan.webp",
    description:
      "Macan adalah kucing besar yang hidup menyendiri dan menjadi predator puncak di hutan tropis. Pola loreng pada tubuhnya membantu berkamuflase saat mengintai mangsa."
  },
  chetah: {
    name: "Cheetah",
    latin: "Acinonyx jubatus",
    habitat: "Sabana & padang rumput terbuka",
    diet: "Karnivora",
    lifespan: "10–12 tahun",
    size: "Hingga ±2,1 m",
    category: "Mammal",
    image: "Tropical-img/Chetah.webp",
    description:
      "Cheetah adalah hewan darat tercepat di dunia. Tubuhnya yang ramping dan kaki panjang membuatnya mampu berlari sangat cepat saat mengejar mangsa."
  },
  jaguar: {
    name: "Jaguar",
    latin: "Panthera onca",
    habitat: "Hutan hujan Amerika Selatan",
    diet: "Karnivora",
    lifespan: "12–15 tahun",
    size: "Hingga ±2,4 m",
    category: "Mammal",
    image: "Tropical-img/Jaguar.webp",
    description:
      "Jaguar adalah kucing besar yang kuat dengan rahang sangat kuat. Mereka sering berburu di dekat sungai dan pandai berenang."
  },
  koala: {
    name: "Koala",
    latin: "Phascolarctos cinereus",
    habitat: "Hutan eukaliptus Australia",
    diet: "Herbivora (daun eukaliptus)",
    lifespan: "10–15 tahun",
    size: "Sekitar 60–85 cm",
    category: "Mammal",
    image: "Tropical-img/Koala.webp",
    description:
      "Koala menghabiskan sebagian besar waktunya di atas pohon dan banyak beristirahat karena makanan utamanya berupa daun eukaliptus yang rendah energi."
  },
  komodo: {
    name: "Komodo Dragon",
    latin: "Varanus komodoensis",
    habitat: "Padang savana & hutan kering",
    diet: "Karnivora",
    lifespan: "20–30 tahun",
    size: "Hingga ±3 m",
    category: "Mammal",
    image: "Tropical-img/Komodo.webp",
    description:
      "Komodo adalah kadal terbesar di dunia yang berasal dari Indonesia. Mereka adalah predator puncak di habitatnya dan memiliki gigitan yang kuat."
  },
  kudanil: {
    name: "Kudanil (Hippo)",
    latin: "Hippopotamus amphibius",
    habitat: "Sungai & danau di Afrika",
    diet: "Herbivora",
    lifespan: "40–50 tahun",
    size: "Hingga ±4 m",
    category: "Mammal",
    image: "Tropical-img/Kudanil.webp",
    description:
      "Kudanil menghabiskan banyak waktu di air untuk menjaga tubuh tetap sejuk. Meskipun herbivora, mereka bisa sangat agresif jika merasa terganggu."
  },
  burunggereja: {
    name: "Burung Gereja",
    latin: "Passer montanus",
    habitat: "Kawasan pemukiman & pepohonan kecil",
    diet: "Biji-bijian & serangga kecil",
    lifespan: "3–5 tahun",
    size: "Sekitar 12–14 cm",
    category: "Bird",
    image: "Tropical-img/BurungGereja.webp",
    description:
      "Burung gereja sering terlihat di sekitar rumah dan taman. Mereka hidup berkelompok dan sangat lincah."
  },
  elang: {
    name: "Elang",
    latin: "Aquila sp.",
    habitat: "Pegunungan, hutan, dan tebing",
    diet: "Karnivora (pemangsa)",
    lifespan: "15–25 tahun",
    size: "Bentang sayap hingga 2 m",
    category: "Bird",
    image: "Tropical-img/Elang.webp",
    description:
      "Elang adalah burung pemangsa dengan penglihatan tajam dan cakar kuat. Mereka berburu dari udara dengan menyambar mangsa."
  },
  falcon: {
    name: "Falcon",
    latin: "Falco sp.",
    habitat: "Beragam habitat terbuka",
    diet: "Karnivora",
    lifespan: "12–16 tahun",
    size: "Bentang sayap 80–120 cm",
    category: "Bird",
    image: "Tropical-img/Falcon.webp",
    description:
      "Falcon terkenal karena kecepatan terjunnya yang sangat tinggi saat menyambar mangsa di udara."
  },
  gagak: {
    name: "Gagak",
    latin: "Corvus sp.",
    habitat: "Hutan, kota, dan lahan terbuka",
    diet: "Omnivora",
    lifespan: "7–15 tahun",
    size: "Sekitar 45–60 cm",
    category: "Bird",
    image: "Tropical-img/Gagak.webp",
    description:
      "Gagak adalah burung yang sangat cerdas dan mudah beradaptasi. Mereka sering hidup berkelompok dan memiliki suara khas."
  }
};

const listItems = document.querySelectorAll(".animal-list-item");
const filters = document.querySelectorAll(".filter-pill");

const imgEl = document.getElementById("detailImage");
const nameEl = document.getElementById("detailName");
const latinEl = document.getElementById("detailLatin");
const habitatEl = document.getElementById("detailHabitat");
const dietEl = document.getElementById("detailDiet");
const lifespanEl = document.getElementById("detailLifespan");
const sizeEl = document.getElementById("detailSize");
const categoryEl = document.getElementById("detailCategory");
const descEl = document.getElementById("detailDescription");

function updateDetail(key) {
  const a = animals[key];
  if (!a) return;
  imgEl.src = a.image;
  imgEl.alt = a.name;
  nameEl.textContent = a.name;
  latinEl.textContent = a.latin;
  habitatEl.textContent = a.habitat;
  dietEl.textContent = a.diet;
  lifespanEl.textContent = a.lifespan;
  sizeEl.textContent = a.size;
  categoryEl.textContent = a.category;
  descEl.textContent = a.description;
}

listItems.forEach(item => {
  item.addEventListener("click", () => {
    listItems.forEach(li => li.classList.remove("active"));
    item.classList.add("active");
    const key = item.getAttribute("data-animal");
    updateDetail(key);
  });
});

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    listItems.forEach(item => {
      const type = item.getAttribute("data-type");
      if (filter === "all" || type === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// menu detail awal (Macan)
updateDetail("macan");
