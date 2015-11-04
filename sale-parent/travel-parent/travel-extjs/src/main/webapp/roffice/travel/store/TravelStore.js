/**
 * 出差记录数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.travel.store.TravelStore', {
    extend: 'Ext.data.Store',
    model: 'kalix.roffice.travel.model.TravelModel',
    alias: 'store.travelStore',
    xtype: 'travelStore',
    storeId: "travelStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/travels',
        paramsAsJson: true,
        actionMethods: {
            create: 'POST',
            read: 'GET',
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