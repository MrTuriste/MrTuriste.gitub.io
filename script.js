

function init(){

// second task
document.getElementById("cont").getElementsByTagName("img")[1].src = "flower2.png";

let images =document.getElementById("cont").getElementsByTagName("img");

document.getElementById("cont").getElementsByTagName("img")[3].src= "flower2.png";
document.getElementById("cont").getElementsByTagName("img")[4].src= "flower1.png"


//third task


document.getElementById("division").innerHTML = "Your are doing great!";


//fourth task


let image = document.createElement("img");
image.setAttribute("src","flower2.png");
document.getElementById("new_element").appendChild(image);


//fifth task


let spans = document.getElementById("colors").getElementsByTagName("span");
let colors = ["red", "orange","yellow","green","blue","purple","pink"];

for (var i = spans.length - 1; i >= 0; i--) {
	spans[i].style.color = colors[i]; 
}


//task 6


var changeSrc = function(event) {
  if (event.target.src) {
 		let filename = event.target.src.replace(/^.*[\\\/]/, '');

 	}
};
let filename = event.target.src = "flower1.png";

document.getElementById("event").addEventListener("mouseover", changeSrc);

	
}


