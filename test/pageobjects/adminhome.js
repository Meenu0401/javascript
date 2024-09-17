class AdminHomePage
{
    get dashboard()
     {
         return $("//i[@class='fa fa-dashboard']")
     }
     get managebookings()
     {
        return $("//a[@href='manage-bookings.php']")
     }

}
export default new AdminHomePage()