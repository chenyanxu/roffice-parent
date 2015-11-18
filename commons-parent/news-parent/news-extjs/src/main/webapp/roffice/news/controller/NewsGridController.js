/**
 * 用户表格控制器
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.roffice.news.controller.NewsGridController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'kalix.core.Notify',
        'kalix.roffice.news.view.NewsForm',
        'kalix.roffice.news.model.NewsModel'
    ],
    alias: 'controller.newsGridController',
    /**
     * 查看操作.
     */
    onView: function (grid, rowIndex, colIndex) {
        var selModel = grid.getStore().getData().items[rowIndex];
        var view = Ext.create('kalix.roffice.news.view.NewsViewForm');
        var viewModel = view.lookupViewModel();
        viewModel.set('rec', selModel);
        viewModel.set('view_image_path', viewModel.get('view_image_path'))
        view.show();
        grid.setSelection(selModel);
    },

    /**
     * 打开添加操作.
     */
    onAdd: function () {
        var grid = this.getView();
        var viewModel = this.getViewModel();
        var view = Ext.create('kalix.roffice.news.view.NewsForm');
        var vm = view.lookupViewModel();

        grid.setSelection(null);
        viewModel.set('sel', false);
        vm.set('rec', Ext.create('kalix.roffice.news.model.NewsModel'));
        vm.set('icon', viewModel.get('add_image_path'));
        vm.set('title', '添加公司新闻');
        view.show();
        grid.setSelection(selModel);

    },
    /**
     * 打开编辑操作.
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    onEdit: function (grid, rowIndex, colIndex) {
        var selModel = grid.getStore().getData().items[rowIndex];
        var viewModel = this.getViewModel();
        var view = Ext.create('kalix.roffice.news.view.NewsForm');
        var vm = view.lookupViewModel();
        vm.set('rec', selModel);
        vm.set('icon', viewModel.get('edit_image_path'));
        vm.set('title', '修改公司新闻');
        view.show();
        grid.setSelection(selModel);
    },

    /**
     * 删除单个操作.
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    onDelete: function (grid, rowIndex, colIndex) {
        var viewModel = this.getViewModel();
        var model = grid.getStore().getData().items[rowIndex];

        Ext.Msg.confirm("警告", "确定要删除吗？", function (button) {
            if (button == "yes") {
                model.erase({
                    failure: function (record, operation) {
                        // do something if the erase failed
                    },
                    success: function (record, operation) {
                        kalix.getApplication().getStore('newsStore').reload();
                    },
                    callback: function (record, operation, success) {
                        var res = Ext.JSON.decode(operation.getResponse().responseText);

                        if (success) {
                            kalix.core.Notify.success(res.msg, CONFIG.ALTER_TITLE_SUCCESS);
                        }
                        else {
                            Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, res.msg);
                        }
                    }
                });
            }
        });

        grid.setSelection(null);
        viewModel.set('sel', false);
    }
});

