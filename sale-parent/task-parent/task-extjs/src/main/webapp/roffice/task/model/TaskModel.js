/**
 * 任务目标模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.task.model.TaskModel', {
    extend: 'kalix.model.BaseModel',

    fields: [{
        name: 'taskType',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    },{
        name: 'contactNo',
        type: 'float'
    }, {
        name: 'targetNo',
        type: 'float'
    },{
        name: 'finishContactNo',
        type: 'float'
    }, {
        name: 'finishTargetNo',
        type: 'float'
    },
        {
            name: 'contactPercent',
            type: 'float'
        },{
            name: 'targetPercent',
            type: 'float'
        },{
        name: 'year',
        type: 'string'
    }
    ],
    validators: {
        name: [{
            type: 'presence',
            message: '名称不能为空!'
        }]
    }
});
