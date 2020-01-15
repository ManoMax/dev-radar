module.exports = function parseStringToArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());
}