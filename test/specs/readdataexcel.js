import excel from "exceljs"
describe("excel", ()=>
    {
        it("", async()=>{
            let book=new excel.Workbook()
            await book.xlsx.readFile("./test/testData/contactdata.xlsx")
            let sheet=book.getWorksheet("Sheet1")
            for (let i = 1; i <= sheet.columnCount; i++) {
                for (let j = 1; j < sheet.rowCount; j++) {
                    let data=sheet.getRow(j).getCell(i).toString()  
                    console.log(data)
                     }
                  }
                       let book2=new excel.Workbook()
            await book2.xlsx.readFile("./test/testData/contactdata.xlsx")
           let sheett= book2.getWorksheet("Sheet1")
           sheett.getRow(1).getCell(8).value = "abcde"
           await book2.xlsx.writeFile("./test/testData/contactdata.xlsx")
        })

})