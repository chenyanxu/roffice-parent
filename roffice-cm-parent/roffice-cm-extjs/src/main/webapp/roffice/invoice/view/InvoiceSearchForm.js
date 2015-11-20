/**
 * @author chenyanxu
 */

Ext.define('kalix.roffice.invoice.view.InvoiceSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.invoiceSearchForm',
    xtype: 'invoiceSearchForm',
    storeId:'invoiceStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '发票编号',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'invoiceNo'
        }
    ]
});
