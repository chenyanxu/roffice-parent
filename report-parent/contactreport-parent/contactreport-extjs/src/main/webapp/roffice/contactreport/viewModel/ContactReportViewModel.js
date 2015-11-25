/**
 * 合同报表模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.contactreport.viewModel.ContactReportViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contactreportViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看合同报表',
        add_title: '添加合同报表',
        edit_title: '修改合同报表',
        add_image_path: '/kalix/roffice/contactreport/resources/images/contactreport_add.png',
        view_image_path: '/kalix/roffice/contactreport/resources/images/contactreport_view.png',
        edit_image_path: '/kalix/roffice/contactreport/resources/images/contactreport_edit.png',
    }
});