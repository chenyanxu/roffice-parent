/**
 * 实施项目查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.deploy.view.DeployViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.deploy.viewModel.DeployViewModel',
        'kalix.admin.user.component.UserComboBox',
        'kalix.admin.user.store.UserStore',
        'kalix.roffice.project.store.ProjectStore'
    ],
    alias: 'widget.deployViewWindow',
    viewModel: 'deployViewModel',
    xtype: "deployViewWindow",
    defaults: {
        layout: 'form',
        xtype: 'baseForm',
        defaultType: 'textfield',
        columnWidth: 0.5,
        //border:false
    },

    items: [{
        defaults: {readOnly: true},
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
            defaults: {readOnly: true},
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
        }],
    buttons: [{
        text: '关闭',
        glyph: 'xf00d@FontAwesome',
        handler: function () {
            this.up('.window').close();

        }
    }]

});