/**
 * 项目机会模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.chance.model.ChanceModel', {
    extend: 'kalix.model.BaseModel',
    fields: [
        {
            name: 'name',//项目名称
            type: 'string'
        }, {
            name: 'salerId',//营销负责人
            type: 'string'
        }, {
            name: 'type',//项目类型（数据字典）
            type: 'string'
        }, {
            name: 'industry',//所属行业（数据字典）
            type: 'string'
        }, {
            name: 'level',//优先级
            type: 'string',
            defaultValue: '中'
        }, {
            name: 'budget',//预算额度
            type: 'string'
        }, {
            name: 'billDate',//预计签单时间
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'supporterId',//售前支持负责人
            type: 'string'
        }, {
            name: 'clientName',//客户联系人姓名
            type: 'string'
        }, {
            name: 'clientPhone',//客户联系人电话
            type: 'string'
        }, {
            name: 'description',//项目机会描述
            type: 'string'
        }, {
            name: 'comment',//备注
            type: 'string'
        }
    ],
    validators: {
        name: [
            {
                type: 'presence',
                message: '项目名称不能为空!'
            }
        ],
        salerId: [{
            type: 'presence',
            message: '营销负责人不能为空!'
        }
        ],
    }
});
