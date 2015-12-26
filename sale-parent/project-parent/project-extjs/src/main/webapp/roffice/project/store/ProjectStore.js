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
    proxyUrl: CONFIG.restRoot+'/camel/rest/projects'
});