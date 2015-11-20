/**
 * 项目回款查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receive.view.ReceiveSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.receiveSearchForm',
    xtype: 'receiveSearchForm',
    storeId: 'receiveStore',
    items: [
        {
            xtype: 'datefield',
            fieldLabel: '回款开始日期',
            labelAlign: 'right',
            labelWidth: 100,
            width: 250,
            name: 'beginDate'
        },
        {
            xtype: 'datefield',
            fieldLabel: '回款结束日期',
            labelAlign: 'right',
            labelWidth: 100,
            width: 250,
            name: 'endDate'
        }]
});
