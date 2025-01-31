// 2) Take a variable with the *temperature* and another variable with the *relative humidity* and output a *clothing* *suggest*ion.

function suggestClothing(temperature, humidity){
    let clothingSuggestion = "toque, boots, heavy coat";
    if (temperature > 25){
            clothingSuggestion = "shorts, t-shirt, birkenstocks";

    }else if (temperature > 10){
            clothingSuggestion = "long pants, running shoes, hoodie";
    }
    return clothingSuggestion;

}
export {suggestClothing}