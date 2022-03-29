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

        // No game by default
        let game = null;

        // 88 06 - MT5
        // ?? ?? - MT5DX
        // E8 85 - MT5DX+
        // F8 3F - MT6
        // A8 69 - MT6R

        // Get the first two nibbles in the file - identifies the game
        let gameCheck = map.getElementAt(0, 0) + map.getElementAt(0, 1);

        // Check for Maximum Tune 5
        if (gameCheck === '8806')
        {
            // Set the game to Maxi 5
            game = 'wmmt5';
        }
        else if (gameCheck === 'E885') // Maximum Tune 5DX/5DX+
        {
            game = 'wmmt5dx';
        }
        else if (gameCheck === 'F83F' || gameCheck === 'A869') // Maximum Tune 6
        {
            // Set the game to Maxi 6
            game = 'wmmt6';
        }
        else // Try to load it as an MT6 file
        {
            // Throw the error to the calling process
            throw ("Unrecognised game:" + gameCheck);
        }

        // Set the map for this car to the given map
        this.map = map;
        
        // Get the hex table info for the game selected
        let hexInfo = HEXTABLE[game];

        // Use the location data for maximum tune 6
        this.locations = new Hextable(
            hexInfo.name, // Name
            game, // Id (game id)
            hexInfo.location, // Locations
            hexInfo.value // Values
        )
    }

    // setMap(map: Map): void
    // Given a map, sets the car's 
    // map to the given map object.
    setMap(map)
    {
        // Update the map object
        this.map = map;
    }

    // getMap(void): Map
    // Returns the map stored
    // within the car object.
    getMap()
    {
        // Return the map object
        return this.map;
    }

    // setGame(game: String): Void
    setGameId(game)
    {
        // Updates the id of the game
        this.locations.setId(game);
    }

    // getGame(void): String
    getGameId()
    {
        // Return the id of the game
        return this.locations.getId();
    }

    // setGame(game: String): Void
    setGameName(game)
    {
        // Updates the name of the game
        this.locations.setName(game);
    }

    // getGame(void): String
    getGameName()
    {
        // Return the name of the game
        return this.locations.getName();
    }

    // setLocations(locations: Object): Void
    // Given a locations object, sets the
    // hex locations for the car to the 
    // given locations object.
    setLocations(locations)
    {
        // Update the locations object
        this.locations = locations;
    }

    // getLocations(Void): Object
    // Returns the locations object
    // used by the car
    getLocations()
    {
        // Return the locations object
        return this.locations;
    }

    // setField(field: String, value: String)
    // If the field is present, returns the value
    // of the field. Otherwise, returns null.
    setField(field, option)
    {
        // Get the hex index for the field
        let coords = this.getLocations().getLocation(field);

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
        let coords = this.getLocations().getLocation(field);

        // Get the element in the element corresponding to the field location
        return this.map.getElementAt(coords[0], coords[1]);
    }

    // getFields(void): List
    getFields()
    {
        // Return the list of keys for the locations object
        return this.getLocations().getKeys();
    }

    // getOptions(field: String)
    // Gets all of the possible 
    // options which can be applied
    // to this car for this game.
    getOptions(field)
    {
        // List of options to return
        let list = [];

        // Get the list of options for the given field
        let options = this.getLocations().getValues()[field];

        // Loop over all of the options in the values list for the field
        Object.keys(options).forEach(option => {

            list.push({

                // Name of the option
                name: options[option],

                // ID (Hex Value) for the option
                id: option 

            });

        });

        // Return the completed list
        return list;
    }
}