/**
 * 采购付款模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.pay.viewModel.PayViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.payViewModel',
    requires: [
        'kalix.roffice.pay.model.PayModel'
    ],
    data: {
        url: '/kalix/camel/rest/pays',
        rec: Ext.create('kalix.roffice.pay.model.PayModel'),
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/pay/resources/images/pay_add.png',
        view_image_path: '/kalix/roffice/pay/resources/images/pay_view.png',
        delete_image_path: '/kalix/roffice/pay/resources/images/pay_delete.png',
        edit_image_path: '/kalix/roffice/pay/resources/images/pay_edit.png',
    }
});