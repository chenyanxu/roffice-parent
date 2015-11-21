/**
 * 项目管理模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.project.model.ProjectModel', {
    extend: 'kalix.model.BaseModel',

    fields: [{
        name: 'no',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'salePerson',
        type: 'string'
    }, {
        name: 'industry',
        type: 'string'
    }, {
        name: 'level',
        type: 'string'
    }, {
        name: 'budget',
        type: 'float'
    }, {
        name: 'setupDate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'deployDate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'deployPerson',
        type: 'string'
    }, {
        name: 'client',
        type: 'string'
    }, {
        name: 'clientPhone',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'comment',
        type: 'string'
    }, {
        name: 'chanceId',
        type: 'int',
    }, {
        name: 'chanceName'
    }, {
        name: 'manager',
        type: 'string'
    }, {
        name: 'status',
        type: 'string'
    }],
    validators: {
        no: [{
            type: 'presence',
            message: '编号不能为空!'
        }],
        name: [{
            type: 'presence',
            message: '名称不能为空!'
        }],
        manager: [{
            type: 'presence',
            message: '项目经理不能为空!'
        }]
    }
});
