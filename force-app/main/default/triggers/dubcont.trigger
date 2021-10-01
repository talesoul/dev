trigger dubcont on Contact (before insert,before update) 
{
    if(trigger.isBefore)
    {
        if(trigger.isInsert || trigger.isUpdate)
        {
            dubcont.flo(trigger.new);
        }
    }

}