/**
 * 出差记录查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.travel.view.TravelSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.travelSearchForm',
    xtype: 'travelSearchForm',
    storeId: 'travelStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '任务名称',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'name'
        }]
});
