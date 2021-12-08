// Convert the buffer to an array of 16-element arrays
function getBufferMap(buffer) {

    // Convert buffer to Uint8Array
    let array = [...new Uint8Array(buffer)];

    // Create output array
    let output = [];

    // i/j default at 0
    let i = 0; j = -1;

    // Loop over all of the buffer items
    for(i=0; i<array.length; i++)
    {
        // Convert the integer to a hexidecimal string
        let item = array[i].toString(16).toUpperCase().padStart(2, '0');

        // If this element is an interval of 16
        if (i % 16 == 0)
        {
            // Add a new row to the output containing the element
            output.push([item]);

            // Increment the row
            j++;
        }
        else // All other elements
        {
            // Add the element to the current row
            output[j].push(item);
        }
    }

    return output;
}

// Convert the buffer map to a hex string
// For testing / demonstration purposes
function getBufferMapString(map)
{
    // Empty return string
    let output = [];

    // Loop over all of the maps
    for (m of map)
    {
        // Push onto the output array
        output.push(
            // Join the array on the spaces
            m.join(' '))
    }

    // Join the output on the newline character
    return output.join('\n');
}