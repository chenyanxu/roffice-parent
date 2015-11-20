/**
 * 项目回款模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receive.viewModel.ReceiveViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.receiveViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看项目回款',
        add_title: '添加项目回款',
        edit_title: '修改项目回款',
        add_image_path: '/kalix/roffice/receive/resources/images/receive_add.png',
        view_image_path: '/kalix/roffice/receive/resources/images/receive_view.png',
        edit_image_path: '/kalix/roffice/receive/resources/images/receive_edit.png',
    }
});