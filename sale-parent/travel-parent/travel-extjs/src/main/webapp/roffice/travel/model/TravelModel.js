/**
 * 出差记录模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.travel.model.TravelModel', {
    extend: 'Ext.data.Model',

    idProperty: '_id',
    fields: [{
        name: 'id',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'person',
        type: 'string'
    }, {
        name: 'target',
        type: 'string'
    }, {
        name: 'startDate',
        type: 'date'
    }, {
        name: 'endDate',
        type: 'date'
    }, {
        name: 'resultPerson',
        type: 'string'
    }, {
        name: 'result',
        type: 'string'
    }, {
        name: 'comment',
        type: 'string'
    }],
    validators: {
        name: [
            {
                type: 'length',
                max: '20',
                min: '4',
                bothMessage: '长度不能小于4个字符，不能超过20个字符！'
            }
        ],
        person: [{
            type: 'presence',
            message: '出差人员不能为空!'
        }
        ],
    },

    //需要提交给服务端的模型 key
    serverKeys: [
        'id',
        'name',
        'person',
        'target',
        'startDate',
        'endDate',
        'resultPerson',
        'result',
        'comment',
        'version'
    ],

    //需要提交给服务端的 JSON 数据
    toServerJSON: function () {
        return Ext.JSON.encode(_.pick(this.getData(), this.serverKeys));
    }
});
