/**
 * 项目管理模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.project.viewModel.ProjectViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.projectViewModel',
    requires: [
        'kalix.roffice.project.model.ProjectModel'
    ],
    data: {
        url: '/kalix/camel/rest/projects',
        rec: Ext.create('kalix.roffice.project.model.ProjectModel'),
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/project/resources/images/project_add.png',
        view_image_path: '/kalix/roffice/project/resources/images/project_view.png',
        delete_image_path: '/kalix/roffice/project/resources/images/project_delete.png',
        edit_image_path: '/kalix/roffice/project/resources/images/project_edit.png',
    }
});