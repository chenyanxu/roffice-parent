/**
 * 公司通知查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.note.view.NoteViewForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.roffice.note.viewModel.NoteViewModel',
        'kalix.roffice.note.controller.NoteFormController'
    ],
    alias: 'widget.noteViewForm',
    viewModel: 'noteViewModel',
    controller: 'noteFormController',
    xtype: "noteViewForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    title: '查看公司通知',
    bind: {
        icon: '{view_image_path}'
    },
    items: [{
        xtype: 'form',
        defaultType: 'displayfield',
        bodyPadding: 10,
        buttonAlign: "center",
        items: [
            {
                fieldLabel: '星级',
                labelAlign: 'right',
                disabled: true,
                xtype: 'fieldcontainer',
                items: [{
                    xtype: 'rating',
                    scale: '150%',
                    bind: '{rec.rating}'
                }]
            },
            {
                fieldLabel: '标题',
                labelAlign: 'right',
                bind: {
                    value: '{rec.name}'
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
                format: 'Y-m-d',
                bind: {
                    value: '{rec.publishDate}'
                },
                renderer: function (value) {
                    var createDate = new Date(value);
                    return createDate.format("yyyy-MM-dd hh:mm:ss");
                }
            }],
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