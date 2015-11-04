/**
 * 用户组件
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.roffice.news.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.news.view.NewsGrid',
        'kalix.roffice.news.view.NewsSearchForm',
        'kalix.roffice.news.viewModel.NewsViewModel'
    ],
    viewModel: 'newsViewModel',
    items: [
        {
            title: '新闻查询',
            xtype: 'newsSearchForm'
        }, {
            xtype: 'newsGridPanel',
            id: 'newsGridPanel',
            title: '新闻列表',
            margin: 10
        }
    ]
});
