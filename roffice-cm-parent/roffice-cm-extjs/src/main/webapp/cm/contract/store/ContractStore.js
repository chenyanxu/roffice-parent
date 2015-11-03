/**
 * @author chenyanxu
 */
Ext.define('roffice.cm.contract.store.ContractStore', {
    extend: 'Ext.data.Store',
    model: 'roffice.cm.contract.model.ContractModel',
    alias: 'store.contractStore',
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