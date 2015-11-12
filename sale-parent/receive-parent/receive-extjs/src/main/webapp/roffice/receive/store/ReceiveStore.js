/**
 * 项目回款数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receive.store.ReceiveStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.receive.model.ReceiveModel',
    alias: 'store.receiveStore',
    xtype: 'receiveStore',
    storeId: "receiveStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/receives/list',
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