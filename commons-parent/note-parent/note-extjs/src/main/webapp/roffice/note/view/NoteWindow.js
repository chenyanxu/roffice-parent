/**
 * 公司公告添加和修改表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.note.view.NoteWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.note.viewModel.NoteViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.noteWindow',
    viewModel: 'noteViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'noteStore'
    },
    xtype: "noteWindow",
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [{
            fieldLabel: '标题',
            allowBlank: false,
            bind: {
                activeError: '{validation.name}',
                value: '{rec.name}'
            }
        }, {
            fieldLabel: '星级',
            xtype: 'fieldcontainer',
            allowBlank: false,
            bind: {
                activeError: '{validation.rating}',
                //value: '{rec.rating}'
            },
            items: [{
                xtype: 'rating',
                scale: '150%',
                bind: '{rec.rating}'
            }]
        }, {
            fieldLabel: '内容',
            allowBlank: false,
            xtype: 'textarea',
            bind: {
                activeError: '{validation.content}',
                value: '{rec.content}'
            }
        }]
    }]
});