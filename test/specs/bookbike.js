import { expect } from "chai"
import AdminHomePage from "../pageobjects/adminhome.js"
import LoginPage from "../pageobjects/log.js"
import UserHomePage from "../pageobjects/userhomepage.js"
import VehiclePage from "../pageobjects/vehiclebook.js"
import ContactUsPage from "../pageobjects/contactus.js"
import fs from "fs"
let data=fs.readFileSync("./test/testData/logincredentials.json")
let cred=JSON.parse(data)
describe("BikeBooking",() => {
    it("Pulsar Booking",async() =>
    {
        await browser.url(cred.url)
        await browser.maximizeWindow()
        //login as user
        await LoginPage.userlogin(cred.userun, cred.userpwd)
        await browser.pause(3000)
        let username=await UserHomePage.userlink.getText()
        expect(username).to.include("TOM");
        //Book a bike
        await UserHomePage.vehicle1.click()
        await VehiclePage.bookbike("04/09/2024","06/09/2024","Amazing bike")
        await browser.pause(3000)
        await UserHomePage.contactuslink.click()
        //Contact the Customer care
        await ContactUsPage.contactus("John Smith","j@gmail.com","9988776655","I need to talk to Customercare")
        //Click on facebooklink
       // await UserHomePage.fblink.click()
      // await browser.$("a=Home").click()
      await UserHomePage.homelink.click()
     // await browser.pause(3000)
      await UserHomePage.userlink.click()
      //await browser.pause(3000)
      await UserHomePage.signoutlink.click()
      //  await browser.pause(3000)
        await LoginPage.login(cred.adminun, cred.adminpwd)
     //   await browser.pause(3000)
        await AdminHomePage.dashboard.click()
        await AdminHomePage.managebookings.click()
        let dd= await browser.$("//select[@name='zctb_length']")
        dd.click()
        dd.selectByVisibleText("100")
       await browser.pause(3000)
       await browser.$("//td[contains(text(),'Tom')]/../td[contains(text(),'Cancelled')]/../td[9]/a[1]").click() 
       // await browser.acceptAlert()
        await browser.pause(3000)

      
    })
    })

   