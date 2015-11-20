/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contractDetail.store.ContractDetailStore', {
    extend: 'kalix.store.BaseStore',
    alias: 'store.contractDetailStore',
    model:'kalix.roffice.contractDetail.model.ContractDetailModel',
    xtype: 'contractDetailStore',
    storeId: "contractDetailStore",
    proxyUrl:'/kalix/camel/rest/contractDetails'
});