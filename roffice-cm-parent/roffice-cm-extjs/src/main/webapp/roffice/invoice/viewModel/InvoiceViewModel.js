/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.invoice.viewModel.InvoiceViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.invoiceViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_title:'查看发票',
        add_title:'添加发票',
        edit_title:'修改发票',
        view_operation:false,
        add_image_path: CONFIG.restRoot+'/roffice/cm/resources/images/invoice_add.png',
        view_image_path: CONFIG.restRoot+'/roffice/cm/resources/images/invoice_view.png',
        edit_image_path: CONFIG.restRoot+'/roffice/cm/resources/images/invoice_edit.png'
    }
});