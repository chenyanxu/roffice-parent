/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.invoice.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.roffice.invoice.view.InvoiceGrid',
        'kalix.roffice.invoice.view.InvoiceSearchForm',
        'kalix.roffice.invoice.viewModel.InvoiceViewModel'
    ],
    storeId:'invoiceStore',
    viewModel: 'invoiceViewModel',
    items: [
        {
            title: '合同发票查询',
            xtype: 'invoiceSearchForm',
            iconCls: 'x-fa fa-search'
        },
        {
            xtype: 'invoiceGrid',
            title: '合同发票列表',
            iconCls: 'x-fa fa-credit-card',
            margin: 10
        }
    ]
});
