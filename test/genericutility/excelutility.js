import excel from "exceljs"
class ReadandWritedata
{
    async read(filepath,sheetname,rowno,cellno)
    {
       let book=new excel.Workbook();
       await book.xlsx.readFile(filepath)
       let sheet= book.getWorksheet(sheetname)
       let data=sheet.getRow(rowno).getCell(cellno).toString()
       return data
    }
    async write(filepath,sheetname,rowno,cellno,value)
    {
        let book2= new excel.Workbook();
        await book2.xlsx.readFile(filepath)
       let sheet= book2.getWorksheet(sheetname)
       sheet.getRow(rowno).getCell(cellno).setValue(value)
       await book2.xlsx.writeFile(filepath)
    }
}
export default new ReadandWritedata()