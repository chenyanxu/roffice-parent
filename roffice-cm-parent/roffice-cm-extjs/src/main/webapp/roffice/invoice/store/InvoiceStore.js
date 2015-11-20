/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.invoice.store.InvoiceStore', {
    extend: 'kalix.store.BaseStore',
    alias: 'store.invoiceStore',
    model:'kalix.roffice.invoice.model.InvoiceModel',
    xtype: 'invoiceStore',
    storeId: "invoiceStore",
    proxyUrl:'/kalix/camel/rest/invoices'
});