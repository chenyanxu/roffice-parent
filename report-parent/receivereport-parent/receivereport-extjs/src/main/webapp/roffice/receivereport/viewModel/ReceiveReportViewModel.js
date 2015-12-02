/**
 * 合同回款情况模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.receivereport.viewModel.ReceiveReportViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.receivereportViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看合同回款情况',
        add_title: '添加合同回款情况',
        edit_title: '修改合同回款情况',
        add_image_path: '/kalix/roffice/receivereport/resources/images/receivereport_add.png',
        view_image_path: '/kalix/roffice/receivereport/resources/images/receivereport_view.png',
        edit_image_path: '/kalix/roffice/receivereport/resources/images/receivereport_edit.png',
    }
});