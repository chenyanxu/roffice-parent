/**
 * 公司公告新增和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.note.view.NoteForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.view.components.common.FormPanel',
        'kalix.roffice.note.viewModel.NoteViewModel',
        'kalix.roffice.note.controller.NoteFormController',
        'Ext.ux.rating.Picker'
    ],
    alias: 'widget.NoteForm',
    viewModel: 'noteViewModel',
    controller: 'noteFormController',
    xtype: "noteForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    bind: {
        icon: '{icon}',
        title: '{title}'
    },
    items: [{
        xtype: 'baseForm',
        items: [{
            fieldLabel: '标题',
            labelAlign: 'right',
            allowBlank: false,
            bind: {
                activeError: '{validation.name}',
                value: '{rec.name}'
            }
        }, {
            fieldLabel: '星级',
            labelAlign: 'right',
            xtype: 'fieldcontainer',
            allowBlank: false,
            bind: {
                activeError: '{validation.rating}',
                //value: '{rec.rating}'
            },
            items: [{
                xtype: 'rating',
                scale: '150%',
                bind: '{rec.rating}'
            }]
        }, {
            fieldLabel: '内容',
            labelAlign: 'right',
            allowBlank: false,
            xtype: 'textarea',
            bind: {
                activeError: '{validation.content}',
                value: '{rec.content}'
            }
        }],
        buttons: [{
            text: '保存',
            glyph: 'xf0c7@FontAwesome',
            handler: 'onSave'
        }, {
            text: '重置',
            glyph: 'xf0e2@FontAwesome',
            handler: 'onReset'
        }
        ]
    }
    ]
});