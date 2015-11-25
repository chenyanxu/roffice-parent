/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.controller.ContractGridController', {
    extend: 'kalix.controller.BaseGridController',
    alias: 'controller.contractGridController',
    //add your own callback handler here
    onAttachmentManage:function(grid, rowIndex, colIndex){
        var view=Ext.create('kalix.attachment.view.AttachmentWindow');
        var selModel = grid.getStore().getData().items[rowIndex];
        var vm = view.lookupViewModel();

        vm.set('rec', selModel);
        view.show();
        grid.setSelection(selModel);
    }
});