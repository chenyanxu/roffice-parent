/**
 * 采购付款模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.pay.viewModel.PayViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.payViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看采购付款',
        add_title: '添加采购付款',
        edit_title: '修改采购付款',
        add_image_path: '/kalix/roffice/pay/resources/images/pay_add.png',
        view_image_path: '/kalix/roffice/pay/resources/images/pay_view.png',
        edit_image_path: '/kalix/roffice/pay/resources/images/pay_edit.png',
    }
});