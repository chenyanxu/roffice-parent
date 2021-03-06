/**
 * 合同报表查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.contactreport.view.ContactReportSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.contactreportSearchForm',
    xtype: 'contactreportSearchForm',
    storeId: 'contactreportStore',
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
