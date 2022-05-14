// By default, no car is selected
document.car = null;

// No recorded file name
document.filename = null;

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

// resetPage(void): Void
// Hard reloads the current
// page and empties all of the
// input fields.
function resetPage()
{
    // Page hard reload (clear cache)
    window.location.reload(true);
}

// resetDropdown(id: String): Void
// If it exists, resets the select
// element with the given id to the
// default option.
function resetDropdown(id)
{
    try
    {
        // Get the element with the given id
        let element = document.getElementById(id);

        // Clear the inner html of the element
        element.innerHTML = "";

        // Add the default element to the child
        element.appendChild(newOption(
            'o_' + id + '_default', // Element id
            'default', // Default option
            'Not Available' // Default text
        )); 
    }
    catch
    {
        console.log("Failed: Dropdown '",id,"' does not exist!");
    }
}

// newOption(id: String, value: String, content: String): Element
// Creates a select element with the given id, value and content
// and returns it to the calling process.
function newOption(id, value, content)
{
    // Create a new option
    let option = document.createElement('option');

    // Assign the html content to the innerHTML
    option.innerHTML = content;

    // Set the option value to the value provided
    option.value = value;

    // Set the option id to the id provided
    option.id = id;

    // Return the created option object
    return option;
}

// setSelected(id: String, value: Boolean): Void
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

            // Set the car's rank to 'n'
            car.setField('rank', '01');

            // Both power and handling 0 pts
            car.setField('power', '00');
            car.setField('handling', '00');

            // Disable the power/handling dropdowns
            setDisabled('s_power', true);
            setDisabled('s_handling', true);
            break;

        case 2: // Basic Tuning
            
            // Set the car's rank to 'n'
            car.setField('rank', '03');

            // Both power and handling 10 pts
            car.setField('power', '0A');
            car.setField('handling', '0A');

            // Disable the power/handling dropdowns
            setDisabled('s_power', true);
            setDisabled('s_handling', true);
            break;

        case 3: // Full Tune

            // Both power and handling 17 pts

            // If the game is wmmt6 (840hp)
            if(car.getGameId() == 'wmmt6')
            {
                // Set the car's rank to 'n'
                car.setField('rank', '08');
    
                // Both power and handling 16 pts 
                car.setField('power', '11');
                car.setField('handling', '11');
            }
            else // Otherwise, game is wmmt5/5dx (830hp)
            {
                // Set the car's rank to 'n'
                car.setField('rank', '07');

                // Both power and handling 16 pts 
                car.setField('power', '10');
                car.setField('handling', '10');
            }

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

    // Update the form's selected rank
    setSelected('o_rank_' + car.getField('rank'), true);

    // Update the values in the drop down
    setSelected('o_power_' + car.getField('power'), true);
    setSelected('o_handling_' + car.getField('handling'), true);
}

// getWikiSearch(car_id: String): String
// Gets the search string to search for 
// the given model of car on the wikiwiki
// site for maximum tune.
function getWikiSearch()
{
    // Start of the wmmt wikiwiki search url
    let url_start = "https://wikiwiki.jp/wmmt/?cmd=search&word=";

    // End of the wmmt wikiwiki search url
    let url_end = "&type=AND";

    // Get the name and code for the car
    let car = document.car.getFieldName('cars');

    // Remove the content after the code from the string
    let code = car.split(']')[0];

    // Remove the content before the code from the string
    code = code.split('[')[1];

    // Return the code
    return url_start + code + url_end;
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

// handleUpload(Void): Void
// Handle the file upload to the site
function handleUpload()
{
    // Get the file from the upload 
    let file = document.getElementById('i_file').files[0];

    // If a file has been uploaded
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
                // Null out the existing car object
                document.car = null;

                // Disable all of the select tags
                disableAllWithTag('select');

                // Get the map from the buffer, and 
                // create a new car using the map
                let car = new Car(
                    new Map(e.target.result)  // Binary data of the car file
                );

                // If car is created successfully, assign to the document
                document.car = car;

                // If a car is loaded
                if (document.car)
                {                    
                    // Update the selected game on the form
                    setSelected('o_' + document.car.getGameId(), true);

                    // Loop over all of the supported fields
                    document.car.getFields().forEach(field => {

                        // Create the id for the drop-down select
                        let id = 's_' + field;

                        // Get the select element from the id
                        let select = null; 
                        
                        try
                        {
                            // Get the select drop-down for the element
                            select = document.getElementById(id);
                        }
                        catch // No select exists
                        {
                            // Must not be implemented yet, log to console
                            console.log('Not implemented:', select);
                        }


                        // Ensure the select exists before continuing
                        if (select)
                        {
                            // Reset the content of the select
                            resetDropdown('s_' + field);

                            // Get the drop-down with all of the possibilities
                            let options = document.car.getOptions(field);

                            // Sort the options based on the id
                            options.sort(function(a, b){

                                // Compare the value of the hex strings between the objects
                                return Number("0x" + a.id) > Number("0x" + b.id);

                            }); 

                            // Populate the drop-down with all of the possibilities
                            options.forEach(option => {

                                // Create the id for the drop-down option
                                let o_id = 'o_' + field + '_' + option.id;

                                // Append an option element to the select dropdown
                                select.appendChild(newOption(o_id, option.id, option.name));
                            }); 

                            // Set the selected option 
                            // to the current option

                            setSelected('o_' + field + '_' + document.car.getField(field), true);

                            // Enable the drop-down for the select field
                            setDisabled('s_' + field, false);
                        }

                    });

                    // Enable the randomise buttons (WMMT5/5DX/5DX+ and 6/6R)
                    document.getElementById('btn_random-all').disabled = false;
                    document.getElementById('btn_random-aeros').disabled = false;
                    document.getElementById('btn_random-colours').disabled = false;

                    // Check what the game the car is from

                    // Game is MT6/6R
                    if (document.car.getGameId() === 'wmmt6')
                    {
                        // Disable the MT5/5DX/5DX+ Specific randomise buttons
                        document.getElementById('btn_random-stickers').disabled = true;
                    }
                    else // Game is 5/5DX/5DX+
                    {
                        // Enable the MT5/5DX/5DX+ Specific randomise buttons
                        document.getElementById('btn_random-stickers').disabled = false;
                    }

                    // Set the tune to defailt
                    setTune(0);
                }
                else // Car is not loaded
                {
                    console.log("Failed: Car object not loaded properly!");
                }
            }
            catch(err) // Fails to create car object
            {
                // Document car is null
                document.car = null;
                document.filename = null;

                // Disable all of the drop-downs

                // Write error to terminal
                console.error("Error:",err);
            }
        };

        // Read the binary content from the file
        reader.readAsArrayBuffer(file);
    }
}

