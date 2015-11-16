/**
 * 公司公告模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.roffice.note.model.NoteModel', {
    extend: 'Ext.data.Model',

    idProperty: '_id',
    //todo 在此修改模型定义
    fields: [{
        name: 'id',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'rating',
        type: 'string',
        defaultValue: '3'
    }, {
        name: 'content',
        type: 'string'
    }, {
        name: 'publishPeople',
        type: 'string'
    }, {
        name: 'publishDate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'version',
        type: 'int'
    }
    ],
    validators: {
        content: [{
            type: 'presence',
            message: '内容不能为空!'
        }],
        name: [{
            type: 'presence',
            message: '名称不能为空!'
        }],
        rating: [{
            type: 'presence',
            message: '级别不能为空!'
        }]
    },

    //需要提交给服务端的模型 key
    serverKeys: [
        'id',
        'name',
        'rating',
        'content',
        'version'
    ],

    //需要提交给服务端的 JSON 数据
    toServerJSON: function () {
        return Ext.JSON.encode(_.pick(this.getData(), this.serverKeys));
    }
});
