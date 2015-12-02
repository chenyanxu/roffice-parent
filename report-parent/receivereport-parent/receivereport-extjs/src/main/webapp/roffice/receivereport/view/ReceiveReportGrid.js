/**
 * 合同回款情况表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.receivereport.view.ReceiveReportGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.receivereport.controller.ReceiveReportGridController',
        'kalix.roffice.receivereport.store.ReceiveReportStore',
    ],
    alias: 'widget.receivereportGrid',
    xtype: 'receivereportGridPanel',
    controller: {
        type: 'receivereportGridController',
        storeId: 'receivereportStore',
        cfgForm: 'kalix.roffice.receivereport.view.ReceiveReportWindow',
        cfgViewForm: 'kalix.roffice.receivereport.view.ReceiveReportViewWindow',
        cfgModel: 'kalix.roffice.receivereport.model.ReceiveReportModel'
    },
    store: {
        type: 'receivereportStore'
    },
    features: [{
        id: 'group',
        ftype: 'groupingsummary',
        groupHeaderTpl: '{name}',
        hideGroupedHeader: false,
        enableGroupingMenu: true,
        startCollapsed: true
    }, {
        id: 'group',
        ftype: 'summary',
        dock: 'bottom',
        hideGroupedHeader: false,
        enableGroupingMenu: true,
        startCollapsed: true
    }],
    columns: {
        defaults: {
            flex: 1,
            renderer: 'addTooltip'},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                flex: 0,
                align: 'center',
                renderer:this.update,
                summaryRenderer: function (val, summaryData, dataIndex) {
                    var kvArray=Ext.JSON.toArray(summaryData);

                    if(8==kvArray.length){
                        return '<span style="color:red">合计</span>';
                    }
                    else{
                        return '<span style="color:red">小计</span>';
                    }
                }
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true
            },
            {
                text: '客户经理',
                dataIndex: 'manager',
                flex:0.5
            },
            {
                text: '项目名称',
                dataIndex: 'projectName',
            },
            {
                text: '金额',
                dataIndex: 'summoney',
                renderer: 'renderMoney',
                summaryType: 'sum',
                summaryRenderer: function (val, summaryData, dataIndex) {
                    var out = Ext.util.Format.currency(val);
                    return out + '元';
                }
            },
            {
                text: '已收回款项',
                dataIndex: 'receiveMoney',
                renderer: 'renderMoney',
                summaryType: 'sum',
                summaryRenderer: function (val, summaryData, dataIndex) {
                    var out = Ext.util.Format.currency(val);
                    return out + '元';
                }
            },
            {
                text: '应收款项',
                dataIndex: 'receivables',
                renderer: 'renderPercent',
                flex:0.8,
                summaryType: 'sum',
                summaryRenderer: function (val, summaryData, dataIndex) {
                    var out = Ext.util.Format.currency(val);
                    return out + '元';
                }
            },
            {
                text: '合同编号',
                dataIndex: 'contractNumber'
            },
            {
                text: '备注',
                dataIndex: 'remark',
                flex:0.5
            }]
    },

    bbar:{}


});
