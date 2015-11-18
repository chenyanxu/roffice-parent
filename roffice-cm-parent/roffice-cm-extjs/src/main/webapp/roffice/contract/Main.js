/**
 */
Ext.define('kalix.roffice.contract.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.contract.view.ContractGrid',
        'kalix.roffice.contract.view.ContractSearchForm',
        'kalix.roffice.contract.viewModel.ContractViewModel'
    ],
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
    ],
    listeners:{
        render:function(target,eOpts){
            var store=kalix.getApplication().getStore('contractStore');

            store.on('beforeload', function (store, opts,target) {
                store.proxy.extraParams = target.items.getAt(0).getForm().getFieldValues();
            },this,target);
        }
    }
});
