public with sharing class mai 
{
    public mai() 
    {

    }
    @AuraEnabled(cacheable=true)
    public static void sendemailtocontrol(string body,string email,string subject,string rom)
    {
        system.debug('body'+body);
        system.debug('gfgfffgfgsend'+email);
        system.debug('subject'+subject);
        system.debug('rom'+rom);
        try
        {
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            string[] usermail =new string[] {rom};
            string[] toAddress = new string[] {email};
            mail.setToAddresses(toAddress);
            mail.setSubject(subject);
            mail.setHtmlBody('<h1>'+ body + '</h1>');
            messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});
        }
        catch(Exception e)
        {
            system.debug(e);
        }

    }
    @AuraEnabled(cacheable=true)
     public static List<OrgWideEmailAddress> getContactList()
      {
        List<OrgWideEmailAddress> conList= [SELECT Id, Address FROM OrgWideEmailAddress LIMIT 10];
         return conList;
     }
}