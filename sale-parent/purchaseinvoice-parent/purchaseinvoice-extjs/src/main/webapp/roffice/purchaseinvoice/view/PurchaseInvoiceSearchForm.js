/**
 * 设备发票查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.purchaseinvoice.view.PurchaseInvoiceSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.purchaseinvoiceSearchForm',
    xtype: 'purchaseinvoiceSearchForm',
    storeId: 'purchaseinvoiceStore',
    items: [
        {
            xtype: 'datefield',
            fieldLabel: '发票开始日期',
            labelAlign: 'right',
            labelWidth: 100,
            width: 250,
            name: 'beginDate'
        },
        {
            xtype: 'datefield',
            fieldLabel: '发票结束日期',
            labelAlign: 'right',
            labelWidth: 100,
            width: 250,
            name: 'endDate'
        }]
});
