var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function getDivisibleValues(values, divisor) {
    return values.filter(function (val) { return val % divisor === 0; });
}
function concatenateText(items, separator) {
    return items.join(separator);
}
function orderByField(list, field) {
    var copy = __spreadArray([], list, true);
    copy.sort(function (itemA, itemB) {
        var aVal = itemA[field];
        var bVal = itemB[field];
        if (aVal < bVal)
            return -1;
        if (aVal > bVal)
            return 1;
        return 0;
    });
    return copy;
}
function logBeforeExecution(callback) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var name = callback.name || "unnamed";
        console.log("Invoking function \"".concat(name, "\" with:"), args);
        var output = callback.apply(void 0, args);
        console.log("Output of \"".concat(name, "\":"), output);
        return output;
    };
}
var dataSet = [1, 10, 15, 20, 22, 25, 34, 40];
var phrases = ["I'm", "sorry", "I", "didn't", "send", "the", "lab", "on", "time", "(T-T )"];
var people = [
    { username: "Tom", score: 88 },
    { username: "Anna", score: 92 },
    { username: "Mike", score: 75 },
];
var divisibleBy5 = getDivisibleValues(dataSet, 5);
console.log("Divisible by 5:", divisibleBy5);
var combinedText = concatenateText(phrases, "_");
console.log("Combined text:", combinedText);
var rankedPeople = orderByField(people, "score");
console.log("Ranked by score:", rankedPeople);
var loggedDivisibleCheck = logBeforeExecution(getDivisibleValues);
var logOutput = loggedDivisibleCheck(dataSet, 10);
console.log("Log output:", logOutput);
