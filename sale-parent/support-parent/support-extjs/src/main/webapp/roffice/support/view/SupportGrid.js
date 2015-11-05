/**
 * 项目支持表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.view.SupportGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.roffice.support.viewModel.SupportViewModel',
        'kalix.roffice.support.controller.SupportGridController',
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar'
    ],
    alias: 'widget.supportGrid',
    xtype: 'supportGridPanel',
    controller: 'supportGridController',
    viewModel: 'supportViewModel',
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
            //width: 40
        }, {
            text: '项目名称',
            dataIndex: 'name',
            flex: 1
        }, {
            text: '营销负责人',
            dataIndex: 'saler',
            flex: 1
        }, {
            text: '项目类型',
            dataIndex: 'type',
            flex: 1
        }, {
            text: '所属行业',
            dataIndex: 'industry',
            flex: 1
        }, {
            text: '优先级',
            dataIndex: 'level',
            flex: 1
        }, {
            text: '预算额度',
            dataIndex: 'budget',
            flex: 1
        }, {
            text: '预计交付时间',
            dataIndex: 'billDate',
            xtype: 'datecolumn',
            flex: 1,
            format: 'Y-m-d'
        }, {
            text: '预计开始时间',
            dataIndex: 'startDate',
            xtype: 'datecolumn',
            flex: 1,
            format: 'Y-m-d'
        }, {
            text: '售前支持负责人',
            dataIndex: 'supporter',
            flex: 1
        }, {
            text: '备注',
            dataIndex: 'comment',
            flex: 1
        }

    ],
    tbar: {
        xtype: 'securityToolbar',

        //无需授权的按钮
        items: [
            {
                text: '查看',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:supportMenu:view',
                //icon: this.getViewModel().get("view_image_path"),
                handler: 'onView',
                bind: {
                    icon: '{view_image_path}'
                }
            },
            {
                text: '新增',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:supportMenu:add',
                handler: 'onAdd',
                bind: {
                    icon: '{add_image_path}'
                }
            },
            {
                text: '修改',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:supportMenu:update',
                handler: 'onEdit',
                bind: {
                    icon: '{edit_image_path}'
                }
            }, {
                text: '删除',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:supportMenu:delete',
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
        id: 'support-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('supportStore'));
            }
        }
    }
    ],

});
