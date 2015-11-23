/**
 * 合同选择下拉comboBox
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.component.ContractComboBox', {
    extend: 'Ext.form.field.ComboBox',
    requires: [
        'kalix.roffice.contract.store.ContractStore'
    ],
    alias: 'widget.contractComboBox',
    allowBlank: false,
    labelAlign: 'right',
    xtype: 'contractComboBox',
    queryMode: 'remote',
    valueField: 'id',
    displayField: 'contractNumber',
    queryParam: 'contractNumber',
    minChars: 0,
    forceSelection: true,
    store: {
        type: 'contractStore',
        listeners: {
            beforeload: function (store, operation, eOpts) {
                store.proxy.extraParams = {'jsonStr':Ext.JSON.encode(operation.getParams())};
            }
        }
    }
})
