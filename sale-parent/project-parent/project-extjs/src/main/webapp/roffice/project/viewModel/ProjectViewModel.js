/**
 * 项目管理模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.project.viewModel.ProjectViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.projectViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看项目管理',
        add_title: '添加项目管理',
        edit_title: '修改项目管理',
        add_image_path: '/kalix/roffice/project/resources/images/project_add.png',
        view_image_path: '/kalix/roffice/project/resources/images/project_view.png',
        edit_image_path: '/kalix/roffice/project/resources/images/project_edit.png',
    }
});