/**
 * 设备发票数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.purchaseinvoice.store.PurchaseInvoiceStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.purchaseinvoice.model.PurchaseInvoiceModel',
    alias: 'store.purchaseinvoiceStore',
    xtype: 'purchaseinvoiceStore',
    storeId: "purchaseinvoiceStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/purchaseinvoices/list',
        paramsAsJson: true,
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
        reader: {
            type: "json",
            rootProperty: "data",
            totalProperty: 'totalCount'
        }
    }
});