/**
 * 用户添加表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.roffice.contract.view.ContractViewForm', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.contract.viewModel.ContractViewModel',
        'kalix.admin.dict.component.DictCombobox'
    ],
    alias: 'widget.contractViewForm',
    xtype: "contractViewForm",
    viewModel: 'contractViewModel',
    items: [{
        defaults: {readOnly: true},
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
        defaults: {readOnly: true},
        items: [
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
                
                xtype: 'combobox',
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
                
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.archive_date}',
                }
            },
            {
                fieldLabel: '签单日期',
                
                xtype: 'datefield',
                editable:false,
                format: 'Y-m-d',
                bind: {
                    value: '{rec.contractDate}'
                }
            }
            ,
            {
                fieldLabel: '过期日期',
                
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
    ],
    buttons: [{
        text: '关闭',
        glyph: 'xf00d@FontAwesome',
        handler: function () {
            this.up('.window').close();
        }
    }
    ]
});