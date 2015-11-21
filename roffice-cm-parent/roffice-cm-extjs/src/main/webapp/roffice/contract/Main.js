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
            title: '项目合同查询',
            xtype: 'contractSearchForm',
            iconCls: 'x-fa fa-search',
        },
        {
            xtype: 'contractGrid',
            title: '项目合同列表',
            margin: 10,
            iconCls: 'x-fa fa-file-text'
        }
    ]
});
