class Car 
{
    // Constructor
    // Requires a map to get info from
    constructor(map)
    {
        // Get the map dimensions
        let d = map.getDimensions();

        // Verify the dimensions are 16x14
        // ALL WMMT6 car files are this size

        console.log(d.x, d.y);

        // If the width is 16 and height is 16
        if(d.x == 16 && d.y == 16)
        {
            // This is a MT5/5DX/5DX+ File
            this.game = 'wmmt5';
        }
        // If width is 16 and height is 14
        else if(d.x == 16 && d.y == 14)
        {
            // This is an MT6 File
            this.game = 'wmmt6';
        }
        else // Other dimensions
        {
            // Throw error to calling process
            throw "InvalidBufferMapError";
        }

        console.log("Game detected:", this.game);

        // Set the map for this car to the given map
        this.map = map;

        // Use the location data for maximum tune 6
        this.locations = HEXTABLE[this.game].location;
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

    setGame(game)
    {
        this.game = game;
    }

    getGame()
    {
        return this.game;
    }

    // setLocations(locations: Object): Void
    // Given a locations object, sets the
    // hex locations for the car to the 
    // given locations object.
    setLocations(locations)
    {
        this.locations = locations;
    }

    // getLocations(Void): Object
    // Returns the locations object
    // used by the car
    getLocations()
    {
        return this.locations;
    }

    // setField(field: String, value: String)
    // If the field is present, returns the value
    // of the field. Otherwise, returns null.
    setField(field, option)
    {
        // Get the hex index for the field
        let coords = this.locations[field];

        // Set the element in the element corresponding to the field location
        this.map.setElementAt(coords[0], coords[1], option);
    }

    // getField(field: String)
    // If the field is present, returns
    // the value of the field. Otherwise,
    // returns null.
    getField(field)
    {
        // Get the hex index for the field
        let coords = this.locations[field];

        // Get the element in the element corresponding to the field location
        return this.map.getElementAt(coords[0], coords[1]);
    }
}