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

    // If no file has been uploaded
    if (file !== undefined)
    {
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
            }
            catch(err) // Fails to create car object
            {
                // Document car is null
                document.car = null;
                document.filename = null;

                // Disable the drop-downs
                setDisabled('s_cars', true);
                setDisabled('s_aero', true);
                setDisabled('s_wing', true);
                setDisabled('s_hood', true);
                setDisabled('s_mirror', true);
                setDisabled('s_trunk', true);
                setDisabled('s_neon', true);
                setDisabled('s_rims', true);
                setDisabled('s_plate', true);
                // setDisabled('s_power', true);
                // setDisabled('s_handling', true);
                setDisabled('s_rank', true);
                // setDisabled('s_sticker-type', true);
                // setDisabled('s_sticker-id', true);
                // setDisabled('s_title', true);

                // Disable the number selections
                // setDisabled('i_colour', true);
                // setDisabled('i_rims_colour', true);

                // setDisabled('i_plate-frame-number-1', true);
                // setDisabled('i_plate-frame-number-2', true);

                // Write error to terminal
                console.error("Error:",err);
            }

            // If a car is loaded
            if (document.car)
            {
                // Car created, configure drop-downs

                // Dereference the car object
                car = document.car

                // Update the model search link
                document.getElementById('a_model_search').href = getWikiSearch(car.getCar());

                // Enable the drop-downs and 
                // load the current properties
                setSelected('o_cars_' + car.getCar(), true);
                setSelected('o_aero_' + car.getAero(), true);
                setSelected('o_wing_' + car.getWing(), true);
                setSelected('o_hood_' + car.getHood(), true);
                setSelected('o_mirror_' + car.getMirror(), true);
                setSelected('o_trunk_' + car.getTrunk(), true);
                setSelected('o_neon_' + car.getNeon(), true);
                setSelected('o_rims_' + car.getRims(), true);
                setSelected('o_plate_' + car.getPlateFrame(), true);
                setSelected('o_power_' + car.getPower(), true);
                setSelected('o_handling_' + car.getHandling(), true);
                setSelected('o_rank_' + car.getRank(), true);
                // setSelected('o_sticker-type_' + car.getStickerType(), true);
                // setSelected('o_sticker-id_' + car.getStickerId(), true);
                
                // Pretty sure I have the wrong index for this
                // setSelected('o_title_' + car.getTitle(), true);

                // Load the current properties (integer)
                // setValue('i_colour', parseInt(car.getColour(), 16));
                // setValue('i_rims_colour', parseInt(car.getRimsColour(), 16));

                // setValue('i_plate-frame-number-1').value = parseInt(car.getPlateFrameNumber1(), 16);
                // setValue('i_plate-frame-number-2').value = parseInt(car.getPlateFrameNumber2(), 16);

                // Enable the drop-downs
                setDisabled('s_cars', false);
                setDisabled('s_aero', false);
                setDisabled('s_wing', false);
                setDisabled('s_hood', false);
                setDisabled('s_mirror', false);
                setDisabled('s_trunk', false);
                setDisabled('s_neon', false);
                setDisabled('s_rims', false);
                setDisabled('s_plate', false);
                // setDisabled('s_power', false);
                // setDisabled('s_handling', false);
                setDisabled('s_rank', false);
                // setDisabled('s_sticker-type', false);
                // setDisabled('s_sticker-id', false);
                // setDisabled('s_title', false);

                // Enable the number selections
                // setDisabled('i_colour', false);
                // setDisabled('i_rims_colour', false);

                // setDisabled('i_plate-frame-number-1', false);
                // setDisabled('i_plate-frame-number-2', false);
            }
        };

        // Read the binary content from the file
        reader.readAsArrayBuffer(file);
    }
}

// getWikiSearch(car_id: String): String
// Gets the search string to search for 
// the given model of car on the wikiwiki
// site for maximum tune.
function getWikiSearch(car_id)
{
    // Start of the wmmt wikiwiki search url
    let url_start = "https://wikiwiki.jp/wmmt/?cmd=search&word=";

    // End of the wmmt wikiwiki search url
    let url_end = "&type=AND";

    // Get the name / code for the car
    let car = HEXTABLE.cars[car_id];

    // Remove the content after the code from the string
    let code = car.split(']')[0];

    // Remove the content before the code from the string
    code = code.split('[')[1];

    // Return the code
    return url_start + code + url_end;
}

// setValue(id: String, value: Boolean)
// If it exists, sets the selected property for 
// the given element to true. Otherwise, does nothing.
function setValue(id, value)
{
    try
    {
        // Set the element with the given id to the provided value
        document.getElementById(id).value = value;

        // Successful assignment
        return true;
    }
    catch(err) // General failure
    {
        // Report failure to console
        console.log("Failed to set selected value of element with id '" + id + "' to value '" + value + "'! Reason:", err);

        // Assignment failed
        return false;
    }
}

