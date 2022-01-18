class HexIndex
{
    // Object constructor
    constructor(index)
    {
        // Set the index to the provided index
        this.setIndex(index);
    }

    // getIndex(index: Object): Void
    // Given an index object, sets the
    // hex locations for the index to the 
    // given locations object.
    getIndex()
    {
        return this.index;
    }

    // setIndex(Void): Object
    // Returns the index object
    // used by the hex index.
    setIndex(index)
    {
        this.index = index;
    }

    // getIndexOf(value: String): Object
    // Given a property, checks if the property
    // is declared for the selected index. If it
    // is, returns the property. If not, returns 
    // null.
    getIndexOf(value)
    {
        // If index contains requested key
        if (this.index.hasOwnProperty(value))
        {
            // 
            return index[value];
        }
        else
        {
            return null;
        }
    }
}