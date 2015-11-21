/**
 * 项目支持查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.view.SupportSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.supportSearchForm',
    xtype: 'supportSearchForm',
    storeId:'supportStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '项目名称',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'name'
        }
    ]
});
