function parseVal(input){
    //check if string contains d,h,m,s and if not containts one of those add them to the string and set the value to 0 and place the value in the correct place
    input = input.toLowerCase();

    if(!input.includes("d") && !input.includes("h") && !input.includes("m") && !input.includes("s")){
        return "you need to add a value"
    }
    if(!input.includes("d")){
        input = "0d" + input;
    }

    if(!input.includes("h")){
        data = input.split("d");
        input = data[0] + "d0h" + data[1];
    }

    if(!input.includes("m")){
        data = input.split("h");
        input = data[0] + "h0m" + data[1];
    }

    if(!input.includes("s")){
        data = input.split("m");
        input = data[0] + "m0s" + data[1];
    }

    return input;
}

function splitDate(input) {
    input = parseVal(input);
    let days = input.split("d")[0];
    let hours = input.split("d")[1].split("h")[0];
    let minutes = input.split("d")[1].split("h")[1].split("m")[0];
    let seconds = input.split("d")[1].split("h")[1].split("m")[1].split("s")[0];
    return [days, hours, minutes, seconds];
}

function ToSec(input){
    let data = splitDate(input);
    let total = data[0] * 86400 + data[1] * 3600 + data[2] * 60 + data[3] * 1;
    return total;
}

function ToMin(input){
    let data = splitDate(input);
    let total = data[0] * 1440 + data[1] * 60 + data[2] * 1 + data[3] / 60;
    return total;
}

function ToHour(input){
    let data = splitDate(input);
    let total = data[0] * 24 + data[1] * 1 + data[2] / 60 + data[3] / 3600;
    return total;
}

function ToDay(input){
    let data = splitDate(input);
    let total = data[0] * 1 + data[1] / 24 + data[2] / 1440 + data[3] / 86400;
    return total;
}
    

module.exports = {
    ToSec,
    ToMin,
    ToHour,
    ToDay
}