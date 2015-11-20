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
            title: '发票记录查询',
            xtype: 'invoiceSearchForm'
        },
        {
            xtype: 'invoiceGrid',
            title: '发票列表',
            margin: 10
        }
    ]
});
