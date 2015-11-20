/**
 * 设备发票表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.purchaseinvoice.view.PurchaseInvoiceGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.purchaseinvoice.controller.PurchaseInvoiceGridController',
        'kalix.roffice.purchaseinvoice.store.PurchaseInvoiceStore',
    ],
    alias: 'widget.purchaseinvoiceGrid',
    xtype: 'purchaseinvoiceGridPanel',
    controller: {
        type: 'purchaseinvoiceGridController',
        storeId: 'purchaseinvoiceStore',
        cfgForm: 'kalix.roffice.purchaseinvoice.view.PurchaseInvoiceWindow',
        cfgViewForm: 'kalix.roffice.purchaseinvoice.view.PurchaseInvoiceViewWindow',
        cfgModel: 'kalix.roffice.purchaseinvoice.model.PurchaseInvoiceModel'
    },
    store: {
        type: 'purchaseinvoiceStore'
    },
    columns: {
        defaults: {flex: 1},
        items: [
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
        }, {
            text: '开发票日期',
            dataIndex: 'invoiceDate',
            xtype: 'datecolumn',
            //format: 'Y-m-d'

            renderer: function (value) {
                var createDate = new Date(value);
                return createDate.format("yyyy-MM-dd");
            }
        }, {
            text: '发票金额',
            dataIndex: 'money',
            //formatter: 'usMoney',
            renderer: function (val) {
                var out = Ext.util.Format.number(val, '0.00');
                out = '￥' + out + '万元';
                return out;
            },
        }, {
            text: '税率',
            dataIndex: 'rate',
        }, {
            text: '发票号',
            dataIndex: 'invoiceNo',
        }, /* {
            text: '采购编号',
            dataIndex: 'purchaseId',
            flex: 1
         },*/
        {
            text: '备注',
            dataIndex: 'comment',
            flex: 2
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
        },
            {
                xtype: 'securityGridColumnRUD',
                //todo change permission
                permissions: [
                    'roffice:deployModule:purchaseinvoiceMenu:view',
                    'roffice:deployModule:purchaseinvoiceMenu:edit',
                    'roffice:deployModule:purchaseinvoiceMenu:delete'
                ]
            }]
    },

    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                permission: 'roffice:deployModule:purchaseinvoiceMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }

});
