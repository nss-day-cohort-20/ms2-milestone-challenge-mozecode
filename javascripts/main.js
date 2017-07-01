// This IIFE will add a new module to Carlot in the
// namespace of CarLot.Inventory
console.log ("hello!");

var CarLot = (function (globalScopeCarLot) {

  // Define a private scope variable to store cars
  let _car_inventory = [];

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
  let inventory = Object.create(null, {
    loadInventory: {
      value: function (outputData) {
        var inventoryLoader = new XMLHttpRequest();
         inventoryLoader.open("GET", "inventory.json");
         inventoryLoader.send();

        inventoryLoader.addEventListener("load", function (event) {

           _car_inventory = JSON.parse(event.target.responseText);
             console.log ("event",event);
             console.log ("_car_inventory",_car_inventory.cars);
             outputData(_car_inventory.cars);
        });
      }
    }
  });


  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
})(CarLot || {});
