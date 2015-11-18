/**
 * 用户表格
 * @author majian <br/>
 *         date:2015-7-3
 * @version 1.0.0
 */
Ext.define('kalix.roffice.news.view.NewsGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.roffice.news.controller.NewsGridController',
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar',
        'kalix.roffice.news.store.NewsStore',
        'kalix.view.components.common.SecurityActionColumn'
    ],
    alias: 'widget.newsGrid',
    xtype: 'newsGridPanel',
    controller: 'newsGridController',
    //viewModel: 'newsViewModel',
    autoLoad: true,
    stripeRows: true,
    store:{type:'newsStore'},
    listeners:{
        select:function(target,record,index,eOpts){
            var vm=this.lookupViewModel();

            vm.set('rec',record);
            vm.set('sel',true);
        }
    },
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
            //width: 40
        }, {
            text: '标题',
            dataIndex: 'title',
            flex: 1
            //width: 80
        }, /*{
            text: '内容',
            dataIndex: 'content',
            flex: 3
            //width: 60
         },*/ {
            text: '发布人',
            dataIndex: 'publishPeople',
            flex: 1
            //width: 60
        }, {
            text: '发布时间',
            dataIndex: 'publishDate',
            xtype: 'datecolumn',      // the column type
            flex: 1,
            formatter: 'date("Y-m-d H:i:s")'
        },
        {
            xtype: 'securityActionColumn',
            permissions: [
                'roffice:commonsModule:newsMenu:view',
                'roffice:commonsModule:newsMenu:edit',
                'roffice:commonsModule:newsMenu:delete'
            ]
        }
    ],
    plugins: [{
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

        //需要验证权限后添加的按钮
        verifyItems: [{
            text: '添加',
            xtype: 'button',
            permission: 'roffice:commonsModule:newsMenu:add',
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
        id: 'news-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('newsStore'));
            }
        }
    }
    ],

});
