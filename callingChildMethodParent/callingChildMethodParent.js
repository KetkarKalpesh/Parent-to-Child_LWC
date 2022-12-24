import { LightningElement } from 'lwc';

export default class CallingChildMethodParent extends LightningElement {
    changeHandler(){
        this.template.querySelector('c-calling-child-method-child').resetHandler()
    }
}