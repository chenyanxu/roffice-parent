/**
 * 实施项目表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.deploy.view.DeployGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.roffice.deploy.viewModel.DeployViewModel',
        'kalix.roffice.deploy.controller.DeployGridController',
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar'
    ],
    alias: 'widget.deployGrid',
    xtype: 'deployGridPanel',
    controller: 'deployGridController',
    viewModel: 'deployViewModel',
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
            text: '项目编号',
            dataIndex: 'no',
            flex: 1
        }, {
            text: '项目名称',
            dataIndex: 'name',
            flex: 1
        }, {
            text: '交付负责人',
            dataIndex: 'deployPerson',
            flex: 1
        }, {
            text: '合同金额',
            dataIndex: 'budget',
            flex: 1,
            renderer: function (val) {
                var out = Ext.util.Format.number(val, '0.00');
                out = '￥' + out + '万元';
                return out;
            },
        }, {
            text: '回款情况',
            dataIndex: 'receiveInfo',
            flex: 1,
        }
    ],

    tbar: {
        xtype: 'securityToolbar',

        //无需授权的按钮
        items: [
            {
                text: '查看',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:deployMenu:view',
                //icon: this.getViewModel().get("view_image_path"),
                handler: 'onView',
                bind: {
                    icon: '{view_image_path}'
                }
            },
            {
                text: '新增',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:deployMenu:add',
                handler: 'onAdd',
                bind: {
                    icon: '{add_image_path}'
                }
            },
            {
                text: '修改',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:deployMenu:update',
                handler: 'onEdit',
                bind: {
                    icon: '{edit_image_path}'
                }
            }, {
                text: '删除',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:deployMenu:delete',
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
        id: 'deploy-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('deployStore'));
            }
        }
    }
    ],

});
