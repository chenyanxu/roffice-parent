/**
 * 设备发票模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.purchaseinvoice.viewModel.PurchaseInvoiceViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.purchaseinvoiceViewModel',
    requires: [
        'kalix.roffice.purchaseinvoice.model.PurchaseInvoiceModel'
    ],
    data: {
        url: '/kalix/camel/rest/purchaseinvoices',
        rec: Ext.create('kalix.roffice.purchaseinvoice.model.PurchaseInvoiceModel'),
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/purchaseinvoice/resources/images/purchaseinvoice_add.png',
        view_image_path: '/kalix/roffice/purchaseinvoice/resources/images/purchaseinvoice_view.png',
        delete_image_path: '/kalix/roffice/purchaseinvoice/resources/images/purchaseinvoice_delete.png',
        edit_image_path: '/kalix/roffice/purchaseinvoice/resources/images/purchaseinvoice_edit.png',
    }
});