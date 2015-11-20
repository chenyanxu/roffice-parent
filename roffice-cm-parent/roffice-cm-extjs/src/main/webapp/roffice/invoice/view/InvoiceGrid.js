/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.invoice.view.InvoiceGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.invoice.controller.InvoiceGridController',
        'kalix.roffice.invoice.store.InvoiceStore'
    ],
    alias: 'widget.invoiceGrid',
    xtype: 'invoiceGrid',
    controller: {
        type: 'invoiceGridController',
        storeId: 'invoiceStore',
        cfgForm: 'kalix.roffice.invoice.view.InvoiceWindow',
        cfgViewForm: 'kalix.roffice.invoice.view.InvoiceViewWindow',
        cfgModel: 'kalix.roffice.invoice.model.InvoiceModel'
    },
    store: {
        type: 'invoiceStore'
    },
    columns: {
        defaults: {flex: 1},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                align: 'center',
                flex:0
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true
            },
            {
                text: '发票编号',
                dataIndex: 'invoiceNo'
            },
            {
                text: '发票金额',
                dataIndex: 'money'
            },
            {
                text: '发票税率',
                dataIndex: 'rate'
            },
            {
                text: '发票日期',
                dataIndex: 'invoiceDate',
                xtype: 'datecolumn',
                format: 'Y-m-d'
            },
            {
                xtype: 'securityGridColumnRUD',
                permissions: [
                    'roffice:cmModule:invoiceMenu:view',
                    'roffice:cmModule:invoiceMenu:edit',
                    'roffice:cmModule:invoiceMenu:delete'
                ]
            }
        ]
    },
    tbar: {
        xtype: 'securityToolbar',
        verifyItems : [
            {
                text: '添加',
                xtype: 'button',
                bind: {icon: '{add_image_path}'},
                permission:'roffice:cmModule:invoiceMenu:add',
                handler: 'onAdd'
            }
        ]
    }
});
