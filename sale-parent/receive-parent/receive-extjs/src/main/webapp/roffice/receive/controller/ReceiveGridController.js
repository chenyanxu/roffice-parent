/**
 * 项目回款表格控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receive.controller.ReceiveGridController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'kalix.core.Notify',
        'kalix.roffice.receive.view.ReceiveForm',
        'kalix.roffice.receive.viewModel.ReceiveViewModel'
    ],
    alias: 'controller.receiveGridController',
    /**
     * 查看操作.
     */
    onView: function (target, event) {
        var grid = target.findParentByType('grid');
        var selModel = grid.getSelectionModel();
        if (selModel.hasSelection()) {
            var view = Ext.create('kalix.roffice.receive.view.ReceiveViewForm');
            var viewModel = view.lookupViewModel();
            viewModel.set('rec', selModel.getSelection()[0]);
            view.show();
        } else {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_ERROR, "请选择要查看的记录！");
        }
    },

    /**
     * 打开新增操作.
     */
    onAdd: function () {
        var view = Ext.create('kalix.roffice.receive.view.ReceiveForm');
        var viewModel = view.lookupViewModel();
        viewModel.set('rec', Ext.create('kalix.roffice.receive.model.ReceiveModel'));
        viewModel.set('icon', viewModel.get('add_image_path'));
        viewModel.set('title', '新增项目回款');
        view.show();
    },
    /**
     * 打开编辑操作.
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    onEdit: function (target, event) {
        var grid = target.findParentByType('grid');
        var selModel = grid.getSelectionModel();
        if (selModel.hasSelection()) {
            var rec = selModel.getSelection()[0].clone();
            var view = Ext.create('kalix.roffice.receive.view.ReceiveForm');
            var viewModel = view.lookupViewModel();

            viewModel.set('rec', rec);
            viewModel.set('icon', viewModel.get('edit_image_path'));
            viewModel.set('title', '修改项目回款');
            view.show();
        } else {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_ERROR, "请选择要编辑的记录！");
        }
    },

    /**
     * 删除单个操作.
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    onDelete: function (target, event) {
        var grid = target.findParentByType('grid');
        var selModel = grid.getSelectionModel();
        if (selModel.hasSelection()) {
            var deleteUrl = this.getViewModel().get("url");
            var ids = _.reduce(selModel.getSelection(), function (memo, rec) {
                memo.push(rec.get('id'));
                return memo;
            }, []).join('_');

            Ext.Msg.confirm("警告", "确定要删除吗？", function (button) {
                if (button == "yes") {
                    Ext.Ajax.request({
                        url: deleteUrl + "?id=" + ids,
                        method: 'DELETE',
                        success: function (response, opts) {
                            var res = Ext.JSON.decode(response.responseText);
                            if (res.success) {
                                kalix.getApplication().getStore('receiveStore').reload();
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
