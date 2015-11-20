/**
 * 设备发票首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.purchaseinvoice.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.roffice.purchaseinvoice.view.PurchaseInvoiceGrid',
        'kalix.roffice.purchaseinvoice.view.PurchaseInvoiceSearchForm',
        'kalix.roffice.purchaseinvoice.viewModel.PurchaseInvoiceViewModel'
    ],
    storeId: 'purchaseinvoiceStore',
    viewModel: 'purchaseinvoiceViewModel',
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
