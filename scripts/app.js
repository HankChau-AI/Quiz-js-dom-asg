// alert("asdasd")

let userBoxNum = document.getElementById("userBoxNum");
let userColor = document.getElementById("userColor");
let changeColorBtn = document.getElementById("changeColorBtn");
let resetBtn = document.getElementById("resetBtn");

changeColorBtn.addEventListener('click', function(){
    changeColorFunction();
    // eraseText();
});

resetBtn.addEventListener('click', function(){
    resetFunction();
});

function changeColorFunction(){
    let boxNumber = userBoxNum.value;
    let changeBox = document.getElementById(`box${boxNumber}`)
    changeBox.style.backgroundColor = userColor.value;
    
}

function resetFunction(){
    let boxNumber = userBoxNum.value;
    for (let i = 1; i <= boxNumber; i++) {
        let changeBox = document.getElementById(`box${i}`);
        if (changeBox) {
          changeBox.style.backgroundColor = "white";
        }
      }
}

// function eraseText() {
//     document.getElementById("textarea").value = "";
//     document.getElementById("textarea").value = "";
// }

