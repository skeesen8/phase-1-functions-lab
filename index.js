 const distanceFromHqInBlocks = function(location){
    if (location < 42)
    return(42 - location)
    else (location > 42)
    return (location - 42)
 }

console.log (distanceFromHqInBlocks(25))


 const distanceFromHqInFeet = function (location) {
    return (Math.abs(location - 42) * 264);
 }


 const distanceTravelledInFeet = function(startLocation, finalLocation){
    return (Math.abs(startLocation - finalLocation) * 264);
 }

 const calculatesFarePrice = function(startLocation, finalLocation) {
    const distance = Math.abs(startLocation - finalLocation)* 264;

    if (distance > 2500) {
        return "cannot travel that far";
    }
    else if (distance > 2000){
    return 25;
    } if (distance > 400 && distance < 2000){
        return ((distance - 400) * .02)
    } if (distance < 400)
    return 0
    };

    


