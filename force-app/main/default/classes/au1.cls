public with sharing class au1 
{
    @AuraEnabled
    public static List<Contact> findall()
    {
        return [SELECT id,name FROM Contact limit 50];

    }
    @AuraEnabled
    public static List<Contact> findbyname(string seachkey)
    {
        string name = '%' + seachkey + '%';
        return [SELECT id,name FROM Contact where name LIKE :name Limit 50];

    }
    @AuraEnabled
    public static List<Contact> findbyid(string conid)
    {
        return [SELECT id,name,Account.name FROM Contact where Id =: conid];

    }
}