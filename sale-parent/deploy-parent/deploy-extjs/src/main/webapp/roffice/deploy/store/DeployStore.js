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
    proxyUrl: CONFIG.restRoot+'/camel/rest/deploys'
});