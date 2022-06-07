//Function to draw odd ranks
function drawOddRank() {
  for (let i = 1; i <= 8; i++) {
    let square = document.createElement("div");
    if (i % 2 === 1) {
      square.classList.add("blacksquare");
      document.getElementById("chessboard").appendChild(square);
    } else {
      square.classList.add("whitesquare");
      document.getElementById("chessboard").appendChild(square);
    }
  }
}

//Function to draw even ranks
function drawEvenRank() {
  for (let i = 1; i <= 8; i++) {
    let square = document.createElement("div");
    if (i % 2 === 0) {
      square.classList.add("blacksquare");
      document.getElementById("chessboard").appendChild(square);
    } else {
      square.classList.add("whitesquare");
      document.getElementById("chessboard").appendChild(square);
    }
  }
}

//Even rank function

drawEvenRank();
drawOddRank();
drawEvenRank();
drawOddRank();
drawEvenRank();
drawOddRank();
drawEvenRank();
drawOddRank();
