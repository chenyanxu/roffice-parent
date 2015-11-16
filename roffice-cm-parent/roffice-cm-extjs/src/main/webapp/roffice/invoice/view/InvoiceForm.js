/**
 * 用户添加表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.roffice.invoice.view.InvoiceForm', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseFormController',
        'kalix.roffice.invoice.viewModel.InvoiceViewModel',
        'kalix.roffice.contract.component.ContractComboBox'
        ],
    alias: 'widget.invoiceForm',
    viewModel: 'invoiceViewModel',
    controller: {
        type: 'baseFormController',
        storeId: 'invoiceStore'
    },
    xtype: "invoiceForm",
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
    ,
    buttons: [{
        text: '保存',
        glyph: 'xf0c7@FontAwesome',
        handler: 'onSave'
    }, {
        text: '重置',
        glyph: 'xf0e2@FontAwesome',
        handler: 'onReset'
    }
    ]
    ,
    listeners: {
        close: 'onClose'
    }
});