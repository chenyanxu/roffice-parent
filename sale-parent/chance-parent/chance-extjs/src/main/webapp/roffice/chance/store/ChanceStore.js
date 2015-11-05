/**
 * 项目机会数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.chance.store.ChanceStore', {
    extend: 'Ext.data.Store',
    model: 'kalix.roffice.chance.model.ChanceModel',
    alias: 'store.chanceStore',
    xtype: 'chanceStore',
    storeId: "chanceStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/chances/list',
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