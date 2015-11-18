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
    autoLoad: true,
    pageSize: 10,
    baseUrl: '/kalix/camel/rest/chances/',
    proxy: {
        type: "rest",
        url: '/kalix/camel/rest/chances',
        paramsAsJson: true,
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        reader: {
            type: "json",
            rootProperty: "data",
            totalProperty: 'totalCount'
        }
    },
    load: function (options) {
        /*if (options.chanceId) {
         this.proxy.url = this.baseUrl + options.chanceId;
         this.proxy.actionMethods.read = "GET";
         }*/
        this.callParent(arguments);
    }
});