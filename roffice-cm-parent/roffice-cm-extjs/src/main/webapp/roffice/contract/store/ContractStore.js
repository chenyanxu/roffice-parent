/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.store.ContractStore', {
    extend: 'Ext.data.Store',
    requires: ['kalix.core.Notify'],
    alias: 'store.contractStore',
    model:'kalix.roffice.contract.model.ContractModel',
    xtype: 'contractStore',
    storeId: "contractStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/contracts/list',
        paramsAsJson: true,
        actionMethods: {
            create: 'POST',
            read: 'POST',
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