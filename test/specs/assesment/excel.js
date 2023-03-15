import excel from 'exceljs';
import fs from'fs'
const fileName = 'simple.xlsx';
// ws.getCell('A1').value = 'John Doe';
// ws.getCell('B1').value = 'gardener';
// ws.getCell('C1').value = new Date().toLocaleString();
const f=fs.createWriteStream(fileName)
const wb = new excel.Workbook(fileName);
wb.xlsx.readFile(fileName).then(() => {
    const ws = wb.getWorksheet('My sheet');
    const r3 = ws.getRow(0)
r3.values = ['a','b','x'];
wb.xlsx.writeFile(fileName).then(()=> console.log('wriiten succ'))
      })
      .catch(err => {
        console.log(err);
      });

// wb.xlsx
//   .writeFile(fileName)
//   .then(() => {
//     console.log('file created');
//   })
//   .catch(err => {
//     console.log(err.message);
//   });
// var rr=jsl({sourceFile: 'C:/Users/navee/OneDrive/Desktop/jj.xlsx',header:{rows:1},columnToKey:{A:'Username',B:'password'}})

// describe("datadriven for login",async()=>{
//     rr.detail.forEach(async(obj)=>{
//         it("login",async()=>{
//             await browser.url("https://www.facebook.com")
//             await (await browser.$('#email')).setValue(obj.Username)
//         })
//     })
   
// })