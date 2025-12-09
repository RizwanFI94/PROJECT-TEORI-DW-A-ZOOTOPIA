const animals = {
  beruangkutub: {
    name: "Beruang Kutub",
    latin: "Ursus maritimus",
    habitat: "Es laut & pantai kutub",
    diet: "Karnivora",
    lifespan: "20–25 tahun",
    size: "Hingga ±3 m",
    category: "Mammal",
    image: "Polar-img/BeruangKutub.webp",
    description:
      "Beruang kutub adalah predator puncak di kawasan Arktik. Bulu tebal dan lapisan lemak di bawah kulit membantu mereka bertahan di suhu sangat dingin."
  },
  anjinglaut: {
    name: "Anjing Laut",
    latin: "Phoca sp.",
    habitat: "Es laut & tepian pantai kutub",
    diet: "Karnivora (ikan & krustasea)",
    lifespan: "25–30 tahun",
    size: "Hingga ±2 m",
    category: "Mammal",
    image: "Polar-img/AnjingLaut.webp",
    description:
      "Anjing laut menghabiskan banyak waktu di air namun naik ke permukaan es untuk beristirahat dan melahirkan. Mereka adalah mangsa utama beruang kutub."
  },
  singaalut: {
    name: "Singa Laut",
    latin: "Otariinae",
    habitat: "Perairan dingin dan pantai berbatu",
    diet: "Ikan, cumi, dan hewan laut kecil",
    lifespan: "15–25 tahun",
    size: "Hingga ±2,5 m",
    category: "Mammal",
    image: "Polar-img/Singalaut.webp",
    description:
      "Singa laut memiliki sirip depan yang kuat sehingga dapat berjalan di darat. Mereka sering berkumpul dalam koloni besar di tepi pantai."
  },
  lumbaputih: {
    name: "Lumba-lumba Putih",
    latin: "Delphinapterus leucas",
    habitat: "Perairan Arktik yang bersalju",
    diet: "Ikan & invertebrata laut",
    lifespan: "30–50 tahun",
    size: "Hingga ±5 m",
    category: "Mammal",
    image: "Polar-img/Lumba-LumbaPutih.webp",
    description:
      "Lumba-lumba putih atau beluga dikenal dengan warna tubuh putih dan suara vokalisasinya yang beragam."
  },
  pausbiru: {
    name: "Paus Biru",
    latin: "Balaenoptera musculus",
    habitat: "Lautan dingin dan sedang",
    diet: "Zooplankton (krill)",
    lifespan: "70–90 tahun",
    size: "Hingga ±30 m",
    category: "Mammal",
    image: "Polar-img/PausBiru.webp",
    description:
      "Paus biru adalah hewan terbesar yang pernah hidup di Bumi. Walaupun ukurannya raksasa, makanannya utama justru krill yang sangat kecil."
  },
  pausorca: {
    name: "Paus Orca",
    latin: "Orcinus orca",
    habitat: "Lautan dingin dan sedang di seluruh dunia",
    diet: "Karnivora (ikan, mamalia laut)",
    lifespan: "30–50 tahun",
    size: "Hingga ±9 m",
    category: "Mammal",
    image: "Polar-img/PausOrca.webp",
    description:
      "Orca dikenal sebagai 'killer whale' dan merupakan predator puncak yang berburu secara berkelompok dengan strategi yang kompleks."
  },
  pauspunggung: {
    name: "Paus Punggung Bungkuk",
    latin: "Megaptera novaeangliae",
    habitat: "Lautan dingin dan tropis (migrasi)",
    diet: "Plankton & ikan kecil",
    lifespan: "45–50 tahun",
    size: "Hingga ±16 m",
    category: "Mammal",
    image: "Polar-img/PausPunggung.webp",
    description:
      "Paus punggung bungkuk terkenal dengan lompatan akrobatik dan nyanyian panjang yang digunakan untuk berkomunikasi."
  },
  paussperm: {
    name: "Paus Sperma",
    latin: "Physeter macrocephalus",
    habitat: "Lautan dalam di seluruh dunia",
    diet: "Cumi-cumi raksasa & hewan laut dalam",
    lifespan: "60–70 tahun",
    size: "Hingga ±18 m",
    category: "Mammal",
    image: "Polar-img/PausSperm.webp",
    description:
      "Paus sperma memiliki kepala besar berisi spermaceti yang membantu mengatur daya apung dan mungkin membantu dalam ekolokasi di kedalaman laut."
  },
  pinguin: {
    name: "Pinguin",
    latin: "Aptenodytes sp.",
    habitat: "Pantai es & pulau-pulau di kutub selatan",
    diet: "Ikan, krill, dan hewan laut kecil",
    lifespan: "15–20 tahun",
    size: "Tergantung spesies, hingga ±1,2 m",
    category: "Bird",
    image: "Polar-img/Pinguin.webp",
    description:
      "Pinguin adalah burung yang tidak bisa terbang namun sangat mahir berenang. Mereka hidup berkoloni besar dan sangat tergantung pada es laut."
  },
  bangausalju: {
    name: "Bangau Salju",
    latin: "Egretta thula",
    habitat: "Daerah berair dan pesisir dingin",
    diet: "Ikan kecil, amfibi, dan invertebrata",
    lifespan: "10–15 tahun",
    size: "Sekitar 60–70 cm",
    category: "Bird",
    image: "Polar-img/BangauSalju.webp",
    description:
      "Bangau salju memiliki bulu putih bersih dan kaki panjang untuk berjalan di perairan dangkal saat mencari makan."
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

// set detail awal (beruang kutub) update
updateDetail("beruangkutub");
