/**
 * 项目机会新增和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.chance.view.ChanceForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.view.components.common.FormPanel',
        'kalix.roffice.chance.viewModel.ChanceViewModel',
        'kalix.roffice.chance.controller.ChanceFormController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.ChanceForm',
    viewModel: 'chanceViewModel',
    controller: 'chanceFormController',
    xtype: "chanceForm",
    layout: 'column',
    frame: true,
    width: 800,
    border: false,
    modal: true,
    resizable: true,
    padding: 10,
    buttonAlign: 'center',
    bind: {
        icon: '{icon}',
        title: '{title}'
    },
    defaults: {
        layout: 'form',
        xtype: 'baseForm',
        defaultType: 'textfield',
        columnWidth: 0.5,
        //border:false
    },
    items: [{

        items: [{
            fieldLabel: '项目名称',
            allowBlank: false,
            labelAlign: 'right',
            bind: {
                activeError: '{validation.name}',
                value: '{rec.name}'
            }
        }, {
            fieldLabel: '营销负责人',
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
            name: 'salerId',
            bind: {
                activeError: '{validation.salerId}',
                value: '{rec.salerId}'
            }
        }, {
            fieldLabel: '项目类型',
            //allowBlank: false,
            labelAlign: 'right',
            bind: {
                //activeError: '{validation.type}',
                value: '{rec.type}'
            }
        }, {
            fieldLabel: '所属行业',

            //allowBlank: false,
            labelAlign: 'right',
            bind: {
                //activeError: '{validation.industry}',
                value: '{rec.industry}'
            }
        }, {
            fieldLabel: '优先级',
            //allowBlank: false,
            xtype: 'combobox',
            id: 'level',
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
            }/*,
            listeners: {
                afterrender: function (rec) {
                    Ext.getCmp('level').setValue("中");
                }
             }*/
        }, {
            fieldLabel: '项目机会描述',
            //allowBlank: false,
            labelAlign: 'right',
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
                //allowBlank: false,
                labelAlign: 'right',
                xtype: 'numberfield',
                bind: {
                    //activeError: '{validation.budget}',
                    value: '{rec.budget}'
                }
            }, {
                fieldLabel: '预计签单时间',
                //allowBlank: false,
                labelAlign: 'right',
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    //activeError: '{validation.billDate}',
                    value: '{rec.billDate}'
                }
            }, {
                fieldLabel: '售前支持负责人',
                //allowBlank: false,
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
                name: 'supporterId',
                bind: {
                    activeError: '{validation.supporterId}',
                    value: '{rec.supporterId}'
                }
            }, {
                fieldLabel: '客户联系人姓名',
                //allowBlank: false,
                labelAlign: 'right',
                bind: {
                    //activeError: '{validation.clientName}',
                    value: '{rec.clientName}'
                }
            }, {
                fieldLabel: '客户联系人电话',
                //allowBlank: false,
                labelAlign: 'right',
                bind: {
                    //activeError: '{validation.clientPhone}',
                    value: '{rec.clientPhone}'
                }
            }, {
                fieldLabel: '备注',
                //allowBlank: false,
                labelAlign: 'right',
                xtype: 'textarea',
                bind: {
                    //activeError: '{validation.comment}',
                    value: '{rec.comment}'
                }
            }]
        }],
    buttons: [{
        text: '保存',
        glyph: 'xf0c7@FontAwesome',
        handler: 'onSave'
    }, {
        text: '重置',
        glyph: 'xf0e2@FontAwesome',
        handler: 'onReset'
    }]
});