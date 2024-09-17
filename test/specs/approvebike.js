import AdminHomePage from "../pageobjects/adminhome.js"
import log from "../pageobjects/log.js"
import LoginPage from "../pageobjects/log.js"
import fs from "fs"
let data=fs.readFileSync("./test/testData/logincredentials.json")
let cred=JSON.parse(data)
describe("BikeBooking",() =>
    {
    it("Pulsar Booking",async() =>
    {
        await browser.url("http://106.51.90.215/Build/Online_Bike_Rental_Management_System/")
        await LoginPage.login(cred.adminun, cred.adminpwd)
        await AdminHomePage.dashboard.click()//td[cont
        await AdminHomePage.managebookings.click()
        let dd= await browser.$("//select[@name='zctb_length']")
        dd.click()
        dd.selectByVisibleText("50")
        //await browser.$("//table[@id='zctb']/descendant::td[@class='sorting_1' ]/following-sibling::td[.='Neha']/../descendant::a[.=' Confirm']").click()    
       // await browser.acceptAlert()
       await browser.pause(3000)
       let text=await browser.$("//td[contains(text(),'Priya Gulati')]/../td[contains(text(),'Not Confirmed yet')]/../td[9]/a[1]").getText()
      console.log(`Hiiiii ${text}`) 

       //await browser.acceptAlert()
        await browser.pause(3000)

      
    })
    })