/**
 * 项目机会新增和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.chance.view.ChanceForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.view.components.common.FormPanel',
        'kalix.roffice.chance.viewModel.ChanceViewModel',
        'kalix.roffice.chance.controller.ChanceFormController'
    ],
    alias: 'widget.ChanceForm',
    viewModel: 'chanceViewModel',
    controller: 'chanceFormController',
    xtype: "chanceForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    bind: {
        icon: '{icon}',
        title: '{title}'
    },
    //todo 在此修改表单
    items: [{
        xtype: 'baseForm',
        items: [{
            fieldLabel: '标题',
            labelAlign: 'right',
            allowBlank: false,
            bind: {
                activeError: '{validation.title}',
                value: '{rec.title}'
            }
        }, {
            fieldLabel: '内容',
            labelAlign: 'right',
            allowBlank: false,
            xtype: 'textarea',
            bind: {
                activeError: '{validation.content}',
                value: '{rec.content}'
            }
        },
        ],
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