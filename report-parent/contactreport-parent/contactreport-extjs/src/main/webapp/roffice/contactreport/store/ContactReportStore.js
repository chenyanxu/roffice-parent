/**
 * 合同报表数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.contactreport.store.ContactReportStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.contactreport.model.ContactReportModel',
    alias: 'store.contactreportStore',
    xtype: 'contactreportStore',
    storeId: "contactreportStore",
    proxyUrl:'/kalix/camel/rest/contracts/report',
    pageSize:0,
    /*listeners:{
    beforeload: function (store, opts, target) {
        var jsonStr = Ext.JSON.encode(target.items.getAt(0).getForm().getFieldValues());
        store.proxy.extraParams = {'jsonStr': jsonStr};
    }}*/
});