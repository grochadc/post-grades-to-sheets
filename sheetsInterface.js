const { google } = require("googleapis");
const { getSpreadSheet } = require("./sheets-auth.js");

function request(auth, spreadsheetId, values, range) {
  const sheets = google.sheets({ version: "v4", auth });
  return new Promise((resolve, reject) => {
    const request = {
      spreadsheetId,
      auth,
      range,
      valueInputOption: "RAW",
      resource: { values: values }
    };
    sheets.spreadsheets.values.append(request, (err, res) => {
      if (err) {
        reject(err)
      } else {
        console.log("Success!");
        resolve();
      }
    });
  })
}

function update(sheet, values, range) {
  return new Promise((resolve, reject) => {
    getSpreadSheet(auth => request(auth, sheet, values, range));
  })
}

module.exports = { update };
