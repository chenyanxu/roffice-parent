/**
 * 用户模型
 *
 * @author majian <br/>
 *         date:2015-7-3
 * @version 1.0.0
 */


Ext.define('kalix.roffice.news.model.NewsModel', {
    extend: 'Ext.data.Model',

    idProperty: '_id',

    fields: [{
        name: 'id',
        type: 'string'
    }, {
        name: 'title',
        type: 'string'
    }, {
        name: 'content',
        type: 'string'
    }, {
        name: 'publishPeople',
        type: 'string'
    }, {
        name: 'publishDate',
        type: 'int'
    }, {
        name: 'version',
        type: 'int'
    }
    ],

    validators: {
        title: [{
            type: 'presence',
            message: '标题不能为空!'
        }
        ],
        content: [{
            type: 'presence',
            message: '内容不能为空!'
        }
        ],
    },

    //需要提交给服务端的模型 key
    serverKeys: [
        'id',
        'title',
        'content',
        'version'
    ],

    //需要提交给服务端的 JSON 数据
    toServerJSON: function () {
        return Ext.JSON.encode(_.pick(this.getData(), this.serverKeys));
    }
});
