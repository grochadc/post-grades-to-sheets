const { unpackObjects, createTable, rearrangeTable } = require('./lib');
const sheetsInterface = require("./sheetsInterface");

const db = require('./db.json')
const groups: string[] = Object.keys(db).filter(key => /^E1-\d+/.test(key));

groups.forEach(group => postToSheets(unpackObjects(db[group]), group))

/**
  * @function sheetsInterface.update
  * @param {string} sheet - spreadsheet ID
  * @param {string[][]} values - Two dimensional array of values to append
  * @param {range} - A1 notation of the range to update
  * @return {Promise}
*/

function postToSheets (unpacked: object[], sheetName: string): Promise {
  const sheet: string = "1E4p2iJuLIApg93itDYU3adqLvOXrXtBz0hYHUJIuBnY";
  const regex = /^[a-zA-Z0-9]+$/
  if(regex.test(sheet)){
    console.log('starting post to sheets', sheetName)
    const unorderedTable: Table = createTable(unpacked)
    const arrange1: Table = rearrangeTable(unorderedTable,4,1)
    const arrange2: Table = rearrangeTable(arrange1,11,2)
    const arrange3: Table = rearrangeTable(arrange1,8,3)
    const arrange4: Table = rearrangeTable(arrange1,13,4)
    const arrange5: Table = rearrangeTable(arrange1,10,5)
    const arrange6: Table = rearrangeTable(arrange1,8,6)
    const values: Table = arrange4
    return sheetsInterface.update(sheet, values, `${sheetName}!A1`)
  } else {
    throw new Error("Sheet ID is invalid");
  }
}
