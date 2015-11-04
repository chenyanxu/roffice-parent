/**
 * 项目机会查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.chance.view.ChanceViewForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.roffice.chance.viewModel.ChanceViewModel',
        'kalix.roffice.chance.controller.ChanceFormController'
    ],
    alias: 'widget.chanceViewForm',
    viewModel: 'chanceViewModel',
    controller: 'chanceFormController',
    xtype: "chanceViewForm",

    width: 800,
    border: false,
    modal: true,
    resizable: true,
    title: '查看项目机会',
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
                value: '{rec.salerId}'
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
                fieldLabel: '预计签单时间',
                labelAlign: 'right',
                bind: {
                    value: '{rec.billDate}'
                },
                renderer: function (value) {
                    var createDate = new Date(value);
                    return createDate.format("yyyy-MM-dd");
                }
            }, {
                fieldLabel: '售前支持负责人',
                labelAlign: 'right',
                bind: {
                    value: '{rec.supporterId}'
                }
            }, {
                fieldLabel: '客户联系人姓名',
                labelAlign: 'right',
                bind: {
                    value: '{rec.clientName}'
                }
            }, {
                fieldLabel: '客户联系人电话',
                labelAlign: 'right',
                bind: {
                    value: '{rec.clientPhone}'
                }
            }, {
                fieldLabel: '描述',
                labelAlign: 'right',
                bind: {
                    value: '{rec.description}'
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