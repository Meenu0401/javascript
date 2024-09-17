import { expect } from "chai"
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
        await browser.url("http://106.51.90.215/Build/Online_Bike_Rental_Management_System/")
        await browser.maximizeWindow()
        //login as user
        await LoginPage.userlogin(cred.userun, cred.userpwd)
        // let username=await UserHomePage.userlink.getText()
        // expect(username).to.equal("MEENU GUPTA");
        //Book a bike
        await UserHomePage.vehicle1.click()
        await VehiclePage.bookbike("04/09/2024","06/09/2024","Amazing bike")
        await browser.pause(3000)
        await UserHomePage.contactuslink.click()
        //Contact the Customer care
        await ContactUsPage.contactus("John Smith","j@gmail.com","9988776655","I need to talk to Customercare")
        //Click on facebooklink
        await UserHomePage.fblink.click()
        await browser.back()
        await browser.pause(3000)
    })
    })