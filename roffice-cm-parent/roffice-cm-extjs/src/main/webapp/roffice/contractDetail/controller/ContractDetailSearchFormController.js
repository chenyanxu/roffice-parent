/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contractDetail.controller.ContractDetailSearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contractDetailSearchFormController',
    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('contractDetailStore');

        store.currentPage=1;
        //store.on('beforeload', function (store, options) {
        //    Ext.apply(store.proxy.extraParams, form.getFieldValues());
        //});
        store.load();
    }
});