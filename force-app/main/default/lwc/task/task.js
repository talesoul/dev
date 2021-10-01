import { LightningElement, track } from 'lwc';

export default class ParentLWC extends LightningElement 
{

   // JSON.stringify({ x: undefined, y: Object, z: Symbol('') });

    @track employees= [

        {code:101, name:'John', age:30},

        {code:102, name:'Suresh', age:40},

        {code:103, name:'Peter', age:20},

    ];
    

    

}