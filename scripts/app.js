// alert("asdasd")

let userBoxNum = document.getElementById("userBoxNum");
let userColor = document.getElementById("userColor");
let changeColorBtn = document.getElementById("changeColorBtn");
let resetBtn = document.getElementById("resetBtn");

changeColorBtn.addEventListener('click', function(){
    changeColorFunction();
    eraseText();
});

resetBtn.addEventListener('click', function(){
    resetFunction();
    eraseText();
});

function changeColorFunction(){
    let boxNumber = userBoxNum.value;
    if(boxNumber >= 1 && boxNumber <=9){
        let changeBox = document.getElementById(`box${boxNumber}`)
        changeBox.style.backgroundColor = userColor.value;
    }
    else
    {
        alert("Invalid Box")
    }
    
}

function resetFunction(){
    let boxNumber = userBoxNum.value;
    for (let i = 1; i <= 9; i++) {
        let changeBox = document.getElementById(`box${i}`);
        if (changeBox) {
          changeBox.style.backgroundColor = "white";
        }
      }
}

function eraseText() {
    document.getElementById("userBoxNum").value = "";
    document.getElementById("userColor").value = "";
}

