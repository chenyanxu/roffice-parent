/**
 * 项目支持查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.support.view.SupportViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.support.viewModel.SupportViewModel'
    ],
    alias: 'widget.supportViewWindow',
    xtype: "supportViewWindow",
    viewModel: 'supportViewModel',
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
                value: '{rec.saler}'
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
            items: [{
                fieldLabel: '预计交付时间',
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.billDate}'
                }
            }, {
                fieldLabel: '预计开始时间',
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.startDate}'
                }
            }, {
                fieldLabel: '售前支持负责人',
                bind: {
                    value: '{rec.supporter}'
                }
            }, {
                fieldLabel: '售前支持人员',
                bind: {
                    value: '{rec.supportPerson}'
                }
            }, {
                fieldLabel: '包含子系统',
                bind: {
                    value: '{rec.subSystem}'
                }
            }, {
                fieldLabel: '备注',
                bind: {
                    value: '{rec.comment}'
                }
            }]
        }]
});