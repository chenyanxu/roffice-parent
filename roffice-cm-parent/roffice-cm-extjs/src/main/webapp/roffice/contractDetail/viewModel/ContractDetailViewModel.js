/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contractDetail.viewModel.ContractDetailViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contractDetailViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation:false,
        view_title:'查看清单',
        add_title:'添加清单',
        edit_title:'修改清单',
        add_image_path: '/kalix/roffice/cm/resources/images/contractDetail_add.png',
        view_image_path: '/kalix/roffice/cm/resources/images/contractDetail_view.png',
        delete_image_path: '/kalix/roffice/cm/resources/images/contractDetail_delete.png',
        edit_image_path: '/kalix/roffice/cm/resources/images/contractDetail_edit.png'
    }
});