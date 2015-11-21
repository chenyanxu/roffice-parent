/**
 * 项目机会添加和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.chance.view.ChanceWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseWindowController',
        'kalix.roffice.chance.viewModel.ChanceViewModel',
        'kalix.admin.user.component.UserComboBox'
    ],
    alias: 'widget.chanceWindow',
    xtype: "chanceWindow",
    viewModel: 'chanceViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'chanceStore'
    },
    items: [{
        items: [{
            fieldLabel: '项目名称',
            allowBlank: false,
            bind: {
                activeError: '{validation.name}',
                value: '{rec.name}'
            }
        }, {
            fieldLabel: '营销负责人',
            xtype: 'userCombobox',
            name: 'salerId',
            bind: {
                activeError: '{validation.salerId}',
                value: '{rec.salerId}'
            }
        }, {
            fieldLabel: '项目类型',
            bind: {
                //activeError: '{validation.type}',
                value: '{rec.type}'
            }
        }, {
            fieldLabel: '所属行业',
            bind: {
                //activeError: '{validation.industry}',
                value: '{rec.industry}'
            }
        }, {
            fieldLabel: '优先级',
            xtype: 'combobox',
            id: 'level',
            name: 'level',
            store: [
                ['高', '高'],
                ['中', '中'],
                ['低', '低']
            ],
            bind: {
                //activeError: '{validation.level}',
                value: '{rec.level}'
            }
        }, {
            fieldLabel: '项目机会描述',
            xtype: 'textarea',
            bind: {
                //activeError: '{validation.description}',
                value: '{rec.description}'
            }
        },]
    },
        {
            items: [{
                fieldLabel: '预算额度(万元)',
                xtype: 'numberfield',
                bind: {
                    //activeError: '{validation.budget}',
                    value: '{rec.budget}'
                }
            }, {
                fieldLabel: '预计签单时间',
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    //activeError: '{validation.billDate}',
                    value: '{rec.billDate}'
                }
            }, {
                fieldLabel: '售前支持负责人',
                xtype: 'userCombobox',
                name: 'supporterId',
                bind: {
                    activeError: '{validation.supporterId}',
                    value: '{rec.supporterId}'
                }
            }, {
                fieldLabel: '客户联系人姓名',
                bind: {
                    //activeError: '{validation.clientName}',
                    value: '{rec.clientName}'
                }
            }, {
                fieldLabel: '客户联系人电话',
                bind: {
                    //activeError: '{validation.clientPhone}',
                    value: '{rec.clientPhone}'
                }
            }, {
                fieldLabel: '备注',
                xtype: 'textarea',
                bind: {
                    //activeError: '{validation.comment}',
                    value: '{rec.comment}'
                }
            }]
        }]
});