/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contractDetail.view.ContractDetailGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar',
        'kalix.roffice.contractDetail.controller.ContractDetailGridController',
        'kalix.roffice.contractDetail.store.ContractDetailStore'
    ],
    alias: 'widget.contractDetailGrid',
    xtype: 'contractDetailGrid',
    controller: {
        type: 'contractDetailGridController',
        storeId: 'contractDetailStore'
    },
    autoLoad: true,
    stripeRows: true,
    store: {
        type: 'contractDetailStore'
    },
    listeners: {
        select: function (target, record, index, eOpts) {
            var vm = this.lookupViewModel();

            vm.set('rec', record);
            vm.set('sel', true);
        }
    },
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
        },
        {
            text: '设备名称',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: '供应商',
            dataIndex: 'provider',
            flex: 1
        },
        {
            text: '品牌',
            dataIndex: 'brand',
            flex: 1
        },
        {
            text: '型号',
            dataIndex: 'type',
            flex: 1
        },
        {
            text: '单价',
            dataIndex: 'price',
            flex: 1
        },
        {
            text: '数量',
            dataIndex: 'amount',
            flex: 1
        },
        {
            text: '单位',
            dataIndex: 'unit',
            flex: 1
        },
        {
            text: '追加',
            trueText: '是',
            falseText: '否',
            xtype: 'booleancolumn',
            dataIndex: 'additional',
            flex: 1
        },
        {
            text: '追加日期',
            dataIndex: 'addDate',
            xtype: 'datecolumn',
            flex: 1,
            format: 'Y-m-d'
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
                bind: {icon: '{view_image_path}'},
                handler: 'onView'
            },
            {
                text: '新增',
                xtype: 'button',
                //permission: 'admin:sysModule:permissionControl:userMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            },
            {
                text: '修改',
                xtype: 'button',
                // permission: 'admin:sysModule:permissionControl:userMenu:update',
                bind: {icon: '{edit_image_path}'},
                handler: 'onEdit'
            }, {
                text: '删除',
                xtype: 'button',
                // permission: 'admin:sysModule:permissionControl:userMenu:delete',
                bind: {icon: '{delete_image_path}'},
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
        id: 'contractDetail-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('contractDetailStore'));
            }
        }
    }
    ]

});
