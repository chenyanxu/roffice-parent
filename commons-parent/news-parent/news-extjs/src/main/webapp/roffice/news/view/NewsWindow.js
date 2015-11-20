/**
 * 公司新闻新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.news.view.NewsWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.news.viewModel.NewsViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.newsWindow',
    viewModel: 'newsViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'newsStore'
    },
    xtype: "newsWindow",
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [{
            fieldLabel: '标题',
            labelAlign: 'right',
            allowBlank: false,
            bind: {
                activeError: '{validation.title}',
                value: '{rec.title}'
            }
        }, {
            fieldLabel: '内容',
            labelAlign: 'right',
            allowBlank: false,
            xtype: 'textarea',
            bind: {
                activeError: '{validation.content}',
                value: '{rec.content}'
            }
        }]
    }]
});