/**
 * 公司公告模块查询控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.note.controller.NoteSearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.noteSearchFormController',

    requires: [
        'kalix.roffice.note.store.NoteStore'
    ],

    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('noteStore');

        store.on('beforeload', function (store, options) {
            Ext.apply(store.proxy.extraParams, form.getFieldValues());
        });
        store.load();
    }
});