// setSelected(id: String, value: Boolean)
// If it exists, sets the selected property for 
// the given element to true. Otherwise, does nothing.
function setSelected(id, value)
{
    try
    {
        // Set the element with the given id to the provided value
        document.getElementById(id).selected = value;

        // Successful assignment
        return true;
    }
    catch(err) // General failure
    {
        // Report failure to console
        console.log("Failed to set selected property of element with id '" + id + "' to value '" + value + "'! Reason:", err);

        // Assignment failed
        return false;
    }
}

// setDisabled(id: String, value: Boolean)
// If it exists, sets the disabled property for 
// the given element to true. Otherwise, does nothing.
function setDisabled(id, value)
{
    try
    {
        // Set the element with the given id to the provided value
        document.getElementById(id).disabled = value;

        // Successful assignment
        return true;
    }
    catch(err) // General failure
    {
        // Report failure to console
        console.log("Failed to set disabled property of element with id '" + id + "' to value '" + value + "'! Reason:", err);

        // Assignment failed
        return false;
    }
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

// getOptions(code: String): Void
// Given a property code, gets the items
// available for that property (which are discovered)
// and adds them to the respective drop-down list.
function getOptions(code) 
{
    // Get the drop down for the given code
    let dropdown = document.getElementById('s_' + code);

    // Get the keys from the hex table index and sort
    let keys = Object.keys(HEXTABLE[code]).sort();

    // Loop over all of the hextables for the code
    for (key of keys)
    {
        // Get the name of the object with the given hexcode
        let name = HEXTABLE[code][key];

        // Create a new option
        let option = document.createElement('option');

        // Assign the value to the code
        option.value = key;

        // Assign the id to the option
        option.id = 'o_' + code + '_' + key;

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

function getTitleOptions()
{
    // Get the drop-down for the title selection
    let dropdown = document.getElementById('s_title');

    // Loop over all of the titles
    for(title of TITLES)
    {
        // Hexidecimal value
        let hex = title[1];

        // Text value
        let text = title[3];

        // Set the value of the option to the hex substring, each hex value seperated using dashes
        let value = (hex.substring(0, 2) + '-' + hex.substring(2,4) + '-' + hex.substring(4, 6)).toUpperCase();

        // console.log("OPTION: ",hex, "(", value, ")");
         
        // Create a new option
        let option = document.createElement('option');

        // Set the option value to the generated value
        option.value = value;

        // e.g. abcdef -> ab-cd-ef
        option.id = 'o_title_' + value;

        // Set the option text to the title text
        option.innerHTML = text;
    }
}

// Given a combo box value, 
// sets the tuning settings for
// the car and enables or disables
// the drop-downs, depending on the 
// setting applied.
function setTune(value)
{
    // Values:
    // 0 - No Tune 
    // 1 - Basic Tuning
    // 2 - Full Tune 
    // 3 - Custon Tune

    // Dereference the car object
    let car = document.car;

    switch(value)
    {
        case 0: // Leave as is

            // Disable the power/handling dropdowns
            setDisabled('s_power', true);
            setDisabled('s_handling', true);
            break;

        case 1: // No Tune

            // Both power and handling 0 pts
            car.setPower("00");
            car.setHandling("00");

            // Disable the power/handling dropdowns
            setDisabled('s_power', true);
            setDisabled('s_handling', true);
            break;

        case 2: // Basic Tuning

            // Both power and handling 10 pts
            car.setPower("0A");
            car.setHandling("0A");

            // Disable the power/handling dropdowns
            setDisabled('s_power', true);
            setDisabled('s_handling', true);
            break;

        case 3: // Full Tune

            // Both power and handling 17 pts
            car.setPower("11");
            car.setHandling("11");

            // Disable the power/handling dropdowns
            setDisabled('s_power', true);
            setDisabled('s_handling', true);
            break;

        case 4: // Custom Tune

            // Enable the power/handling dropdowns
            setDisabled('s_power', false);
            setDisabled('s_handling', false);
            break;

        default: // Unknown value provided

            console.log("Unknown value '" + value + "'provided!");
            break;
    }

    // Update the values in the drop down
    setSelected('o_power_' + car.getPower(), true);
    setSelected('o_handling_' + car.getHandling(), true);
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

// Populate the rims drop-down
getOptions('power');

// Populate the rims drop-down
getOptions('handling');

// Populate the rims drop-down
getOptions('rank');

// Populate the sticker type drop-down
// getOptions('sticker-type');

// Populate the sticker id drop-down
// getOptions('sticker-id');

// Get the plate options drop-down
getPlateOptions();

// Get the title options drop-down
// getTitleOptions();