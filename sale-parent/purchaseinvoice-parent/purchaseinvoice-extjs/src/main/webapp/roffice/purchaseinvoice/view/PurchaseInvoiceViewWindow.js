/**
 * 设备发票查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.purchaseinvoice.view.PurchaseInvoiceViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.purchaseinvoice.viewModel.PurchaseInvoiceViewModel',
        'kalix.admin.user.store.UserStore',
        'kalix.roffice.contract.component.ContractComboBox'
    ],
    alias: 'widget.purchaseinvoiceViewWindow',
    viewModel: 'purchaseinvoiceViewModel',
    xtype: "purchaseinvoiceViewWindow",
    width: 400,
    items: [{
        xtype: 'baseForm',
        defaults: {
            readOnly: true
        },
        items: [
            {
                fieldLabel: '开发票日期',
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.invoiceDate}'
                }
            },
            {
                fieldLabel: '发票金额(元)',
                xtype: 'numberfield',
                bind: {
                    value: '{rec.money}'
                }
            }, {
                fieldLabel: '税率',
                xtype: 'numberfield',
                bind: {
                    value: '{rec.rate}'
                }
            }, {
                fieldLabel: '发票号',
                bind: {
                    value: '{rec.invoiceNo}'
                }
            },
            {
                fieldLabel: '采购编号',
                xtype: 'contractComboBox',
                bind: {
                    value: '{rec.purchaseId}'
                }
            }, {
                fieldLabel: '备注',
                xtype: 'textarea',
                bind: {
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
            }]
    }]
});