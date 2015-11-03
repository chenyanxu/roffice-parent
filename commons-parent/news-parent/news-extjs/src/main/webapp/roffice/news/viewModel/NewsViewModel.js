/**
 * 用户视图模型
 *
 * @author majian <br/>
 *         date:2015-7-6
 * @version 1.0.0
 */
Ext.define('kalix.roffice.news.viewModel.NewsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.newsViewModel',
    requires: [
        'kalix.roffice.news.model.NewsModel'
    ],
    data: {
        url: '/kalix/camel/rest/newses',
        rec: Ext.create('kalix.roffice.news.model.NewsModel'),
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/news/resources/images/news_add.png',
        view_image_path: '/kalix/roffice/news/resources/images/news_view.png',
        delete_image_path: '/kalix/roffice/news/resources/images/news_delete.png',
        edit_image_path: '/kalix/roffice/news/resources/images/news_edit.png',
    }
});