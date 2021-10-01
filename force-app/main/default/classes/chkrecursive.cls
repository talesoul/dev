public class chkrecursive 
{
    private static boolean flag = true;
    public static boolean runonce()
    {
        if(flag)
        {
            flag = false;
            return flag;
        }
        else
        {
            return flag;
        }
    }

}