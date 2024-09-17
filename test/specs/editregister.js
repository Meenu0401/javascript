import { expect } from "chai"
import RegisterPage from "../pageobjects/register.js"
import UserHomePage from "../pageobjects/userhomepage.js"
import ProfileSettingPage from "../pageobjects/profilesettings.js"
import LoginPage from "../pageobjects/log.js"
//import ReadandWritedata from "../genericutility/excelutility.js"
import fs from "fs"
let data=fs.readFileSync("./test/testData/logincredentials.json")
let cred=JSON.parse(data)
describe("BikeBooking",() => {
    it("Pulsar Booking",async() =>
    {
        await browser.url("http://106.51.90.215/Build/Online_Bike_Rental_Management_System/")
        await browser.maximizeWindow()
        await LoginPage.userlogin1.click()
        await RegisterPage.signuplink.click()
        let random=Math.floor(Math.random()*100)
        console.log(random)
        //Sign up
        await RegisterPage.signup("Priya Gulati","9501020345","gupta_meenu"+random+"@gmail.com","Sanjula@123")
        //login as new username
        await LoginPage.userlogin1.click()
        //let bb=await ReadandWritedata.read("./test/testData/contactdata.xlsx","Sheet1",2,2)
        await LoginPage.usernametxt.setValue("gupta_meenu70@gmail.com")
        await LoginPage.userpwd.setValue("Sanjula@123")
        await LoginPage.userloginbtn.click()
        //console.log(bb)
        //Verify if login as new user
        // let username=await UserHomePage.userlink.getText()
        //  expect(username).to.include("MEENU GUPTA");
        //update profile settings
        await browser.pause(3000)
        await UserHomePage.userlink.click()
        await browser.pause(3000)
        await UserHomePage.profilesettings.click()
        await ProfileSettingPage.address.setValue("Chandigarh")
        await ProfileSettingPage.country.setValue("India")
        await ProfileSettingPage.saveprofilebtn.click()
        await browser.pause(4000)
    })
})