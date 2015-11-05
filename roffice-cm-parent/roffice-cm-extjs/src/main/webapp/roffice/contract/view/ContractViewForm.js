/**
 * 用户新增表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.roffice.contract.view.ContractViewForm', {
    extend: 'Ext.window.Window',
    requires: [],
    alias: 'widget.contractViewForm',
    xtype: "newsViewForm",
    width: 400,
    border: false,
    modal: true,
    resizable: false,
    title: '查看合同',
    bind: {
        icon: '{view_image_path}'
    },
    items: [{
        xtype: 'form',
        defaultType: 'displayfield',
        bodyPadding: 10,
        buttonAlign: "center",
        items: [{
            fieldLabel: '项目经理',
            labelAlign: 'right',
            bind: {
                value: '{rec.managerId}'
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