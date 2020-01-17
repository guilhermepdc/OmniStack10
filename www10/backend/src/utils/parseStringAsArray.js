module.exports = function perseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());
}
