/**
 * @author chenyanxu
 */

Ext.define('kalix.roffice.contract.view.ContractSearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'kalix.roffice.contract.controller.ContractSearchFormController'
    ],
    alias: 'widget.contractSearchForm',
    xtype: 'contractSearchForm',
    controller: 'contractSearchFormController',
    bodyPadding: 10,
    layout: 'column',
    margin: 10,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '合同编号',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'contractNumber'
        },
        {
            xtype: 'button',
            text: '查询',
            margin: '0 0 0 10',
            handler: 'onSearch',
            glyph: 'xf002@FontAwesome',
        }
    ]
});
