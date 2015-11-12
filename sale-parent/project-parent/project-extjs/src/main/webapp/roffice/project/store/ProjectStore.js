/**
 * 项目管理数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.project.store.ProjectStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.roffice.project.model.ProjectModel',
    alias: 'store.projectStore',
    xtype: 'projectStore',
    storeId: "projectStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/projects/list',
        paramsAsJson: true,
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
        reader: {
            type: "json",
            rootProperty: "data",
            totalProperty: 'totalCount'
        }
    }
});