import { LightningElement,wire,track,api } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getRecordId from '@salesforce/apex/drop.getAccountRecord';
import Reason_for_Complain__c from '@salesforce/schema/Log_complaint__c.Reason_for_Complain__c';
import Log_complaint__c_OBJECT from '@salesforce/schema/Log_complaint__c';
import Account_FIELD from '@salesforce/schema/Case.AccountId';
import Case_FIELD from '@salesforce/schema/Log_complaint__c.Case__c';
import Email__FIELD from '@salesforce/schema/Log_complaint__c.Email__c';
import Describe_the_details__FIELD from '@salesforce/schema/Log_complaint__c.Describe_the_details__c';
import Date_of_complaint__FIELD from '@salesforce/schema/Log_complaint__c.Date_of_complaint__c';
import { getRecord,getFieldValue} from 'lightning/uiRecordApi';
import AccountId_field from '@salesforce/schema/Case.AccountId';

const fields = [AccountId_field];
export default class ModalPopupLWC extends LightningElement 
{
    @api recordId;
    @api accname = false;
    @api accrecordid;
    @track bshowModel = false;
    @track LogcomplainName;
    @track address;
    @track complaintId;
    @track phone;
    @track Email;  
    @track pickListvalues;
    @track error;
    @track values;
    @track pickListvaluesByRecordType;
    @track accountsource;
///// lookup field /////
    //@api childObjectApiName = 'Log_complaint__c_OBJECT';
    @api targetFieldApiName = 'Account_FIELD'; 
    @api fieldLabel = 'Account Detail';
    @api disabled = false;
    @api value;
    @api required = false;
    
    

    connectedCallback() 
    { 
    window.console.log('before entered'+this.recordId);
    this.isLoading = true; 
    window.console.log('enter load fun');
    //this.bShowModal = true;
    if((this.recordId !== null) && (this.recordId !== undefined))
    {
      window.console.log('enter--');
      
      if (this.recordId.toString()[0] === '5') {
        window.console.log('enter ---If');
        this.showCase = true;
        } else if (this.recordId.toString().substring(0,3) === '001'){
        this.accounts = this.recordId;
        this.loadSpinner();
        this.lwcOnload = true;
        } else{
        this.showCase = true;
        this.logId = this.recordId;
        window.console.log('logId--'+this.logId);
        this.loadSpinner();
        this.isEdit = true;
        this.readOnly = true;
        this.lwcOnload = true;
        }
    }
    this.isLoading = false;
  }

  loadSpinner() 
    {
        //eslint-disable-next-line @lwc/lwc/no-async-operation 
        this.delayTimeout = setTimeout(() => {
          this.isLoading = false;
      }, 2000);
       }

        
    @wire(getRecord,{recordId: '$recordId',fields})
    case;
    get AccountId() 
    {
        return getFieldValue(this.case.data, Account_FIELD) ;
    }
 
    
    @wire(getPicklistValues, {
        recordTypeId : '012000000000000AAA',
        fieldApiName : Reason_for_Complain__c
    })

    wiredPickListValue({ data, error })
    {
        if(data){
            console.log(` Picklist values are `, data.values);
            this.pickListvalues = data.values;
            this.error = undefined;
        }
        if(error){
            console.log(` Error while fetching Picklist values  ${error}`);
            this.error = error;
            this.pickListvalues = undefined;
        }
    }
    accountObject = Log_complaint__c_OBJECT;
    nameField = Case_FIELD;
    accField = Account_FIELD;
    mailField = Email__FIELD;
    DescribeField = Describe_the_details__FIELD;
    DateField = Date_of_complaint__FIELD;
    PickField = Reason_for_Complain__c;

    handleAccountCreated(event)
    {      
        window.console.log('onsuccess event recordEditForm', event.detail.id);
    }

    handleValueSelcted(event) 
    {
        this.selectedRecordId = event.detail;
    }
    handlesucess(event)
    {
        this.isLoading = true;
        this.complaintId = event.detail.id;
        const updaterec = event.detail.id;
        if(this.isEdit === true)
        {
            this.dispatchEvent(new ShowToastEvent({
                title: 'success!!',
                message: 'Complaint saved Successfully!!',
                variant: 'success'
            }),);
        }
        else
        {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!!',
                message: 'Complaint Created Successfully!!',
                variant: 'success'
              }), );
        }
        this.dispatchEvent(new CustomEvent('success'));
        window.console.log();
        this.closeModal();
      

    }
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = false;
    openModal() 
    {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() 
    {
        // close modal
        this.isModalOpen = false;
        this.delayTimeout = setTimeout(() => {
            this.isLoading = false;
            }, 2000);
            this.dispatchEvent(new CustomEvent('cancel'));
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
        this.template.querySelector('lightning-record-edit-form').submit(this.fields);
        console.log(this.recordId);
    }
    handleChange(event)
    {
       window.console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handlelook(event)
    {
        const selectevent = new CustomEvent('select value',{detail:event.detail.value});
        this.dispatchEvent(selectevent);
    }
    @api isvalid()
    {
        if(this.required)
        {
            this.template.querySelector('lightning-input-field').reportValidity();
        }
    }
    
}