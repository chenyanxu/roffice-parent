/**
 * 出差记录查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.travel.view.TravelViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.travel.viewModel.TravelViewModel',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.travelViewWindow',
    viewModel: 'travelViewModel',
    xtype: "travelViewWindow",
    width: 400,
    items: [
        {
            defaults: {readOnly: true},
            xtype: 'baseForm',
            items: [{
                fieldLabel: '任务名称',
                bind: {
                    value: '{rec.name}'
                }
            }, {
                fieldLabel: '出差人员',
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
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
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