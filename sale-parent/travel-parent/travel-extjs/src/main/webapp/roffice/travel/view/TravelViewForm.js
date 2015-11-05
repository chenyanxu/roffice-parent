/**
 * 出差记录查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.travel.view.TravelViewForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.roffice.travel.viewModel.TravelViewModel',
        'kalix.roffice.travel.controller.TravelFormController'
    ],
    alias: 'widget.travelViewForm',
    viewModel: 'travelViewModel',
    controller: 'travelFormController',
    xtype: "travelViewForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    title: '查看出差记录',
    bind: {
        icon: '{view_image_path}'
    },
    //todo 在此修改查看字段
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
        }
        ],
        buttons: [{
            text: '关闭',
            glyph: 'xf00d@FontAwesome',
            handler: function () {
                this.up('.window').close();
            }
        }
        ]
    }
    ]
});