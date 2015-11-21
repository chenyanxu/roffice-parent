/**
 * 项目机会查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.chance.view.ChanceViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.chance.viewModel.ChanceViewModel'
    ],
    alias: 'widget.chanceViewWindow',
    xtype: "chanceViewWindow",
    viewModel: 'chanceViewModel',
    items: [{
        defaults: {readOnly: true},
        items: [{
            fieldLabel: '项目名称',
            bind: {
                value: '{rec.name}'
            }
        }, {
            fieldLabel: '营销负责人',
            bind: {
                value: '{rec.salerId}'
            }
        }, {
            fieldLabel: '项目类型',
            bind: {
                value: '{rec.type}'
            }
        }, {
            fieldLabel: '所属行业',
            bind: {
                value: '{rec.industry}'
            }
        }, {
            fieldLabel: '优先级',
            bind: {
                value: '{rec.level}'
            }
        }
            , {
                fieldLabel: '预算额度',
                bind: {
                    value: '{rec.budget}'
                }
            }]
    },
        {
            defaults: {readOnly: true},
            items: [{
                fieldLabel: '预计签单时间',
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.billDate}'
                }
            }, {
                fieldLabel: '售前支持负责人',
                bind: {
                    value: '{rec.supporterId}'
                }
            }, {
                fieldLabel: '客户联系人姓名',
                bind: {
                    value: '{rec.clientName}'
                }
            }, {
                fieldLabel: '客户联系人电话',
                bind: {
                    value: '{rec.clientPhone}'
                }
            }, {
                fieldLabel: '描述',
                bind: {
                    value: '{rec.description}'
                }
            }, {
                fieldLabel: '备注',
                bind: {
                    value: '{rec.comment}'
                }
            }]
        }]
});