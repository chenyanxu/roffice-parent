/**
 * 项目回款模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.receive.model.ReceiveModel', {
    extend: 'Ext.data.Model',

    idProperty: '_id',

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
        receiveDate: [{
            type: 'presence',
            message: '内容不能为空!'
        }
        ],
    },

    //需要提交给服务端的模型 key
    serverKeys: [
        'id',
        'money',
        'receiveDate',
        'contractId',
        'beginDate',
        'endDate',
        'comment',
        'version'
    ],

    //需要提交给服务端的 JSON 数据
    toServerJSON: function () {
        return Ext.JSON.encode(_.pick(this.getData(), this.serverKeys));
    }
});
