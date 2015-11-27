/**
 * 任务目标模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.task.viewModel.TaskViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.taskViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看任务目标',
        add_title: '添加任务目标',
        edit_title: '修改任务目标',
        add_image_path: '/kalix/roffice/task/resources/images/task_add.png',
        view_image_path: '/kalix/roffice/task/resources/images/task_view.png',
        edit_image_path: '/kalix/roffice/task/resources/images/task_edit.png',
    }
});