console.log ("hello there!");
var CarLot = (function (globalScopeCarLot) {

let DOMhelper = Object.create(null);
let outputDiv = document.getElementById("output");
let counter = 1;

//data variable contains the cars array of objects (_car_inventory.cars)
DOMhelper.outputData = function(data){
	console.log ("data",data);
	data.forEach(function(item){
		let carDiv= document.createElement("div");
		carDiv.innerHTML+=
		`<row>
			<div class="car-container card col-md-4" id="car-${counter}" value="${counter}">
				<h2>Car make:${item.make}</h2>
				<h2>Car model:${item.model}</h2>
				<h3>Year:${item.year}</h3>
				<h3>Price:$${item.price}</h3>
				<h4>Description:${item.description}
					<div id="desc-${counter}"></div>
				</h4>
			</div><!--end of car-container-->
		</row>`
		outputDiv.appendChild(carDiv);
		counter++;
	});

}

globalScopeCarLot.DOMhelper = DOMhelper;
return globalScopeCarLot;

})(CarLot || {});

// CarLot.inventory.loadInventory(outputData);