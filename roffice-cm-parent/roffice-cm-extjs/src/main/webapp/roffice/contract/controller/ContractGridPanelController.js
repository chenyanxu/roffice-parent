/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.controller.ContractGridPanelController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'kalix.roffice.contract.model.ContractModel'
    ],
    alias: 'controller.contractGridPanelController',
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
    }
});