// **** Car Model / Etc. ****

function setCarModel(offset)
{
  setField("car-id", value)
  
  // If car model and id
  // are synced
  if (document.carSync)
  {
    // Update the id
    setCarId(value);
  }

  // Otherwise, don't update
}

function setCarId(offset)
{
  setField("car-model", value)

  // If car model and id
  // are synced
  if (document.carSync)
  {
    // Update the model
    setCarModel(value);
  }

  // Otherwise, don't update
}

function setCarSync(status)
{
  // Update the car sync value
  document.carSync = status;

  // If the status is true
  if (status)
  {
    // Sync the two values
    setCarId(getCarId());
  }
}

function setRank(offset)
{
  setField("rank", value);
}

// **** Car Colour ****

function setStockColour(offset)
{
  setField("colour-stock", value);
}

function setCustomColour(offset)
{
  setField("colour-custom", value);
}

function setRimsColour(offset)
{
  setField("colour-rims", value);
}

// **** Aero Parts ****

function setRims(offset)
{
  setField("rims", value)
}

function setAero(offset)
{
  setField("aero", value)
}

function setHood(offset)
{
  setField("hood", value)
}

function setWing(offset)
{
  setField("wing", value);
}

function setMirror(offset)
{
  setField("mirror", value);
}

function setTrunk(offset)
{
  setField("trunk", value);
}

function setNeon(offset)
{
  setField("neon", value);
}

// **** Plate Settings ****

function setPlateFrameType(offset)
{
  setField("plate-frame-type", value);
}

function setPlateFrameColour(offset)
{
  setField("plate-frame-colour", value);
}

function setPlateNumber(number)
{
  setField('plate-number', value);
}

// **** Sticker Settings ****

// setStickerType(status: Bool): Void
// Given a sticker type, sets the active
// sticker type 
function setStickerType(status)
{
  // Set the current sticker type
  // 0 = Normal Sticker
  // 1 = Japan Sticker
  document.stickerType = status;
}

// setBodyStickerType(offset: Int): Void
// Given an integer offset, sets the body sticker 
// type if the body sticker is set and the japan 
// sticker type if the japan sticker is set. Sets
// the other sticker type to zero.
function setBodyStickerType(offset)
{
  // Switch on sticker type

  // Japan challenge sticker set
  if (document.stickerType)
  {
    // Japan Challenge Sticker
    setField("japan-sticker-type", offset);

    // Reset other type to default
    setField("body-sticker-type", 0);
  }
  else // Normal sticker set
  {
    // Normal Sticker
    setField("body-sticker-type", offset);

    // Reset other type to default
    setField("japan-sticker-type", 0);
  }
}

// setBodyStickerColour(offset: Int): Void
// Given an integer offset, sets the body sticker
// colour if the body sticker is set and the japan
// sticker colour if the japan sticker is set. Sets
// the other sticker type to zero.
function setBodyStickerColour(offset)
{
  // Switch on sticker type

  // Japan challenge sticker set
  if (document.stickerType)
  {
    // Japan Challenge Sticker
    setField("japan-sticker-colour", offset);

    // Reset other type to default
    setField("body-sticker-colour", 0);
  }
  else // Normal sticker set
  {
    // Normal Sticker
    setField("body-sticker-colour", offset);

    // Reset other type to default
    setField("japan-sticker-colour", 0);
  }
}

// setSideStickerType(offset: Int): Void
function setSideStickerType(offset)
{
  setField("side-sticker-type", offset);
}

// setSideStickerColour(offset: Int): Void
function setSideStickerColour(offset)
{
  setField("side-sticker-colour", offset);
}

// setRoofStickerType(offset: Int): Void
function setRoofStickerType(offset)
{
  setField("roof-sticker-type", offset);
}

// setRoofStickerColour(offset: Int): Void
function setRoofStickerColour(offset)
{
  setField("roof-sticker-colour", offset);
}

// **** Power & Handling Settings ****

// setPower(offset: Int): Void
// Sets the power value of the car
// to the provided value.
function setPower(offset)
{
  setField("power", offset);
}

// setHandling(offset: Int): Void
// Sets the handling value of the car
// to the provided value.
function setHandling(offset)
{
  setField("handling", offset);
}

// Given a combo box value, 
// sets the tuning settings for
// the car and enables or disables
// the drop-downs, depending on the 
// setting applied.
function setTune(value)
{
    // Values:
    // 0 - No Tune 
    // 1 - Basic Tuning
    // 2 - Full Tune 
    // 3 - Custon Tune

    // Dereference the car object
    let car = document.car;

    switch(value)
    {
        case 0: // Leave as is

            // Disable the power/handling dropdowns
            setDisabled('s_power', true);
            setDisabled('s_handling', true);
            break;

        case 1: // No Tune

            // Set the car's rank to 'n'
            car.setField('rank', '01');

            // Both power and handling 0 pts
            car.setField('power', '00');
            car.setField('handling', '00');

            // Disable the power/handling dropdowns
            setDisabled('s_power', true);
            setDisabled('s_handling', true);
            break;

        case 2: // Basic Tuning
            
            // Set the car's rank to 'n'
            car.setField('rank', '03');

            // Both power and handling 10 pts
            car.setField('power', '0A');
            car.setField('handling', '0A');

            // Disable the power/handling dropdowns
            setDisabled('s_power', true);
            setDisabled('s_handling', true);
            break;

        case 3: // Full Tune

            // Both power and handling 17 pts

            // If the game is wmmt6 (840hp)
            if(car.getGameId() == 'wmmt6')
            {
                // Set the car's rank to 'n'
                car.setField('rank', '08');
    
                // Both power and handling 16 pts 
                car.setField('power', '11');
                car.setField('handling', '11');
            }
            else // Otherwise, game is wmmt5/5dx (830hp)
            {
                // Set the car's rank to 'n'
                car.setField('rank', '07');

                // Both power and handling 16 pts 
                car.setField('power', '10');
                car.setField('handling', '10');
            }

            // Disable the power/handling dropdowns
            setDisabled('s_power', true);
            setDisabled('s_handling', true);
            break;

        case 4: // Custom Tune

            // Enable the power/handling dropdowns
            setDisabled('s_power', false);
            setDisabled('s_handling', false);
            break;

        default: // Unknown value provided

            console.log("Unknown value '" + value + "'provided!");
            break;
    }

    // Update the form's selected rank
    setSelected('o_rank_' + car.getField('rank'), true);

    // Update the values in the drop down
    setSelected('o_power_' + car.getField('power'), true);
    setSelected('o_handling_' + car.getField('handling'), true);
}

// **** Scratch Off Item Settings ****

function setWindowStickerToggle(status)
{
  setField('window-sticker-toggle', status);
}

function setWindowStickerStyle(offset)
{
  setField("roof-sticker-type", offset);
}

function setWindowStickerFont(offset)
{
  setField("roof-sticker-font", offset);
}

function setRivalMarker(offset)
{
  setField("rival-marker", offset);
}