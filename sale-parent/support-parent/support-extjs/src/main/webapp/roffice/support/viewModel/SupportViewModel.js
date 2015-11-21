/**
 * 项目支持模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.viewModel.SupportViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.supportViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation:false,
        view_title:'查看项目支持',
        add_title:'添加项目支持',
        edit_title:'修改项目支持',
        add_image_path: '/kalix/roffice/support/resources/images/support_add.png',
        view_image_path: '/kalix/roffice/support/resources/images/support_view.png',
        delete_image_path: '/kalix/roffice/support/resources/images/support_delete.png',
        edit_image_path: '/kalix/roffice/support/resources/images/support_edit.png',
    }
});