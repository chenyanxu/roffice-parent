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
        },
        {
            xtype: 'numberfield',
            fieldLabel: '数量',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'amount'
        },
        {
            xtype: 'datefield',
            fieldLabel: '追加日期',
            labelAlign: 'right',
            labelWidth: 100,
            width: 250,
            name: 'addDate__begin__gt'
        },
        {
            xtype: 'displayfield',
            hideLabel: true,
            value: '-',
            margin:'0 5 0 5'
        },
        {
            xtype: 'datefield',
            fieldLabel: '追加日期结束',
            labelAlign: 'right',
            hideLabel:true,
            width: 150,
            name: 'addDate__end__lt'
        }
    ]
});
