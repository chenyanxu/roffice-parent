/**
 * 用户组件
 *
 * @author majian
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('Kalix.news.view.News', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Kalix.news.viewModel.NewsViewModel',
        'Kalix.news.controller.NewsController'
    ],
    controller: 'newsController',
    viewModel: {
        type: 'newsViewModel'
    },
    items: [],
    initComponent: function () {
        var newsController = this.getController("newsController");

        this.items[0] = newsController.onInitPanel();
        /*var grid = Ext.getCmp("newsDataGrid");
         var store = grid.getStore();
         store.load({params:{start:0, limit:10}});
         grid.getView().refresh();*/
        this.callParent(arguments);
    }
});