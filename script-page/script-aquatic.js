const animals = {
  belutlistrik: {
    name: "Belut Listrik",
    latin: "Electrophorus electricus",
    habitat: "Sungai berlumpur Amerika Selatan",
    diet: "Karnivora",
    lifespan: "10–15 tahun",
    size: "Hingga ±2,5 m",
    category: "Predator",
    image: "Aquatic-img/BelutListrik.jpg",
    description:
      "Belut listrik mampu menghasilkan listrik dengan tegangan tinggi untuk melumpuhkan mangsa atau mempertahankan diri. Mereka hidup di perairan keruh dengan oksigen rendah."
  },
  piranha: {
    name: "Piranha Gigi Hitam",
    latin: "Serrasalmus rhombeus",
    habitat: "Sungai dan rawa di Amerika Selatan",
    diet: "Karnivora",
    lifespan: "10–15 tahun",
    size: "Hingga ±40 cm",
    category: "Predator",
    image: "Aquatic-img/PiranhaGigiHitam.jpg",
    description:
      "Piranha gigi hitam memiliki rahang kuat dan gigi tajam. Mereka biasanya berburu secara berkelompok dan mampu menghabiskan mangsa dengan cepat."
  },
  marlin: {
    name: "Marlin",
    latin: "Makaira sp.",
    habitat: "Lautan tropis dan subtropis",
    diet: "Ikan kecil & cumi",
    lifespan: "20–30 tahun",
    size: "Hingga ±4,5 m",
    category: "Predator",
    image: "Aquatic-img/Marlin.jpg",
    description:
      "Marlin adalah ikan laut berukuran besar dengan moncong panjang seperti tombak. Mereka merupakan perenang cepat yang mengejar mangsa di perairan terbuka."
  },
  viper: {
    name: "Ikan Viper",
    latin: "Chauliodus sp.",
    habitat: "Laut dalam dengan sedikit cahaya",
    diet: "Ikan kecil dan invertebrata laut",
    lifespan: "Belum diketahui pasti (hidup di laut dalam)",
    size: "Hingga ±30 cm",
    category: "Predator",
    image: "Aquatic-img/Viper.jpg",
    description:
      "Ikan viper hidup di kedalaman laut dengan tekanan tinggi dan cahaya sangat minim. Gigi panjang dan tubuh ramping membantunya menangkap mangsa di kegelapan."
  },
  candiru: {
    name: "Candiru",
    latin: "Vandellia cirrhosa",
    habitat: "Sungai Amazon",
    diet: "Parasit pada insang ikan lain",
    lifespan: "Beberapa tahun",
    size: "Hanya beberapa cm",
    category: "Others",
    image: "Aquatic-img/Candiru.jpg",
    description:
      "Candiru adalah ikan kecil yang terkenal karena sifat parasitnya. Mereka biasanya hidup di insang ikan lain dan menghisap darah sebagai sumber makanan."
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

// set detail awal (Belut Listrik)
updateDetail("belutlistrik");
