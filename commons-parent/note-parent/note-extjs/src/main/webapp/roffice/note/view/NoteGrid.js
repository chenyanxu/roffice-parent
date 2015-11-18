/**
 * 公司公告表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.note.view.NoteGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.plugin.Exporter',
        'kalix.roffice.note.viewModel.NoteViewModel',
        'kalix.roffice.note.controller.NoteGridController',
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar',
        'kalix.view.components.common.SecurityActionColumn'
    ],
    alias: 'widget.noteGrid',
    xtype: 'noteGridPanel',
    controller: 'noteGridController',
    viewModel: 'noteViewModel',
    autoLoad: true,
    stripeRows: true,
    //reference: 'employeeGrid',
    /*viewConfig: {
     forceFit: true,
     },*/
    columns: [
        /*{
         xtype: "rownumberer",
         text: "行号",
         width: 50,
         align: 'center'
         },*/
        {
            text: '编号',
            dataIndex: 'id',
            hidden: true,
            flex: 1
        }, {
            text: '星级',
            xtype: 'widgetcolumn',
            flex: 1,
            //disabled: true,
            //stopSelection :false,
            dataIndex: 'rating',
            //focusable: false,
            widget: {
                xtype: 'rating',
                style: 'color: orange;',
                overStyle: 'color: red;',
                /*bind: {
                 disabled:'{!employeeGrid.selection}'
                 }*/
                focusable: false,
                listeners: {
                    change: function (picker, value) {
                        console.log('Rating ' + value);
                        console.log('Rating new value is ' + value + ' ,olde value is ' + this.getValue());

                    },
                    onclick: function (event) {
                        var value = this.valueFromEvent(event);
                        console.log('Rating new value is ' + value + ' ,olde value is ' + this.getValue());
                        this.setValue(value);
                    },
                }
            },

        }, {
            text: '标题',
            dataIndex: 'name',
            flex: 1
        },
        /*{
            text: '内容',
            dataIndex: 'content',
            flex: 3
         },*/ {
            text: '发布人',
            dataIndex: 'publishPeople',
            flex: 1
        }, {
            text: '发布时间',
            dataIndex: 'publishDate',
            flex: 1,
            xtype: 'datecolumn',
            formatter: 'date("Y-m-d H:i:s")'
        },
        {
            xtype: 'securityActionColumn',
            permissions: [
                'roffice:commonsModule:noteMenu:view',
                'roffice:commonsModule:noteMenu:edit',
                'roffice:commonsModule:noteMenu:delete'
            ]
        }
    ],
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
        ptype: 'rowexpander',
        rowBodyTpl: new Ext.XTemplate(
            '<p><b>内容:</b> {content}</p>',
            {
                formatChange: function (v) {
                    var color = v >= 0 ? 'green' : 'red';
                    return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
                }
            })
    }],
    collapsible: true,
    animCollapse: true,

    tbar: {
        xtype: 'securityToolbar',

        //无需授权的按钮
        /*items: [

         ]*/

        //需要验证权限后添加的按钮
        verifyItems: [{
                text: '添加',
                xtype: 'button',
            permission: 'roffice:commonsModule:noteMenu:add',
                handler: 'onAdd',
                bind: {
                    icon: '{add_image_path}'
                }
        }]
    },

    /*
     grid 组件不自动绑定与 grid 相关的翻页工具条的 store 配置项
     需要手动指定工具条的 store
     */
    bbar: [{
        id: 'note-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('noteStore'));
            }
        }
    }
    ],
    header: {
        itemPosition: 1, // after title before collapse tool
        items: [{
            ui: 'default-toolbar',
            xtype: 'button',
            text: 'Export to Excel',
            handler: 'exportToExcel'
        }]
    }

});
