public with sharing class comment 
{
    public comment()
    {

    }
    @AuraEnabled
    public static void flo(string body,id rom)
    {
        system.debug('sdsdsd'+body);
        system.debug('dsfsd'+rom);
        List<Task> getval = new list<task>();
        //list<task> fl = [SELECT Id, Description FROM Task WHERE ID = :rom];
        for(Task ta: [SELECT Id, Description FROM Task WHERE ID = :rom Limit 1])
        {   
            if ( String.isBlank(ta.Description)) 
            {
                ta.Description = '\n Name ' + ' : ' + userinfo.getFirstName() + ' : ' + date.today() + ' : ' + body + ',';

            } 
            else 
            {
                ta.Description += '\n Name ' + ' : ' + userinfo.getFirstName() + ' : ' + date.today() + ' : ' + body + ',';
                
            }     
            
                getval.add(ta); 
        }
        update getval;
       // insert getval;
        
    }
}