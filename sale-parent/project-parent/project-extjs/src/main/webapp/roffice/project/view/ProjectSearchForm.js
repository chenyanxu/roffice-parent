/**
 * 项目管理查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.project.view.ProjectSearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'kalix.roffice.project.controller.ProjectSearchFormController'
    ],
    alias: 'widget.projectSearchForm',
    xtype: 'projectSearchForm',
    controller: 'projectSearchFormController',
    bodyPadding: 10,
    layout: 'column',
    margin: 10,
    //todo 在此修改查询条件
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '名称',
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
        },
        {
            xtype: 'button',
            text: '重置',
            margin: '0 0 0 10',
            glyph: 'xf0e2@FontAwesome',
            listeners: {
                click: function () {
                    this.up('form').getForm().reset();
                }
            }
        }
    ]
});
