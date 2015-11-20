/**
 * 设备发票模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.purchaseinvoice.model.PurchaseInvoiceModel', {
    extend: 'kalix.model.BaseModel',

    fields: [{
        name: 'money',
        type: 'float'
    }, {
        name: 'rate',
        type: 'float'
    }, {
        name: 'comment',
        type: 'string'
    }, {
        name: 'invoiceNo',
        type: 'string'
    }, {
        name: 'purchaseId',
        type: 'int'
    }, {
        name: 'invoiceDate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }
    ],
    validators: {
        comment: [{
            type: 'presence',
            message: '内容不能为空!'
        }
        ],
        money: [{
            type: 'presence',
            message: '金额不能为空!'
        }],
        invoiceDate: [{
            type: 'presence',
            message: '日期不能为空!'
        }
        ]
    }
});
