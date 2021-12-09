// By default, no car is selected
document.car = null;

// Handle the upload
function handleUpload()
{
    // Get the file from the upload 
    let file = document.getElementById('i_file').files[0];

    // File reader object for opening user input
    const reader = new FileReader();

    // Code to run if reader succeeds
    reader.onload = function(e) {

        try
        {
            // Get the map from the buffer, and 
            // create a new car using the map
            let car = new Car(new Map(e.target.result));

            // If car is created successfully, assign to the document
            document.car = car;

            // Enable the drop-downs and 
            // load the current properties
            document.getElementById('o_cars_' + car.getCar()).selected = true;
            document.getElementById('o_aero_' + car.getAero()).selected = true;
            document.getElementById('o_wing_' + car.getWing()).selected = true;
            document.getElementById('o_hood_' + car.getHood()).selected = true;
            document.getElementById('o_mirror_' + car.getMirror()).selected = true;
            document.getElementById('o_trunk_' + car.getTrunk()).selected = true;
            document.getElementById('o_neon_' + car.getNeon()).selected = true;
            document.getElementById('o_rims_' + car.getRims()).selected = true;

            console.log(car.getCar());
            console.log(car.getAero());
            console.log(car.getWing());
            console.log(car.getHood());
            console.log(car.getMirror());
            console.log(car.getTrunk());
            console.log(car.getNeon());
            console.log(car.getRims());

            // Enable the drop-downs
            document.getElementById('s_cars').disabled = false;
            document.getElementById('s_aero').disabled = false;
            document.getElementById('s_wing').disabled = false;
            document.getElementById('s_hood').disabled = false;
            document.getElementById('s_mirror').disabled = false;
            document.getElementById('s_trunk').disabled = false;
            document.getElementById('s_neon').disabled = false;
            document.getElementById('s_rims').disabled = false;
        }
        catch(err) // Fails to create car object
        {
            // Document car is null
            document.car = null;

            // Disable the drop-downs
            document.getElementById('s_cars').disabled = true;
            document.getElementById('s_aero').disabled = true;
            document.getElementById('s_wing').disabled = true;
            document.getElementById('s_hood').disabled = true;
            document.getElementById('s_mirror').disabled = true;
            document.getElementById('s_trunk').disabled = true;
            document.getElementById('s_neon').disabled = true;
            document.getElementById('s_rims').disabled = true;

            // Write error to terminal
            console.error("Error:",err);
        }
	};

    // Read the binary content from the file
    reader.readAsArrayBuffer(file);
}

// Code after this runs on file load

// Get the aero selector drop-down
let s_cars = document.getElementById('s_cars');

// Load all of the aero kits
for (code in HEXTABLE.cars)
{
    // Get the car value from the code
    let cars = HEXTABLE.cars[code];

    // Create a new option
    let option = document.createElement('option');

    // Assign the value to the code
    option.value = code;

    // Assign the id to the option
    option.id = 'o_cars_' + code;

    // Assigning the text to the option
    option.innerHTML = cars;

    // Add the option to the drop-down
    s_cars.appendChild(option);
}

// Get the aero selector drop-down
let s_aero = document.getElementById('s_aero');

// Load all of the aero kits
for (code in HEXTABLE.aero)
{
    // Get the car value from the code
    let aero = HEXTABLE.aero[code];

    // Create a new option
    let option = document.createElement('option');

    // Assign the value to the code
    option.value = code;

    // Assign the id to the option
    option.id = 'o_aero_' + code;

    // Assigning the text to the option
    option.innerHTML = aero;

    // Add the option to the drop-down
    s_aero.appendChild(option);
}

// Get the wing selector drop-down
let s_wing = document.getElementById('s_wing');

// Load all of the aero kits
for (code in HEXTABLE.wing)
{
    // Get the car value from the code
    let wing = HEXTABLE.wing[code];

    // Create a new option
    let option = document.createElement('option');

    // Assign the value to the code
    option.value = code;

    // Assign the id to the option
    option.id = 'o_wing_' + code;

    // Assigning the text to the option
    option.innerHTML = wing;

    // Add the option to the drop-down
    s_wing.appendChild(option);
}

// Get the hood selector drop-down
let s_hood = document.getElementById('s_hood');

// Load all of the hoods
for (code in HEXTABLE.hood)
{
    // Get the car value from the code
    let hood = HEXTABLE.hood[code];

    // Create a new option
    let option = document.createElement('option');

    // Assign the value to the code
    option.value = code;

    // Assign the id to the option
    option.id = 'o_hood_' + code;

    // Assigning the text to the option
    option.innerHTML = hood;

    // Add the option to the drop-down
    s_hood.appendChild(option);
}

// Get the hood selector drop-down
let s_mirror = document.getElementById('s_mirror');

// Load all of the mirrors
for (code in HEXTABLE.mirror)
{
    // Get the car value from the code
    let mirror = HEXTABLE.mirror[code];

    // Create a new option
    let option = document.createElement('option');

    // Assign the value to the code
    option.value = code;

    // Assign the id to the option
    option.id = 'o_mirror_' + code;

    // Assigning the text to the option
    option.innerHTML = mirror;

    // Add the option to the drop-down
    s_mirror.appendChild(option);
}

// Get the trunk selector drop-down
let s_trunk = document.getElementById('s_trunk');

// Load all of the trunk
for (code in HEXTABLE.trunk)
{
    // Get the car value from the code
    let trunk = HEXTABLE.trunk[code];

    // Create a new option
    let option = document.createElement('option');

    // Assign the value to the code
    option.value = code;

    // Assign the id to the option
    option.id = 'o_trunk_' + code;
    
    // Assigning the text to the option
    option.innerHTML = trunk;

    // Add the option to the drop-down
    s_trunk.appendChild(option);
}

// Get the trunk selector drop-down
let s_neon = document.getElementById('s_neon');

// Load all of the trunk
for (code in HEXTABLE.neon)
{
    // Get the car value from the code
    let neon = HEXTABLE.neon[code];

    // Create a new option
    let option = document.createElement('option');

    // Assign the value to the code
    option.value = code;

    // Assign the id to the option
    option.id = 'o_neon_' + code;

    // Assigning the text to the option
    option.innerHTML = neon;

    // Add the option to the drop-down
    s_neon.appendChild(option);
}

// Get the trunk selector drop-down
let s_rims = document.getElementById('s_rims');

// Load all of the trunk
for (code in HEXTABLE.rims)
{
    // Get the car value from the code
    let rims = HEXTABLE.rims[code];

    // Create a new option
    let option = document.createElement('option');

    // Assign the value to the code
    option.value = code;

    // Assign the id to the option
    option.id = 'o_rims_' + code;

    // Assigning the text to the option
    option.innerHTML = rims;

    // Add the option to the drop-down
    s_rims.appendChild(option);
}