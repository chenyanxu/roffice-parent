/**
 * 项目机会查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.chance.view.ChanceSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.chanceSearchForm',
    xtype: 'chanceSearchForm',
    storeId:'chanceStore',
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
