/**
 * 合同报表表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.contactreport.view.ContactReportGrid', {
    extend: 'Ext.pivot.Grid',
    requires: [
        'kalix.roffice.contactreport.controller.ContactReportGridController',
        'kalix.roffice.contactreport.store.ContactReportStore',
    ],
    alias: 'widget.contactreportGrid',
    xtype: 'contactreportGridPanel',
    collapsible: true,
    multiSelect: false,
    textGrandTotalTpl:'<font color="red"><b>合计</b></font> ',
    textTotalTpl:'小计 ({name})',
    //height: 350,
    controller: {
        type: 'contactreportGridController',
        storeId: 'contactreportStore',
        cfgForm: 'kalix.roffice.contactreport.view.ContactReportWindow',
        cfgViewForm: 'kalix.roffice.contactreport.view.ContactReportViewWindow',
        cfgModel: 'kalix.roffice.contactreport.model.ContactReportModel'
    },
    store: {
        type: 'contactreportStore'
    },
    selModel: {
        type: 'rowmodel'
    },

    // Set layout type to "outline". If this config is missing then the default layout is "outline"
    viewLayoutType: 'outline',

    // Set this to false if multiple dimensions are configured on leftAxis and
    // you want to automatically expand the row groups when calculations are ready.
    startRowGroupsCollapsed: true,

// Configure the aggregate dimensions. Multiple dimensions are supported.
    aggregate: [{
        dataIndex:  'summoney',
        header:     '合同金额',
        aggregator: 'sum',
        flex:1
    },
        {
            dataIndex:  'grossProfit',
            header:     '合同毛利',
            aggregator: 'sum',
            flex:1
        }],

    // Configure the left axis dimensions that will be used to generate the grid rows
    leftAxis: [{
        dataIndex:  'manager',
        header:     '客户经理',
        flex:0.5
    },{
        dataIndex:  'projectName',
        header:     '项目名称',
        sortable:   false,
        flex:1
    }],

    /**
     * Configure the top axis dimensions that will be used to generate the columns.
     * When columns are generated the aggregate dimensions are also used. If multiple aggregation dimensions
     * are defined then each top axis result will have in the end a column header with children
     * columns for each aggregate dimension defined.
     */
    topAxis: [{
        dataIndex:  'projectType',
        header:     '项目类型'
    }],

    tbar: [{
        text: '操作',
        menu: [{
            text: '全部收起',
            handler: 'collapseAll'
        },{
            text: '全部展开',
            handler: 'expandAll'
        }]
    },{
        text: '小计位置',
        menu: {
            defaults: {
                xtype: 'menucheckitem',
                group:  'subtotals',
                checkHandler: 'subtotalsHandler'
            },
            items: [{
                text: 'First',
                checked: true
            },{
                text: 'Last'
            }]
        }
    },{
        text: '合计位置',
        menu: {
            defaults: {
                xtype: 'menucheckitem',
                group:  'totals',
                checkHandler: 'totalsHandler'
            },
            items: [{
                text: 'First'
            },{
                text: 'Last',
                checked: true
            }]
        }
    }],


    initComponent: function () {
        var me = this;

        //me.width =800;// me.profileInfo.width;

        me.callParent();
    }
});
