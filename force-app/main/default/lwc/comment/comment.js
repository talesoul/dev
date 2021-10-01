import { api, LightningElement,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import flo from '@salesforce/apex/comment.flo';
export default class ModalPopupLWC extends LightningElement 
{
    @api recordId;
    // @api isLoaded = false;
    @track isLoading = false;
    @track body;
    @track rom;  
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = false;
    
    handledeschange(event)
    {
        this.body = event.target.value;
    }
    
    // change isLoaded to the opposite of its current value
    openModal()
    {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }   
    closeModal() 
    {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
        this.delayTimeout = setTimeout(() => {
            this.isLoading = false;
            }, 2000);
            this.dispatchEvent(new CustomEvent('cancel'));
    }
        // this.delayTimeout = setTimeout(() => {
        //     this.isLoading = true; }, 32000);
        //     this.sendemailafterEvent();
        helloHandeler()
         {
            if(this.isModalOpen = true)
            {
                this.delayTimeout = setTimeout(() => {
                    this.isModalOpen = true; }, 10000);
            }
                    
          };
            pageRedirect() 
            {
                window.location.reload();
            }
    
        sendemailafterEvent()
        {
           // this.isModalOpen = false;
           this.helloHandeler();
           // this.isModalOpen = true;        
            const recordinput = {body:this.body,rom:this.recordId};
            // console.log('ggccccccccc'+recordinput);
            // console.log('ggccccccccc'+this.body,this.recordId);
            this.pageRedirect();
            flo(recordinput)
            .then(() => 
            {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: "Sucess",
                        message: "sucess",
                        variant: 'sucess'
                    })
                );
                       
            })
            .catch(error => 
                {
                // this.dispatchEvent(
                //     new ShowToastEvent({
                //         title: 'Error',
                //         message: error,
                //         variant: 'error'
                //     })
                // );
            })
            
        }


}