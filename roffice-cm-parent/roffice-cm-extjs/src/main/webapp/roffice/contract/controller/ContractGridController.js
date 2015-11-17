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
    onView: function (grid, rowIndex, colIndex) {
        var viewModel = this.getViewModel();
        var selModel = grid.getStore().getData().items[rowIndex];
        var view = Ext.create('kalix.roffice.contract.view.ContractViewForm');
        var vm = view.lookupViewModel();

        vm.set('rec', selModel);
        vm.set('icon', viewModel.get('view_image_path'));
        vm.set('title', '查看合同');
        view.show();
        grid.setSelection(selModel);
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
    onEdit: function (grid, rowIndex, colIndex) {
        var viewModel = this.getViewModel();
        var selModel = grid.getStore().getData().items[rowIndex];
        var view = Ext.create('kalix.roffice.contract.view.ContractForm');
        var vm = view.lookupViewModel();

        vm.set('rec', selModel);
        vm.set('icon', viewModel.get('edit_image_path'));
        vm.set('title', '修改合同');
        view.show();
        grid.setSelection(selModel);
    }
});