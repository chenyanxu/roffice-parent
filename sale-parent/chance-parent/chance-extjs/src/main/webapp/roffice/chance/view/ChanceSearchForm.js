/**
 * 项目机会查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.chance.view.ChanceSearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'kalix.roffice.chance.controller.ChanceSearchFormController'
    ],
    alias: 'widget.chanceSearchForm',
    xtype: 'chanceSearchForm',
    controller: 'chanceSearchFormController',
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
        }
    ]
});
