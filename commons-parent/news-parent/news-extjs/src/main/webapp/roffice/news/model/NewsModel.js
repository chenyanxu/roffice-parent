/**
 * 用户模型
 *
 * @author majian <br/>
 *         date:2015-7-3
 * @version 1.0.0
 */


Ext.define('kalix.roffice.news.model.NewsModel', {
    extend: 'Ext.data.Model',
    constructor: function () {
        this.callParent(arguments);

        if (arguments.length == 0) {
            this.set('id', '0');
        }
    },
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/newses',
        paramsAsJson: true,
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        reader: {
            type: 'json'
        }
    },
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
        type: 'date',
        dateFormat: 'Y-m-d'
    }, {
        name: 'version',
        type: 'int'
    }
    ],

    validators: {
        title: [
            {
                type: 'length',
                max: '20',
                min: '4',
                bothMessage: '长度不能小于4个字符，不能超过20个字符！'
            }
        ],
        content: [{
            type: 'presence',
            message: '内容不能为空!'
        }
        ],
    }
});
