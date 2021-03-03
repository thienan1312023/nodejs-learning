
const fs = require('fs')
const csv = require('csvtojson')

async function writeCSVFile() {
  try {
    const csvFilePath = './csv/nodejs-hw1-ex1-2.csv'
    csv(csvFilePath)
      .fromFile()
      .then((jsonObj) => {
        console.log(jsonObj);
      })

    // Async / await usage
    const jsonArray = await csv().fromFile(csvFilePath);
    const textFile = fs.createWriteStream('CsvToText.txt', {
      flags: 'a'
    })
    jsonArray.forEach(function (item) {
      textFile.write((JSON.stringify(item)).replace(/"|{|}/g, ' ') + "\r\n")
    });
  } catch (err) {
    console.log(err);
  }
}
writeCSVFile();

