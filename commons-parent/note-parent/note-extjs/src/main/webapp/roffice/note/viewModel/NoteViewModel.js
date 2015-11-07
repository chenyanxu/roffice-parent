/**
 * 公司公告模型
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.note.viewModel.NoteViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.noteViewModel',
    requires: [
        'kalix.roffice.note.model.NoteModel'
    ],
    data: {
        url: '/kalix/camel/rest/notes',
        rec: Ext.create('kalix.roffice.note.model.NoteModel'),
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        add_image_path: '/kalix/roffice/note/resources/images/note_add.png',
        view_image_path: '/kalix/roffice/note/resources/images/note_view.png',
        delete_image_path: '/kalix/roffice/note/resources/images/note_delete.png',
        edit_image_path: '/kalix/roffice/note/resources/images/note_edit.png',
    }
});