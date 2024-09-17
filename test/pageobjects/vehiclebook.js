class VehiclePage
{
    get fromdate()
    {
        return $("//input[@placeholder='From Date(dd/mm/yyyy)']")
    }
    get todate()
    {
        return $("//input[@placeholder='To Date(dd/mm/yyyy)']")
    }
    get message()
    {
        return $("//textarea[@placeholder='Message']")
    }
    get booknowbtn()
    {
        return $("//input[@value='Book Now']")
    }
    async bookbike(date1,date2,msg)
    {
        await this.fromdate.setValue(date1)
        await this.todate.setValue(date2)
        await this.message.setValue(msg)
        await this.booknowbtn.click()
    }
}
export default new VehiclePage()