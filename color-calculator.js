const prompt = require("prompt-sync")({sigint: true});




let init = prompt("Do you wish to combine or deconstruct: ")
if(init === "combine"){ 
    let firstColor = prompt("Enter first colors'(red,blue,or yellow): ") 
    let secondColor = prompt("Combine with?: ")
if(firstColor === "red" && secondColor ==="blue" || firstColor === "blue" && secondColor === "red" ){
    console.log("purple")
}else if(firstColor === "red" && secondColor === "yellow" || firstColor === "yellow" && secondColor === "red"){
    console.log("orange")
}else if(firstColor === "blue" && secondColor === "yellow" || firstColor === "yellow" && secondColor === "blue"){
console.log("green")
}else {
    console.log("error")
}
}



let splitColor = ""
 if(init === "deconstruct"){
     splitColor = prompt("Choose a color to deconstruct.(purple,orange,green): ")
}





if(splitColor === "purple"){
    console.log("Red and blue make purple.")
}else if(splitColor === "orange"){
    console.log("Red and yellow make orange.")
}else if(splitColor === "green"){
    console.log("Blue and yellow make green.")
}else {
    console.log("error")
}
