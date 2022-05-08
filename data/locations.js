class Hextable
{
    constructor(name, id, locations, values)
    {
        // Id of the game (i.e. wmmt5)
        this.id = id;

        // Name of the game (i.e. Maximum Tune 6)
        this.name = name;

        // Hex Addresses (per attribute)
        this.locations = locations;

        // Hex Values (per attribute)
        this.values = values;

        // Get all of the keys that are common 
        // across both locations and values
        this.keys = Object.keys(locations).filter(function(n)
        {
            // Return if the element is resent in the other array
            return Object.keys(values).indexOf(n) !== -1;
        }); 
    }

    // Constructors

    // getId(void): String
    getId()
    {
        // Return the id
        return this.id;
    }

    // setId(id: String): Void
    setId(id)
    {
        // Update the id
        this.id = id;
    }

    // getName(void): String
    getName()
    {
        // Return the name
        return this.name;
    }

    // setName(name: String): Void
    setName()
    {
        // Update the name
        this.name = name;
    }

    // getLocations(void): String
    getLocations()
    {
        // Return the locations object
        return this.locations;
    }

    // setLocations(locations: Object)
    setLocations()
    {
        // Update the locations object
        this.locations = locations;
    }

    // getValues(void): Object
    getValues()
    {
        // Return the values object
        return this.values;
    }

    // setValues(values: Object): Void
    setValues()
    {
        // Update the values object
        this.values = values;
    }

    // getKeys(void): List
    getKeys()
    {
        // Return the keys object
        return this.keys;
    }

    // setKeys(keys: List): Void
    setKeys(keys)
    {
        // Update the keys object
        this.keys = keys;
    }

    // Operational Functions

    // getRandom(field): String
    // If the field is present, 
    // returns a random value
    // selectable for the field.
    // Otherwise, returns null
    getRandom(field)
    {
        // Get the set for the field
        let set = this.values[field];

        // Get the keys for the set
        let keys = Object.keys(set);

        // Get a random index in the range of the set
        let rand = Math.floor(Math.random() * keys.length);

        // Return the value at the given index
        return {
            'id': keys[rand], 
            'value': set[keys[rand]]
        };
    }

    // getLocation(field: String)
    // Given the name of a property,
    // returns the hex address for 
    // the given property.
    getLocation(field)
    {
        return this.locations[field];
    }
}