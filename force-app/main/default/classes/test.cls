public with sharing class test 
{
    @AuraEnabled(cacheable = true)
    public static List<Contact> findcontact(string serch)
    {
        string key = '%'+ Serch +'%';
        return [SELECT Id,Name FROM Contact WHERE Name Like :key];
    }
}