// randomiseField(field: String): Void
// Given a field, randomises the field if
// it is compatible with the current vehicle.
function randomiseField(field)
{
    // Get locations object
    let locations = document.car.getLocations();

    // Get the random value from the field
    let rand = locations.getRandom(field);

    // Set the value of the car to the random field
    document.car.setField(field, rand.id);

    // Set the selected drop-down option to the new setting
    setSelected('o_' + field + '_' + rand.id, true);
}

// randomiseSticker(void): Void
// (MT5/5dx/5dx+ only) randomises
// the sticker pattern on the given
// car.
function randomiseStickers()
{
    // Fields specific to mt5/5dx/5dx+
    field = null;

    // Coinflip: Either Japan Challenge 
    // stickers, or standard stickers
    if (Math.random() < 0.5){

        // Standard stickers

        // Unselect the japan body sticker
        document.car.setField('japan-sticker-type', '00');
        setSelected('o_japan-sticker-type_00', true);

        // Add standard sticker to the fields list
        field = 'body-sticker-type';
    }
    else
    {
        // Japan Challenge

        // Unselect the standard body sticker
        document.car.setField('body-sticker-type', '00');
        setSelected('o_body-sticker-type_00', true);
        
        // Add japan sticker to the fields list
        field = 'japan-sticker-type';
    }
    
    // Set the selected sticker variant to default
    document.car.setField('japan-sticker-variant', '00');
    setSelected('o_japan-sticker-variant_00', true);

    // Set the selected field to a random sticker
    randomiseField(field);
}

// randomiseColours(void): Void
// Randomises all of the colours 
// for the car.
function randomiseColours()
{
    // Colours (MT5/5dx/5dx+ only)
    let fields = [
        'colour-stock', 'colour-custom'
    ]

    // Loop over the fields
    fields.forEach(field => {

        // Randomise field
        randomiseField(field);
    });
}

// randomiseAeros(void): Void
// Randomises all of the aeros
// on the car.
function randomiseAeros()
{
    // Universal Aero Parts
    let fields = [
        'aero', 'wing', 'hood', 
        'mirror', 'trunk', 'neon', 
        'rims', 'plate-frame-type'
    ]

    // Loop over the fields
    fields.forEach(field => {

        // Randomise field
        randomiseField(field);
    });
}

// randomiseAll(void): Void
// Randomises all of the aero parts
// compatible with the current vehicle.
function randomiseAll()
{
    // Car is from wmmt6/wmmt6r
    if (document.car.getGameId() == 'wmmt6')
    {
        // Nothing yet, lol
    }
    else // wmmt5/5dx/5dx+
    {
        // Randomise stickers
        randomiseStickers();
    }

    // Randomise colours
    randomiseColours();

    // Randomise aero parts
    randomiseAeros();

    // Randomise rank
    randomiseField('rank');
}

// Initial Setup
Object.keys(HEXTABLE).forEach(id => {

    // Get the game selected drop-down from the form
    let select = document.getElementById('s_game');

    // Get the name of the game
    value = HEXTABLE[id].name;

    // Add an option element to the drop-down with the id and value
    select.appendChild(newOption(
        'o_' + id, // ID for the option
        id, // Value for the option
        value // Text for the option
    ));
});

// disableDropdowns(tag: String): void
// Given a tag (element type), disables
// all of the elements with that type.
function disableAllWithTag(tag)
{
    // Retrieve all of the elements with the given tag
    let elements = document.getElementsByTagName(tag);

    // Loop over all of the selected elements
    Object.keys(elements).forEach(element => {
        
        // Disable the selected element
        setDisabled(elements[element].id, true);
    });
}

// Disable all of the select tags
disableAllWithTag('select');