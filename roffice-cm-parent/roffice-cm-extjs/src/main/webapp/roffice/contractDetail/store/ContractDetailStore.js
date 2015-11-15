/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contractDetail.store.ContractDetailStore', {
    extend: 'kalix.store.BaseStore',
    requires: ['kalix.core.Notify'],
    alias: 'store.contractDetailStore',
    model:'kalix.roffice.contractDetail.model.ContractDetailModel',
    xtype: 'contractDetailStore',
    storeId: "contractDetailStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "rest",
        url: '/kalix/camel/rest/contractDetails',
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
    }
});