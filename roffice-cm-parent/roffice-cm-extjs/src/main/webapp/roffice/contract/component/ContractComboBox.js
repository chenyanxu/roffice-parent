/**
 * 合同选择下拉comboBox
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.component.ContractComboBox', {
    extend: 'kalix.view.components.common.BaseComboBox',
    requires: [
        'kalix.roffice.contract.store.ContractStore'
    ],
    alias: 'widget.contractComboBox',
    xtype: 'contractComboBox',
    valueField: 'id',
    displayField: 'contractNumber',
    queryParam: 'contractNumber',
    modelField:'contractId',
    store: {
        type: 'contractStore'
    }
})
