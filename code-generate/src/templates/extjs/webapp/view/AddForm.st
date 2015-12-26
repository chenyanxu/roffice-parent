/**
 * 用户添加表单
 *
 * @author majian
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.<pomName>.view.<beanName>AddForm', {
    extend: 'Ext.FormPanel',
    requires: [
        'kalix.<pomName>.viewModel.<beanName>ViewModel',
        'kalix.<pomName>.controller.<beanName>FormController'
    ],
    alias: 'widget.<pomName>AddForm',
    viewModel: {
        type: '<pomName>ViewModel'
    },

    controller: '<pomName>FormController',
    itemId: "<pomName>AddForm",
    xtype: "<pomName>AddForm",
    labelAlign: 'center',
    labelWidth: 75,
    autoWidth: true,
    autoHeight: true,
    jsonSubmit: true,
    bodyStyle: "padding:15px",
    frame: true,
    buttonAlign: "center",
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: '标题',
            id: 'titleId',
            name: 'text',
            allowBlank: false,
            blankText: '标题不能为空!',
            beforeLabelTpl: [
                '\<span style="color:red;font-weight:bold" data-qtip="必填选项">*\</span>'
            ]
        },
        {
            fieldLabel: '内容',
            id: 'contentId',
            name: 'comment',
            xtype: 'textarea',
            allowBlank: false,
            blankText: '内容不能为空!',
            beforeLabelTpl: [
                '\<span style="color:red;font-weight:bold" data-qtip="必填选项">*\</span>'
            ]
        },

    ],
    buttons: [
        {
            text: '保存', glyph: 0xf0c7, type: 'submit', handler: 'onSave',
        },
        {
            text: '重置', glyph: 0xf0e2, handler: 'onAddReset'
        }
    ]
});