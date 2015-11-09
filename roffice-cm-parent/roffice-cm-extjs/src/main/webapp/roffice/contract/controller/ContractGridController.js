/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.controller.ContractGridController', {
    extend: 'kalix.controller.BaseFormController',
    requires: [
        'kalix.roffice.contract.model.ContractModel',
        'kalix.roffice.contract.view.ContractForm'
    ],
    alias: 'controller.contractGridController',
    onView: function (target, event) {
        var viewModel = this.getViewModel();

        if (viewModel.get('sel')) {
            var view = Ext.create('kalix.roffice.contract.view.ContractViewForm');
            var vm=view.lookupViewModel();

            vm.set('rec', viewModel.get('rec'));
            vm.set('icon', viewModel.get('view_image_path'));
            vm.set('title', '查看合同');
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
        var view = Ext.create('kalix.roffice.contract.view.ContractForm');
        var vm = view.lookupViewModel();

        grid.setSelection(null);
        viewModel.set('sel', false);
        vm.set('rec', Ext.create('kalix.roffice.contract.model.ContractModel'));
        vm.set('icon', viewModel.get('add_image_path'));
        vm.set('title', '新增合同');
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
            var view = Ext.create('kalix.roffice.contract.view.ContractForm');
            var vm = view.lookupViewModel();

            grid.setSelection(null);
            viewModel.set('sel', false);
            vm.set('rec', viewModel.get('rec'));
            vm.set('icon', viewModel.get('edit_image_path'));
            vm.set('title', '修改合同');
            view.show();
        }
        else {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_ERROR, "请选择要编辑的记录！");
        }
    }
});