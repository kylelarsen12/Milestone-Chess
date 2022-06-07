//Function to draw odd ranks
function drawOddRank() {
  for (let i = 1; i <= 8; i++) {
    let square = document.createElement("div");
    if (i % 2 === 1) {
      square.style.backgroundColor = "black";
      square.style.height = "50px";
      square.style.width = "50px";
      document.getElementById("chessboard").appendChild(square);
      console.log("I should log a black square");
    } else {
      square.style.backgroundColor = "white";
      square.style.height = "50px";
      square.style.width = "50px";
      document.getElementById("chessboard").appendChild(square);
      console.log("I should log a white square");
    }
  }
}

//Function to draw even ranks
function drawEvenRank() {
  for (let i = 1; i <= 8; i++) {
    let square = document.createElement("div");
    if (i % 2 === 0) {
      square.style.backgroundColor = "black";
      square.style.height = "50px";
      square.style.width = "50px";
      document.getElementById("chessboard").appendChild(square);
      console.log("I should log a black square");
    } else {
      square.style.backgroundColor = "white";
      square.style.height = "50px";
      square.style.width = "50px";
      document.getElementById("chessboard").appendChild(square);
      console.log("I should log a white square");
    }
  }
}

//Even rank function

drawOddRank();
drawEvenRank();
