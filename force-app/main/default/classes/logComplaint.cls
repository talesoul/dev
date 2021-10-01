public with sharing class logComplaint 
{
    public class CaseDetails 
    {
        @AuraEnabled
        public string caseId {get;set;}
        @AuraEnabled
        public string AccountId {get;set;}
        @AuraEnabled
        public string Status {get;set;}
    }
    @AuraEnabled
    public static CaseDetails getAccountRecord(Id caseId)
    {
         CaseDetails csD = new CaseDetails();
         case cs = [Select Id,AccountId,Status from case where Id=:caseId limit 1]; 
        
        boolean isFieldAccess = false;
        // if(Schema.sObjectType.Complaint_c.fields.Root_Causec.isCreateable() && Schema.sObjectType.Complaintc.fields.Root_Cause_c.isUpdateable()) {
        //     isFieldAccess = true;
        // }
        
           csD.caseId = cs.Id;
           csD.AccountId = cs.AccountId;
           csD.Status = cs.Status;
        // csD.ProfitCenter = cs.Profit_Center__c;
        // csD.State = cs.State__c;
        // csD.routCauseAccess = isFieldAccess;
        // if(cs.Sales_Order__c!=null){
        // csD.LicenseStore = cs.Market__c;
        // csD.location = cs.Profit_Center__c;
           return csD;
        
    }

    //Added by Vamsi to auto set the priority based on complaint origin selection

    // @AuraEnabled
    // public static string setPriorityCmpOrigin(string cmpOrig){
    //     list<Log_Complaint_Priority_mdt> logCmpList = [Select Priorityc from Log_Complaint_Prioritymdt where Complaint_Origin_c =: cmpOrig];
    //     string priority = '';
    //     if(logCmpList.size() > 0){
    //         priority = logCmpList[0].Priority__c;
    //     }
    //     return priority;
    // }

    /*//Added by Vamsi to get the complaint record details
    @AuraEnabled(cacheable=true)
    public static Complaint__c getDetails(Id cmpId){
        Complaint_c cmpl = [SELECT Id, Account__c, Case__c, Email__c, Date_of_complaint__c, Describe_the_details__c, Reason_for_Complain__c FROM Log_complaint__c where id =:cmpId];
        return cmpl;
    }*/
}