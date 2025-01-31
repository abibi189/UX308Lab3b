// 1) Given a *temperature* in **kelvin** *convert* to **fahrenheit**.
function convertKelvinToFahrenheit(kelvin){
    let fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
    return fahrenheit;
}

console.log(`300 kelvin is ${convertKelvinToFahrenheit(300)} fahrenheit`);
export{convertKelvinToFahrenheit}