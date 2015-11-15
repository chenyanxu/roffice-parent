/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.invoice.controller.InvoiceSearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.invoiceSearchFormController',
    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('invoiceStore');

        store.currentPage=1;
        //store.on('beforeload', function (store, options) {
        //    Ext.apply(store.proxy.extraParams, form.getFieldValues());
        //});
        store.load();
    }
});