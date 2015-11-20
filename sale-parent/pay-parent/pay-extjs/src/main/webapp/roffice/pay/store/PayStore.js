/**
 * 采购付款数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.pay.store.PayStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.pay.model.PayModel',
    alias: 'store.payStore',
    xtype: 'payStore',
    storeId: "payStore",
    proxyUrl: '/kalix/camel/rest/pays'
});