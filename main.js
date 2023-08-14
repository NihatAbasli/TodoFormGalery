const personal = document.querySelector("#personal");
const galery = document.querySelector("#galery");

let people = [];

personal.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = personal.name.value;
  let age = this.age.value;
  let salary = this.salary.value;
  let url = this.url.value;

  let person = {
    name: name,
    age: age,
    salary: salary,
    url: url,
  };

  people.push(person);

  const content = people
    .map((personObj, index) => {
      return `<div class="card" style="width: 16rem;">
            <img src="${url}" class="card-img-top" alt="${name}">
      <div class="card-body">
          <p class="card-text">${name}</p>
          <p class="card-text">${age}</p>
          <p class="card-text">${salary}</p>
      </div>
  </div>`;
    })
    .join("");

  galery.innerHTML = content;
});
