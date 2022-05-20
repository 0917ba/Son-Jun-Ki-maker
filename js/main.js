const b = document.getElementById("submit");
b.addEventListener("click", makeBoard);

function makeBoard() {
    let a1 = parseInt(document.getElementById("txt1").value);
    let a2 = parseInt(document.getElementById("txt2").value);
    let tableEle = "<table>";

    let arrImage = new Array("img/jungi-1.png", "img/jungi-2.jpg");

    for(let i = 0; i < a2; i++) {
        tableEle += "<tr>";
        for(let j = 0; j < a1; j++) {
            let imageCnt = 2; 
            let randN = makeRandInt(0, imageCnt - 1);
            let currentImg = arrImage[randN];
            tableEle += `<td><img src=${currentImg} width='120' height='160'></td>`;
        }
        tableEle += "</tr>";
    }
    tableEle += "</tr>";
    document.getElementById("board").innerHTML = tableEle;

    function makeRandInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}