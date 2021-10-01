import { api, LightningElement, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getContactList from '@salesforce/apex/mai.getContactList';
import sendemailtocontrol from '@salesforce/apex/mai.sendemailtocontrol';

export default class Mai extends LightningElement 
{
    @track picklistVal;
    @api recordId;
    @track record;
    @track error;
    @track subject;
    @track body;
    @track rom;
    @track email;

    @wire(getContactList) cons;

    
         selectOptionChanveValue(event)
         {       
            this.picklistVal = event.target.value;
        }

    // wiredPickListValue({ data, error })
    // {
    //     if(data){
    //         console.log(` Picklist values are `, data.values);
    //         this.pickListvalues = data.values;
    //         this.error = undefined;
    //     }
    //     if(error){
    //         console.log(` Error while fetching Picklist values  ${error}`);
    //         this.error = error;
    //         this.pickListvalues = undefined;
    //     }
    // }
    


    handledescriptionchange(event)
    {
        this.body = event.target.value;
    }
    handlesubjectchange(event)
    {
        this.subject = event.target.value;
    }
    // handleFromchange(event)
    // {
    //     this.from = event.target.value;
    // }
    handlemailchange(event)
    {
        this.email = event.target.value;
    }
    @wire(sendemailtocontrol) flo;

    sendemailafterEvent()
    {
        
        const recordinput = {body:this.body,email:this.email,subject:this.subject,rom:this.picklistVal};
        console.log('ggccccccccc'+recordinput);
        console.log('yuuuuuu'+this.picklistVal);
        
        sendemailtocontrol(recordinput)
        .then(() => 
        {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: "Sucess",
                    message: "sucess",
                    variant: "sucess"
                })
            );
            // this.subject = '';
            // this.body = '';
            // this.from = '';
            // this.email = '';
    
        })
        .catch(error => 
            {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error send mail',
                        message: error,
                        variant: 'error'
                    })
                );
        })
    }
    
    
}