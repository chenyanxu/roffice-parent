/**
 * 采购付款查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.pay.view.PayViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.pay.viewModel.PayViewModel',
        'kalix.admin.user.store.UserStore',
        'kalix.roffice.contract.component.ContractComboBox'
    ],
    alias: 'widget.payViewWindow',
    viewModel: 'payViewModel',
    xtype: "payViewWindow",
    width: 400,
    items: [{
        xtype: 'baseForm',
        defaults: {
            readOnly: true
        },
        items: [
            {
                fieldLabel: '回款日期',
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
                bind: {
                    activeError: '{validation.money}',
                    value: '{rec.money}'
                }
            },
            {
                fieldLabel: '采购编号',
                xtype: 'contractComboBox',
                bind: {
                    //activeError: '{validation.contractId}',
                    value: '{rec.purchaseId}'
                }
            }, {
                fieldLabel: '备注',
                labelAlign: 'right',
                xtype: 'textarea',
                bind: {
                    activeError: '{validation.comment}',
                    value: '{rec.comment}'
                }
            }, {
                fieldLabel: '最后修改人',
                xtype: 'displayfield',
                bind: {
                    value: '{rec.updateBy}'
                }
            }, {
                fieldLabel: '最后修改时间',
                xtype: 'displayfield',
                bind: {
                    value: '{rec.updateDate}'
                },
                renderer: function (value) {
                    var createDate = new Date(value);
                    return createDate.format("yyyy-MM-dd hh:mm:ss");
                }
            }]
    }]
});