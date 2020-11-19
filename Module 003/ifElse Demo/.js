import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {

    showButton = false

    showTomClicked(){
        this.showButton = true
    }

    showJerryClicked(){
        this.showButton = false
    }
}
