/**
 * 采购付款模块查询控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.pay.controller.PaySearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.paySearchFormController',

    requires: [
        'kalix.roffice.pay.store.PayStore'
    ],

    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('payStore');

        store.on('beforeload', function (store, options) {
            Ext.apply(store.proxy.extraParams, form.getFieldValues());
        });
        store.load();
    }
});