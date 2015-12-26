/**
 * 项目支持数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.store.SupportStore', {
    extend: 'kalix.store.BaseStore',
    alias: 'store.supportStore',
    model: 'kalix.roffice.support.model.SupportModel',
    xtype: 'supportStore',
    storeId: "supportStore",
    proxyUrl:CONFIG.restRoot+'/camel/rest/supports'
});