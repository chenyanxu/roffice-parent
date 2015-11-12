/**
 * 项目支持数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.store.SupportStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.support.model.SupportModel',
    alias: 'store.supportStore',
    xtype: 'supportStore',
    storeId: "supportStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/supports/list',
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