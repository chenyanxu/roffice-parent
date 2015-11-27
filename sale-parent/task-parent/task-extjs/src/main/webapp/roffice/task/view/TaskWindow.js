/**
 * 任务目标新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.task.view.TaskWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.task.viewModel.TaskViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.component.UserComboBox'
    ],
    alias: 'widget.taskWindow',
    viewModel: 'taskViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'taskStore'
    },
    xtype: "taskWindow",
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [{
            fieldLabel: '销售负责人',
            xtype: 'userCombobox',
            //valueField: 'name',
            //name: 'salePerson',
            bind: {
                //activeError: '{validation.salePerson}',
                value: '{rec.name}'
            }
        },{
            fieldLabel: '任务分类',
            //allowBlank: false,
            xtype: 'combobox',
            forceSelection: true,
            store: [
                ['软件开发', '软件开发'],
                ['系统集成', '系统集成'],
                ['技术服务', '技术服务']
            ],
            bind: {
                //activeError: '{validation.level}',
                value: '{rec.taskType}'
            }
        },{
            fieldLabel: '合同额(元)',
            //allowBlank: false,
            xtype: 'numberfield',
            bind: {
                //activeError: '{validation.budget}',
                value: '{rec.contactNo}'
            }
        },{
            fieldLabel: '目标毛利(元)',
            //allowBlank: false,
            xtype: 'numberfield',
            bind: {
                //activeError: '{validation.budget}',
                value: '{rec.targetNo}'
            }
        },
        {
            fieldLabel: '年度',
            allowBlank: false,
            bind: {
                //activeError: '{validation.title}',
                value: '{rec.year}'
            }
        }]
    }]
});