import { api, LightningElement, track } from 'lwc';

export default class ChildLWC extends LightningElement 
{
    @api messagefromparent;
    @api callfrom;
    @track as;
    

  //  as = JSON.stringify(callfrom);
    
    
    

}