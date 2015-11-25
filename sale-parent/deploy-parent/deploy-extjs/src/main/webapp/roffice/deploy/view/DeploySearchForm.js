/**
 * 实施项目查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.deploy.view.DeploySearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.deploySearchForm',
    xtype: 'deploySearchForm',
    storeId: 'deployStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '项目名称',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'name'
        }]
});
