const b = document.getElementById("submit");
b.addEventListener("click", makeBoard);

const btn = document.getElementsByClassName("btn_image");

let clickSaying = new Array("맞다고 해!", "가까운 창문으로 가세요", "숨 참아!", "호오옹", "나는 준기!", "이거 모르면 사람 아니죠?");

function makeBoard() {
    let a1 = parseInt(document.getElementById("txt1").value);
    let a2 = parseInt(document.getElementById("txt2").value);
    let tableEle = "<table>";

    let arrImage = new Array("img/jungi-1.png", "img/jungi-2.jpg");

    for(let i = 0; i < a2; i++) {
        tableEle += "<tr>";
        for(let j = 0; j < a1; j++) {
            let imageCnt = 2; 
            let randIntTable = makeRandInt(0, imageCnt - 1);
            let currentImg = arrImage[randIntTable];
            tableEle += `<td><button type="button" class="btn_image"><img src=${currentImg} class="image">`;
        }
        tableEle += "</tr>";
    }
    tableEle += "</tr>";
    document.getElementById("board").innerHTML = tableEle;

    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", say);
    }

    function say() {
        let randIntSaying = makeRandInt(0, clickSaying.length - 1);
        alert(clickSaying[randIntSaying]);
    }

    function makeRandInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}