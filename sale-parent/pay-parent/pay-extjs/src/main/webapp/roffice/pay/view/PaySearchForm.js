/**
 * 采购付款查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.pay.view.PaySearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'kalix.roffice.pay.controller.PaySearchFormController'
    ],
    alias: 'widget.paySearchForm',
    xtype: 'paySearchForm',
    controller: 'paySearchFormController',
    bodyPadding: 10,
    layout: 'column',
    margin: 10,
    items: [
        {
            xtype: 'datefield',
            fieldLabel: '付款开始日期',
            labelAlign: 'right',
            labelWidth: 100,
            width: 250,
            name: 'beginDate'
        },
        {
            xtype: 'datefield',
            fieldLabel: '付款结束日期',
            labelAlign: 'right',
            labelWidth: 100,
            width: 250,
            name: 'endDate'
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
        }]
});