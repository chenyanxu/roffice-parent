/**
 * 出差记录表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.travel.view.TravelGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.roffice.travel.viewModel.TravelViewModel',
        'kalix.roffice.travel.controller.TravelGridController',
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar'
    ],
    alias: 'widget.travelGrid',
    xtype: 'travelGridPanel',
    controller: 'travelGridController',
    viewModel: 'travelViewModel',
    autoLoad: true,
    stripeRows: true,
    /*viewConfig: {
     forceFit: true,
     },*/
    columns: [
        {
            xtype: "rownumberer",
            text: "行号",
            width: 50,
            align: 'center'
        },
        {
            text: '编号',
            dataIndex: 'id',
            hidden: true,
            flex: 1
        }, {
            text: '任务名称',
            dataIndex: 'name',
            flex: 1
        }, {
            text: '出差人员',
            dataIndex: 'person',
            flex: 1
        }, {
            text: '任务目标',
            dataIndex: 'target',
            flex: 1
        }, {
            text: '出发时间',
            dataIndex: 'startDate',
            flex: 1,
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            text: '回程时间',
            dataIndex: 'endDate',
            flex: 1,
            xtype: 'datecolumn',
            format: 'Y-m-d'

        }, {
            text: '结果评定人',
            dataIndex: 'resultPerson',
            flex: 1
        }, {
            text: '完成情况',
            dataIndex: 'result',
            flex: 1
        }, {
            text: '备注',
            dataIndex: 'comment',
            flex: 1
        },
    ],

    tbar: {
        xtype: 'securityToolbar',

        //无需授权的按钮
        items: [
            {
                text: '查看',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:travelMenu:view',
                //icon: this.getViewModel().get("view_image_path"),
                handler: 'onView',
                bind: {
                    icon: '{view_image_path}'
                }
            },
            {
                text: '添加',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:travelMenu:add',
                handler: 'onAdd',
                bind: {
                    icon: '{add_image_path}'
                }
            },
            {
                text: '编辑',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:travelMenu:update',
                handler: 'onEdit',
                bind: {
                    icon: '{edit_image_path}'
                }
            }, {
                text: '删除',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:travelMenu:delete',
                handler: 'onDelete',
                bind: {
                    icon: '{delete_image_path}'
                }
            }
        ]

        //需要验证权限后添加的按钮
        //verifyItems: []
    },

    /*
     grid 组件不自动绑定与 grid 相关的翻页工具条的 store 配置项
     需要手动指定工具条的 store
     */
    bbar: [{
        id: 'travel-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('travelStore'));
            }
        }
    }
    ],

});
