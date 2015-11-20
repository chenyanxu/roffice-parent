/**
 * 设备发票添加和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.purchaseinvoice.view.PurchaseInvoiceWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.purchaseinvoice.viewModel.PurchaseInvoiceViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore',
        'kalix.roffice.contract.component.ContractComboBox'
    ],
    alias: 'widget.purchaseinvoiceWindow',
    viewModel: 'purchaseinvoiceViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'purchaseinvoiceStore'
    },
    xtype: "purchaseinvoiceWindow",
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '开发票日期',
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
                xtype: 'numberfield',
                allowBlank: false,
                bind: {
                    activeError: '{validation.money}',
                    value: '{rec.money}'
                }
            }, {
                fieldLabel: '税率',
                xtype: 'numberfield',
                allowBlank: false,
                bind: {
                    //activeError: '{validation.money}',
                    value: '{rec.rate}'
                }
            },
            {
                fieldLabel: '采购编号',
                allowBlank: false,
                xtype: 'contractComboBox',
                forceSelection: false,
                bind: {
                    //activeError: '{validation.contractId}',
                    value: '{rec.purchaseId}'
                }
            }, {
                fieldLabel: '发票号',
                allowBlank: false,
                bind: {
                    //activeError: '{validation.contractId}',
                    value: '{rec.invoiceNo}'
                }
            }, {
                fieldLabel: '备注',
                labelAlign: 'right',
                //allowBlank: false,
                xtype: 'textarea',
                bind: {
                    activeError: '{validation.comment}',
                    value: '{rec.comment}'
                }
            }]
    }]

});