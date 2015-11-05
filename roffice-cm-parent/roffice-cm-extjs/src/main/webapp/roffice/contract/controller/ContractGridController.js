/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.controller.ContractGridController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'kalix.roffice.contract.model.ContractModel',
        'kalix.roffice.contract.view.ContractForm'
    ],
    alias: 'controller.contractGridController',
    onView: function (target, event) {
        var viewModel = this.getViewModel();

        if (viewModel.get('sel')) {
            var view = Ext.create('kalix.roffice.contract.view.ContractViewForm');

            view.lookupViewModel().set('rec', viewModel.get('rec'));
            view.lookupViewModel().set('view_image_path', viewModel.get('view_image_path'))
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
    }
});