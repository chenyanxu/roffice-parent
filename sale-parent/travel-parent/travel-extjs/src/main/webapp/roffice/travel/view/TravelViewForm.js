/**
 * 出差记录查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.travel.view.TravelViewForm', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.travel.viewModel.TravelViewModel',
    ],
    alias: 'widget.travelViewForm',
    viewModel: 'travelViewModel',
    xtype: "travelViewForm",

    items: [{
        xtype: 'form',
        defaultType: 'displayfield',
        bodyPadding: 10,
        buttonAlign: "center",
        items: [{
            fieldLabel: '任务名称',
            labelAlign: 'right',
            bind: {
                value: '{rec.name}'
            }
        }, {
            fieldLabel: '出差人员',
            labelAlign: 'right',
            bind: {
                value: '{rec.person}'
            }
        }, {
            fieldLabel: '任务目标',
            labelAlign: 'right',
            bind: {
                value: '{rec.target}'
            }
        }, {
            fieldLabel: '出发时间',
            labelAlign: 'right',
            bind: {
                value: '{rec.startDate}'
            },
            renderer: function (value) {
                var createDate = new Date(value);
                return createDate.format("yyyy-MM-dd");
            }
        }, {
            fieldLabel: '回程时间',
            labelAlign: 'right',
            bind: {
                value: '{rec.endDate}'
            },
            renderer: function (value) {
                var createDate = new Date(value);
                return createDate.format("yyyy-MM-dd");
            }
        }, {
            fieldLabel: '结果评定人',
            labelAlign: 'right',
            bind: {
                value: '{rec.resultPerson}'
            }
        }, {
            fieldLabel: '完成情况',
            labelAlign: 'right',
            bind: {
                value: '{rec.result}'
            }
        }, {
            fieldLabel: '备注',
            labelAlign: 'right',
            bind: {
                value: '{rec.comment}'
            }
        }]
    }]
});