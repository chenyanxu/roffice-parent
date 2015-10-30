/**
 *@author chenyanxu
 */
Ext.define('App.field.PresenceField', {
    extend: 'Ext.data.field.Field',
    alias: 'data.field.presencefield',
    validators: {
        type: 'presence'
    }
});