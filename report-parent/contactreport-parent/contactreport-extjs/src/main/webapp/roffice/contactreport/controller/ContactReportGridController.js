/**
 * 合同报表表格控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.contactreport.controller.ContactReportGridController', {
    extend: 'kalix.controller.BaseGridController',
    alias: 'controller.contactreportGridController',

    subtotalsHandler: function(button, checked){
        if(!checked) {
            return;
        }

        // reconfigure the pivot grid with new settings
        this.getView().reconfigurePivot({
            rowSubTotalsPosition: button.text.toLowerCase(),
            colSubTotalsPosition: button.text.toLowerCase()
        });
    },

    totalsHandler: function(button, checked){
        if(!checked) {
            return;
        }

        // reconfigure the pivot grid with new settings
        this.getView().reconfigurePivot({
            rowGrandTotalsPosition: button.text.toLowerCase(),
            colGrandTotalsPosition: button.text.toLowerCase()
        });
    },

    expandAll: function(){
        this.getView().expandAll();
    },

    collapseAll: function(){
        this.getView().collapseAll();
    },
    addTooltip: function (value, metadata, record, rowIndex, colIndex, store) {
        metadata.tdAttr = 'data-qtip="' + value + '"';
        return value;
    }

});
