"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToMs = exports.ToDay = exports.ToHour = exports.ToMin = exports.ToSec = void 0;
function parseVal(input) {
    //check if string contains d,h,m,s and if not containts one of those add them to the string and set the value to 0 and place the value in the correct place
    input = input.toLowerCase();
    let data;
    if (!input.includes("d") && !input.includes("h") && !input.includes("m") && !input.includes("s") && !input.includes("ms")) {
        return "you need to add a value";
    }
    if (!input.includes("d")) {
        input = "0d" + input;
    }
    if (!input.includes("h")) {
        data = input.split("d");
        input = data[0] + "d0h" + data[1];
    }
    if (!input.includes("m")) {
        data = input.split("h");
        input = data[0] + "h0m" + data[1];
    }
    if (!input.includes("s")) {
        data = input.split("m");
        input = data[0] + "m0s" + data[1];
    }
    if (!input.includes("ms")) {
        data = input.split("s");
        input = data[0] + "s0ms" + data[1];
    }
    let returnthis = input;
    return returnthis;
}
function splitDate(input) {
    input = parseVal(input);
    let parts = input.split("d");
    let days = parseInt(parts[0]);
    parts = parts[1].split("h");
    let hours = parseInt(parts[0]);
    parts = parts[1].split("m");
    let minutes = parseInt(parts[0]);
    parts = parts[1].split("s");
    let seconds = parseInt(parts[0]);
    parts = parts[1].split("ms");
    let milliseconds = parseInt(parts[0]);
    return [days, hours, minutes, seconds, milliseconds];
}
function ToSec(input) {
    let data = splitDate(input);
    let total = data[0] * 86400 + data[1] * 3600 + data[2] * 60 + data[3] + data[4] / 1000;
    return total;
}
exports.ToSec = ToSec;
function ToMin(input) {
    let data = splitDate(input);
    let total = data[0] * 1440 + data[1] * 60 + data[2] + data[3] / 60 + data[4] / 60000;
    return total;
}
exports.ToMin = ToMin;
function ToHour(input) {
    let data = splitDate(input);
    let total = data[0] * 24 + data[1] + data[2] / 60 + data[3] / 3600 + data[4] / 3600000;
    return total;
}
exports.ToHour = ToHour;
function ToDay(input) {
    let data = splitDate(input);
    let total = data[0] + data[1] / 24 + data[2] / 1440 + data[3] / 86400 + data[4] / 86400000;
    return total;
}
exports.ToDay = ToDay;
function ToMs(input) {
    let data = splitDate(input);
    let total = data[0] * 86400000 + data[1] * 3600000 + data[2] * 60000 + data[3] * 1000 + data[4];
    return total;
}
exports.ToMs = ToMs;
