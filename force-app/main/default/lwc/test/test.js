import { LightningElement, track, wire } from 'lwc';
import findcontact from '@salesforce/apex/test.findcontact';
export default class Test extends LightningElement 
{
    @track serch = '';
    @wire(findcontact,{serch : '$serch'})
    conta;
    handlesearch()
    {
        this.serch = this.template.queryselector('Lightning-input').value;
    }
}