public with sharing class inte 
{
    public inte()
     {

    }
    @AuraEnabled(cacheable=true)
    public static list<Contact> findcontact(string searchkey)
    { 
        string key = '%' + searchkey + '%';
        return [SELECT Id,Name,Email,Phone FROM Contact WHERE Name LIKE :key ];
        
    }
    
}