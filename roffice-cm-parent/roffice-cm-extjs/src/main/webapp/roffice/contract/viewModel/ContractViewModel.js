/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.viewModel.ContractViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contractViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/cm/resources/images/contract_add.png',
        view_image_path: '/kalix/roffice/cm/resources/images/contract_view.png',
        edit_image_path: '/kalix/roffice/cm/resources/images/contract_edit.png'
    }
});