/**
 * 设备发票模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.purchaseinvoice.viewModel.PurchaseInvoiceViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.purchaseinvoiceViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看设备发票',
        add_title: '添加设备发票',
        edit_title: '修改设备发票',
        add_image_path: CONFIG.restRoot+'/roffice/purchaseinvoice/resources/images/purchaseinvoice_add.png',
        view_image_path: CONFIG.restRoot+'/roffice/purchaseinvoice/resources/images/purchaseinvoice_view.png',
        edit_image_path: CONFIG.restRoot+'/roffice/purchaseinvoice/resources/images/purchaseinvoice_edit.png',
    }
});