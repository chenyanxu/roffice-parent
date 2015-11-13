/**
 * 设备发票模块查询控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.purchaseinvoice.controller.PurchaseInvoiceSearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.purchaseinvoiceSearchFormController',

    requires: [
        'kalix.roffice.purchaseinvoice.store.PurchaseInvoiceStore'
    ],

    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('purchaseinvoiceStore');

        store.on('beforeload', function (store, options) {
            Ext.apply(store.proxy.extraParams, form.getFieldValues());
        });
        store.load();
    }
});