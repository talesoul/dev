public class helloworld 
{
    public static void flo(string objname)
    {
       map<string,schema.SObjectType> m = schema.getGlobalDescribe();
        schema.DescribeSObjectResult sr = m.get(objname).getDescribe();
       
       // for(string fg:m.keyset())
         //   {
          //      system.debug(fg);
            //}
            map<string,schema.SObjectField> jk = sr.fields.getmap();
        for(string kjj:jk.keyset())
            {
                system.debug(jk.get(kjj));
            }
    }

}