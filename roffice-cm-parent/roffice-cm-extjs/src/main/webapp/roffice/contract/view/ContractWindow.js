/**
 * @author chenyanxu
 */

Ext.define('kalix.roffice.contract.view.ContractWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseWindowController',
        'kalix.roffice.contract.viewModel.ContractViewModel',
        'kalix.admin.dict.component.DictCombobox'
        ],
    alias: 'widget.contractWindow',
    xtype: "contractWindow",
    viewModel: 'contractViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'contractStore'
    },
    items: [{
        items: [
            {
                fieldLabel: '合同编号',
                bind: {
                    value: '{rec.contractNumber}'
                }
            },
            {
                fieldLabel: '项目名称',
                bind: {
                    value: '{rec.projectName}'
                }
            },
            {
                fieldLabel: '甲方',
                bind: {
                    value: '{rec.partyA}'
                }
            },
            {
                fieldLabel: '乙方',
                bind: {
                    value: '{rec.partyB}'
                }
            },
            {
                fieldLabel: '合同金额',
                bind: {
                    value: '{rec.summoney}'
                }
            },
            {
                fieldLabel: '合同毛利',
                bind: {
                    value: '{rec.grossProfit}'
                }
            },
            {
                fieldLabel: '合同利润',
                bind: {
                    value: '{rec.grossProfitRate}'
                }
            },
            {
                fieldLabel: '已收回款项',
                bind: {
                    value: '{rec.receiveMoney}'
                }
            },
            {
                fieldLabel: '应收款项',
                bind: {
                    value: '{rec.receivables}'
                }
            },
            {
                fieldLabel: '预计采购成本',
                bind: {
                    value: '{rec.expectedCost}'
                }
            }
        ]
    }, {
        items: [
            {
                fieldLabel: '客户经理',
                bind: {
                    value: '{rec.manager}'
                }
            },
            {
                fieldLabel: '质保期(年)',
                bind: {
                    value: '{rec.guarantee}'
                }
            },
            {
                fieldLabel: '合同状态',
                xtype: 'dictCombobox',
                dictType:'contractStatus',
                name: 'contractStatus',
                bind: {
                    value: '{rec.contractStatus}'
                }
            },
            {
                fieldLabel: '是否归档',
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
                    value: '{rec.archive}'
                }
            },
            {
                fieldLabel: '合同归档日期',
                
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
                
                xtype: 'textarea',
                bind: {
                    value: '{rec.remark}'
                }
            }
        ]
    }
    ]
});