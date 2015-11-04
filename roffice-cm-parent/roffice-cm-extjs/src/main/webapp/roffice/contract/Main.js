/**
 * 用户组件
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.roffice.contract.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.contract.view.ContractGridPanel',
        'kalix.roffice.contract.viewmodel.ContractViewModel'
    ],
    viewModel: 'contractViewModel',
    items: [
        {
            xtype: 'contractGridPanel',
            id: 'contractGridPanel',
            title: '合同列表',
            margin: 10
        }
    ]
});
