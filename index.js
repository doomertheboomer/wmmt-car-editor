// By default, no car is selected
document.car = null;

// Fields which should be checked for
document.fields = [
    'cars', 'aero', 'wing', 'hood', 'mirror', 'trunk',
    'neon', 'rims', 'plate', 'power', 'handling', 'rank'
]

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
                let car = new Car(
                    new Map(e.target.result)  // Binary data of the car file
                );

                // If car is created successfully, assign to the document
                document.car = car;
            }
            catch(err) // Fails to create car object
            {
                // Document car is null
                document.car = null;
                document.filename = null;

                // Loop over all of the elements
                document.fields.forEach(field => {
                    try
                    {
                        // Element is implemented, enable it
                        setDisabled('s_' + field, true);  
                    }
                    catch // Element invalid / not implemented
                    {
                        // Do nothing
                    }
                });

                // Write error to terminal
                console.error("Error:",err);
            }

            // If a car is loaded
            if (document.car)
            {
                // Car created, configure drop-downs

                // Dereference the car object
                car = document.car

                // List of values to process

                // For each field in the form
                document.fields.forEach(field => {

                    // Populate the drop-down
                    getOptions(field);
                });

                // Loop over all of the elements
                document.fields.forEach(field => {
                    try
                    {
                        // Get the information for the given element
                        setSelected('o_' + field + '_' + car.getField(field),  true);

                        // Element is implemented, enable it
                        setDisabled('s_' + field, false);
                    }
                    catch // Element invalid / not implemented
                    {
                        // Disable it
                        setDisabled('s_' + field, true);
                    }
                });
                
                // Update the model search link
                document.getElementById('a_model_search').href = getWikiSearch(car.getField('cars'));
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
    let car = HEXTABLE[document.car.getGame()].value.cars[car_id];

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

// setOption(code: String, value: String): Void
// Given a property code and a value, updates
// the value on the car to the selected property
// and return true if successful and false if not.
function setOption(code, value)
{
    // If a car is currently loaded
    if (document.car !== null)
    {
        // Update the selected field with the new value
        document.car.setField(code, value);

        // Successfully updated
        return true;
    }

    // No update
    return false;
}

// getOptions(code: String): Void
// Given a property code, gets the items
// available for that property (which are discovered)
// and adds them to the respective drop-down list.
function getOptions(code) 
{
    // If a car is currently loaded
    if (document.car !== null)
    {
        // Get the drop down for the given code
        let dropdown = document.getElementById('s_' + code);

        // Get the game for the current car
        let game = document.car.getGame();

        // Verify the code is valid / has been implemented
        if (HEXTABLE[game].value.hasOwnProperty(code))
        {
            // Get the keys for the given aspect of the car 
            let keys = HEXTABLE[game].value[code];

            Object.keys(keys).forEach(key => {
                
                // Get the name of the object with the given hexcode
                let name = HEXTABLE[game].value[code][key];

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

            });

        }
        else // Key is not valid or is not implemented
        {
            console.log("Feature not implemented for game '",game,"':", code);
        }
    }

    // No update
    return false;
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

// setupGameDropdown(void): void
// Sets the game drop-down 
// members to the games listed
// in hextable.js.
function setupGameDropdown()
{
    // Get the select drop-down for the game
    let select = document.getElementById('s_game');

    // Loop over all of the games in the list
    Object.keys(HEXTABLE).forEach(game => {

        // Create a new option object
        let option = document.createElement('option');

        // Set the text of the option to the game name
        option.innerHTML = HEXTABLE[game].name;

        // Set the id for the option
        option.id = 'o_' + game;

        // Set the value of the option to the game id
        option.value = game;

        // Append the option to the drop-down
        select.appendChild(option);
    });
}

// setGameDropdown(value): void
// Updates the selected game, which
// updates the hex table for the game
// which is being used.
function setGameDropdown(value)
{
    // Retrieve the game selection drop-down element
    element = document.getElementById('s_game');

    // Verify the game is currently selected in the drop-down
    setSelected('o_' + value, true);
    
    // If a car object exists
    if (document.car !== null)
    {
        // Set the locations reference for the car object
        // to the currently selected game
        document.car.setLocations(HEXTABLE[value].location);
    }

    // Update the selected game in the document
    document.game = value;
}

// resetForm(void): void
// Reset the current form to default
function resetPage()
{
    // Hard refresh the page with no cache
    document.location.reload(true)
}