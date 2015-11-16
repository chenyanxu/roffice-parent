/**
 * 采购付款表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.pay.view.PayGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.roffice.pay.viewModel.PayViewModel',
        'kalix.roffice.pay.controller.PayGridController',
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar'
    ],
    alias: 'widget.payGrid',
    xtype: 'payGridPanel',
    controller: 'payGridController',
    viewModel: 'payViewModel',
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
            text: '回款日期',
            dataIndex: 'receiveDate',
            flex: 1,
            xtype: 'datecolumn',
            //format: 'Y-m-d'

            renderer: function (value) {
                var createDate = new Date(value);
                return createDate.format("yyyy-MM-dd");
            }
        }, {
            text: '回款金额',
            dataIndex: 'money',
            flex: 1,
            //formatter: 'usMoney',
            renderer: function (val) {
                var out = Ext.util.Format.number(val, '0.00');
                out = '￥' + out + '万元';
                return out;
            },
        }, {
            text: '采购编号',
            dataIndex: 'purchaseId',
            flex: 1
        },
        {
            text: '备注',
            dataIndex: 'comment',
            flex: 3
        },
        {
            text: '最后修改人',
            dataIndex: 'updateBy',
            flex: 1
        },
        {
            text: '最后修改时间',
            dataIndex: 'updateDate',
            flex: 2,
            renderer: function (value) {
                var createDate = new Date(value);
                return createDate.format("yyyy-MM-dd hh:mm:ss");
            }
        }],

    tbar: {
        xtype: 'securityToolbar',

        //无需授权的按钮
        items: [
            {
                text: '查看',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:payMenu:view',
                //icon: this.getViewModel().get("view_image_path"),
                handler: 'onView',
                bind: {
                    icon: '{view_image_path}'
                }
            },
            {
                text: '添加',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:payMenu:add',
                handler: 'onAdd',
                bind: {
                    icon: '{add_image_path}'
                }
            },
            {
                text: '编辑',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:payMenu:update',
                handler: 'onEdit',
                bind: {
                    icon: '{edit_image_path}'
                }
            }, {
                text: '删除',
                xtype: 'button',
                permission: 'admin:sysModule:permissionControl:payMenu:delete',
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
        id: 'pay-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('payStore'));
            }
        }
    }
    ],

});
