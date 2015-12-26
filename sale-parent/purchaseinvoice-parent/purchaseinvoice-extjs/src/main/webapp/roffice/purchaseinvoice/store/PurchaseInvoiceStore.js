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
    proxyUrl: CONFIG.restRoot+'/camel/rest/purchaseinvoices'
});