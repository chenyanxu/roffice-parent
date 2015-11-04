/**
 * 项目支持模块查询控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.support.controller.SupportSearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.supportSearchFormController',

    requires: [
        'kalix.roffice.support.store.SupportStore'
    ],

    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('supportStore');

        store.on('beforeload', function (store, options) {
            Ext.apply(store.proxy.extraParams, form.getFieldValues());
        });
        store.load();
    }
});