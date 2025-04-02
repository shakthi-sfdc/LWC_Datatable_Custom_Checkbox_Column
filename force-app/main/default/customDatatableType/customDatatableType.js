import LightningDatatable from 'lightning/datatable';
import selectCheckboxTemplate from './selectCheckbox.html';

export default class CustomDatatableType extends LightningDatatable {
    static customTypes = {
        selectCheckbox: {
            template: selectCheckboxTemplate,
            typeAttributes: ['value', 'context', 'hideCheckbox', 'isDisabled']
        }
    };
}