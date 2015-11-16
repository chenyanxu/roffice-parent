/**
 * 出差记录添加和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.travel.view.TravelForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.view.components.common.FormPanel',
        'kalix.roffice.travel.viewModel.TravelViewModel',
        'kalix.roffice.travel.controller.TravelFormController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.TravelForm',
    viewModel: 'travelViewModel',
    controller: 'travelFormController',
    xtype: "travelForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    bind: {
        icon: '{icon}',
        title: '{title}'
    },
    items: [{
        xtype: 'baseForm',
        items: [{
            fieldLabel: '任务名称',
            labelAlign: 'right',
            allowBlank: false,
            bind: {
                activeError: '{validation.name}',
                value: '{rec.name}'
            }
        }, {
            fieldLabel: '出差人员',
            labelAlign: 'right',
            allowBlank: false,
            xtype: 'combobox',
            queryMode: 'remote',
            valueField: 'name',
            displayField: 'name',
            queryParam: 'name',
            minChars: 0,
            store: {
                type: 'userStore'
            },
            name: 'person',
            bind: {
                activeError: '{validation.person}',
                value: '{rec.person}'
            }
        }, {
            fieldLabel: '任务目标',
            labelAlign: 'right',
            //allowBlank: false,
            bind: {
                //activeError: '{validation.person}',
                value: '{rec.target}'
            }
        }, {
            fieldLabel: '出发时间',
            labelAlign: 'right',
            xtype: 'datefield',
            format: 'Y-m-d',
            //allowBlank: false,
            bind: {
                //activeError: '{validation.person}',
                value: '{rec.startDate}'
            }
        }, {
            fieldLabel: '回程时间',
            labelAlign: 'right',
            xtype: 'datefield',
            format: 'Y-m-d',
            //allowBlank: false,
            bind: {
                //activeError: '{validation.person}',
                value: '{rec.endDate}'
            }
        }, {
            fieldLabel: '结果评定人',
            labelAlign: 'right',
            //allowBlank: false,
            xtype: 'combobox',
            queryMode: 'remote',
            valueField: 'name',
            displayField: 'name',
            queryParam: 'name',
            minChars: 0,
            store: {
                type: 'userStore'
            },
            name: 'resultPerson',
            bind: {
                //activeError: '{validation.person}',
                value: '{rec.resultPerson}'
            }
        }, {
            fieldLabel: '完成情况',
            labelAlign: 'right',
            xtype: 'textarea',
            //allowBlank: false,
            bind: {
                //activeError: '{validation.person}',
                value: '{rec.result}'
            }
        }, {
            fieldLabel: '备注',
            labelAlign: 'right',
            xtype: 'textarea',
            //allowBlank: false,
            bind: {
                //activeError: '{validation.person}',
                value: '{rec.comment}'
            }
        },
        ],
        buttons: [{
            text: '保存',
            glyph: 'xf0c7@FontAwesome',
            handler: 'onSave'
        }, {
            text: '重置',
            glyph: 'xf0e2@FontAwesome',
            handler: 'onReset'
        }]
    }]
});