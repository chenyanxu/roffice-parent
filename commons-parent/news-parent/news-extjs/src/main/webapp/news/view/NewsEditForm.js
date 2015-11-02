/**
 * 用户编辑表单
 *
 * @author majian
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('Kalix.news.view.NewsEditForm', {
    extend: 'Ext.FormPanel',
    requires: [
        'Kalix.news.viewModel.NewsViewModel',
        'Kalix.news.controller.NewsFormController'
    ],
    alias: 'widget.newsEditForm',
    viewModel: {
        type: 'newsViewModel'
    },
    currentNews: null,
    config: {
        currentNews: null
    },

    bind: {
        currentNews: "{currentNews}",
    },
    controller: 'newsFormController',
    id: "newsEditForm",
    xtype: 'newsEditForm',
    labelAlign: 'center',
    labelWidth: 75,
    autoWidth: true,
    autoHeight: true,
    bodyStyle: "padding:15px",
    frame: true,
    jsonSubmit: true,
    method: "PUT",
    defaultType: 'textfield',
    buttonAlign: "center",

    items: [
        {xtype: 'hiddenfield', name: 'id', bind: {value: '{currentNews.id}'}},

        {
            fieldLabel: '标题',
            id: 'titleId',
            name: 'text',
            allowBlank: false,
            blankText: '标题不能为空!',
            beforeLabelTpl: [
                '<span style="color:red;font-weight:bold" data-qtip="必填选项">*</span>'
            ]
        },
        {
            fieldLabel: '内容',
            id: 'contentId',
            xtype: 'textarea',
            name: 'content',
            allowBlank: false,
            blankText: '内容不能为空!',
            beforeLabelTpl: [
                '<span style="color:red;font-weight:bold" data-qtip="必填选项">*</span>'
            ]
        },

    ],
    buttons: [
        {
            text: '保存', glyph: 0xf0c7, type: 'submit', handler: 'onUpdate',
        },
        {
            text: '重置', glyph: 0xf0e2, handler: 'onEditReset'
        }
    ]
});