/**
 * 采购付款查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.pay.view.PayViewForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.roffice.pay.viewModel.PayViewModel',
        'kalix.roffice.pay.controller.PayFormController',
        'kalix.roffice.contract.component.ContractComboBox'
    ],
    alias: 'widget.payViewForm',
    viewModel: 'payViewModel',
    controller: 'payFormController',
    xtype: "payViewForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    title: '查看采购付款',
    bind: {
        icon: '{view_image_path}'
    },
    items: [{
        xtype: 'baseForm',
        defaults: {
            readOnly: true
        },
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
                //allowBlank: false,
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
            }, {
                fieldLabel: '最后修改人',
                xtype: 'displayfield',
                labelAlign: 'right',
                bind: {
                    value: '{rec.updateBy}'
                }
            }, {
                fieldLabel: '最后修改时间',
                xtype: 'displayfield',
                labelAlign: 'right',
                bind: {
                    value: '{rec.updateDate}'
                },
                renderer: function (value) {
                    var createDate = new Date(value);
                    return createDate.format("yyyy-MM-dd hh:mm:ss");
                }
            }],
        buttons: [{
            text: '关闭',
            glyph: 'xf00d@FontAwesome',
            handler: function () {
                this.up('.window').close();
            }
        }
        ]
    }
    ]
});