// By default, no car is selected
document.car = null;

// No recorded file name
document.filename = null;

// handleUpload(Void): Void
// Handle the file upload to the site
function handleUpload()
{
    // Get the file from the upload 
    let file = document.getElementById('i_file').files[0];

    // Set the filename variable to the name of the uploaded file
    document.filename = file.name;

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
            document.getElementById('o_plate_' + car.getPlateFrame()).selected = true;

            // Enable the drop-downs
            document.getElementById('s_cars').disabled = false;
            document.getElementById('s_aero').disabled = false;
            document.getElementById('s_wing').disabled = false;
            document.getElementById('s_hood').disabled = false;
            document.getElementById('s_mirror').disabled = false;
            document.getElementById('s_trunk').disabled = false;
            document.getElementById('s_neon').disabled = false;
            document.getElementById('s_rims').disabled = false;
            document.getElementById('s_plate').disabled = false;
        }
        catch(err) // Fails to create car object
        {
            // Document car is null
            document.car = null;
            document.filename = null;

            // Disable the drop-downs
            document.getElementById('s_cars').disabled = true;
            document.getElementById('s_aero').disabled = true;
            document.getElementById('s_wing').disabled = true;
            document.getElementById('s_hood').disabled = true;
            document.getElementById('s_mirror').disabled = true;
            document.getElementById('s_trunk').disabled = true;
            document.getElementById('s_neon').disabled = true;
            document.getElementById('s_rims').disabled = true;
            document.getElementById('s_plate').disabled = true;

            // Write error to terminal
            console.error("Error:",err);
        }
	};

    // Read the binary content from the file
    reader.readAsArrayBuffer(file);
}

// handleDownload(Void): Void
// Handle the save file download from the site
function handleDownload()
{
    // downloadBlob(data: Uint8array, filename: String, mimetype: String)
    function downloadBlob(data, filename, mimetype) 
    {
        // downloadURL(data: Uint8array, filename: String): Void
        function downloadURL(data, filename) 
        {
            // Create link element
            const a = document.createElement('a')

            // Point link to the data
            a.href = data

            // Set the download name to the filename
            a.download = filename

            // Add the link to the document
            document.body.appendChild(a)

            // Hide the link
            a.style.display = 'none'

            // Click on the link
            a.click()

            // Remove the link
            a.remove()
        }

        // Create a new blob using the data
        const blob = new Blob([data], {
            // Use given mimetype for data write
            type: mimetype
        });
        
        // Create an object url for the blob data
        const url = window.URL.createObjectURL(blob)
        
        // Download the file
        downloadURL(url, filename)
        
        // Set a download timeout before the url is revoked
        setTimeout(() => window.URL.revokeObjectURL(url), 1000)
    }

    // If a car has been uploaded
    if (this.document.car !== null)
    {
        // Get the UINT8 array, convert to blob data and download the file
        downloadBlob(
            this.document.car.getMap().getUINT8Array(), // Binary Values
            document.filename, // Filename of the uploaded file
            'application/octet-stream' // MIMETYPE for Binary Files
        );
    }
    else // No car uploaded
    {
        // Do nothing
    }
}

// Code after this runs on file load

// getOptions(code: String): Void
// Given a property code, gets the items
// available for that property (which are discovered)
// and adds them to the respective drop-down list.
function getOptions(code) 
{
    // Get the drop down for the given code
    let dropdown = document.getElementById('s_' + code);

    // Loop over all of the hextables for the code
    for (hexcode in HEXTABLE[code])
    {
        // Get the name of the object with the given hexcode
        let name = HEXTABLE[code][hexcode];

        // Create a new option
        let option = document.createElement('option');

        // Assign the value to the code
        option.value = hexcode;

        // Assign the id to the option
        option.id = 'o_' + code + '_' + hexcode;

        // Assigning the text to the option
        option.innerHTML = name;

        // Add the option to the drop-down
        dropdown.appendChild(option);
    }
}

// getPlateOptions(Void): Void
function getPlateOptions()
{
    // Get the drop down for the given code
    let dropdown = document.getElementById('s_plate');

    // Loop over all of the values in the hex table
    for (colour in HEXTABLE.frame)
    {
        // Loop over all of the options for the colour
        for (plate in HEXTABLE.frame[colour])
        {
            // Get the name from the hextable element
            let name = HEXTABLE.frame[colour][plate];
         
            // Create a new option
            let option = document.createElement('option');

            // Assign the value to the code
            option.value = colour + '-' + plate;

            // Assign the id to the option
            option.id = 'o_plate_' + colour + '-' + plate;

            // Assign the text to the option
            option.innerHTML = name;

            // Add the option to the drop-down
            dropdown.appendChild(option);
        }
    }
}

// Populate the car model drop-down
getOptions('cars');

// Populate the body kit drop-down
getOptions('aero');

// Populate the wing drop-down
getOptions('wing');

// Populate the hood drop-down
getOptions('hood');

// Populate the mirror drop-down
getOptions('mirror');

// Populate the trunk drop-down
getOptions('trunk');

// Populate the neon drop-down
getOptions('neon');

// Populate the rims drop-down
getOptions('rims');

// Get the plate options drop-down
getPlateOptions();