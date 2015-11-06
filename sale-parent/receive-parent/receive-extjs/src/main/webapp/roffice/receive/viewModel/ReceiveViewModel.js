/**
 * 项目回款模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receive.viewModel.ReceiveViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.receiveViewModel',
    requires: [
        'kalix.roffice.receive.model.ReceiveModel'
    ],
    data: {
        url: '/kalix/camel/rest/receives',
        rec: Ext.create('kalix.roffice.receive.model.ReceiveModel'),
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/receive/resources/images/receive_add.png',
        view_image_path: '/kalix/roffice/receive/resources/images/receive_view.png',
        delete_image_path: '/kalix/roffice/receive/resources/images/receive_delete.png',
        edit_image_path: '/kalix/roffice/receive/resources/images/receive_edit.png',
    }
});