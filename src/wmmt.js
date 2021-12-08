class Car 
{
    // Constructor
    // Requires a map to get info from
    constructor(map)
    {
        // Car ID
        this.id = getSelected(map, 'cars');
        
        this.rims = {
            type: getSelected(map, 'rims'), // Rims Type
            colour: getSelected(map, 'rims-colour') // Rims Colour
        };
        
        // Aero / Body Kit
        this.aero = getSelected(map, 'aero');

        this.hood = getSelected(map, 'hood');
        this.wing = getSelected(map, 'wing');
        this.mirror = getSelected(map, 'mirror');
        this.neon = getSelected(map, 'neon');
        this.trunk = getSelected(map, 'trunk');
        
        this.plate = {
            frame: getSelected(map, 'plate-frame'), // Plate Frame
            colour: getSelected(map, 'plate-frame-colour'), // Plate Colour
            number: [
                getSelected(map, 'plate-number1'), // First Number
                getSelected(map, 'plate-number2') // Second Number
            ]
        }
        
        this.power = getSelected(map, 'power');
        this.handling = getSelected(map, 'handling');
        this.rank = getSelected(map, 'rank');

        this.sticker = {
            type: getSelected(map, 'sticker-type'),
            id: getSelected(map, 'sticker-id')
        }

        console.log(this.toStringHex());
        console.log(this.toString());
    }

    toString()
    {
        return "Car ID: " + getValueAt('cars', this.id) + "\n" + 
            "Rims Type: " + getValueAt('rims', this.rims.type) + ", Rims Color: " + getValueAt('rims-colour', this.rims.colour) + "\n" + 
            "Aero: " + getValueAt('aero', this.aero) + ", Hood: " + getValueAt('hood', this.hood) + ", Wing: " + getValueAt('wing', this.wing) + "\n" + 
            "Mirror: " + getValueAt('mirror', this.mirror) + ", Neon: " + getValueAt('neon', this.neon) + ", Trunk: " + getValueAt('trunk', this.trunk) + "\n" + 
            "Plate Frame: " + getValueAt('plate-frame',this.plate.frame) + ", Plate Colour: " + getValueAt('plate-colour',this.plate.colour) + "\n" + 
            "Plate Number (1): " + getValueAt('plate-number-0', this.plate.number[0]) + ", (2): " + getValueAt('plate-number-1', this.plate.number[1]) + "\n" + 
            "Power: " + getValueAt('power', this.power) + ", Handling: " + getValueAt('handling', this.handling) + ", Rank: " + getValueAt('rank', this.rank) + "\n" + 
            "Sticker Type: " + getValueAt('sticker-type', this.sticker.type) + ", Sticker ID: " + getValueAt('sticker-id',this.sticker.id);
    }

    toStringHex()
    {
        return "Car ID: " + this.id + "\n" + 
            "Rims Type: " + this.rims.type + ", Rims Color: " + this.rims.colour + "\n" + 
            "Aero: " + this.aero + ", Hood: " + this.hood + ", Wing: " + this.wing + "\n" + 
            "Mirror: " + this.mirror + ", Neon: " + this.neon + ", Trunk: " + this.trunk + "\n" + 
            "Plate Frame: " + this.plate.frame + ", Plate Colour: " + this.plate.colour + "\n" + 
            "Plate Number (1): " + this.plate.number[0] + ", (2): " + this.plate.number[1] + "\n" + 
            "Power: " + this.power + ", Handling: " + this.handling + ", Rank: " + this.rank + "\n" + 
            "Sticker Type: " + this.sticker.type + ", Sticker ID: " + this.sticker.id;
    }
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