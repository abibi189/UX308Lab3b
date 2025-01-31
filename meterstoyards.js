//take up of Lab last week
//Take a variable with distance in **metres** as input and output the same distance *convert*ed to **yards**.

function convertMetersToYards(metres){
    let yards = metres * 1.09361;
    return yards;
}

console.log(`3 meters is ${convertMetersToYards(3)} yards`);
export{convertMetersToYards}