/**
 * 出差记录数据仓库
 *
 * @author  sunlf
 * @version 1.0.0
 */
Ext.define('kalix.roffice.travel.store.TravelStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.travel.model.TravelModel',
    alias: 'store.travelStore',
    xtype: 'travelStore',
    storeId: "travelStore",
    proxyUrl: CONFIG.restRoot+'/camel/rest/travels'
});