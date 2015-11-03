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
        'kalix.roffice.contract.store.ContractStore',
        'kalix.roffice.contract.view.ContractGridPanel'
    ],
    items: [
        {
            xtype: 'contractGridPanel',
            id: 'contractGridPanel',
            title: '合同列表',
            margin: 10,
            store: {
                type: 'contractStore'
            }
        }
    ]
});
