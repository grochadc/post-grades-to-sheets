const { createTable, rearrangeTable } = require('./lib');

/*
* @param { object[] }  - An array of objects to make a table
* @return { <Table> }   - A two dimensional array with the keys as first row
*/
test("createTable", () => {
  const data = [
    { name: "Pedro", code: "123456", lastName: "Paramo" },
    { name: "Iker", code: "098765", lastName: "Mamarre"}
  ]
  const expected = [
    [ 'name',  'code',   'lastName' ],
    [ 'Pedro', '123456', 'Paramo' ],
    [ 'Iker',  '098765', 'Mamarre' ]
  ]
  const table = createTable(data);
  expect(table).toStrictEqual(expected)
})

test("rearrangeTable", () => {
  const data = [
    [ 'name',  'code',   'lastName' ],
    [ 'Pedro', '123456', 'Paramo' ],
    [ 'Iker',  '098765', 'Mamarre' ]
  ]
  const expected = [
    [ 'code',   'name',  'lastName' ],
    [ '123456', 'Pedro', 'Paramo' ],
    [ '098765', 'Iker',  'Mamarre' ]
  ]
  const newTable = rearrangeTable(data, 1, 2);
  expect(newTable).toStrictEqual(expected);
})
