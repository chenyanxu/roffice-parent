/**
 * 项目支持新增和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.support.view.SupportForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.view.components.common.FormPanel',
        'kalix.roffice.support.viewModel.SupportViewModel',
        'kalix.roffice.support.controller.SupportFormController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.SupportForm',
    viewModel: 'supportViewModel',
    controller: 'supportFormController',
    xtype: "supportForm",

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
            name: 'saler',
            bind: {
                activeError: '{validation.saler}',
                value: '{rec.saler}'
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
            labelAlign: 'right',
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
            //allowBlank: false,
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
                fieldLabel: '预计开始时间',
                //allowBlank: false,
                labelAlign: 'right',
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    //activeError: '{validation.billDate}',
                    value: '{rec.startDate}'
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
                name: 'supporter',
                bind: {
                    //activeError: '{validation.supporter}',
                    value: '{rec.supporter}'
                }
            }, {
                fieldLabel: '售前支持人员',
                //allowBlank: false,
                labelAlign: 'right',
                bind: {
                    //activeError: '{validation.type}',
                    value: '{rec.supportPerson}'
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