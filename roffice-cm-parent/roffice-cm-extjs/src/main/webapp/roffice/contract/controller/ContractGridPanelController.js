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
        var obj = Ext.create('kalix.roffice.contract.model.ContractModel');
        obj.set('id', '');
        obj.set('managerId', '1');
        obj.set('sellerId', '2');
        obj.set('userId', '3');
        obj.save({
            failure: function (record, operation) {
                alert(1);
            },
            success: function (record, operation) {
                alert(2);
            },
            callback: function (record, operation, success) {
                alert(3);
            }
        });
    }
});