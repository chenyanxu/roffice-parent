/**
 * 公司新闻查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.news.view.NewsViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.news.viewModel.NewsViewModel',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.newsViewWindow',
    viewModel: 'newsViewModel',
    xtype: "newsViewWindow",
    width: 400,

    items: [{
        defaults: {readOnly: true},
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