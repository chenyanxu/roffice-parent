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
        'kalix.admin.user.store.UserStore'

    ],
    alias: 'widget.contractForm',
    viewModel: 'contractViewModel',
    controller: 'contractFormController',
    xtype: "contractForm",
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
                fieldLabel: '合同编号',
                labelAlign: 'right',
                allowBlank: false,
                bind: {
                    value: '{rec.contractNumber}'
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
                fieldLabel: '项目名称',
                labelAlign: 'right',
                bind: {
                    value: '{rec.projectName}'
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
            },
            {
                fieldLabel: '质保期(年)',
                labelAlign: 'right',
                bind: {
                    value: '{rec.guarantee}'
                }
            },
            {
                fieldLabel: '项目经理',
                allowBlank: false,
                labelAlign: 'right',
                xtype: 'combobox',
                queryMode: 'remote',
                valueField: 'name',
                displayField: 'name',
                queryParam: 'name',
                minChars: 0,
                store: {
                    type: 'userStore'
                },
                name: 'managerId',
                bind: {
                    value: '{rec.managerId}'
                }
            }, {
                fieldLabel: '销售负责人',
                allowBlank: false,
                labelAlign: 'right',
                xtype: 'combobox',
                queryMode: 'remote',
                valueField: 'name',
                displayField: 'name',
                queryParam: 'name',
                minChars: 0,
                store: {
                    type: 'userStore'
                },
                name: 'sellerId',
                bind: {
                    value: '{rec.sellerId}'
                }
            }, {
                fieldLabel: '操作人',
                allowBlank: false,
                labelAlign: 'right',
                xtype: 'combobox',
                queryMode: 'remote',
                valueField: 'name',
                displayField: 'name',
                queryParam: 'name',
                minChars: 0,
                store: {
                    type: 'userStore'
                },
                name: 'userId',
                bind: {
                    value: '{rec.userId}'
                }
            },
            {
                fieldLabel: '项目类型',
                allowBlank: false,
                labelAlign: 'right',
                xtype: 'combobox',
                queryMode: 'local',
                valueField: 'name',
                displayField: 'name',
                minChars: 0,
                store:{
                data:[
                    {'name':'软件'},
                    {'name':'系统集成'},
                    {'name':'服务'}
                ]},
                name: 'projectType',
                bind: {
                    value: '{rec.projectType}'
                }
            },
            {
                fieldLabel: '项目实施状态',
                allowBlank: false,
                labelAlign: 'right',
                xtype: 'combobox',
                queryMode: 'local',
                valueField: 'name',
                displayField: 'name',
                minChars: 0,
                store:{
                data:[
                    {'name':'已验收'},
                    {'name':'正在实施'},
                    {'name':'未实施'},
                    {'name':'已完结'}
                ]},
                name: 'projectStatus',
                bind: {
                    value: '{rec.projectStatus}'
                }
            },
            {
                fieldLabel: '合同状态',
                allowBlank: false,
                labelAlign: 'right',
                xtype: 'combobox',
                queryMode: 'local',
                valueField: 'name',
                displayField: 'name',
                minChars: 0,
                store:{
                data:[
                    {'name':'草稿'},
                    {'name':'进行中'},
                    {'name':'完成'}
                ]},
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
                queryMode: 'local',
                valueField: 'key',
                displayField: 'name',
                minChars: 0,
                store:{
                data:[
                    {'name':'是','key':true},
                    {'name':'否','key':false}
                ]},
                name: 'archive',
                bind: {
                    value: '{rec.archive}'
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
                fieldLabel: '合同归档日期',
                labelAlign: 'right',
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.archive_date}'
                }
            }
        ],
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
    }
    ]
});