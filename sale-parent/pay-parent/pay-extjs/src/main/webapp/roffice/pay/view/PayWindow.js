/**
 * 采购付款添加和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.pay.view.PayWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.pay.viewModel.PayViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore',
        'kalix.roffice.contract.component.ContractComboBox'
    ],
    alias: 'widget.payWindow',
    viewModel: 'payViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'payStore'
    },
    xtype: "payWindow",
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '回款日期',
                labelAlign: 'right',
                allowBlank: false,
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    activeError: '{validation.receiveDate}',
                    value: '{rec.receiveDate}'
                }
            },
            {
                fieldLabel: '回款金额(元)',
                labelAlign: 'right',
                xtype: 'numberfield',
                allowBlank: false,
                bind: {
                    activeError: '{validation.money}',
                    value: '{rec.money}'
                }
            },
            {
                fieldLabel: '采购编号',
                labelAlign: 'right',
                allowBlank: false,
                xtype: 'contractComboBox',
                bind: {
                    //activeError: '{validation.contractId}',
                    value: '{rec.purchaseId}'
                }
            }, {
                fieldLabel: '备注',
                labelAlign: 'right',
                allowBlank: false,
                xtype: 'textarea',
                bind: {
                    activeError: '{validation.comment}',
                    value: '{rec.comment}'
                }
            }]
    }]

});