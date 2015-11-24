/**
 * 实施项目添加和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.deploy.view.DeployWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.deploy.viewModel.DeployViewModel',
        'kalix.roffice.deploy.controller.DeployWindowController',
        'kalix.admin.user.component.UserComboBox',
        'kalix.roffice.project.store.ProjectStore'
    ],
    alias: 'widget.deployWindow',
    viewModel: 'deployViewModel',
    controller: {
        type: 'deployWindowController',
        storeId: 'deployStore'
    },
    xtype: "deployWindow",
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
            fieldLabel: '交付负责人',
            xtype: 'userCombobox',
            name: 'deployPerson',
            bind: {
                value: '{rec.deployPerson}',
                //activeError: '{validation.deployPerson}',
            }
        }, {
            fieldLabel: '回款情况',
            name: 'receiveInfo',
            bind: {
                //activeError: '{validation.salePerson}',
                value: '{rec.receiveInfo}'
            }
        }, {
            fieldLabel: '交付计划',
            labelAlign: 'right',
            bind: {
                value: '{rec.plan}'
            }
        }, {
            fieldLabel: '计划完成情况',
            //allowBlank: false,
            labelAlign: 'right',
            bind: {
                //activeError: '{validation.setupDate}',
                value: '{rec.finishInfo}'
            }
        }, {
            fieldLabel: '问题与风险',
            //allowBlank: false,
            labelAlign: 'right',
            bind: {
                //activeError: '{validation.clientName}',
                value: '{rec.problem}'
            }
        }, {
            fieldLabel: '风险对应措施',
            //allowBlank: false,
            labelAlign: 'right',
            xtype: 'textarea',
            bind: {
                //activeError: '{validation.description}',
                value: '{rec.measure}'
            }
        }]
    },
        {
            items: [
                {
                    fieldLabel: '所属项目',
                    allowBlank: false,
                    labelAlign: 'right',
                    forceSelection: true,
                    xtype: 'combobox',
                    queryMode: 'remote',
                    valueField: 'id',
                    displayField: 'name',
                    queryParam: 'name',
                    minChars: 0,
                    store: {
                        type: 'projectStore'
                    },
                    name: 'projectId',
                    bind: {
                        //activeError: '{validation.deployPerson}',
                        value: '{rec.projectId}'
                    },
                    listeners: {
                        change: 'onchange'
                    }
                },
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
                    fieldLabel: '合同金额(万元)',
                    //allowBlank: false,
                    labelAlign: 'right',
                    xtype: 'numberfield',
                    bind: {
                        //activeError: '{validation.budget}',
                        value: '{rec.budget}'
                    }
                }, {
                    fieldLabel: '营销负责人',
                    xtype: 'userCombobox',
                    name: 'salePerson',
                    bind: {
                        //activeError: '{validation.deployPerson}',
                        value: '{rec.salePerson}'
                    }
                }, {
                    fieldLabel: '项目组成员',
                    //allowBlank: false,
                    labelAlign: 'right',
                    bind: {
                        //activeError: '{validation.clientPhone}',
                        value: '{rec.member}'
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
        }]
});