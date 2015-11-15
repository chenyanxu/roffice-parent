/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.invoice.viewModel.InvoiceViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.invoiceViewModel',
    data: {
        url: '/kalix/camel/rest/invoices',
        rec: null,
        sel: false,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/cm/resources/images/invoice_add.png',
        view_image_path: '/kalix/roffice/cm/resources/images/invoice_view.png',
        delete_image_path: '/kalix/roffice/cm/resources/images/invoice_delete.png',
        edit_image_path: '/kalix/roffice/cm/resources/images/invoice_edit.png'
    }
});