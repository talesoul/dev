public class dubcont 
{
    public static void flo(list<Contact> con)
    {
        list<contact> contactset = new list<contact>();
        set<string> conid = new set<string>();
        set<string> oldconid = new set<string>();
        for(contact c1:con)
        {
            if(c1.Email != null)
            {
                conid.add(c1.Email);
            }
        }
        list<contact> excistingcon = [SELECT ID,NAME,EMAIL FROM CONTACT WHERE EMAIL IN :conid AND EMAIL != NULL];
        for(contact c1:excistingcon)
        {
            oldconid.add(c1.Email);
        }
        for(contact c1:con)
        {
            if(oldconid.contains(c1.Email))
            {
                c1.Email.addError('omg!');
            }
            
        }
    }

}