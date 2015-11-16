/**
 * 合同选择下拉comboBox
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.roffice.contract.component.ContractComboBox', {
    extend: 'Ext.form.field.ComboBox',
    requires: [
        'kalix.roffice.contract.store.ContractStore'
    ],
    alias: 'widget.contractComboBox',
    allowBlank: false,
    labelAlign: 'right',
    xtype: 'contractComboBox',
    queryMode: 'remote',
    valueField: 'id',
    displayField: 'contractNumber',
    queryParam: 'contractNumber',
    minChars: 0,
    forceSelection: true,
    selectOnFocus: true,
    typeAhead: true,
    store: {
        type: 'contractStore'
    },

});
Ext.override(Ext.form.field.ComboBox, {
    onLoad: function () {
        var me = this,
            value = me.value;

        if (me.ignoreSelection > 0) {
            --me.ignoreSelection;
        }

        if (me.rawQuery) {
            me.rawQuery = false;
            me.syncSelection();
            if (me.picker && !me.picker.getSelectionModel().hasSelection()) {
                me.doAutoSelect();
            }
        }

        else {

            if (me.value || me.value === 0) {
                if (me.pageSize === 0) { // added for paging; do not execute on page change
                    me.setValue(me.value);
                }
            } else {


                if (me.store.getCount()) {
                    me.doAutoSelect();
                } else {

                    me.setValue(me.value);
                }
            }
        }
    }
});

