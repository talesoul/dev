import { LightningElement,wire,track } from 'lwc';
import findcontact from '@salesforce/apex/inte.findcontact';

export default class AccountList extends LightningElement 
{
    @track key;
    @track contacts;
    

    updatekey(event)
    {
        this.key = event.target.value;
        
    }
    @wire(findcontact,{searchkey:'$key'}) contacts;

    handlesearch()
    {
        findcontact({searchkey:this.key})
        .then(result =>
            {
                this.contacts = result;
            })
        .catch(error => 
            {
                this.contacts = null;
            } );
    }
    cols = [
        {lable:'Name',fieldName:'Name',type:'text'},
        {lable:'Phone',fieldName:'Phone',type:'Phone'},
        {lable:'Email',fieldName:'Email',type:'text'},
    ]
    
}