document.addEventListener("DOMContentLoaded",function(){
  console.log("elements are loaded!")
  const grid = document.querySelector(".grid");

  
  function createGrid(askSquare){

    const squareSize = 650 / askSquare;

    grid.style.display = "flex";
    grid.style.height = "650px";
    grid.style.width = "650px";
    grid.style.flexWrap = "wrap";

    for(let i = 0; i < askSquare * askSquare; i++){
    const square = document.createElement("div");
    let opacity = 0;
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseover",()=>{
    if(opacity < 1){
      opacity += 0.1;
    }

  square.style.backgroundColor = `rgba(${getColorRGB()},${opacity})`;
        });
        grid.appendChild(square);
        
     }
  
    }

 function getColorRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `${r}, ${g}, ${b}`;
   }

    const changeBtn = document.querySelector("#change-btn");

    changeBtn.addEventListener("click",()=>{
      const askSquare = parseInt(prompt("Enter number of squares(1-100): "));
     if(askSquare && askSquare > 0 && askSquare <= 100){
       createGrid(askSquare);
     }
     else{
      alert("Enter a valid number of squares(1-100!")
     }
    });
 
    createGrid(16);
});

