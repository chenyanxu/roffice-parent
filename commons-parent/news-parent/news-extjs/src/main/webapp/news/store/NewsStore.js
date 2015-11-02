/**
 * 用户数据仓库
 *
 * @author majian
 *         date:2015-7-3
 * @version 1.0.0
 */
Ext.define('Kalix.news.store.NewsStore', {
    extend: 'Ext.data.Store',
    model: 'Kalix.news.model.NewsModel',
    alias: 'store.newsStore',
    xtype: 'newsStore',
    storeId: "newsStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/newss',
        reader: {
            type: "json",
            rootProperty: "data",
            totalProperty: 'totalCount'
        }
    },
    onCreateRecords: function (records, operation, success) {
        console.log(records);
    },

    onUpdateRecords: function (records, operation, success) {
        // If update failed, reject all changes
        if (!success) {
            // Call rejectChanges method of the store
            this.rejectChanges();

            Ext.Msg.show({
                text: 'Update Failed',
                message: 'The changes you have made are rejected.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        }
    },

    onDestroyRecords: function (records, operation, success) {
        console.log(records);
    }
});