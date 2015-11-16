/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.invoice.controller.InvoiceGridController', {
    extend: 'kalix.controller.BaseFormController',
    requires: [
        'kalix.roffice.invoice.model.InvoiceModel',
        'kalix.roffice.invoice.view.InvoiceForm'
    ],
    alias: 'controller.invoiceGridController',
    onView: function (target, event) {
        var viewModel = this.getViewModel();

        if (viewModel.get('sel')) {
            var view = Ext.create('kalix.roffice.invoice.view.InvoiceViewForm');
            var vm=view.lookupViewModel();

            vm.set('rec', viewModel.get('rec'));
            vm.set('icon', viewModel.get('view_image_path'));
            vm.set('title', '查看发票');
            view.show();
        }
        else {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_ERROR, "请选择要查看的记录！");
        }
    },
    /**
     * 打开添加操作.
     */
    onAdd: function () {
        var grid = this.getView();
        var viewModel = this.getViewModel();
        var view = Ext.create('kalix.roffice.invoice.view.InvoiceForm');
        var vm = view.lookupViewModel();

        grid.setSelection(null);
        viewModel.set('sel', false);
        vm.set('rec', Ext.create('kalix.roffice.invoice.model.InvoiceModel'));
        vm.set('icon', viewModel.get('add_image_path'));
        vm.set('title', '添加发票');
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
            var view = Ext.create('kalix.roffice.invoice.view.InvoiceForm');
            var vm = view.lookupViewModel();

            grid.setSelection(null);
            viewModel.set('sel', false);
            vm.set('rec', viewModel.get('rec'));
            vm.set('icon', viewModel.get('edit_image_path'));
            vm.set('title', '修改发票');
            view.show();
        }
        else {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_ERROR, "请选择要编辑的记录！");
        }
    }
});