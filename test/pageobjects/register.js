class RegisterPage
{
    get fullnametxt()
     { 
        return $("//input[@name='fullname']")
     }
     get mobilenotxt()
     {
        return $("//input[@name='mobileno']")
     }
     get emailtxt()
     {
        return $("//input[@name='emailid']")
     }
     get pwdtxt()
     {
        return $("//input[@placeholder='Password']")
     }
     get confirmpwdtxt()
     {
        return $("//input[@name='confirmpassword']")
     }
     get signuplinkbtn()
     {
        return $("#submit")
     }
     get signuplink()
     {
        return $("//a[.='Signup Here']")
     }
     async signup(name,phno,email,pwd)
     {
        //await this.signuplink.click()
        await this.fullnametxt.setValue(name)
        await this.mobilenotxt.setValue(phno)
        await this.emailtxt.setValue(email)
        await browser.pause(3000)
        // await this.pwdtxt.isEnabled()
         await this.pwdtxt.setValue(pwd)
        await this.confirmpwdtxt.setValue(pwd)
        await browser.pause(3000)
        await this.signuplinkbtn.click()

     }
}
export default new RegisterPage()