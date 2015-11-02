/**
 * 用户模块控制器
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.roffice.news.controller.NewsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.newsController',

    requires: [
        'kalix.roffice.news.store.NewsStore'
    ],

    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('newsStore');

        store.on('beforeload', function (store, options) {
            Ext.apply(store.proxy.extraParams, form.getFieldValues());
        });
        store.load();
    }
});