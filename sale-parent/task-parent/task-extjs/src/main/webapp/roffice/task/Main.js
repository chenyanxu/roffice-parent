/**
 * 任务目标首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.task.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.roffice.task.view.TaskGrid',
        'kalix.roffice.task.view.TaskSearchForm',
        'kalix.roffice.task.viewModel.TaskViewModel'
    ],
    storeId: 'taskStore',
    viewModel: 'taskViewModel',
    items: [
        {
            title: '任务目标查询',
            iconCls: 'x-fa fa-search',
            xtype: 'taskSearchForm'
        }, {
            xtype: 'taskGridPanel',
            id: 'taskGridPanel',
            title: '任务目标列表',
            iconCls: 'x-fa fa-tasks',
            margin: 10
        }
    ]
});
