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

        // If width is 16 and height is 14
        if(d.x == 16 && d.y == 14)
        {
            // Set the map for this car to the given map
            this.map = map;
        }
        else // Other dimensions
        {
            // Throw error to calling process
            throw "InvalidBufferMapError";
        }
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

    // getCar(void): String
    // Return the hex code for the selected car
    getCar()
    {
        // Return the currently selected car
        return this.map.getElementAt(3, 4);
    }

    // setCar(hexcode: String): Void
    // Assign the hex code for the selected car
    setCar(hexcode)
    {
        // Assign the currently selected car
        this.map.setElementAt(3, 4, hexcode);
    }

    // getColour(void): String
    // Get the hex code for the selected car colour
    getColour()
    {
        // Return the currently selected colour
        return this.map.getElementAt(3, 8);
    }

    // setColour(hexcode): String
    // Set the hex code for the selected car colour
    setColour(hexcode)
    {
        // Assign the currently selected colour
        this.map.setElementAt(3, 8, hexcode);
    }

    // getRims(): String
    // Return the hex code for the selected rims
    getRims()
    {
        // Return the currently selected rims
        return this.map.getElementAt(4, 0);
    }

    // setRims(hexcode: String): Void
    // Assign the hex code for the selected rims
    setRims(hexcode)
    {
        // Assign the currently selected rims
        this.map.setElementAt(4, 0, hexcode);
    }

    // getRimsColour(): String
    // Return the hex code for the selected rims colour
    getRimsColour()
    {
        // Assign the currently selected rims colour
        return this.map.getElementAt(4, 4);
    }

    // setRimsColour(hexcode: String): Void
    // Assign the hex code for the selected rims colour
    setRimsColour(hexcode)
    {
        // Assign the currently selected rims colour
        this.map.setElementAt(4, 4, hexcode);
    }

    // setAero(hexcode: String): Void
    // Assign the hex code for the selected aero kit
    setAero(hexcode)
    {
        // Assign the currently selected aero kit
        this.map.setElementAt(4, 8, hexcode);
    }

    // getAero(): String
    // Return the hex code for the selected aero kit
    getAero()
    {
        // Assign the currently selected aero kit
        return this.map.getElementAt(4, 8);
    }

    // setHood(hexcode: String): Void
    // Assign the hex code for the selected hood
    setHood(hexcode)
    {
        // Assign the currently selected hood
        this.map.setElementAt(4, 12, hexcode);
    }

    // getHood(): String
    // Return the hex code for the selected hood
    getHood()
    {

        // Assign the currently selected hood
        return this.map.getElementAt(4, 12);
    }

    // setWing(hexcode: String): Void
    // Assign the hex code for the selected wing
    setWing(hexcode)
    {
        // Assign the currently selected wing
        this.map.setElementAt(5, 8, hexcode);
    }

    // getWing(): String
    // Return the hex code for the selected wing
    getWing()
    {
        // Assign the currently selected wing
        return this.map.getElementAt(5, 8);
    }

    // setMirror(hexcode: String): Void
    // Assign the hex code for the selected mirror
    setMirror(hexcode)
    {
        // Assign the currently selected mirror
        this.map.setElementAt(5, 12, hexcode);
    }
    
    // getMirror(): String
    // Return the hex code for the selected mirror
    getMirror()
    {

        // Assign the currently selected mirror
        return this.map.getElementAt(5, 12);
    }

    // setNeon(hexcode: String): Void
    // Assign the hex code for the selected neon
    setNeon(hexcode)
    {
        // Assign the currently selected neon
        this.map.setElementAt(6, 0, hexcode);
    }

    // getNeon(): String
    // Return the hex code for the selected neon
    getNeon()
    {
        // Assign the currently selected neon
        return this.map.getElementAt(6, 0);

    }

    // setTrunk(hexcode: String): Void
    // Assign the hex code for the selected trunk
    setTrunk(hexcode)
    {
        // Assign the currently selected trunk
        this.map.setElementAt(6, 4, hexcode);
    }

    // getTrunk(): String
    // Return the hex code for the selected trunk
    getTrunk()
    {
        // Assign the currently selected trunk
        return this.map.getElementAt(6, 4);
    }

    // setPlateFrame(hexcode: String): Void
    // Assign the hex code for the selected plate frame
    setPlateFrame(hexcode)
    {
        // Split the hexcode on the dash
        let hexcodes = hexcode.split('-');

        // Assign the currently selected plate frame
        this.map.setElementAt(6, 8, hexcodes[0]);

        // Assign the currently selected frame colour
        this.map.setElementAt(6, 12, hexcodes[1]);
    }

    // getPlateFrame(): String
    // Return the hex code for the selected plate frame
    getPlateFrame()
    {
        // Assign the currently selected plate frame
        return this.map.getElementAt(6, 8) + '-' + this.map.getElementAt(6, 12);
    }

    // setPlateFrameNumber1(hexcode: String): Void
    // Assign the hex code for the first selected plate frame number
    setPlateFrameNumber1(hexcode)
    {
        // Assign the currently selected plate frame number
        this.map.setElementAt(7, 0, hexcode);
    }
    
    // getPlateFrameNumber1(): String
    // Return the hex code for the first selected plate frame number
    getPlateFrameNumber1()
    {
        // Assign the currently selected plate frame number
        return this.map.getElementAt(7, 0);
    }

    // setPlateFrameNumber2(hexcode: String): Void
    // Assign the hex code for the second selected plate frame number
    setPlateFrameNumber2(hexcode)
    {
        // Assign the currently selected plate frame number
        this.map.setElementAt(7, 0, hexcode);
    }
    
    // getPlateFrameNumber2(): String
    // Return the hex code for the second selected plate frame number
    getPlateFrameNumber2()
    {
        // Assign the currently selected plate frame number
        return this.map.getElementAt(7, 0);
    }

    // setPower(hexcode: String): Void
    // Assign the hex code for the selected power
    setPower(hexcode)
    {
        // Assign the currently selected power
        this.map.setElementAt(7, 4, hexcode);
    }

    // getPower(): String
    // Return the hex code for the selected power
    getPower()
    {
        // Assign the currently selected power
        return this.map.getElementAt(7, 4);
    }

    // setHandling(hexcode: String): Void
    // Assign the hex code for the selected handling
    setHandling(hexcode)
    {
        // Assign the currently selected handling
        this.map.setElementAt(8, 0, hexcode);

    }

    // getHandling(): String
    // Return the hex code for the selected handling
    getHandling()
    {
        // Assign the currently selected handling
        return this.map.getElementAt(8, 0);
    }
    
    // setRank(hexcode: String): Void
    // Assign the hex code for the selected rank
    setRank(hexcode)
    {
        // Assign the currently selected rank
        this.map.setElementAt(8, 4, hexcode);
    }

    // getRank(): String
    // Return the hex code for the selected rank
    getRank()
    {
        // Assign the currently selected rank
        return this.map.getElementAt(8, 4);
    }

    // setStickerType(hexcode: String): Void
    // Assign the hex code for the selected sticker type
    setStickerType(hexcode)
    {
        // Assign the currently selected sticker type
        this.map.setElementAt(9, 4, hexcode);
    }

    // getStickerType(): String
    // Return the hex code for the selected sticker type
    getStickerType()
    {
        // Assign the currently selected sticker type
        return this.map.getElementAt(9, 4);
    }

    // setStickerId(hexcode: String): Void
    // Assign the hex code for the selected sticker id
    setStickerId(hexcode)
    {
        // Assign the currently selected sticker id
        this.map.setElementAt(9, 8, hexcode);
    }

    // getStickerId(): String
    // Return the hex code for the selected sticker id
    getStickerId()
    {
        // Assign the currently selected sticker id
        return this.map.getElementAt(9, 8);
    }
}