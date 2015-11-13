/**
 * 设备发票模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.purchaseinvoice.model.PurchaseInvoiceModel', {
    extend: 'Ext.data.Model',

    idProperty: '_id',
    fields: [{
        name: 'id',
        type: 'string'
    }, {
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
        type: 'date'
    }, {
        name: 'beginDate',
        type: 'date'
    }, {
        name: 'endDate',
        type: 'date'
    }, {
        name: 'updateBy',
        type: 'string'
    }, {
        name: 'updateDate',
        type: 'int'
    }, {
        name: 'version',
        type: 'int'
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
        ],
    },

    //需要提交给服务端的模型 key
    serverKeys: [
        'id',
        'money',
        'invoiceDate',
        'purchaseId',
        //'beginDate',
        //'endDate',
        'rate',
        'invoiceNo',
        'comment',
        'version'
    ],

    //需要提交给服务端的 JSON 数据
    toServerJSON: function () {
        return Ext.JSON.encode(_.pick(this.getData(), this.serverKeys));
    }
});
