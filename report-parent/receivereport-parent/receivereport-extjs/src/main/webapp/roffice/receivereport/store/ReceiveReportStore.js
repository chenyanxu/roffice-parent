/**
 * 合同回款情况数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receivereport.store.ReceiveReportStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.receivereport.model.ReceiveReportModel',
    alias: 'store.receivereportStore',
    xtype: 'receivereportStore',
    storeId: "receivereportStore",
    groupField: 'manager',
    proxyUrl:CONFIG.restRoot+'/camel/rest/contracts/report',
    pageSize:0
});