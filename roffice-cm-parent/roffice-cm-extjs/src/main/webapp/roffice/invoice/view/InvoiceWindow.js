/**
 * @author chenyanxu
 */

Ext.define('kalix.roffice.invoice.view.InvoiceWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseWindowController',
        'kalix.roffice.invoice.viewModel.InvoiceViewModel',
        'kalix.roffice.contract.component.ContractComboBox'
        ],
    alias: 'widget.invoiceWindow',
    xtype: "invoiceWindow",
    viewModel: 'invoiceViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'invoiceStore'
    },
    width:400,
    items: [{
        items: [
            {
                fieldLabel: '合同编号',
                xtype:'contractComboBox',
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
                editable: false,
                format: 'Y-m-d',
                bind: {
                    value: '{rec.invoiceDate}'
                }
            }
        ]
    }
    ]
});