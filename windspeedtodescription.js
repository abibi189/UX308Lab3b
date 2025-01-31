// 2) Convert a windspeed to a description using The Beaufort Wind Scale.
function convertWindSpeedToDescription(windSpeedKnots) {
    let description = "Calm Breeze"; // Default description

    if (windSpeedKnots > 40) {
        description = "Severe Gale";
    } else if (windSpeedKnots > 13) {
        description = "Moderate Breeze";
    }

    return description;
}

export { convertWindSpeedToDescription };