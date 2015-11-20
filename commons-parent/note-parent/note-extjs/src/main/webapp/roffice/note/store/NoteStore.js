/**
 * 公司公告数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.note.store.NoteStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.note.model.NoteModel',
    alias: 'store.noteStore',
    xtype: 'noteStore',
    storeId: "noteStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/notes/list',
        paramsAsJson: true,
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'DELETE'
        },
        reader: {
            type: "json",
            rootProperty: "data",
            totalProperty: 'totalCount'
        }
    }
});