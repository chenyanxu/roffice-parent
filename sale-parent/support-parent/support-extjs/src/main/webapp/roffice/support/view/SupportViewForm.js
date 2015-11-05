/**
 * 项目支持查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.support.view.SupportViewForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.roffice.support.viewModel.SupportViewModel',
        'kalix.roffice.support.controller.SupportFormController'
    ],
    alias: 'widget.supportViewForm',
    viewModel: 'supportViewModel',
    controller: 'supportFormController',
    xtype: "supportViewForm",

    width: 800,
    border: false,
    modal: true,
    resizable: false,
    title: '查看项目支持',
    layout: 'column',
    frame: true,
    bind: {
        icon: '{view_image_path}'
    },
    buttonAlign: "center",
    padding: 10,
    defaults: {
        layout: 'form',
        xtype: 'form',
        defaultType: 'displayfield',
        columnWidth: 0.5
    },
    items: [{
        /*xtype: 'form',
         defaultType: 'displayfield',
         bodyPadding: 10,*/

        items: [{
            fieldLabel: '项目名称',
            labelAlign: 'right',
            bind: {
                value: '{rec.name}'
            }
        }, {
            fieldLabel: '营销负责人',
            labelAlign: 'right',
            bind: {
                value: '{rec.saler}'
            }
        }, {
            fieldLabel: '项目类型',
            labelAlign: 'right',
            bind: {
                value: '{rec.type}'
            }
        }, {
            fieldLabel: '所属行业',
            labelAlign: 'right',
            bind: {
                value: '{rec.industry}'
            }
        }, {
            fieldLabel: '优先级',
            labelAlign: 'right',
            bind: {
                value: '{rec.level}'
            }
        }
            , {
                fieldLabel: '预算额度',
                labelAlign: 'right',
                bind: {
                    value: '{rec.budget}'
                }
            }]
    },
        {
            items: [{
                fieldLabel: '预计交付时间',
                labelAlign: 'right',
                bind: {
                    value: '{rec.billDate}'
                },
                renderer: function (value) {
                    var createDate = new Date(value);
                    return createDate.format("yyyy-MM-dd");
                }
            }, {
                fieldLabel: '预计开始时间',
                labelAlign: 'right',
                bind: {
                    value: '{rec.startDate}'
                },
                renderer: function (value) {
                    var createDate = new Date(value);
                    return createDate.format("yyyy-MM-dd");
                }
            }, {
                fieldLabel: '售前支持负责人',
                labelAlign: 'right',
                bind: {
                    value: '{rec.supporter}'
                }
            }, {
                fieldLabel: '售前支持人员',
                labelAlign: 'right',
                bind: {
                    value: '{rec.supportPerson}'
                }
            }, {
                fieldLabel: '包含子系统',
                labelAlign: 'right',
                bind: {
                    value: '{rec.subSystem}'
                }
            }, {
                fieldLabel: '备注',
                labelAlign: 'right',
                bind: {
                    value: '{rec.comment}'
                }
            }]
        }],
    buttons: [{
        buttonAlign: "center",
        text: '关闭',
        glyph: 'xf00d@FontAwesome',
        handler: function () {
            this.up('.window').close();
        }
    }]
});