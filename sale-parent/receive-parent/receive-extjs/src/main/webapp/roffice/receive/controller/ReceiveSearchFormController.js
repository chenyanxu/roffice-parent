/**
 * 项目回款模块查询控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receive.controller.ReceiveSearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.receiveSearchFormController',

    requires: [
        'kalix.roffice.receive.store.ReceiveStore'
    ],

    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('receiveStore');

        store.on('beforeload', function (store, options) {
            Ext.apply(store.proxy.extraParams, form.getFieldValues());
        });
        store.load();
    }
});