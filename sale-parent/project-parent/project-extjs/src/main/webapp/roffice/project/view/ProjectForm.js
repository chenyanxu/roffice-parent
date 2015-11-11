/**
 * 项目管理新增和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.project.view.ProjectForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.view.components.common.FormPanel',
        'kalix.roffice.project.viewModel.ProjectViewModel',
        'kalix.roffice.project.controller.ProjectFormController',
        'kalix.admin.user.component.UserComboBox',
        'kalix.roffice.chance.store.ChanceStore',
        'kalix.admin.dict.component.DictCombobox'
    ],
    alias: 'widget.ProjectForm',
    viewModel: 'projectViewModel',
    controller: 'projectFormController',
    xtype: "projectForm",

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
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
        flex: 1
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
            fieldLabel: '项目经理',
            xtype: 'userCombobox',
            valueField: 'name',
            name: 'manager',
            bind: {
                activeError: '{validation.manager}',
                value: '{rec.manager}'
            }
        }, {
            fieldLabel: '营销负责人',
            xtype: 'userCombobox',
            valueField: 'name',
            name: 'salePerson',
            bind: {
                //activeError: '{validation.salePerson}',
                value: '{rec.salePerson}'
            }
        }, {
            fieldLabel: '所属行业',
            labelAlign: 'right',
            bind: {
                value: '{rec.industry}'
            }
        }, {
            fieldLabel: '交付时间',
            //allowBlank: false,
            labelAlign: 'right',
            xtype: 'datefield',
            format: 'Y-m-d',
            bind: {
                //activeError: '{validation.setupDate}',
                value: '{rec.deployDate}'
            }
        }, {
            fieldLabel: '客户联系人',
            //allowBlank: false,
            labelAlign: 'right',
            bind: {
                //activeError: '{validation.clientName}',
                value: '{rec.client}'
            }
        }, {
            fieldLabel: '优先级',
            //allowBlank: false,
            xtype: 'combobox',
            id: 'level',
            labelAlign: 'right',
            name: 'level',
            forceSelection: true,
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
            fieldLabel: '项目描述',
            //allowBlank: false,
            labelAlign: 'right',
            xtype: 'textarea',
            bind: {
                //activeError: '{validation.description}',
                value: '{rec.description}'
            }
        }]
    },
        {
            items: [
                {
                    fieldLabel: '项目编号',
                    allowBlank: false,
                    labelAlign: 'right',
                    bind: {
                        activeError: '{validation.no}',
                        value: '{rec.no}'
                    }
                }, {
                    fieldLabel: '项目状态',
                    xtype: 'dictCombobox',
                    dictType: 'contractStatus',
                    name: 'status',
                    bind: {
                        //activeError: '{validation.status}',
                        value: '{rec.status}'
                    }
                }, {
                    fieldLabel: '预算额度(万元)',
                    //allowBlank: false,
                    labelAlign: 'right',
                    xtype: 'numberfield',
                    bind: {
                        //activeError: '{validation.budget}',
                        value: '{rec.budget}'
                    }
                }, {
                    fieldLabel: '立项时间',
                    //allowBlank: false,
                    labelAlign: 'right',
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    bind: {
                        //activeError: '{validation.setupDate}',
                        value: '{rec.setupDate}'
                    }
                }, {
                    fieldLabel: '交付负责人',
                    xtype: 'userCombobox',
                    valueField: 'id',
                    name: 'deployPerson',
                    bind: {
                        //activeError: '{validation.deployPerson}',
                        value: '{rec.deployPerson}'
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
                    fieldLabel: '项目机会',
                    //allowBlank: false,
                    labelAlign: 'right',
                    forceSelection: true,
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
                        //activeError: '{validation.deployPerson}',
                        value: '{rec.chanceId}'
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
    }],

    listeners: {
        beforeclose: function (button) {

        }
    }
});