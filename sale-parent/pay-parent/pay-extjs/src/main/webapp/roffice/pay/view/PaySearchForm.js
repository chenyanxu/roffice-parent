/**
 * 采购付款查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.pay.view.PaySearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.paySearchForm',
    xtype: 'paySearchForm',
    storeId: 'payStore',
    items: [
        {
            xtype: 'datefield',
            fieldLabel: '付款开始日期',
            labelAlign: 'right',
            labelWidth: 100,
            width: 250,
            name: 'beginDate'
        },
        {
            xtype: 'datefield',
            fieldLabel: '付款结束日期',
            labelAlign: 'right',
            labelWidth: 100,
            width: 250,
            name: 'endDate'
        }]
});
