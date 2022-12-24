import { LightningElement } from 'lwc';

export default class ActionParent extends LightningElement {
    percentage = 10

    handleChange(event){
        this.percentage = event.target.value
    }
}