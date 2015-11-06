/**
 * 项目管理首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.project.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'kalix.roffice.project.store.ProjectStore',  //用户模型集合
        'kalix.roffice.project.view.ProjectGrid',
        'kalix.roffice.project.view.ProjectSearchForm'
    ],
    items: [
        {
            title: '项目管理查询',
            iconCls: 'x-fa fa-search',
            xtype: 'projectSearchForm'
        }, {
            xtype: 'projectGridPanel',
            id: 'projectGridPanel',
            title: '项目管理列表',
            iconCls: 'x-fa fa-table',
            margin: 10,
            store: {
                type: 'projectStore'
            }
        }
    ]
});
