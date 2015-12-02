/**
 * 合同回款情况查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receivereport.view.ReceiveReportSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.receivereportSearchForm',
    xtype: 'receivereportSearchForm',
    storeId: 'receivereportStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '客户经理',
            labelAlign: 'right',
            labelWidth: 80,
            width: 200,
            name: 'manager'
        }]
});
