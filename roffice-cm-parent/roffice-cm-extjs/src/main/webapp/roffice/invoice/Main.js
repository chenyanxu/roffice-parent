/**
 */
Ext.define('kalix.roffice.invoice.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.invoice.view.InvoiceGrid',
        'kalix.roffice.invoice.view.InvoiceSearchForm',
        'kalix.roffice.invoice.viewModel.InvoiceViewModel'
    ],
    viewModel: 'invoiceViewModel',
    items: [
        {
            title: '发票记录查询',
            xtype: 'invoiceSearchForm'
        },
        {
            xtype: 'invoiceGrid',
            title: '发票列表',
            margin: 10
        }
    ],
    listeners:{
        render:function(target,eOpts){
            var store=kalix.getApplication().getStore('invoiceStore');

            store.on('beforeload', function (store, opts,target) {
                Ext.apply(store.proxy.extraParams, target.items.getAt(0).getForm().getFieldValues());
            },this,target);
        }
    }
});
