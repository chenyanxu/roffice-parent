/**
 * 任务目标查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.task.view.TaskSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.taskSearchForm',
    xtype: 'taskSearchForm',
    storeId: 'taskStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '销售负责人',
            labelAlign: 'right',
            labelWidth: 80,
            width: 200,
            name: 'name'
        }]
});
