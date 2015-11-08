/**
 * 字典数据仓库
 *
 * @author majian <br/>
 *         date:2015-7-9
 * @version 1.0.0
 */
Ext.define('kalix.roffice.contract.store.DictContractStatusStore', {
    extend: 'Ext.data.Store',
    model: 'kalix.admin.dict.model.DictModel',
    alias: 'store.dictContractStatusStore',
    xtype: 'dictContractStatusStore',
    storeId: "dictContractStatusStore",
    autoLoad: true,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/dicts/list/contractStatus',
        reader: {
            type: "json"
        }
    }
});