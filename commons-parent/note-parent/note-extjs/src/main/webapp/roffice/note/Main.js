/**
 * 公司通知首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.note.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.note.store.NoteStore',  //用户模型集合
        'kalix.roffice.note.view.NoteGrid',
        'kalix.roffice.note.view.NoteSearchForm'
    ],
    items: [
        {
            title: '公司通知查询',
            iconCls: 'x-fa fa-search',
            xtype: 'noteSearchForm'
        }, {
            xtype: 'noteGridPanel',
            id: 'noteGridPanel',
            title: '公司通知列表',
            iconCls: 'x-fa fa-comment',
            margin: 10,
            store: {
                type: 'noteStore'
            }
        }
    ]
});
