/**
 * 用户数据仓库
 *
 * @author majian
 *         date:2015-7-3
 * @version 1.0.0
 */
Ext.define('Kalix.chance.store.ChanceStore', {
    extend: 'Ext.data.Store',
    model: 'Kalix.chance.model.ChanceModel',
    alias: 'store.chanceStore',
    xtype: 'chanceStore',
    storeId: "chanceStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/chances',
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