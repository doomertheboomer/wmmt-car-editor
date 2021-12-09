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