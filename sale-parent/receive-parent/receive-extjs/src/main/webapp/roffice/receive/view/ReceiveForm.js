/**
 * 项目回款新增和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.receive.view.ReceiveForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.view.components.common.FormPanel',
        'kalix.roffice.receive.viewModel.ReceiveViewModel',
        'kalix.roffice.receive.controller.ReceiveFormController'
    ],
    alias: 'widget.ReceiveForm',
    viewModel: 'receiveViewModel',
    controller: 'receiveFormController',
    xtype: "receiveForm",

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
            fieldLabel: '名称',
            labelAlign: 'right',
            allowBlank: false,
            bind: {
                activeError: '{validation.name}',
                value: '{rec.name}'
            }
        },
            {
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
            }, {
                fieldLabel: '发布时间',
                labelAlign: 'right',
                allowBlank: false,
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.publishDate}'
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