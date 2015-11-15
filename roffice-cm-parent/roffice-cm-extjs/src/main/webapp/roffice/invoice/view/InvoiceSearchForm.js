/**
 * @author chenyanxu
 */

Ext.define('kalix.roffice.invoice.view.InvoiceSearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'kalix.roffice.invoice.controller.InvoiceSearchFormController'
    ],
    alias: 'widget.invoiceSearchForm',
    xtype: 'invoiceSearchForm',
    controller: 'invoiceSearchFormController',
    bodyPadding: 10,
    layout: 'column',
    margin: 10,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '发票编号',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'invoiceNo'
        },
        {
            xtype: 'button',
            text: '查询',
            margin: '0 0 0 10',
            handler: 'onSearch',
            glyph: 'xf002@FontAwesome',
        }
    ]
});
