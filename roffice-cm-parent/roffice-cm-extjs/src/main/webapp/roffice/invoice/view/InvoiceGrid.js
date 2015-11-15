/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.invoice.view.InvoiceGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar',
        'kalix.roffice.invoice.controller.InvoiceGridController',
        'kalix.roffice.invoice.store.InvoiceStore'
    ],
    alias: 'widget.invoiceGrid',
    xtype: 'invoiceGrid',
    controller: {
        type: 'invoiceGridController',
        storeId: 'invoiceStore'
    },
    autoLoad: true,
    stripeRows: true,
    store: {
        type: 'invoiceStore'
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
            text: '发票编号',
            dataIndex: 'invoiceNo',
            flex: 1
        },
        {
            text: '发票金额',
            dataIndex: 'money',
            flex: 1
        },
        {
            text: '发票税率',
            dataIndex: 'rate',
            flex: 1
        },
        {
            text: '发票日期',
            dataIndex: 'invoiceDate',
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
        id: 'invoice-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('invoiceStore'));
            }
        }
    }
    ]

});
