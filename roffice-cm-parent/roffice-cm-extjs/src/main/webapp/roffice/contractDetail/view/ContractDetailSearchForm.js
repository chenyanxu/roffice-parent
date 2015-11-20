/**
 * @author chenyanxu
 */

Ext.define('kalix.roffice.contractDetail.view.ContractDetailSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.contractDetailSearchForm',
    xtype: 'contractDetailSearchForm',
    storeId:'contractDetailStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '设备名称',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'name'
        }
    ]
});
