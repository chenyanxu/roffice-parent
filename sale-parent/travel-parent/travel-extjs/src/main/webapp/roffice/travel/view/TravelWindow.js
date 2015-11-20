/**
 * 出差记录添加和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.travel.view.TravelWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.travel.viewModel.TravelViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.TravelWindow',
    viewModel: 'travelViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'travelStore'
    },
    xtype: "travelWindow",
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [{
            fieldLabel: '任务名称',
            allowBlank: false,
            bind: {
                activeError: '{validation.name}',
                value: '{rec.name}'
            }
        }, {
            fieldLabel: '出差人员',
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
            xtype: 'datefield',
            format: 'Y-m-d',
            //allowBlank: false,
            bind: {
                //activeError: '{validation.person}',
                value: '{rec.endDate}'
            }
        }, {
            fieldLabel: '结果评定人',
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
            xtype: 'textarea',
            //allowBlank: false,
            bind: {
                //activeError: '{validation.person}',
                value: '{rec.result}'
            }
        }, {
            fieldLabel: '备注',
            xtype: 'textarea',
            //allowBlank: false,
            bind: {
                //activeError: '{validation.person}',
                value: '{rec.comment}'
            }
        }]
    }]
});