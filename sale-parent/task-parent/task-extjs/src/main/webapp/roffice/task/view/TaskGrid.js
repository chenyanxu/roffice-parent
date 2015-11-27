/**
 * 任务目标表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.task.view.TaskGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.task.controller.TaskGridController',
        'kalix.roffice.task.store.TaskStore',
    ],
    alias: 'widget.taskGrid',
    xtype: 'taskGridPanel',
    controller: {
        type: 'taskGridController',
        storeId: 'taskStore',
        cfgForm: 'kalix.roffice.task.view.TaskWindow',
        cfgViewForm: 'kalix.roffice.task.view.TaskViewWindow',
        cfgModel: 'kalix.roffice.task.model.TaskModel'
    },
    store: {
        type: 'taskStore'
    },

    columns: {
        defaults: {flex: 1,
            renderer: 'addTooltip'},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                flex:0,
                align: 'center',
                renderer:this.update
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true,
                flex: 1
            }, {
                text: '销售负责人',
                dataIndex: 'name',
                flex: 1
            }, {
                text: '年度',
                dataIndex: 'year',
                flex: 1
            }, {
                text: '任务分类',
                dataIndex: 'taskType',
                flex: 1
            },
            {
                text: '合同额',
                dataIndex: 'contactNo',
                flex: 2,
                renderer: 'renderMoney'
            }, {
                text: '目标毛利',
                dataIndex: 'targetNo',
                flex: 2,
                renderer: 'renderMoney'
            },
            {
                xtype: 'securityGridColumnRUD',
                permissions: [
                    'roffice:cmModule:taskMenu:view',
                    'roffice:cmModule:taskMenu:edit',
                    'roffice:cmModule:taskMenu:delete'
                ]
            }
        ]
    },
    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                //todo change permission
                permission: 'roffice:cmModule:taskMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
