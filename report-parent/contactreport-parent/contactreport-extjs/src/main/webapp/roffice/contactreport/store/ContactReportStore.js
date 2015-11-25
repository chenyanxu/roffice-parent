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
    proxyUrl:'/kalix/camel/rest/contracts',
    pageSize:100

    /*extend: 'Ext.data.Store',
    alias: 'store.contactreportStore',

    model: 'kalix.roffice.contactreport.model.ContactReportModel',

    proxy: {
        // load using HTTP
        type: 'ajax',
        limitParam: null,
        url: '/kalix/camel/rest/contracts',
        // the return will be JSON, so lets set up a reader
        reader: {
            type: 'json'
        }
    },
    autoLoad: true*/
});