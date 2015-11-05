/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.viewModel.ContractViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contractViewModel',
    data: {
        url: '/kalix/camel/rest/contracts',
        rec: null,
        sel: false,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/cm/resources/images/contract_add.png',
        view_image_path: '/kalix/roffice/cm/resources/images/contract_view.png',
        delete_image_path: '/kalix/roffice/cm/resources/images/contract_delete.png',
        edit_image_path: '/kalix/roffice/cm/resources/images/contract_edit.png'
    }
});