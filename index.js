// Handle the upload
function handleUpload()
{
    // Get the file from the upload 
    let file = document.getElementById('i_file').files[0];

    // File reader object for opening user input
    const reader = new FileReader();

    // Code to run if reader succeeds
    reader.onload = function(e) {

        // Get the map from the buffer
        let map = getBufferMap(e.target.result);

        // Verify the map is valid
        if (verifyBufferMap(map))
        {
            // Get the current car info
            car = new Car(map);
        }
        else // Map is invalid
        {
            throw "Failed to verify map! Ensure file is correct!";
        }
	};

    // Code to run if reader fails
	reader.onerror = function(e) {
		
	};

    // Read the binary content from the file
    reader.readAsArrayBuffer(file);
}