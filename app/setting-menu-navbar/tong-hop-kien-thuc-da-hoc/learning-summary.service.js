angular.module("myApp.learningSummary").factory('LearningSummaryService', LearningSummaryService)
function LearningSummaryService() {
    let service = {
        getNumberOfChars: getNumberOfChars,
        getClean: getClean,
        getFirstChar: getFirstChar,
        getLastChar: getLastChar,
        getLower: getLower,
        getUpper: getUpper,
        getCapitalized: getCapitalized,
    }
    /** @param {string} name */
    function getNumberOfChars(name) {
        // return the number of characters in: name
        return name.length;
    }

    function getClean(name) {
        // return name without trailing and leading space (example: " alex " becomes: "alex")
        return name.trim();
    }
    function getFirstChar(name) {
        // return the first character of: name
        return getClean(name[name.length - name.length]);
    }

    function getLastChar(name) {
        // return the last character of: name
        return name[name.length - 1]
    }

    function getLower(name) {
        // return name all in lower case (example: "ABC" becomes "abc")
        return name.toLowerCase();
    }

    function getUpper(name) {
        // return name all in upper case (example: "abc" becomes "ABC")
        return name.toUpperCase(name);
    }

    function getCapitalized(name) {
        var name_array = name.split(" ");
        var name_array_result = [];
        for (var x in name_array) {
            var name_result = name_array[x];
            name_result = `${getUpper(getFirstChar(name_result))}${getLower(name_result.substring(1, name_result.length))}`;
            name_array_result.push(name_result)
        }
        // return a capitalized version of name (example: "alEX" becomes "Alex")
        return name_array_result.join(" ")
    }
    return service;
}