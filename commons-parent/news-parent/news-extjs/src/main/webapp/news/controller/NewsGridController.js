/**
 * 用户表格控制器
 *
 * @author majian
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('Kalix.news.controller.NewsGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.newsGridController',

    onPersonSelect: function (grid, record, index, eOpts) {
        //this.setCurrentNews(news);
        console.log(record);
    },
    /**
     * 打开新增操作.
     * @returns {Ext.panel.Panel}
     */
    onAdd: function () {
        var addFormPanel = Ext.create('Kalix.news.view.NewsAddForm', {
            url: this.getView().getViewModel().get("url")
        });
        var win = Ext.create('Ext.Window', {
            width: 400,
            height: 350,
            border: false,
            modal: true,
            viewModel: {
                type: 'newsViewModel'
            },
            //resizable:false,
            icon: 'admin/resources/images/group_add.png',
            bind: {
                text: '{addTitle}'
            },
            items: [addFormPanel]
        });

        win.show();
    },
    /**
     * 打开编辑操作.
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    onEdit: function (grid, rowIndex, colIndex) {

        var sm = grid.getSelectionModel();
        var rec = grid.getStore().getAt(rowIndex)
        console.log(sm);
        console.log('fdfdfdf' + rec);

        /*var rec = grid.getStore().getAt(rowIndex);
         var editFormPanel = Ext.create('Kalix.news.view.NewsEditForm', {
         url: this.getView().getViewModel().get("url")
         });
         var newsModel = Ext.create("Kalix.news.model.NewsModel", {
         id: rec.data.id,
         text: rec.data.text,
         content: rec.data.content,
         });*/
        //var grid = this.lookupReference('fooGrid');
        //this.setCurrentNews(record);

        var editFormPanel = Ext.create('Kalix.news.view.NewsEditForm', {
            url: this.getView().getViewModel().get("url"),
            //newsRef:this.lookupReference('newsRef'),
        });
        //editFormPanel.setCurrentNews(rec.data);
        /* var sm = this.getSelectionModel();
         console.log(sm);
         ;*/
        editFormPanel.loadRecord(rec);

        var win = Ext.create('Ext.Window', {
            width: 400,
            height: 350,
            border: false,
            modal: true,
            viewModel: {
                type: 'newsViewModel'
            },
            //resizable:false,
            icon: 'admin/resources/images/group_edit.png',
            bind: {
                text: '{editTitle}'
            },
            items: [editFormPanel]
        });
        //this.getView().getViewModel.set('rec',record);
        win.show();
    },
    /**
     * 批量删除操作.
     */
    onDeleteAll: function () {
        var selModel = Ext.getCmp("newsDataGrid").getSelectionModel();
        if (selModel.hasSelection()) {
            Ext.Msg.confirm("警告", "确定要删除吗？", function (button) {
                if (button == "yes") {
                    var rows = selModel.getSelection();
                    var ids = "";
                    for (var i = 0; i < rows.length; i++) {
                        if (rows[i] != null && rows[i].id != null) {
                            ids += rows[i].id;
                            if (i + 1 != rows.length) {
                                ids += "_";
                            }
                        }
                    }
                    Ext.Ajax.request({
                        url: "/newsDeleteAllServlet?ids=" + ids,
                        method: "GET",
                        callback: function (options, success, response) {
                            var resp = Ext.JSON.decode(response.responseText);
                            Ext.MessageBox.alert(CONFIG.ALTER_TITLE_INFO, resp.msg);
                            if (resp.success) {
                                var newsname = Ext.getCmp("newsname").getValue();
                                var name = Ext.getCmp("name").getValue();
                                var sex = Ext.getCmp("sex").getValue();
                                var status = Ext.getCmp("status").getValue();
                                var grid = Ext.getCmp("newsDataGrid");
                                var store = grid.getStore();
                                store.reload({
                                    params: {
                                        start: 0,
                                        limit: pageSize,
                                        newsname: newsname,
                                        name: name,
                                        sex: sex,
                                        status: status
                                    }
                                });
                            }
                        }
                    });
                }
            });
        } else {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_ERROR, "请选择要删除的记录！");
        }
    },
    /**
     * 删除单个操作.
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    onDelete: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        var deleteUrl = this.getView().getViewModel().get("url");
        Ext.Msg.confirm("警告", "确定要删除吗？", function (button) {
            if (button == "yes") {
                Ext.Ajax.request({
                    url: deleteUrl + "?id=" + rec.id,
                    method: 'DELETE',
                    callback: function (options, success, response) {
                        var resp = Ext.JSON.decode(response.responseText);
                        Ext.MessageBox.alert(CONFIG.ALTER_TITLE_INFO, resp.msg);
                        if (resp.success) {
                            var grid = Ext.getCmp("newsDataGrid");
                            var store = grid.getStore();
                            store.reload();
                        }
                    }
                });
            }
        });
    }
});