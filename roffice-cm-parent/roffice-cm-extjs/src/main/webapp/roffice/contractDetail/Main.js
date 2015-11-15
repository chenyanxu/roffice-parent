/**
 *
 */
Ext.define('kalix.roffice.contractDetail.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.contractDetail.view.ContractDetailGrid',
        'kalix.roffice.contractDetail.view.ContractDetailSearchForm',
        'kalix.roffice.contractDetail.viewModel.ContractDetailViewModel'
    ],
    viewModel: 'contractDetailViewModel',
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
    ],
    listeners:{
        render:function(target,eOpts){
            var store=kalix.getApplication().getStore('contractDetailStore');

            store.on('beforeload', function (store, opts,target) {
                Ext.apply(store.proxy.extraParams, target.items.getAt(0).getForm().getFieldValues());
            },this,target);
        }
    }
});
