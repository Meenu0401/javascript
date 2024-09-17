class UserHomePage
{
    get contactuslink()
    {
        return $("a=Contact Us")
    }
    get homelink()
    {
        return $("a=Home")
    }
    get userlink()
    {
        return $("//a[@data-toggle='dropdown']")
    }
    get profilesettings()
    {
        return $("//a[contains(text(),'Profile Settings')]")
    }
    get posttestimonial()
    {
        return $("a=Post a Testimonial")
    }
    get vehicle1()
    {
        return $("//a[.='Bajaj , SS400']")
    }
    get signoutlink()
    {
        return $("//a[.='Sign Out']")
    }
    get fblink()
    {
        return $("//i[@class='fa fa-facebook-square']")
    }
}
export default new UserHomePage()