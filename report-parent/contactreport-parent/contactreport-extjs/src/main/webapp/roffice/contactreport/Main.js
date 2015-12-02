/**
 * 合同报表首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.contactreport.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.roffice.contactreport.view.ContactReportGrid',
        'kalix.roffice.contactreport.view.ContactReportSearchForm',
        'kalix.roffice.contactreport.viewModel.ContactReportViewModel'
    ],
    storeId: 'contactreportStore',
    viewModel: 'contactreportViewModel',
    items: [
        {
            title: '合同报表查询',
            iconCls: 'x-fa fa-search',
            xtype: 'contactreportSearchForm'
        }, {
            xtype: 'contactreportGridPanel',
            id: 'contactreportGridPanel',
            title: '合同统计报表',
            iconCls: 'x-fa fa-list-alt',
            margin: 10
        }
    ]
});
