trigger errtask on Task (before delete) 
{
   for(task ta:trigger.new)
   {
       ta.addError('flo');
      // List <Account> acc = [SELECT Id, (SELECT Id FROM Opportunities ) FROM Account WHERE Id IN : Trigger.old];
   }
}