/**
 * 用户新增表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.roffice.news.view.NewsViewForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.roffice.news.view.NewsViewModel',
        'kalix.roffice.news.controller.NewsFormController'
    ],
    alias: 'widget.newsViewForm',
    viewModel: 'newsViewModel',
    controller: 'newsFormController',
    xtype: "newsViewForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    title: '查看新闻',
    bind: {
        icon: '{view_image_path}'
    },
    items: [{
        xtype: 'form',
        defaultType: 'displayfield',
        bodyPadding: 10,
        buttonAlign: "center",
        items: [{
            fieldLabel: '标题',
            labelAlign: 'right',
            bind: {
                value: '{rec.title}'
            }
        }, {
            fieldLabel: '内容',
            labelAlign: 'right',
            bind: {
                value: '{rec.content}'
            }
        }, {
            fieldLabel: '发布人',
            labelAlign: 'right',
            bind: {
                value: '{rec.publishPeople}'
            }
        }, {
            fieldLabel: '发布时间',
            labelAlign: 'right',
            bind: {
                value: '{rec.publishDate}'
            },
            renderer: function (value) {
                var createDate = new Date(value);
                return createDate.format("yyyy-MM-dd hh:mm:ss");
            }
        },
        ],
        buttons: [{
            text: '关闭',
            glyph: 'xf00d@FontAwesome',
            handler: function () {
                this.up('.window').close();
            }
        }
        ]
    }
    ]
});