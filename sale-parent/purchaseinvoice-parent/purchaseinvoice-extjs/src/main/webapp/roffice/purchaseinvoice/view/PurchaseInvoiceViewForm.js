/**
 * 设备发票查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.purchaseinvoice.view.PurchaseInvoiceViewForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.roffice.purchaseinvoice.viewModel.PurchaseInvoiceViewModel',
        'kalix.roffice.purchaseinvoice.controller.PurchaseInvoiceFormController',
        'kalix.roffice.contract.component.ContractComboBox'
    ],
    alias: 'widget.purchaseinvoiceViewForm',
    viewModel: 'purchaseinvoiceViewModel',
    controller: 'purchaseinvoiceFormController',
    xtype: "purchaseinvoiceViewForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    title: '查看设备发票',
    bind: {
        icon: '{view_image_path}'
    },
    items: [{
        xtype: 'baseForm',
        defaults: {
            readOnly: true
        },
        items: [
            {
                fieldLabel: '开发票日期',
                labelAlign: 'right',
                allowBlank: false,
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    activeError: '{validation.invoiceDate}',
                    value: '{rec.invoiceDate}'
                }
            },
            {
                fieldLabel: '发票金额(万元)',
                labelAlign: 'right',
                xtype: 'numberfield',
                allowBlank: false,
                bind: {
                    activeError: '{validation.money}',
                    value: '{rec.money}'
                }
            }, {
                fieldLabel: '税率',
                labelAlign: 'right',
                xtype: 'numberfield',
                allowBlank: false,
                bind: {
                    //activeError: '{validation.money}',
                    value: '{rec.rate}'
                }
            }, {
                fieldLabel: '发票号',
                labelAlign: 'right',
                //allowBlank: false,
                bind: {
                    //activeError: '{validation.contractId}',
                    value: '{rec.invoiceNo}'
                }
            },
            {
                fieldLabel: '采购编号',
                labelAlign: 'right',
                xtype: 'contractComboBox',
                bind: {
                    //activeError: '{validation.contractId}',
                    value: '{rec.purchaseId}'
                }
            }, {
                fieldLabel: '备注',
                labelAlign: 'right',
                allowBlank: false,
                xtype: 'textarea',
                bind: {
                    activeError: '{validation.comment}',
                    value: '{rec.comment}'
                }
            }, {
                fieldLabel: '最后修改人',
                xtype: 'displayfield',
                labelAlign: 'right',
                bind: {
                    value: '{rec.updateBy}'
                }
            }, {
                fieldLabel: '最后修改时间',
                xtype: 'displayfield',
                labelAlign: 'right',
                bind: {
                    value: '{rec.updateDate}'
                },
                renderer: function (value) {
                    var createDate = new Date(value);
                    return createDate.format("yyyy-MM-dd hh:mm:ss");
                }
            }],
        buttons: [{
            text: '关闭',
            glyph: 'xf00d@FontAwesome',
            handler: function () {
                this.up('.window').close();
            }
        }
        ]
    }
    ]
});