class ContactUsPage
{
    get fullName()
     { 
        return $("#fullname")
     }
     get email()
     {
        return $("#emailaddress")
     }
     get phoneno()
     {
        return $("#phonenumber")
     }
     get message()
     {
        return $("//textarea[@name='message']")
     }
     get savebtn()
     {
        return $("//button[@name='send']")
     }
     async contactus(name, email,phno,message)
     {
        await this.fullName.setValue(name)
        await this.email.setValue(email)
        await this.phoneno.setValue(phno)
        await this.message.setValue(message)
        await this.savebtn.click()
     }
    }
    export default new ContactUsPage()