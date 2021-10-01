public with sharing class drop 
{
    public class CaseDetails 
    {
        @AuraEnabled
        public string caseId {get;set;}
        @AuraEnabled
        public string AccountId {get;set;}
        @AuraEnabled
        public string Status {get;set;}
        // @AuraEnabled
        // public string ProfitCenter {get;set;}
        // @AuraEnabled
        // public string State {get;set;}
        // @AuraEnabled
        // public string LicenseStore {get;set;}
        // @AuraEnabled
        // public boolean routCauseAccess {get;set;}
        // @AuraEnabled	
		// public string location {get;set;}
    }

    // @AuraEnabled(cacheable = true)
    // public static List<Contact> findcontact(string serch)
    // {
    //     string key = '%'+ Serch +'%';
    //     return [SELECT Id,Name FROM Contact WHERE Name Like :key];
    // }

    @AuraEnabled
    public static CaseDetails getAccountRecord(Id caseId)
    {
        CaseDetails csD = new CaseDetails();
        case cs = [Select Id,AccountId,Status from case where Id=:caseId limit 1]; 
        
        // boolean isFieldAccess = false;
        // // if(Schema.sObjectType.Complaint_c.fields.Root_Causec.isCreateable() && Schema.sObjectType.Complaintc.fields.Root_Cause_c.isUpdateable()) 
        // // {
        // //     isFieldAccess = true;
        // // }
        
        csD.caseId = cs.Id;
        csD.AccountId = cs.AccountId;
        csD.Status = cs.Status;
        
        return csD;
    }


}