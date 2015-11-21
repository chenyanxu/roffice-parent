/**
 * 项目管理查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.project.view.ProjectSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.projectSearchForm',
    xtype: 'projectSearchForm',
    storeId: 'projectStore',
    items: [{
        xtype: 'textfield',
        fieldLabel: '名称',
        labelAlign: 'right',
        labelWidth: 60,
        width: 200,
        name: 'name'
    }]
});
