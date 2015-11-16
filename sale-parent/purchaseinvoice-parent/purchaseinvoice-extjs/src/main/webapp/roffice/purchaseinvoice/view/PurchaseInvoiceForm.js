/**
 * 设备发票新增和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.purchaseinvoice.view.PurchaseInvoiceForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.view.components.common.FormPanel',
        'kalix.roffice.purchaseinvoice.viewModel.PurchaseInvoiceViewModel',
        'kalix.roffice.purchaseinvoice.controller.PurchaseInvoiceFormController',
        'kalix.roffice.contract.component.ContractComboBox'
    ],
    alias: 'widget.PurchaseInvoiceForm',
    viewModel: 'purchaseinvoiceViewModel',
    controller: 'purchaseinvoiceFormController',
    xtype: "purchaseinvoiceForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    bind: {
        icon: '{icon}',
        title: '{title}'
    },
    items: [{
        xtype: 'baseForm',
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
            },
            {
                fieldLabel: '采购编号',
                labelAlign: 'right',
                //allowBlank: false,
                xtype: 'contractComboBox',
                forceSelection: false,
                bind: {
                    //activeError: '{validation.contractId}',
                    value: '{rec.purchaseId}'
                }
            }, {
                fieldLabel: '发票号',
                labelAlign: 'right',
                //allowBlank: false,
                bind: {
                    //activeError: '{validation.contractId}',
                    value: '{rec.invoiceNo}'
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
            }],
        buttons: [{
            text: '保存',
            glyph: 'xf0c7@FontAwesome',
            handler: 'onSave'
        }, {
            text: '重置',
            glyph: 'xf0e2@FontAwesome',
            handler: 'onReset'
        }]
    }]

});