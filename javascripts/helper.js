console.log ("hello there!");
var CarLot = (function (globalScopeCarLot) {

let DOMhelper = Object.create(null);
let outputDiv = document.getElementById("output");
let counter = 1;
let outputString ="";
//data variable contains the cars array of objects (_car_inventory.cars)
DOMhelper.outputData = function(data){
	console.log ("data",data);
	data.forEach(function(item){
		if((counter+2) % 3 ===0) {
			console.log ("count", counter ,counter % 3);
			outputString+=`<div class="row">`
		}
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
		counter++;
	});
outputDiv.innerHTML=outputString;
}

globalScopeCarLot.DOMhelper = DOMhelper;
return globalScopeCarLot;

})(CarLot || {});

// CarLot.inventory.loadInventory(outputData);