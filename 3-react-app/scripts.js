const colors = ["bg-red", "bg-blue", "bg-green"];

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
