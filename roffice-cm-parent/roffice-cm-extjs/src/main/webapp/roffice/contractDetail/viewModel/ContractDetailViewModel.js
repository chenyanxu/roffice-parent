/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contractDetail.viewModel.ContractDetailViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contractDetailViewModel',
    data: {
        url: '/kalix/camel/rest/contractDetails',
        rec: null,
        sel: false,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/cm/resources/images/contractDetail_add.png',
        view_image_path: '/kalix/roffice/cm/resources/images/contractDetail_view.png',
        delete_image_path: '/kalix/roffice/cm/resources/images/contractDetail_delete.png',
        edit_image_path: '/kalix/roffice/cm/resources/images/contractDetail_edit.png'
    }
});