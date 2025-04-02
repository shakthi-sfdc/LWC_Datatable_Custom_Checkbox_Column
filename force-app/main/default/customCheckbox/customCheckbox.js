import { LightningElement, api } from 'lwc';

export default class CustomCheckbox extends LightningElement {

    @api value;
    @api isDisabled;

    handleSelectChange(event) {
        const value = event.target.checked;
        this.value = value;
        const checkboxEvent = new CustomEvent('checkboxselect', {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: {
                data: { value: this.value }
            }
        });
        this.dispatchEvent(checkboxEvent);
    }
}