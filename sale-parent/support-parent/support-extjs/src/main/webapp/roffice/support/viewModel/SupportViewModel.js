/**
 * 项目支持模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.viewModel.SupportViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.supportViewModel',
    requires: [
        'kalix.roffice.support.model.SupportModel'
    ],
    data: {
        url: '/kalix/camel/rest/supports',
        rec: Ext.create('kalix.roffice.support.model.SupportModel'),
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/support/resources/images/support_add.png',
        view_image_path: '/kalix/roffice/support/resources/images/support_view.png',
        delete_image_path: '/kalix/roffice/support/resources/images/support_delete.png',
        edit_image_path: '/kalix/roffice/support/resources/images/support_edit.png',
    }
});