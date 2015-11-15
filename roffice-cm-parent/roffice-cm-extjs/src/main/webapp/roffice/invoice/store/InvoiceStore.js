/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.invoice.store.InvoiceStore', {
    extend: 'kalix.store.BaseStore',
    requires: ['kalix.core.Notify'],
    alias: 'store.invoiceStore',
    model:'kalix.roffice.invoice.model.InvoiceModel',
    xtype: 'invoiceStore',
    storeId: "invoiceStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "rest",
        url: '/kalix/camel/rest/invoices',
        paramsAsJson: true,
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        reader: {
            type: "json",
            rootProperty: "data",
            totalProperty: 'totalCount'
        }
    }
});