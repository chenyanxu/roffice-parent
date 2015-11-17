/**
 * 用户添加表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.roffice.contractDetail.view.ContractDetailForm', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseFormController',
        'kalix.roffice.contractDetail.viewModel.ContractDetailViewModel',
        'kalix.roffice.contract.component.ContractComboBox'
        ],
    alias: 'widget.contractDetailForm',
    viewModel: 'contractDetailViewModel',
    controller: {
        type: 'baseFormController',
        storeId: 'contractDetailStore'
    },
    xtype: "contractDetailForm",
    width:400,
    items: [{
        items: [
            {
                fieldLabel: '合同编号',
                xtype:'contractComboBox',
                bind: {
                    value: '{rec.contractId}'
                }
            },
            {
                fieldLabel: '设备名称',
                bind: {
                    value: '{rec.name}'
                }
            },
            {
                fieldLabel: '供应商',
                bind: {
                    value: '{rec.provider}'
                }
            },
            {
                fieldLabel: '品牌',
                bind: {
                    value: '{rec.brand}'
                }
            },
            {
                fieldLabel: '型号',
                bind: {
                    value: '{rec.type}'
                }
            },
            {
                fieldLabel: '单价',
                bind: {
                    value: '{rec.price}'
                }
            },
            {
                fieldLabel: '数量',
                bind: {
                    value: '{rec.amount}'
                }
            },
            {
                fieldLabel: '单位',
                bind: {
                    value: '{rec.unit}'
                }
            },
            {
                fieldLabel: '追加',
                allowBlank: false,
                xtype: 'combobox',
                editable: false,
                valueField: 'key',
                displayField: 'name',
                store: {
                    data: [
                        {'name': '是', 'key': true},
                        {'name': '否', 'key': false}
                    ]
                },
                name: 'archive',
                bind: {
                    value: '{rec.additional}'
                }
            },
            {
                fieldLabel: '追加日期',
                xtype: 'datefield',
                editable: false,
                format: 'Y-m-d',
                bind: {
                    value: '{rec.addDate}',
                    disabled: '{!rec.additional}'
                }
            }
        ]
    }
    ]
    ,
    buttons: [{
        text: '保存',
        glyph: 'xf0c7@FontAwesome',
        handler: 'onSave'
    }, {
        text: '重置',
        glyph: 'xf0e2@FontAwesome',
        handler: 'onReset'
    }
    ]
    ,
    listeners: {
        close: 'onClose'
    }
});