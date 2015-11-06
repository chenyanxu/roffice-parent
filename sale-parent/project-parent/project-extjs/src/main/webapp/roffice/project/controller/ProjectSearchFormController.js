/**
 * 项目管理模块查询控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.project.controller.ProjectSearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projectSearchFormController',

    requires: [
        'kalix.roffice.project.store.ProjectStore'
    ],

    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('projectStore');

        store.on('beforeload', function (store, options) {
            Ext.apply(store.proxy.extraParams, form.getFieldValues());
        });
        store.load();
    }
});