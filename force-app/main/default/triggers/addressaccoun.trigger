trigger addressaccoun on Account (before update) 
{
    if(trigger.isBefore)
    {
        if(trigger.isInsert)
        {
            addressaccount.flo(trigger.new);
        }
    }

}