/**
 * 项目机会模块查询控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.chance.controller.ChanceSearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chanceSearchFormController',

    requires: [
        'kalix.roffice.chance.store.ChanceStore'
    ],

    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('chanceStore');

        store.on('beforeload', function (store, options) {
            Ext.apply(store.proxy.extraParams, form.getFieldValues());
        });
        store.load();
    }
});