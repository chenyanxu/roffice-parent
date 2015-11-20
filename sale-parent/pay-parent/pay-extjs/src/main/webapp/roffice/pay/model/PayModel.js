/**
 * 采购付款模型
 *
 * @author sunlf
 * @version 1.0.0
 */


Ext.define('kalix.roffice.pay.model.PayModel', {
    extend: 'kalix.model.BaseModel',

    fields: [{
        name: 'money',
        type: 'float'
    }, {
        name: 'comment',
        type: 'string'
    }, {
        name: 'purchaseId',
        type: 'int'
    }, {
        name: 'receiveDate',
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
        receiveDate: [{
            type: 'presence',
            message: '日期不能为空!'
        }]
    }
});
