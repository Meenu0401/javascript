class LoginPage
{
    get adminlogin()
    {
        return $("//a[.='Admin Login']")
    }
    get adminusn()
    {
        return $("//input[@name='username']")
    }
    get adminpwd()
    {
        return $("//input[@name='password']")
    }
    get loginbtn()
    {
        return $("//button[@name='login']")
    }
    get account()
    {
        return $("//img[@class='ts-avatar hidden-side']")
    }
    get logoutbtn()
    {
        return $("//a[.='Logout']")
    }
    get userlogin1()
    {
        return $("a=Login / Register")
    }
    get usernametxt()
    {
        return $("//input[@name='email' and @class='form-control']")
    }
    get userpwd()
    {
        return $("//input[@name='password' and @class='form-control']")
    }
    get userloginbtn()
    {
        return $("//input[@name='login' and @type='submit']")
    }
    async userlogin(username, password)
    {
        await this.userlogin1.click();
        await this.usernametxt.setValue(username)
        await this.userpwd.setValue(password)
        await browser.pause(3000)
        await this.userloginbtn.click();
    }
    get userlogo()
        {
            return $("//a[@data-toggle='dropdown']")
        }
        get signout()
        {
            return $("//a[.='Sign Out']")
        }
    
    async userlogout(){
        await this.userlogo.click();
        await browser.pause(3000)
        await this.signout.click();
    }
    async logout()
    {
        await this.account.moveTo()
        await this.logoutbtn.click()
    }
    async login(username, password)
    {
        await this.adminlogin.click()
        await this.adminusn.setValue(username)
        await this.adminpwd.setValue(password)
        await this.loginbtn.click()

    }
    
}
export default new LoginPage();