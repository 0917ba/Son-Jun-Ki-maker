const b = document.getElementById("submit");
        b.addEventListener("click", makeBoard);
        
        function makeBoard() {
            let a1 = parseInt(document.getElementById("txt1").value);
            let a2 = parseInt(document.getElementById("txt2").value);
            let tableEle = "<table>";
            for(let i = 0; i < a1; i++) {
                tableEle += "<tr>";
                for(let j = 0; j < a2; j++) {
                    tableEle += "<td><img src='img/jungi.png' width='120' height='160'></td>";
                }
                tableEle += "</tr>";
            }
            tableEle += "</tr>";
            document.getElementById("board").innerHTML = tableEle;
        }