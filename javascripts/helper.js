console.log ("hello there!");
var CarLot = (function (globalScopeCarLot) {

let DOMhelper = Object.create(null);
let outputDiv = document.getElementById("output");
let counter = 1;
let outputString ="";
let carCardArray=[];
let textarea =document.getElementById("userInput");

function mirror(){
  let clickedCard= document.getElementsByClassName("clicked");
  //gives an array-like object
  console.log ("clicked",clickedCard[0].childNodes); //find child nodes
  let input = getText();
  clickedCard[0].childNodes[9].innerHTML=`${input}`;
};

function clearInput(){
  textarea.value ="";
}

function addFocus(){
  textarea.focus();
}

function getText(){
  let textContent = textarea.value;
  return textContent;
}
function removeClass(){
  let clickedCard= document.getElementsByClassName("clicked");
  for(var j=0; j<clickedCard.length; j++){
   clickedCard[j].classList.remove("clicked");

  }//function to remove classes
}

//data variable contains the cars array of objects (_car_inventory.cars)
DOMhelper.outputData = function(data){
	console.log ("data",data);
	data.forEach(function(item){
		if((counter+2) % 3 ===0) {
			console.log ("count", counter ,counter % 3);
			outputString+=`<div class="row">`
		}//building string to stick into output div
		outputString+= `<div class="car-container card col-md-4" id="car-${counter}" value="${counter}">
				<h2>Car make:${item.make}</h2>
				<h2>Car model:${item.model}</h2>
				<h3>Year:${item.year}</h3>
				<h3>Price:$${item.price}</h3>
				<h4>Description:${item.description}
					<div id="desc-${counter}"></div>
				</h4>
			</div><!--end of car-container-->`

		if(counter % 3 ===0){
			outputString+=`</div>`;
		}
		carCardArray.push(outputString);
		counter++;
	});
	outputDiv.innerHTML=outputString;
	console.log ("array",carCardArray);
		for(var k=0; k<carCardArray.length; k++){
		document.getElementById(`car-${k +1}`).addEventListener("click", function(event){
	  		let carChoice = event.currentTarget.id;
	    	removeClass();//clears out anything previously clicked
	    	document.getElementById(carChoice).classList.add("clicked");
	    	addFocus();
	  });
	}
}

textarea.addEventListener("keyup", function(event){
	if (event.key==="Enter"){
		clearInput();
	}else{
	mirror();
	console.log ("clicked",clickedCard[0].childNodes);
	}
});

globalScopeCarLot.DOMhelper = DOMhelper;
return globalScopeCarLot;

})(CarLot || {});

