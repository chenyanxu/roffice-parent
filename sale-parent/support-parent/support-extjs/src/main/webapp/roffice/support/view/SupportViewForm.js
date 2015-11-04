/**
 * 项目支持查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.support.view.SupportViewForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.roffice.support.viewModel.SupportViewModel',
        'kalix.roffice.support.controller.SupportFormController'
    ],
    alias: 'widget.supportViewForm',
    viewModel: 'supportViewModel',
    controller: 'supportFormController',
    xtype: "supportViewForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    title: '查看项目支持',
    bind: {
        icon: '{view_image_path}'
    },
    //todo 在此修改查看字段
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