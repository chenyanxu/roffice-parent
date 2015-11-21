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
            title: '合同清单查询',
            xtype: 'contractDetailSearchForm',
            iconCls: 'x-fa fa-search'
        },
        {
            xtype: 'contractDetailGrid',
            title: '合同清单列表',
            iconCls: 'x-fa fa-calendar',
            margin: 10
        }
    ]
});
