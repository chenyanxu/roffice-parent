/**
 * 用户新增表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.roffice.contract.view.ContractViewForm', {
    extend: 'Ext.window.Window',
    requires: ['kalix.view.components.common.FormPanel',
        'kalix.roffice.contract.viewModel.ContractViewModel',
        'kalix.roffice.contract.store.DictContractStatusStore'
    ],
    alias: 'widget.contractViewForm',
    xtype: "newsViewForm",
    viewModel: 'contractViewModel',
    width: 800,
    border: false,
    modal: true,
    resizable: false,
    buttonAlign: 'center',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    bind: {
        title:'{title}',
        icon: '{icon}'
    },
    defaults: {
        layout: 'form',
        xtype: 'baseForm',
        flex:1,
        defaults:{readOnly:true}
    },
    items: [{
        //xtype: 'baseForm',
        //flex: 1,
        items: [
            {
                fieldLabel: '合同编号',
                labelAlign: 'right',
                bind: {
                    value: '{rec.contractNumber}'
                }
            },
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
        //xtype: 'baseForm',
        //flex: 1,
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
                queryParam:'',
                store: {type:'dictContractStatusStore'},
                name: 'contractStatus',
                bind: {
                    value: '{rec.contractStatus}'
                }
            },
            {
                fieldLabel: '是否归档',
                labelAlign: 'right',
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
                labelAlign: 'right',
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.archive_date}',
                }
            },
            {
                fieldLabel: '签单日期',
                labelAlign: 'right',
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