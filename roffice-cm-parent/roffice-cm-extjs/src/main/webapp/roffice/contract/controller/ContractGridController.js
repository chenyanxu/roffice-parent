/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.controller.ContractGridController', {
    extend: 'kalix.controller.BaseGridController',
    alias: 'controller.contractGridController',
    //add your own callback handler here
    //,
    //onChange: function (target, event, domValue) {
    //    var form = target.findParentByType('form');
    //    var store=this.getView().getStore();
    //    //var store = target.findParentByType('window').items.getAt(0).store;
    //    //var mainId = target.findParentByType('window').viewModel.get('rec').id
    //
    //    scope={store:store};
    //
    //    form.submit({
    //        url: CONFIG.restRoot+'/camel/rest/excel/upload?' +
    //        'ConfigId=ConfigContractColumnMap&' +
    //        'EntityName=cn.com.rexen.roffice.cm.entities.ContractBean&' +
    //        'ServiceInterface=cn.com.rexen.roffice.cm.api.biz.IContractBeanService',
    //        waitMsg: '正在上传...',
    //        scope: scope,
    //        success: function (fp, o) {
    //            store.currentPage = 1;
    //            store.load();
    //            kalix.core.Notify.success(o.result.msg, CONFIG.ALTER_TITLE_SUCCESS);
    //        },
    //        failure: function(fp, o) {
    //            Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, o.result.msg);
    //        }
    //    });
    //}
});