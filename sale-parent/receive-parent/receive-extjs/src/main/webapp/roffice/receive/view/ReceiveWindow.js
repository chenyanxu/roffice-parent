/**
 * 项目回款添加和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.receive.view.ReceiveWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.receive.viewModel.ReceiveViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore',
        'kalix.roffice.contract.component.ContractComboBox'
    ],
    alias: 'widget.teceiveWindow',
    viewModel: 'receiveViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'receiveStore'
    },
    xtype: "receiveWindow",
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '回款日期',
                allowBlank: false,
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    activeError: '{validation.receiveDate}',
                    value: '{rec.receiveDate}'
                }
            },
            {
                fieldLabel: '回款金额(万元)',
                xtype: 'numberfield',
                allowBlank: false,
                bind: {
                    activeError: '{validation.money}',
                    value: '{rec.money}'
                }
            },
            {
                fieldLabel: '合同编号',
                //allowBlank: false,
                xtype: 'contractComboBox',
                bind: {
                    //activeError: '{validation.contractId}',
                    value: '{rec.contractId}'
                }
            }, {
                fieldLabel: '备注',
                allowBlank: false,
                xtype: 'textarea',
                bind: {
                    activeError: '{validation.comment}',
                    value: '{rec.comment}'
                }
            }]
    }]
});