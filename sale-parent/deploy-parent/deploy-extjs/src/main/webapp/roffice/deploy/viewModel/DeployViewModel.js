/**
 * 实施项目模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.deploy.viewModel.DeployViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.deployViewModel',
    requires: [
        'kalix.roffice.deploy.model.DeployModel'
    ],
    data: {
        url: '/kalix/camel/rest/deploys',
        rec: Ext.create('kalix.roffice.deploy.model.DeployModel'),
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/deploy/resources/images/deploy_add.png',
        view_image_path: '/kalix/roffice/deploy/resources/images/deploy_view.png',
        delete_image_path: '/kalix/roffice/deploy/resources/images/deploy_delete.png',
        edit_image_path: '/kalix/roffice/deploy/resources/images/deploy_edit.png',
    }
});