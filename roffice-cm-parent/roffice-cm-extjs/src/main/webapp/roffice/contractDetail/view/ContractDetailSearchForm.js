/**
 * @author chenyanxu
 */

Ext.define('kalix.roffice.contractDetail.view.ContractDetailSearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'kalix.roffice.contractDetail.controller.ContractDetailSearchFormController'
    ],
    alias: 'widget.contractDetailSearchForm',
    xtype: 'contractDetailSearchForm',
    controller: 'contractDetailSearchFormController',
    bodyPadding: 10,
    layout: 'column',
    margin: 10,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '设备名称',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'name'
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
