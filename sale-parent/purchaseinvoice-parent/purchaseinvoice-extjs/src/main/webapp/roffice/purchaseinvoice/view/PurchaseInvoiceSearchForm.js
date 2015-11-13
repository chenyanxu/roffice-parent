/**
 * 设备发票查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.purchaseinvoice.view.PurchaseInvoiceSearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'kalix.roffice.purchaseinvoice.controller.PurchaseInvoiceSearchFormController'
    ],
    alias: 'widget.purchaseinvoiceSearchForm',
    xtype: 'purchaseinvoiceSearchForm',
    controller: 'purchaseinvoiceSearchFormController',
    bodyPadding: 10,
    layout: 'column',
    margin: 10,
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
        },
        {
            xtype: 'button',
            text: '查询',
            margin: '0 0 0 10',
            handler: 'onSearch',
            glyph: 'xf002@FontAwesome',
        },
        {
            xtype: 'button',
            text: '重置',
            margin: '0 0 0 10',
            glyph: 'xf0e2@FontAwesome',
            listeners: {
                click: function () {
                    this.up('form').getForm().reset();
                }
            }
        }]
});
