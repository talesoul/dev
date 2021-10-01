public class Blooddonor 
{
     public Contact c { get; set; }
    public Blooddonor(){
       c=new Contact();
    }
public PageReference save() {
    
       insert c; 
    
    
       ApexPages.AddMessage(new ApexPages.Message(ApexPages.Severity.CONFIRM,'Record Created Successfully.Thank you!'));
      return null;
    }

}