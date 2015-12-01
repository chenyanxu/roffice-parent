/**
 * 任务目标表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.task.view.TaskGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.roffice.task.controller.TaskGridController',
        'kalix.roffice.task.store.TaskStore',
    ],
    alias: 'widget.taskGrid',
    xtype: 'taskGridPanel',
    controller: {
        type: 'taskGridController',
        storeId: 'taskStore',
        cfgForm: 'kalix.roffice.task.view.TaskWindow',
        cfgViewForm: 'kalix.roffice.task.view.TaskViewWindow',
        cfgModel: 'kalix.roffice.task.model.TaskModel'
    },
    store: {
        type: 'taskStore'
    },
    features: [{
        id: 'group',
        ftype: 'groupingsummary',
        groupHeaderTpl: '{name}',
        hideGroupedHeader: false,
        enableGroupingMenu: true,
        startCollapsed: false
    },{
        id: 'group',
        ftype: 'summary',
        dock: 'bottom',
        hideGroupedHeader: false,
        enableGroupingMenu: true,
        startCollapsed: false
    }],
    columns: {
        defaults: {flex: 1,
            renderer: 'addTooltip'},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                flex:0,
                align: 'center',
                renderer:this.update
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true,
                flex: 1
            },
             {
                text: '销售负责人',
                dataIndex: 'name',
                flex: 1,
                summaryType: 'count',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return ((value === 0 || value > 1) ? '(' + value + ' 任务)' : '(1 任务)');
                }
            },{
                text: '年度',
                dataIndex: 'year',
                flex: 1,
            }, {
                text: '任务分类',
                dataIndex: 'taskType',
                flex: 1
            },
            {
                text: '合同额',
                dataIndex: 'contactNo',
                flex: 2,
                renderer: 'renderMoney',
                summaryType: 'sum',
                summaryRenderer: function(val, summaryData, dataIndex) {
                    var out = Ext.util.Format.currency(val);
                    return out + '元';
                }
            }, {
                text: '完成合同额',
                dataIndex: 'finishContactNo',
                flex: 2,
                renderer: 'renderMoney',
                summaryType: 'sum',
                summaryRenderer: function(val, summaryData, dataIndex) {
                    var out = Ext.util.Format.currency(val);
                    return out + '元';
                }
            },{
                text     : '合同额进度',
                xtype    : 'widgetcolumn',
                width    : 120,
                flex:0,
                dataIndex: 'contactPercent',
                widget: {
                    xtype: 'progressbarwidget',
                    textTpl: [
                        '{percent:number("0")}% 完成'
                    ]
                },
                summaryRenderer: function(val, summaryData, dataIndex) {

                    var finishTargetNoTotal =Ext.JSON.toArray(summaryData)[6].value; //this.up('grid').getStore().sum('finishTargetNo',true);
                    console.log('Sum >> ', finishTargetNoTotal);
                    var targetNoTotal = Ext.JSON.toArray(summaryData)[5].value;
                    var percentage = (( finishTargetNoTotal / targetNoTotal ) * 100).toFixed(2);

                    return percentage.toString() + '%';
                }
            }, {
                text: '目标毛利',
                dataIndex: 'targetNo',
                flex: 2,
                renderer: 'renderMoney',
                summaryType: 'sum',
                summaryRenderer: function(val, summaryData, dataIndex) {
                    var out = Ext.util.Format.currency(val);
                    return out + '元';;
                }
            },
            {
                text: '完成毛利',
                dataIndex: 'finishTargetNo',
                flex: 2,
                renderer: 'renderMoney',
                summaryType: 'sum',
                summaryRenderer: function(val, summaryData, dataIndex) {
                    var out = Ext.util.Format.currency(val);
                    return out + '元';;
                }
            },
            {
                text     : '毛利进度',
                xtype    : 'widgetcolumn',
                width    : 120,
                flex:0,
                dataIndex: 'targetPercent',
                widget: {
                    xtype: 'progressbarwidget',
                    textTpl: [
                        '{percent:number("0")}% 完成'
                    ]
                },
                summaryRenderer: function(val, summaryData, dataIndex) {
                    var finishTargetNoTotal =Ext.JSON.toArray(summaryData)[9].value; //this.up('grid').getStore().sum('finishTargetNo',true);
                    console.log('Sum >> ', finishTargetNoTotal);
                    var targetNoTotal = Ext.JSON.toArray(summaryData)[8].value;
                    var percentage = (( finishTargetNoTotal / targetNoTotal ) * 100).toFixed(2);

                    return percentage.toString() + '%';
                }
            },
            {
                xtype: 'securityGridColumnRUD',
                permissions: [
                    'roffice:cmModule:taskMenu:view',
                    'roffice:cmModule:taskMenu:edit',
                    'roffice:cmModule:taskMenu:delete'
                ]
            }
        ]
    },
    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                //todo change permission
                permission: 'roffice:cmModule:taskMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
