/**
 * 用户新增表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.roffice.contract.view.ContractForm', {
    extend: 'Ext.window.Window',
    requires: [
        'kalix.view.components.common.FormPanel',
        'kalix.roffice.contract.controller.ContractFormController',
        'kalix.roffice.contract.viewModel.ContractViewModel'
    ],
    alias: 'widget.contractForm',
    viewModel: 'contractViewModel',
    controller: 'contractFormController',
    xtype: "contractForm",
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
            fieldLabel: '项目经理',
            labelAlign: 'right',
            allowBlank: false,
            bind: {
                value: '{rec.managerId}'
            }
        }, {
            fieldLabel: '销售负责人',
            labelAlign: 'right',
            allowBlank: false,
            bind: {
                value: '{rec.sellerId}'
            }
        }, {
            fieldLabel: '操作人',
            labelAlign: 'right',
            allowBlank: false,
            bind: {
                value: '{rec.userId}'
            }
        }, {
            fieldLabel: '签单日期',
            labelAlign: 'right',
            xtype: 'datefield',
            format: 'Y-m-d',
            bind: {
                value: '{rec.contractDate}'
            }
        }
        ],
        buttons: [{
            text: '保存',
            glyph: 'xf0c7@FontAwesome',
            handler: 'onSave'
        }, {
            text: '重置',
            glyph: 'xf0e2@FontAwesome',
            handler: 'onReset'
        }
        ]
    }
    ]
});