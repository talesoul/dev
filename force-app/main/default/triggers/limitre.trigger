trigger limitre on Account (before insert, before update)
{
    integer count = 0;
    list<account> fg = [SELECT Name, Id FROM Account WHERE CreatedDate = today or LastModifiedDate = today];
    for(account a:fg)
    {
        count = fg.size();
        if(count > 2)
        {
            a.adderror('reached limit today');
        }
    }

}