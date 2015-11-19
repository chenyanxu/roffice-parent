/**
 * @author chenyanxu
 */

Ext.define('kalix.roffice.contract.view.ContractSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.contractSearchForm',
    xtype: 'contractSearchForm',
    storeId:'contractStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '合同编号',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'contractNumber'
        }
    ]
});
