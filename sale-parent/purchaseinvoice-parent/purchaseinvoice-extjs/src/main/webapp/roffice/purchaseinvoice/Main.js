/**
 * 设备发票首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.purchaseinvoice.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.purchaseinvoice.store.PurchaseInvoiceStore',  //用户模型集合
        'kalix.roffice.purchaseinvoice.view.PurchaseInvoiceGrid',
        'kalix.roffice.purchaseinvoice.view.PurchaseInvoiceSearchForm'
    ],
    items: [
        {
            title: '设备发票查询',
            iconCls: 'x-fa fa-search',
            xtype: 'purchaseinvoiceSearchForm'
        }, {
            xtype: 'purchaseinvoiceGridPanel',
            id: 'purchaseinvoiceGridPanel',
            title: '设备发票列表',
            iconCls: 'x-fa fa-copy',
            margin: 10,
            store: {
                type: 'purchaseinvoiceStore'
            }
        }
    ]
});
