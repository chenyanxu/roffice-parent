/**
 * 实施项目数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.deploy.store.DeployStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.deploy.model.DeployModel',
    alias: 'store.deployStore',
    xtype: 'deployStore',
    storeId: "deployStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/deploys/list',
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