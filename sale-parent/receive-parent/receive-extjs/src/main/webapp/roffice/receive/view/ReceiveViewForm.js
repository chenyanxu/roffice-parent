/**
 * 项目回款查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.receive.view.ReceiveViewForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.roffice.receive.viewModel.ReceiveViewModel',
        'kalix.roffice.receive.controller.ReceiveFormController'
    ],
    alias: 'widget.receiveViewForm',
    viewModel: 'receiveViewModel',
    controller: 'receiveFormController',
    xtype: "receiveViewForm",

    width: 400,
    border: false,
    modal: true,
    resizable: false,
    title: '查看项目回款',
    bind: {
        icon: '{view_image_path}'
    },
    items: [{
        xtype: 'form',
        defaultType: 'displayfield',
        bodyPadding: 10,
        buttonAlign: "center",
        items: [
            {
                fieldLabel: '回款日期',
                labelAlign: 'right',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.receiveDate}'
                },
                renderer: function (value) {
                    var createDate = new Date(value);
                    return createDate.format("yyyy-MM-dd");
                }
            },
            {
                fieldLabel: '回款金额',
                labelAlign: 'right',
                bind: {
                    value: '{rec.money}'
                }
            },
            {
                fieldLabel: '合同Id',
                labelAlign: 'right',
                bind: {
                    value: '{rec.contractId}'
                }
            }, {
                fieldLabel: '备注',
                labelAlign: 'right',
                bind: {
                    value: '{rec.comment}'
                }
            }, {
                fieldLabel: '最后修改人',
                labelAlign: 'right',
                bind: {
                    value: '{rec.updateBy}'
                }
            }, {
                fieldLabel: '最后修改时间',
                labelAlign: 'right',
                bind: {
                    value: '{rec.updateDate}'
                },
                renderer: function (value) {
                    var createDate = new Date(value);
                    return createDate.format("yyyy-MM-dd hh:mm:ss");
                }
            }],
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