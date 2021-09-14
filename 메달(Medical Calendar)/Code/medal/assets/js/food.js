const petsData = [{
        name: "마늘",
        species: "음식",
        favFoods: ["마늘이 콜레스테롤과 특히 저밀도 지질 단백질(LDL)을 감소시켜준다는 사실</br></br >", " 특히 <strong>하루를 시작할 때</strong> 먹으면 더욱 좋다. ", "잠에서 깨어날 때, 마늘 한 쪽보다 몸에 좋은 음식은 없다!"],
        photo: "../assets/img/garlic.jpg"
    },
    {
        name: "비트",
        species: "음식",
        favFoods: ["비트에 든 질산염과 아질산염은 모두 신진대사계, 특히 혈압 조절을 위한 기본적인 혼합물이다.", " 산화질소는 동맥혈관 확장을 개선하니 질산염이 풍부한 음식은 심혈관 건강에 좋다. ", "샐러드에 넣어 먹는 것을 추천!"],
        photo: "../assets/img/bit.jpg"
    },
    {
        name: "바나나",
        species: "음식",
        favFoods: ["바나나 한 개에는 어마어마한 양의 칼륨이 함유되어 있다.", "하루에 한 개만 먹어도, 일일 권장량의 100%를 섭취한다.", "칼륨은 신장 건강 유지를 위해 필수다. "],
        photo: "../assets/img/banana.jpg"
    }
];

function age(birthYear) {
    let calculatedAge = new Date().getFullYear() - birthYear;
    if (calculatedAge == 1) {
        return "1 year old";
    } else if (calculatedAge == 0) {
        return "Baby";
    } else {
        return `${calculatedAge} years old`;
    }
}

function foods(foods) {
    return `
  <h4>특징</h4>
  <ul class="foods-list">
  ${foods.map(food => `<li>${food}</li>`).join("")}
  </ul>
  `;
  }
  
  function petTemplate(pet) {
    return `
      <div class="animal">
      <img class="pet-photo" src="${pet.photo}">
      <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
      ${pet.favFoods ? foods(pet.favFoods) : ""}
      </div>
    `;
  }
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">음식 추천 </h1>
    ${petsData.map(petTemplate).join("")}
    <p class="footer"></p>
  `;