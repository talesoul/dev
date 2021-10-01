import { LightningElement,api, wire, track } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi'
 
import NAME_FIELD from '@salesforce/schema/Account.Name'
import REV_FIELD from '@salesforce/schema/Account.Type'
export default class RecordIdExampleLWC extends LightningElement 
{
    @track bshowModel = false;
    @api recordId;
    accountName = true;

}