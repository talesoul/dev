public class oppline
{
    public static void flo(list<Opportunity> ko)
    {
        set<id> io = new set<id>();
        list<PricebookEntry> priceBookList = [SELECT Id, Product2Id, Product2.Id, Product2.Name FROM PriceBookEntry WHERE PriceBook2.isStandard=true LIMIT 1];
        list<OpportunityLineItem> oplin = new list<OpportunityLineItem>();
        for(Opportunity op:ko)
        {
            OpportunityLineItem oli = new OpportunityLineItem();
			oli.OpportunityId = op.Id; 
			oli.PricebookEntryId=priceBookList[0].Id ;
			oplin.add(oli);
        }
    }

}