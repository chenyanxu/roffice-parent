/**
 * 实施项目模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.deploy.viewModel.DeployViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.deployViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看实施项目',
        add_title: '添加实施项目',
        edit_title: '修改实施项目',
        add_image_path: CONFIG.restRoot+'/roffice/deploy/resources/images/deploy_add.png',
        view_image_path: CONFIG.restRoot+'/roffice/deploy/resources/images/deploy_view.png',
        edit_image_path: CONFIG.restRoot+'/roffice/deploy/resources/images/deploy_edit.png',
    }
});