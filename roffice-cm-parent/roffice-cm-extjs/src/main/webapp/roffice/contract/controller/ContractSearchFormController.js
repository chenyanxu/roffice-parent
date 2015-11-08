/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.controller.ContractSearchFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contractSearchFormController',
    onSearch: function (target, event) {
        var form = target.findParentByType('form').getForm();
        var store = kalix.getApplication().getStore('contractStore');

        store.on('beforeload', function (store, options) {
            Ext.apply(store.proxy.extraParams, form.getFieldValues());
        });
        store.load();
    }
});