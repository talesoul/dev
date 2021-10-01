import { LightningElement,track } from 'lwc';


export default class Cas extends LightningElement 
{
    @track LogcomplainName;
    @track address;
    @track phone;
    @track Email;
    @track recordId;
    
    @track controllingValues = [];
    @track dependentValues = [];
    @track selectedType;
    @track selectedMealPreference;
    @track isEmpty = false;
    @track error;
    controlValues;
    totalDependentValues = [];
    @track data;
    @track customFormModal = false;
    myVal = '**Hello**';
    formats = ['font', 'size', 'bold', 'italic', 'underline',
        'list', 'indent', 'align', 'link',
        'image', 'clean', 'table', 'header'];


    guestChangeName(event) 
    {
        this.LogcomplainName = event.detail.value;
    }
    handleChange(event)
    {
        this.address = event.detail.value;
    }
    onchangeEmail(event) 
    {
        this.Email = event.detail.value;
    }
}