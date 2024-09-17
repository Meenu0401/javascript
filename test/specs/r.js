import excel from "excel.js"
describe("",async() => {
    it("",async() => {
        let book= await new excel.workBook()
        await book.xlsx.readFile("./test/testData/contactdata.xlsx")
        let sheet=book.getWorksheet("Sheet1")
        let data=sheet.getRow(1).getCell(1).toString()
        console.log(data)

})
    })