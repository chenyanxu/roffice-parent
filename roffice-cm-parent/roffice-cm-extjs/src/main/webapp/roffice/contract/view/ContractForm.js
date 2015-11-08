/**
 * 用户新增表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.roffice.contract.view.ContractForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.view.components.common.FormPanel',
        'kalix.roffice.contract.controller.ContractFormController',
        'kalix.roffice.contract.viewModel.ContractViewModel',
        'kalix.admin.dict.store.DictStore'
    ],
    alias: 'widget.contractForm',
    viewModel: 'contractViewModel',
    controller: 'contractFormController',
    xtype: "contractForm",
    border: false,
    modal: true,
    resizable: false,
    buttonAlign: 'center',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    width: 800,
    bind: {
        icon: '{icon}',
        title: '{title}'
    },
    defaults: {
        layout: 'form',
        xtype: 'baseForm',
        flex: 1
    },
    items: [{
        items: [
            {
                fieldLabel: '项目名称',
                labelAlign: 'right',
                bind: {
                    value: '{rec.projectName}'
                }
            },
            {
                fieldLabel: '甲方',
                labelAlign: 'right',
                bind: {
                    value: '{rec.partyA}'
                }
            },
            {
                fieldLabel: '乙方',
                labelAlign: 'right',
                bind: {
                    value: '{rec.partyB}'
                }
            },
            {
                fieldLabel: '合同金额',
                labelAlign: 'right',
                bind: {
                    value: '{rec.summoney}'
                }
            },
            {
                fieldLabel: '合同毛利',
                labelAlign: 'right',
                bind: {
                    value: '{rec.grossProfit}'
                }
            },
            {
                fieldLabel: '合同利润',
                labelAlign: 'right',
                bind: {
                    value: '{rec.grossProfitRate}'
                }
            },
            {
                fieldLabel: '已收回款项',
                labelAlign: 'right',
                bind: {
                    value: '{rec.receiveMoney}'
                }
            },
            {
                fieldLabel: '应收款项',
                labelAlign: 'right',
                bind: {
                    value: '{rec.receivables}'
                }
            },
            {
                fieldLabel: '预计采购成本',
                labelAlign: 'right',
                bind: {
                    value: '{rec.expectedCost}'
                }
            }
        ]
    }, {
        items: [
            {
                fieldLabel: '质保期(年)',
                labelAlign: 'right',
                bind: {
                    value: '{rec.guarantee}'
                }
            },
            {
                fieldLabel: '合同状态',
                allowBlank: false,
                labelAlign: 'right',
                xtype: 'combobox',
                editable: false,
                queryMode: 'remote',
                valueField: 'value',
                displayField: 'label',
                //store: {type:'dictContractStatusStore'},
                store: {
                    type: 'dictStore',
                    filters: [
                        function (item) {
                            return item.get('type')=='contractStatus';
                        }
                    ]
                },
                name: 'contractStatus',
                bind: {
                    value: '{rec.contractStatus}'
                }
            },
            {
                fieldLabel: '是否归档',
                allowBlank: false,
                labelAlign: 'right',
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
                    value: '{rec.archive}'
                }
            },
            {
                fieldLabel: '合同归档日期',
                labelAlign: 'right',
                editable: false,
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.archive_date}',
                    disabled: '{!rec.archive}'
                }
            },
            {
                fieldLabel: '签单日期',
                labelAlign: 'right',
                editable: false,
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.contractDate}'
                }
            }
            ,
            {
                fieldLabel: '过期日期',
                labelAlign: 'right',
                editable: false,
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.expireDate}'
                }
            }
            ,
            {
                fieldLabel: '备注',
                labelAlign: 'right',
                xtype: 'textarea',
                bind: {
                    value: '{rec.remark}'
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
    },
});