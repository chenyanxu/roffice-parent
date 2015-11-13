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
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/pays/list',
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