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
    proxyUrl: '/kalix/camel/rest/receives'
});