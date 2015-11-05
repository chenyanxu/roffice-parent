/**
 * 项目支持模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.support.model.SupportModel', {
    extend: 'Ext.data.Model',

    idProperty: '_id',
    fields: [{
        name: 'id',
        type: 'string'
    }, {
        name: 'name',//项目名称
        type: 'string'
    }, {
        name: 'saler',//营销负责人
        type: 'string'
    }, {
        name: 'type',//项目类型（数据字典）
        type: 'string'
    }, {
        name: 'industry',//所属行业（数据字典）
        type: 'string'
    }, {
        name: 'level',//优先级
        type: 'string'
    }, {
        name: 'budget',//预算额度
        type: 'string'
    }, {
        name: 'billDate',//预计交付时间
        type: 'date'
        //format: 'Y-m-d'
    }, {
        name: 'startDate',//预计开始时间
        type: 'date'
        //format: 'Y-m-d'
    }, {
        name: 'supporter',//售前支持负责人
        type: 'string'
    }, {
        name: 'supportPerson',//售前支持人员
        type: 'string'
    }, {
        name: 'subSystem',//包含子系统
        type: 'string'
    }, {
        name: 'comment',//备注
        type: 'string'
    }, {
        name: 'version',
        type: 'string'
    }
    ],

    validators: {
        name: [{
            type: 'length',
            max: '20',
            min: '4',
            bothMessage: '长度不能小于4个字符，不能超过20个字符！'
        }],
        saler: [{
            type: 'presence',
            message: '内容不能为空!'
        }
        ],
    },

    //需要提交给服务端的模型 key
    serverKeys: [
        'id',
        'name',
        'saler',
        'type',
        'industry',
        'level',
        'budget',
        'billDate',
        'startDate',
        'supporter',
        'supportPerson',
        'subSystem',
        'comment',
        'version'
    ],

    //需要提交给服务端的 JSON 数据
    toServerJSON: function () {
        Ext.JSON.encodeDate = function (d) {
            return Ext.Date.format(d, '"Y-m-d h:i:s"');
        };
        return Ext.JSON.encode(_.pick(this.getData(), this.serverKeys));
    }
});
