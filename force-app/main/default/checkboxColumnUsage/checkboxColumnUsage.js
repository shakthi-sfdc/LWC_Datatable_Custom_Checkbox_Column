import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

const COLUMNS = [
    { label: '', fieldName: 'selected', 
        type: 'selectCheckbox', 
        sortable: false, 
        hideDefaultActions: true,
        typeAttributes: {
            value: { fieldName: 'selected' } } },
    { label: 'Id', fieldName: 'Id', type: 'text' },
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' }
];

export default class checkboxColumnUsageExample extends LightningElement {
    dtData = [];
    dtColumns = COLUMNS;

    @wire(getListUi, { objectApiName: 'Account', listViewApiName: 'AllAccounts' })
    wiredAccounts({ error, data }) {
        if (data) {
            let records = data.records.records.slice(0, 10);
            this.dtData = records.map(record => ({
                Id: record.fields.Id.value,
                Name: record.fields.Name.value,
                Industry: record.fields.Industry.value
            }));
        } else if (error) {
            console.error('Error fetching accounts:', error);
        }
    }
}
    
