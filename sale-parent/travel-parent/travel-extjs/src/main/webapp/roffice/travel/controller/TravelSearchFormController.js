/**
 * 出差记录模块查询控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.travel.controller.TravelSearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.travelSearchFormController',

    requires: [
        'kalix.roffice.travel.store.TravelStore'
    ],

    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('travelStore');

        store.on('beforeload', function (store, options) {
            Ext.apply(store.proxy.extraParams, form.getFieldValues());
        });
        store.load();
    }
});