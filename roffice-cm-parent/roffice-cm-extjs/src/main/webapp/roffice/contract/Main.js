/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.roffice.contract.view.ContractGrid',
        'kalix.roffice.contract.view.ContractSearchForm',
        'kalix.roffice.contract.viewModel.ContractViewModel'
    ],
    storeId:'contractStore',
    viewModel: 'contractViewModel',
    items: [
        {
            title: '合同记录查询',
            xtype: 'contractSearchForm'
        },
        {
            xtype: 'contractGrid',
            title: '合同列表',
            margin: 10
        }
    ]
});
