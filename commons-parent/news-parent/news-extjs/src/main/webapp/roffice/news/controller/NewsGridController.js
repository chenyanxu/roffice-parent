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
    onView: function (target, event) {
        var viewModel = this.getViewModel();

        if (viewModel.get('sel')) {
            var view = Ext.create('kalix.roffice.news.view.NewsViewForm');

            //view.lookupViewModel().set('rec', viewModel.get('rec'));
            view.show();
        }
        else {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_ERROR, "请选择要查看的记录！");
        }
    },

    /**
     * 打开新增操作.
     */
    onAdd: function () {
        var grid = this.getView();
        var viewModel = this.getViewModel();
        var view = Ext.create('kalix.roffice.news.view.NewsForm');
        var vm = view.lookupViewModel();

        grid.setSelection(null);
        viewModel.set('sel',false);
        vm.set('rec', Ext.create('kalix.roffice.news.model.NewsModel'));
        vm.set('icon', vm.get('add_image_path'));
        vm.set('title', '新增新闻');
        view.show();


    },
    /**
     * 打开编辑操作.
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    onEdit: function (target, event) {
        var grid = this.getView();
        var viewModel = this.getViewModel();

        if (viewModel.get('sel')) {
            var rec = viewModel.get('rec');
            var view = Ext.create('kalix.roffice.news.view.NewsForm');
            var vm = view.lookupViewModel();

            vm.set('rec', rec);
            vm.set('icon', vm.get('edit_image_path'));
            vm.set('title', '修改新闻');
            view.show();
        }
        else {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_ERROR, "请选择要编辑的记录！");
        }

        grid.setSelection(null);
        viewModel.set('sel', false);
    },

    /**
     * 删除单个操作.
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    onDelete: function (target, event) {
        var viewModel = this.getViewModel();

        if (viewModel.get('sel')) {
            var deleteUrl = this.getViewModel().get("url");
            var id = viewModel.get('rec').get('id');

            Ext.Msg.confirm("警告", "确定要删除吗？", function (button) {
                if (button == "yes") {
                    Ext.Ajax.request({
                        url: deleteUrl + "?id=" + id,
                        method: 'DELETE',
                        success: function (response, opts) {
                            var res = Ext.JSON.decode(response.responseText);
                            if (res.success) {
                                kalix.getApplication().getStore('newsStore').reload();
                                kalix.core.Notify.success(res.msg, CONFIG.ALTER_TITLE_SUCCESS);
                            } else {
                                Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, res.msg);
                            }
                        },
                        failure: function (response, opts) {
                            Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, res.msg);
                        }
                    });
                }
            });
        } else {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_ERROR, "请选择要删除的记录！");
        }
    }

});
