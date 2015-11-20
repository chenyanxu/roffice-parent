/**
 * 出差记录模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.travel.model.TravelModel', {
    extend: "kalix.model.BaseModel",

    fields: [{
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
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'endDate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
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
        }]
    }
});
