/**
 * 项目管理查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.project.view.ProjectViewForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.roffice.project.viewModel.ProjectViewModel',
        'kalix.roffice.project.controller.ProjectFormController'
    ],
    alias: 'widget.projectViewForm',
    viewModel: 'projectViewModel',
    controller: 'projectFormController',
    xtype: "projectViewForm",

    title: '查看项目管理',
    bind: {
        icon: '{view_image_path}'
    },
    layout: 'column',
    frame: true,
    width: 800,
    border: false,
    modal: true,
    resizable: true,
    padding: 10,
    buttonAlign: 'center',
    defaults: {
        layout: 'form',
        xtype: 'baseForm',
        defaultType: 'textfield',
        columnWidth: 0.5,
        readOnly: true
        //border:false
    },

    items: [{
        fieldDefaults: {
            readOnly: true
        },
        items: [
            {
                fieldLabel: '项目名称',
                allowBlank: false,
                labelAlign: 'right',
                bind: {
                    activeError: '{validation.name}',
                    value: '{rec.name}'
                }
            }, {
                fieldLabel: '项目经理',
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
                name: 'manager',
                bind: {
                    activeError: '{validation.manager}',
                    value: '{rec.manager}'
                }
            }, {
                fieldLabel: '营销负责人',
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
            fieldDefaults: {
                readOnly: true
            },
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
                    //allowBlank: false,
                    labelAlign: 'right',
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
        text: '关闭',
        glyph: 'xf00d@FontAwesome',
        handler: function () {
            this.up('.window').close();

        }
    }]

});