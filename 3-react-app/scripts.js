const colors = ["bg-red", "bg-blue", "bg-green"];
const texts = ["text-bold", "text-italic", "text-strike", "text-underline"];

export function createDiv(texts, colors) {
    const container = document.getElementById("container");
    for (let i = 1; i < 17; i++) {
        const newDiv = document.createElement("div");
        // const newP = document.createElement("p");
        const newText = document.createTextNode(i);
        // newP.className = `${texts[getRandom(texts)]}`;
        newDiv.className = `${texts[getRandom(texts)]} ${colors[getRandom(colors)]}`;
        newDiv.id = `id_${i}`;
        // newP.appendChild(newText);
        newDiv.appendChild(newText);
        // newDiv.appendChild(newP);
        container.appendChild(newDiv);
    }
}

export function idBgChange(color) {
    const id = document.getElementById("idInput").value;
    const remove = colors.filter((i) => color !== i);

    const changeBgDiv = document.getElementById(`id_${id}`);
    for (let i = 0; i < remove.length; i++) {
        changeBgDiv.classList.remove(remove[i]);
    }
    changeBgDiv.classList.add(color);
}

export function classChange(changeClass) {
    const classInput = document.getElementById("classInput").value;
    const changeClassDiv = [...document.getElementsByClassName(classInput)];
    // for 문 안에서 className 길이가 변화할 수 있는 코드가 있었고, 해당 코드 때문에 의도한 대로 className을 가지는 태그들을 전부 돌지 못했음
    // 변화할 수 있는 리스트들은 복사 후 사용하기
    const length = changeClassDiv.length;
    for (const item of changeClassDiv) {
        item.classList.remove(classInput);
        item.classList.add(changeClass);
    }
}

export function queryChange() {
    const queryInput = document.getElementById("queryInput").value;

    const search = document.querySelectorAll(queryInput);
    search.forEach((item) => (item.className = "default"));
}
