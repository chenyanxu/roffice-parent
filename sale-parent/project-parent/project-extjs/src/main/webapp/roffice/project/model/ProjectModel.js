/**
 * 项目管理模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.project.model.ProjectModel', {
    extend: 'Ext.data.Model',

    idProperty: '_id',
    fields: [{
        name: 'id',
        type: 'string'
    }, {
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
        type: 'date'
    }, {
        name: 'deployDate',
        type: 'date'
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
        type: 'int'
    }, {
        name: 'manager',
        type: 'string'
    }, {
        name: 'status',
        type: 'string'
    }, {
        name: 'version',
        type: 'int'
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
    },

    //需要提交给服务端的模型 key
    serverKeys: [
        'id',
        'no',
        'name',
        'salePerson',
        'industry',
        'level',
        'budget',
        'setupDate',
        'deployDate',
        'deployPerson',
        'client',
        'clientPhone',
        'description',
        'comment',
        'chanceId',
        'manager',
        'status',
        'version'
    ],

    //需要提交给服务端的 JSON 数据
    toServerJSON: function () {
        return Ext.JSON.encode(_.pick(this.getData(), this.serverKeys));
    }
});
