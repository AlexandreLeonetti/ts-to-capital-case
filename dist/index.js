import toSpaceCase from 'to-space-case';
function toCapitalCase(string) {
    return toSpaceCase(string).replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
        return previous + letter.toUpperCase();
    });
}
export default toCapitalCase;
