/**
 * 项目管理表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.project.view.ProjectGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.roffice.project.viewModel.ProjectViewModel',
        'kalix.roffice.project.controller.ProjectGridController',
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar',
        'kalix.roffice.chance.store.ChanceStore'
    ],
    alias: 'widget.projectGrid',
    xtype: 'projectGridPanel',
    controller: 'projectGridController',
    viewModel: 'projectViewModel',
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
            text: '名称',
            dataIndex: 'name',
            flex: 1
        }, {
            text: '项目经理',
            dataIndex: 'manager',
            flex: 1
        }, {
            text: '营销负责人',
            dataIndex: 'salePerson',
            flex: 1
        }, {
            text: '立项时间',
            dataIndex: 'setupDate',
            flex: 1,
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            text: '交付负责人',
            dataIndex: 'deployPerson',
            flex: 1
        }, {
            text: '交付时间',
            dataIndex: 'deployDate',
            flex: 1,
            xtype: 'datecolumn',
            format: 'Y-m-d'
        }, {
            text: '实施状态',
            dataIndex: 'status',
            flex: 1
        }, {
            text: '项目机会',
            dataIndex: 'chanceId',
            flex: 1,
            renderer: function (chanceId) {
                var store = kalix.getApplication().getStore('chanceStore');
                console.log(store);
                store.load();
                return store.getById(chanceId).get('name');
                //return "￥"+chanceId;
            }
        }

    ],

    tbar: {
        xtype: 'securityToolbar',

        //无需授权的按钮
        items: [
            {
                text: '查看',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:projectMenu:view',
                //icon: this.getViewModel().get("view_image_path"),
                handler: 'onView',
                bind: {
                    icon: '{view_image_path}'
                }
            },
            {
                text: '新增',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:projectMenu:add',
                handler: 'onAdd',
                bind: {
                    icon: '{add_image_path}'
                }
            },
            {
                text: '修改',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:projectMenu:update',
                handler: 'onEdit',
                bind: {
                    icon: '{edit_image_path}'
                }
            }, {
                text: '删除',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:projectMenu:delete',
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
        id: 'project-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('projectStore'));
            }
        }
    }
    ],

});
