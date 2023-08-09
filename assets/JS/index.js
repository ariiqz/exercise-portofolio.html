const portofolioData = [
  { title: "proyek 1", description: " Deskripsi proyek 1"},
  { title: "proyek 2", description: " Deskripsi proyek 2"},
  { title: "proyek 3", description: " Deskripsi proyek 3"}
];

const portofolioContainer = document.getElementById("portofolioContainer");

portofolioData.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.className = "item";
    projectItem.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;
    portofolioContainer.appendChild(projectItem);
});

const form = document.querySelector('form');
const items = document.querySelectorAll('.item');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const searchTerm = form.search.value.toLowerCase();

  items.forEach(item => {
    const projectTitle = item.querySelector('h2').textContent.toLowerCase();
    const projectDescription = item.querySelector('p').textContent.toLowerCase();

    if (projectTitle.includes(searchTerm) || projectDescription.includes(searchTerm)) {
        item.computedStyleMap.display = 'block';
    }else{
        item.computedStyleMap.display = 'none';
    }
  });
});