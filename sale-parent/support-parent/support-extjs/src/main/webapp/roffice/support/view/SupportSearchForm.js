/**
 * 项目支持查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.view.SupportSearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'kalix.roffice.support.controller.SupportSearchFormController'
    ],
    alias: 'widget.supportSearchForm',
    xtype: 'supportSearchForm',
    controller: 'supportSearchFormController',
    bodyPadding: 10,
    layout: 'column',
    margin: 10,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '项目名称',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'name'
        },
        {
            xtype: 'button',
            text: '查询',
            margin: '0 0 0 10',
            handler: 'onSearch',
            glyph: 'xf002@FontAwesome',
        },
        {
            xtype: 'button',
            text: '重置',
            margin: '0 0 0 10',
            glyph: 'xf0e2@FontAwesome',
            listeners: {
                click: function () {
                    this.up('form').getForm().reset();
                }
            }
        }
    ]
});
