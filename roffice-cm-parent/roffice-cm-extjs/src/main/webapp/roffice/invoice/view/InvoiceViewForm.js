/**
 * 用户添加表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.roffice.invoice.view.InvoiceViewForm', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.invoice.viewModel.InvoiceViewModel',
        'kalix.roffice.contract.component.ContractComboBox'
    ],
    alias: 'widget.invoiceViewForm',
    xtype: "invoiceViewForm",
    viewModel: 'invoiceViewModel',
    width:400,
    items: [{
        defaults: {readOnly: true},
        items: [
            {
                fieldLabel: '合同编号',
                xtype:'contractComboBox',
                allowBlank: true,
                bind: {
                    value: '{rec.contractId}'
                }
            },
            {
                fieldLabel: '发票编号',
                bind: {
                    value: '{rec.invoiceNo}'
                }
            },
            {
                fieldLabel: '发票金额',
                bind: {
                    value: '{rec.money}'
                }
            },
            {
                fieldLabel: '税率',
                bind: {
                    value: '{rec.rate}'
                }
            },
            {
                fieldLabel: '发票日期',
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.invoiceDate}'
                }
            }
        ]
    }
    ],
    buttons: [{
        text: '关闭',
        glyph: 'xf00d@FontAwesome',
        handler: function () {
            this.up('.window').close();
        }
    }
    ]
});