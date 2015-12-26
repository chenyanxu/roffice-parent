/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.store.ContractStore', {
    extend: 'kalix.store.BaseStore',
    alias: 'store.contractStore',
    model: 'kalix.roffice.contract.model.ContractModel',
    xtype: 'contractStore',
    storeId: "contractStore",
    proxyUrl:CONFIG.restRoot+'/camel/rest/contracts'
});