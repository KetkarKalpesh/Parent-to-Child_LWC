import { LightningElement, api } from 'lwc';

export default class CallingChildMethodChild extends LightningElement {
    val = 10

    handleClick(event){
        this.val = event.target.value
    }

    @api resetHandler(){
        this.val = 50
    }
}