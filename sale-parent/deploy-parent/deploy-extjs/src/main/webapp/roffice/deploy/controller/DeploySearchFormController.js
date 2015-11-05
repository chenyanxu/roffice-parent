/**
 * 实施项目模块查询控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.deploy.controller.DeploySearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deploySearchFormController',

    requires: [
        'kalix.roffice.deploy.store.DeployStore'
    ],

    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('deployStore');

        store.on('beforeload', function (store, options) {
            Ext.apply(store.proxy.extraParams, form.getFieldValues());
        });
        store.load();
    }
});