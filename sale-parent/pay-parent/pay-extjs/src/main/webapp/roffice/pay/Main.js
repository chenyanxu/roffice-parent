/**
 * 采购付款首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.pay.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.pay.store.PayStore',  //用户模型集合
        'kalix.roffice.pay.view.PayGrid',
        'kalix.roffice.pay.view.PaySearchForm'
    ],
    items: [
        {
            title: '采购付款查询',
            iconCls: 'x-fa fa-search',
            xtype: 'paySearchForm'
        }, {
            xtype: 'payGridPanel',
            id: 'payGridPanel',
            title: '采购付款列表',
            iconCls: 'x-fa fa-cc-visa',
            margin: 10,
            store: {
                type: 'payStore'
            }
        }
    ]
});
