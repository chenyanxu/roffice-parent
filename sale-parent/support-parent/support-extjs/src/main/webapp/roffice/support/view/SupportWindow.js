/**
 * 项目支持添加和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.support.view.SupportWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseWindowController',
        'kalix.roffice.support.viewModel.SupportViewModel',
        'kalix.admin.user.store.UserStore',
        'kalix.roffice.chance.store.ChanceStore'
    ],
    alias: 'widget.SupportWindow',
    xtype: "supportWindow",
    viewModel: 'supportViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'supportStore'
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
            allowBlank: false,
            xtype: 'combobox',
            queryMode: 'remote',
            valueField: 'name',
            displayField: 'name',
            queryParam: 'name',
            minChars: 0,
            store: {
                type: 'userStore'
            },
            name: 'saler',
            bind: {
                activeError: '{validation.saler}',
                value: '{rec.saler}'
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
            labelAlign: 'right',
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
            fieldLabel: '项目机会',
            allowBlank: false,
            xtype: 'combobox',
            queryMode: 'remote',
            valueField: 'id',
            displayField: 'name',
            queryParam: 'name',
            minChars: 0,
            store: {
                type: 'chanceStore'
            },
            name: 'chanceId',
            bind: {
                activeError: '{validation.chanceId}',
                value: '{rec.chanceId}'
            }
        }, {
            fieldLabel: '包含子系统',
            labelAlign: 'right',
            xtype: 'textarea',
            bind: {
                //activeError: '{validation.description}',
                value: '{rec.subSystem}'
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
                fieldLabel: '预计开始时间',
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    //activeError: '{validation.billDate}',
                    value: '{rec.startDate}'
                }
            }, {
                fieldLabel: '售前支持负责人',
                xtype: 'combobox',
                queryMode: 'remote',
                valueField: 'name',
                displayField: 'name',
                queryParam: 'name',
                minChars: 0,
                store: {
                    type: 'userStore'
                },
                name: 'supporter',
                bind: {
                    //activeError: '{validation.supporter}',
                    value: '{rec.supporter}'
                }
            }, {
                fieldLabel: '售前支持人员',
                bind: {
                    //activeError: '{validation.type}',
                    value: '{rec.supportPerson}'
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