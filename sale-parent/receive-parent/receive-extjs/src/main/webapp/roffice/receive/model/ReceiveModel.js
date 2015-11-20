/**
 * 项目回款模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.receive.model.ReceiveModel', {
    extend: 'kalix.model.BaseModel',

    fields: [{
        name: 'id',
        type: 'string'
    }, {
        name: 'money',
        type: 'float'
    }, {
        name: 'comment',
        type: 'string'
    }, {
        name: 'contractId',
        type: 'int'
    }, {
        name: 'receiveDate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'beginDate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'endDate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }],
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
        }
        ],
    },

    //需要提交给服务端的模型 key
    serverKeys: [
        'id',
        'money',
        'receiveDate',
        'contractId',
        //'beginDate',
        //'endDate',
        'comment',
        'version'
    ],

    //需要提交给服务端的 JSON 数据
    toServerJSON: function () {
        return Ext.JSON.encode(_.pick(this.getData(), this.serverKeys));
    }
});
