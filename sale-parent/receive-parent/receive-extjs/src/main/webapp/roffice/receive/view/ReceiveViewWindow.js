/**
 * 项目回款查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.receive.view.ReceiveViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.receive.viewModel.ReceiveViewModel',
        'kalix.admin.user.store.UserStore',
        'kalix.roffice.contract.component.ContractComboBox'
    ],
    alias: 'widget.receiveViewWindow',
    viewModel: 'receiveViewModel',
    xtype: "receiveViewWindow",
    width: 400,
    items: [
        {
            defaults: {readOnly: true},
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
                    fieldLabel: '回款金额(元)',
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