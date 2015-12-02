/**
 * 合同回款情况首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receivereport.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.roffice.receivereport.view.ReceiveReportGrid',
        'kalix.roffice.receivereport.view.ReceiveReportSearchForm',
        'kalix.roffice.receivereport.viewModel.ReceiveReportViewModel'
    ],
    storeId: 'receivereportStore',
    viewModel: 'receivereportViewModel',
    items: [
        {
            title: '合同回款情况查询',
            iconCls: 'x-fa fa-search',
            xtype: 'receivereportSearchForm'
        }, {
            xtype: 'receivereportGridPanel',
            title: '合同回款情况报表',
            iconCls: 'x-fa fa-list-alt',
            margin: 10
        }
    ]
});
