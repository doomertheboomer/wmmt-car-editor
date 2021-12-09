class Car 
{
    // Constructor
    // Requires a map to get info from
    constructor(map)
    {
        // Set the map for this car to the given map
        this.map = map;
    }

    // setMap(map: Map): void
    // Given a map, sets the car's 
    // map to the given map object.
    setMap(map)
    {
        this.map = map;
    }

    // getMap(void): Map
    // Returns the map stored
    // within the car object.
    getMap()
    {
        return this.map;
    }

    getCar()
    {

    }

    setCar()
    {

    }

    getRims()
    {

    }

    setRims()
    {

    }

    getRimsColour()
    {
        
    }

    setRimsColour()
    {

    }

    setAero()
    {

    }

    getAero()
    {

    }

    /*
    'rims-colour': [4, 4],
    'aero': [4, 8],
    'hood': [4, 12],
    'wing': [5, 8],
    'mirror': [5, 12],
    'neon': [6, 0],
    'trunk': [6, 4],
    'plate-frame': [6, 8],
    'plate-frame-colour': [6, 12],
    'plate-number1': [7, 0],
    'plate-number2': [7, 1],
    'power': [7, 4],
    'handling': [8, 0],
    'rank': [8, 4],
    'sticker-type': [9, 4],
    'sticker-id': [9, 8],
    */
}

// Verify that the map provided
// is a valid maximum tune 6 car.
// More code may be added to this
// later, however for the moment it
// simply checks the correct number
// of rows are contained in the file.
function verifyBufferMap(map)
{
    // Verify there are 14 rows in the map
    return map.length == 14;
}

// Given a map and a type, gets the 
// currently selected value for the item type.
function getSelected(map, type)
{
    // If the locations contains the type
    if (Object.keys(LOCATIONS).includes(type))
    {
        // Dereference the location index
        let index = LOCATIONS[type];

        // Return the value at the selected index
        return map[index[0]][index[1]];
    }
    else // Locations does NOT contain the type
    {
        throw "Cannot get! Type does not exist!";
    }
}

// Given a map, a type and a value assigns the 
// map at the index pointed to by the type the 
// value provided.
function setSelected(map, type, value)
{
    // If the locations contains the type
    if (Object.keys(LOCATIONS).includes(type))
    {
        // Dereference the location index
        let index = LOCATIONS[type];

        // Return the value at the selected index
        map[index[0]][index[1]] = value;
    }
    else // Locations does NOT contain the type
    {
        throw "Cannot set! Type does not exist!";
    }
}

// Given a type of item and a value, 
// retrieves the details of that item.
function getValueAt(type, key)
{
    // If the hex table contains the type
    if (Object.keys(HEXTABLE).includes(type))
    {
        // Dereference the type
        itemtype = HEXTABLE[type];

        // Verify the type contains the key
        if (Object.keys(itemtype).includes(key))
        {
            // Return the item
            return itemtype[key];
        }
        else // Item key is invalid
        {
            // Return nothing
            return "Unknown Item, Raw Value '" + key + "'";
        }
    }
    else // Hex key is invalid
    {
        // Return nothing
        return "Unknown Type, Raw Value '" + key + "'";
    }
}