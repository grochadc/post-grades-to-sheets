function unpackObjects(obj) {
    return Object.values(obj);
}
function createTable(arr) {
    const titleRow = Object.keys(arr[0]);
    const contentRows = arr.map(obj => Object.values(obj));
    return [
        titleRow,
        ...contentRows
    ];
}
const sampleTable = [
    ['name', 'code', 'lastName'],
    ['Pedro', '123456', 'Paramo'],
    ['Iker', '098765', 'Mamarre']
];
/**
  * Move content of a "column" in a 2-d Array.
  *
  * @param {array}  data  Two-dimensional matrix (array with no null values)
  *                       Array content is changed by this function.
  * @param {int}    start Source column index (0-based)
  * @param {int}    end   Destination column index (0-based)
  *
  * @return {array}       Resulting array (for chaining)
  */
function rearrangeTable(arr, start, end) {
    //1 based to 0 based
    start = start - 1;
    end = end - 1;
    // Parameter error checking
    if (!(arr instanceof Array && arr[0] instanceof Array))
        throw new TypeError('need 2d array');
    if (start >= arr[0].length || end >= arr[0].length)
        throw new Error('index out of bounds');
    for (var row = 0; row < arr.length; row++) {
        var temp = arr[row].splice(start, 1); // take 'start'
        arr[row].splice(end, 0, temp[0]); // put  'end'
    }
    return arr;
}
module.exports = {
    unpackObjects,
    createTable,
    rearrangeTable
};
