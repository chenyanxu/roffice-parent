/**
 * Created by lenovo on 2015/11/2.
 */

Ext.define('kalix.roffice.news.view.NewsSearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'kalix.roffice.news.controller.NewsSearchFormController'
    ],
    alias: 'widget.newsSearchForm',
    xtype: 'newsSearchForm',
    controller: 'newsSearchFormController',
    bodyPadding: 10,
    layout: 'column',
    margin: 10,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '标题',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'title'
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
