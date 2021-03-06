/**
 * 实施项目模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.deploy.model.DeployModel', {
    extend: 'kalix.model.BaseModel',

    fields: [{
        name: 'no',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'status',
        type: 'string'
    }, {
        name: 'deployPerson',
        type: 'string'
    }, {
        name: 'budget',
        type: 'float'
    }, {
        name: 'receiveInfo',
        type: 'string'
    }, {
        name: 'salePerson',
        type: 'string'
    }, {
        name: 'member',
        type: 'string'
    }, {
        name: 'plan',
        type: 'string'
    }, {
        name: 'finishInfo',
        type: 'string'
    }, {
        name: 'problem',
        type: 'string'
    }, {
        name: 'measure',
        type: 'string'
    }, {
        name: 'projectId',
        type: 'int',
    }, {
        name: 'comment',
        type: 'string',
    }],
    validators: {
        no: [{
            type: 'presence',
            message: '编号不能为空!'
        }],
        name: [{
            type: 'presence',
            message: '名称不能为空!'
        }]
    }
});
