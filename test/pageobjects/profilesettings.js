class ProfileSettingPage
{
    get address()
    {
        return $("//textarea[@name='address']")
    }
    get country()
    {
        return $("//input[@name='country']")
    }
    get saveprofilebtn()
    {
        return $("//button[@name='updateprofile']")
    }
}
export default new ProfileSettingPage();