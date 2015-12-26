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
    proxyUrl: CONFIG.restRoot+'/camel/rest/contracts/report',
    pageSize: 0,
    singleton: true
});