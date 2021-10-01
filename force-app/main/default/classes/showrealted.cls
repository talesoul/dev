public with sharing class showrealted 
{
    @AuraEnabled(cacheable=true)
    public static list<account> retriveOpportunities() 
    {
        return [SELECT Id,Name, (select id,name from contacts) FROM account where id ='0015D00000g6ySsQAI'];
    }
}