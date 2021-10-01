trigger dublead on Lead (after insert) 
{
    if(chkrecursive.runonce())
    {
        list<lead> li = new list<lead>();
        li = trigger.new.deepClone();
        insert li;
    }

}