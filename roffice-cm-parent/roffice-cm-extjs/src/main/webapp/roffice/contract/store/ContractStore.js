/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.store.ContractStore', {
    extend: 'kalix.store.BaseStore',
    requires: ['kalix.core.Notify'],
    alias: 'store.contractStore',
    model:'kalix.roffice.contract.model.ContractModel',
    xtype: 'contractStore',
    storeId: "contractStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "rest",
        url: '/kalix/camel/rest/contracts',
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