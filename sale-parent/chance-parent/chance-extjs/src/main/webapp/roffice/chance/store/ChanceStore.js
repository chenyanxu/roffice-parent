/**
 * 项目机会数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.chance.store.ChanceStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.chance.model.ChanceModel',
    alias: 'store.chanceStore',
    xtype: 'chanceStore',
    storeId: "chanceStore",
    proxyUrl:CONFIG.restRoot+'/camel/rest/chances/'
});