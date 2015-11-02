/**
 * 用户视图模型
 *
 * @author majian
 *         date:2015-7-6
 * @version 1.0.0
 */
Ext.define('Kalix.news.viewModel.NewsViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'Kalix.news.store.NewsStore',
        'Kalix.news.model.NewsModel'
    ],
    alias: 'viewmodel.newsViewModel',
    data: {
        addTitle: '新增公告',
        editTitle: '编辑公告',
        url: '/kalix/camel/rest/newss',
    },
    /*formulas: {
     dirty: {
     bind: {
     bindTo: "{currentNews}",
     deep: true
     },
     get: function(data) {
     console.log(data);
     return data ? data.dirty : false;
     }
     },
     storeDirty: {
     bind: {
     bindTo: "{currentNews}",
     deep: true
     },
     get: function() {
     return this.getStore("newss").isDirty();
     }
     }
     },*/
    /*stores: {
     newss: {
     type: 'newsStore'
     }
     }*/
});