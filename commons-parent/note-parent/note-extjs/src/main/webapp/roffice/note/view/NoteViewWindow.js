/**
 * 公司公告查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.roffice.note.view.NoteViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.roffice.note.viewModel.NoteViewModel',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.noteViewWindow',
    viewModel: 'noteViewModel',
    xtype: "noteViewWindow",
    width: 400,
    items: [{
        defaults: {readOnly: true},
        xtype: 'form',
        defaultType: 'displayfield',
        bodyPadding: 10,
        buttonAlign: "center",
        items: [
            {
                fieldLabel: '星级',
                labelAlign: 'right',
                disabled: true,
                xtype: 'fieldcontainer',
                items: [{
                    xtype: 'rating',
                    scale: '150%',
                    bind: '{rec.rating}'
                }]
            },
            {
                fieldLabel: '标题',
                labelAlign: 'right',
                bind: {
                    value: '{rec.name}'
                }
            }, {
                fieldLabel: '内容',
                labelAlign: 'right',
                bind: {
                    value: '{rec.content}'
                }
            }, {
                fieldLabel: '发布人',
                labelAlign: 'right',
                bind: {
                    value: '{rec.publishPeople}'
                }
            }, {
                fieldLabel: '发布时间',
                labelAlign: 'right',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.publishDate}'
                },
                renderer: function (value) {
                    var createDate = new Date(value);
                    return createDate.format("yyyy-MM-dd hh:mm:ss");
                }
            }]
    }]
});