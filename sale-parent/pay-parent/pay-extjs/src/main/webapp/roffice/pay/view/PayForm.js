/**
 * 采购付款新增和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.pay.view.PayForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.view.components.common.FormPanel',
        'kalix.roffice.pay.viewModel.PayViewModel',
        'kalix.roffice.pay.controller.PayFormController',
        'kalix.roffice.contract.component.ContractComboBox'
    ],
    alias: 'widget.PayForm',
    viewModel: 'payViewModel',
    controller: 'payFormController',
    xtype: "payForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    bind: {
        icon: '{icon}',
        title: '{title}'
    },
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
                fieldLabel: '回款金额(万元)',
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
            }],
        buttons: [{
            text: '保存',
            glyph: 'xf0c7@FontAwesome',
            handler: 'onSave'
        }, {
            text: '重置',
            glyph: 'xf0e2@FontAwesome',
            handler: 'onReset'
        }]
    }]

});