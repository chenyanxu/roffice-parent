/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contractDetail.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.roffice.contractDetail.view.ContractDetailGrid',
        'kalix.roffice.contractDetail.view.ContractDetailSearchForm',
        'kalix.roffice.contractDetail.viewModel.ContractDetailViewModel'
    ],
    viewModel: 'contractDetailViewModel',
    storeId:'contractDetailStore',
    items: [
        {
            title: '清单记录查询',
            xtype: 'contractDetailSearchForm'
        },
        {
            xtype: 'contractDetailGrid',
            title: '清单列表',
            margin: 10
        }
    ]
});
