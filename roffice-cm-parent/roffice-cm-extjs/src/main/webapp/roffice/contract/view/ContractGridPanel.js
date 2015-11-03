/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.view.ContractGridPanel', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar',
        'kalix.roffice.contract.controller.ContractGridPanelController'],
    alias: 'widget.contractGridPanel',
    xtype: 'contractGridPanel',
    controller: 'contractGridPanelController',
    autoLoad: true,
    stripeRows: true,
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
            text: '项目经理',
            dataIndex: 'managerId',
            flex: 1
            //width: 80
        }, {
            text: '限售负责人',
            dataIndex: 'sellerId',
            flex: 1
            //width: 60
        }
    ],

    tbar: {
        xtype: 'securityToolbar',

        //无需授权的按钮
        items: [
            {
                text: '查看',
                xtype: 'button',
                //permission: 'admin:sysModule:permissionControl:userMenu:view',
                icon: 'roffice/cm/resources/images/contract_view.png',
                handler: 'onView'
            },
            {
                text: '新增',
                xtype: 'button',
                //permission: 'admin:sysModule:permissionControl:userMenu:add',
                icon: 'roffice/cm/resources/images/contract_add.png',
                handler: 'onAdd'
            },
            {
                text: '修改',
                xtype: 'button',
                // permission: 'admin:sysModule:permissionControl:userMenu:update',
                icon: "roffice/cm/resources/images/contract_edit.png",
                handler: 'onEdit'
            }, {
                text: '删除',
                xtype: 'button',
                // permission: 'admin:sysModule:permissionControl:userMenu:delete',
                icon: "roffice/cm/resources/images/contract_delete.png",
                handler: 'onDelete'
            }
        ]
        //,

        //需要验证权限后添加的按钮
        //verifyItems: [
        //    {
        //        text: '新增',
        //        xtype: 'button',
        //        permission: 'admin:sysModule:permissionControl:userMenu:add',
        //        icon: 'admin/resources/images/user_add.png',
        //        handler: 'onAdd'
        //    },
        //    {
        //        text: '修改',
        //        xtype: 'button',
        //        permission: 'admin:sysModule:permissionControl:userMenu:update',
        //        icon: "admin/resources/images/user_edit.png",
        //        handler: 'onEdit'
        //    }, {
        //        text: '删除',
        //        xtype: 'button',
        //        permission: 'admin:sysModule:permissionControl:userMenu:delete',
        //        icon: "admin/resources/images/user_delete.png",
        //        handler: 'onDelete'
        //    }
        //]
    },

    /*
     grid 组件不自动绑定与 grid 相关的翻页工具条的 store 配置项
     需要手动指定工具条的 store
     */
    bbar: [{
        id: 'workgroup-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('contractStore'));
            }
        }
    }
    ],

});
