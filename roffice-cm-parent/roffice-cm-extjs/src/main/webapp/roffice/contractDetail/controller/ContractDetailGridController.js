/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contractDetail.controller.ContractDetailGridController', {
    extend: 'kalix.controller.BaseFormController',
    requires: [
        'kalix.roffice.contractDetail.model.ContractDetailModel',
        'kalix.roffice.contractDetail.view.ContractDetailForm'
    ],
    alias: 'controller.contractDetailGridController',
    onView: function (target, event) {
        var viewModel = this.getViewModel();

        if (viewModel.get('sel')) {
            var view = Ext.create('kalix.roffice.contractDetail.view.ContractDetailViewForm');
            var vm=view.lookupViewModel();

            vm.set('rec', viewModel.get('rec'));
            vm.set('icon', viewModel.get('view_image_path'));
            vm.set('title', '查看清单');
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
        var view = Ext.create('kalix.roffice.contractDetail.view.ContractDetailForm');
        var vm = view.lookupViewModel();

        grid.setSelection(null);
        viewModel.set('sel', false);
        vm.set('rec', Ext.create('kalix.roffice.contractDetail.model.ContractDetailModel'));
        vm.set('icon', viewModel.get('add_image_path'));
        vm.set('title', '添加清单');
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
            var view = Ext.create('kalix.roffice.contractDetail.view.ContractDetailForm');
            var vm = view.lookupViewModel();

            grid.setSelection(null);
            viewModel.set('sel', false);
            vm.set('rec', viewModel.get('rec'));
            vm.set('icon', viewModel.get('edit_image_path'));
            vm.set('title', '修改清单');
            view.show();
        }
        else {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_ERROR, "请选择要编辑的记录！");
        }
    }
});