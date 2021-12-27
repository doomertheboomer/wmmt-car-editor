class Map
{
    // constructor(buffer: Buffer): Void
    // Constructor for a new Map object
    constructor(buffer)
    {
        // Convert buffer to Uint8Array
        let array = [...new Uint8Array(buffer)];

        // Create result array
        let result = [];

        // i/j default at 0, -1
        let i = 0; let j = -1;

        // Loop over all of the buffer items
        for(; i < array.length; i++)
        {
            // Convert the integer to a hexidecimal string
            let item = array[i].toString(16).toUpperCase().padStart(2, '0');

            // If this element is an interval of 16
            if (i % 16 == 0)
            {
                // Add a new row to the result containing the element
                result.push([item]);

                // Increment the row
                j++;
            }
            else // All other elements
            {
                // Add the element to the current row
                result[j].push(item);
            }
        }

        // Assign the result to the map
        this.map = result;
    }

    // getFlattened(void): List
    // Returns the map with all elements in a single array.
    getFlattened()
    {
        // Empty list
        let li = [];

        // Loop over the map
        for (let i=0; i<this.map.length; i++)
        {
            // Loop over the current row in the map
            for(let j=0; j<this.map[i].length; j++)
            {
                // Push the element to the list
                li.push(this.map[i][j]);
            }
        }

        // Return the list
        return li;
    }

    // getUINT8Array(void): UINT8Array
    // Returns the map converted to a
    // UINT8Array. 
    getUINT8Array()
    {
        // Get a flattened array
        let flat = this.getFlattened();

        // Empty UINT8Array 
        // (same size as flattened array)
        let uint8 = new Uint8Array(flat.length);

        // Loop over the length of the uint8 array
        for(let i=0; i<uint8.length; i++)
        {
            // Convert the string to a 16-bit integer
            uint8[i] = parseInt(flat[i], 16);
        }

        // Return the list
        return uint8;
    }

    // Convert the buffer map to a hex string
    // For testing / demonstration purposes
    getBufferMapString()
    {
        // Empty return string
        let output = [];

        // Loop over all of the maps
        for (let m of this.map)
        {
            // Push onto the output array
            output.push(
                // Join the array on the spaces
                m.join(' '))
        }

        // Join the output on the newline character
        return output.join('\n');
    }

    getDimensions()
    {
        // Return a 2-element dict containing 
        // the width and height of the map.
        return {
            y: this.map.length, // Number of rows
            x: this.map[0].length // Number of cols
        };
    }

    // verifyPoint(x: int, y: int): void
    // Given an x and a y coordinate, verify
    // the point is within the range of the map.
    verifyPoint(y, x)
    {
        // Verify the coordinates are greater or equal
        // to zero, or less than the length of the arrays
        return (y >= 0) && (y < this.map.length) && 
            (x >= 0) && (x < this.map[0].length)
    }

    // getElementAt(x: int, y: int): void
    // Gets the current element at the position
    // in the map
    getElementAt(y, x)
    {
        // If the point is valid
        if(this.verifyPoint(x,y))
        {
            // Return the element in the map
            return this.map[y][x];
        }
        else // Point is invalid
        {
            // Out of range error
            throw "OutOfBoundsError";
        }
    }

    // setElementAt(y: int, x: int, n: int): int
    // Sets the element at the position in the map
    setElementAt(y, x, n)
    {
        // If the point is valid
        if(this.verifyPoint(x,y))
        {
            // Set the element in the map
            this.map[y][x] = n;
        }
        else // Point is invalid
        {
            // Out of range error
            throw "OutOfBoundsError";
        }
    }

    // getIntegerAt(x: int, y: int): void
    // Converts the hexidecimal value from
    // the map and converts it to decimal
    getDecimalAt(y, x)
    {
        // If the point is valid
        if(this.verifyPoint(x,y))
        {
            // Return the element in the map, converted to decimal
            return parseInt(this.map[y][x], 16).toString();
        }
        else // Point is invalid
        {
            // Out of range error
            throw "OutOfBoundsError";
        }
    }


    // setIntegerAt(y: int, x: int, n: int): int
    // Converts the integer to hexidecimal and sets
    // it to the position in the map
    setDecimalAt(y, x, n)
    {
        // If the point is valid
        if(this.verifyPoint(x,y))
        {
            // Set the element in the map
            this.map[y][x] = parseInt(n).toString(16).toUpperCase().padStart(2, '0');
        }
        else // Point is invalid
        {
            // Out of range error
            throw "OutOfBoundsError";
        }
    }
}