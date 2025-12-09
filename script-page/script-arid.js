const animals = {
  unta: {
    name: "Unta",
    latin: "Camelus sp.",
    habitat: "Gurun dan padang kering",
    diet: "Herbivora",
    lifespan: "40–50 tahun",
    size: "Hingga ±3 m",
    category: "Mammal",
    image: "Arid-img/Unta.webp",
    description:
      "Unta memiliki punuk yang menyimpan cadangan lemak sebagai sumber energi. Mereka sangat tahan terhadap panas dan kekurangan air, sehingga menjadi simbol kehidupan di gurun."
  },
  onta: {
    name: "Onta",
    latin: "Camelus sp.",
    habitat: "Gurun pasir dan stepa kering",
    diet: "Herbivora",
    lifespan: "35–45 tahun",
    size: "Hingga ±3 m",
    category: "Mammal",
    image: "Arid-img/Onta.webp",
    description:
      "Onta sering digunakan sebagai hewan transportasi tradisional di wilayah gurun. Kakinya yang lebar membantu berjalan di atas pasir tanpa mudah tenggelam."
  },
  badak: {
    name: "Badak Bercula Putih",
    latin: "Ceratotherium simum",
    habitat: "Padang rumput dan sabana kering",
    diet: "Herbivora",
    lifespan: "40–50 tahun",
    size: "Hingga ±4 m",
    category: "Mammal",
    image: "Arid-img/BadakBerculaPutih.webp",
    description:
      "Badak bercula putih memiliki tubuh besar dan tebal. Meski terlihat kasar, mereka adalah pemakan rumput yang lebih suka menghindari konflik apabila tidak merasa terancam."
  },
  hyena: {
    name: "Hyena",
    latin: "Crocuta crocuta",
    habitat: "Sabana kering dan padang rumput",
    diet: "Karnivora / pemakan bangkai",
    lifespan: "20–25 tahun",
    size: "Hingga ±1,6 m",
    category: "Mammal",
    image: "Arid-img/Hyena.webp",
    description:
      "Hyena dikenal dengan suara tertawanya yang khas. Mereka adalah pemburu yang efektif sekaligus pemakan bangkai yang menjaga kebersihan ekosistem."
  },
  kangguru: {
    name: "Kangguru Merah",
    latin: "Osphranter rufus",
    habitat: "Padang kering dan semigurun Australia",
    diet: "Herbivora",
    lifespan: "15–20 tahun",
    size: "Hingga ±2 m",
    category: "Mammal",
    image: "Arid-img/KangguruMerah.webp",
    description:
      "Kangguru merah melompat dengan kaki belakang yang kuat dan ekor besar sebagai penyeimbang. Mereka beradaptasi dengan baik pada lingkungan yang panas dan kering."
  },
  keledai: {
    name: "Keledai",
    latin: "Equus asinus",
    habitat: "Daerah kering dan pegunungan",
    diet: "Herbivora",
    lifespan: "25–30 tahun",
    size: "Hingga ±1,6 m",
    category: "Mammal",
    image: "Arid-img/Keledai.webp",
    description:
      "Keledai sering digunakan sebagai hewan beban di wilayah berbukit dan kering. Mereka kuat, tahan banting, dan mampu berjalan di jalur yang sulit."
  },
  domba: {
    name: "Domba",
    latin: "Ovis aries",
    habitat: "Padang rumput dan perbukitan kering",
    diet: "Herbivora",
    lifespan: "10–12 tahun",
    size: "Sekitar 1–1,2 m",
    category: "Mammal",
    image: "Arid-img/Domba.webp",
    description:
      "Domba dipelihara untuk diambil wol, daging, dan susunya. Mereka hidup berkelompok dan sering ditemui di padang rumput yang relatif gersang."
  },
  rusa: {
    name: "Rusa",
    latin: "Cervus sp.",
    habitat: "Padang rumput, semak belukar, dan hutan kering",
    diet: "Herbivora",
    lifespan: "10–20 tahun",
    size: "Hingga ±2,5 m (termasuk tanduk)",
    category: "Mammal",
    image: "Arid-img/Rusa.webp",
    description:
      "Rusa memiliki tanduk yang umumnya ditemukan pada pejantan. Mereka gesit dan peka terhadap suara, sehingga mampu menghindari predator di alam liar."
  },
  emu: {
    name: "Emu",
    latin: "Dromaius novaehollandiae",
    habitat: "Padang semak dan daerah kering Australia",
    diet: "Omnivora (biji, buah, serangga)",
    lifespan: "10–20 tahun",
    size: "Hingga ±1,9 m",
    category: "Bird",
    image: "Arid-img/Emu.webp",
    description:
      "Emu adalah burung besar yang tidak bisa terbang tetapi dapat berlari cepat. Mereka beradaptasi dengan baik di wilayah kering dan terbuka."
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

// set detail awal
updateDetail("unta");
