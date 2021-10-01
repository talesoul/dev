public class addressaccount 
{
    public static void flo(list<account> acc)
    {
        for(account ac:acc)
        {
            //ac.ShippingAddress = ac.BillingAddress;
            //ac.ShippingAddress = ac.BillingAddress;
			ac.ShippingCity = ac.BillingCity; 
			ac.ShippingCountry = ac.BillingCountry;
			ac.ShippingPostalCode = ac.BillingPostalCode;
			ac.ShippingState = ac.BillingState;
			ac.ShippingStreet = ac.BillingStreet;
        }
    }

}