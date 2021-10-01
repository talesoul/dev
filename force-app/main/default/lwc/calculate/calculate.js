import { api, LightningElement, track } from 'lwc';

export default class Calculate extends LightningElement 
{
    @api num1;
    @api num2;
    @api result;
    calcexpr()
    {
        this.result = Number(this.num1) + Number(this.num2);
        window.console.log(this.result);
    }
    calcexpr1()
    {
        this.result = Number(this.num1) - Number(this.num2);
        window.console.log(this.result);

    }
    calcexpr2()
    {
        this.result = Number(this.num1) * Number(this.num2);
        window.console.log(this.result);

    }
    calcexpr3()
    {
        this.result = Number(this.num1) / Number(this.num2);
        window.console.log(this.result);

    }
    handle1(event)
    {
        this.num1 = event.target.value;
    }
    handle2(event)
    {
        this.num2 = event.target.value;
    }


}