/**
 * 项目回款查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receive.view.ReceiveSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.receiveSearchForm',
    xtype: 'receiveSearchForm',
    storeId: 'receiveStore',
    items: [
        {
            xtype: 'datefield',
            fieldLabel: '回款开始日期',
            labelAlign: 'right',
            labelWidth: 100,
            width: 250,
            name: 'beginDate'
        },
        {
            xtype: 'datefield',
            fieldLabel: '回款结束日期',
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
