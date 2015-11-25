package cn.com.rexen.roffice.contactreport.web.impl;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.roffice.core.web.app.Const;

public class ContactReportMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getModuleId() {
        return Const.REPORT_MODULE_ID;
    }

    @Override
    public String getParentMenuId() {
        return null;
    }

    @Override
    public String getId() {
        return Const.CONTACT_REPORT_MENU_ID;
    }

    @Override
    public String getDescription() {
        return Const.CONTACT_REPORT_MENU_TEXT;
    }

    @Override
    public String getIcon() {
        return null;
    }

    @Override
    public int getIndex() {
        return Const.CONTACT_REPORT_MENU_INDEX;
    }

    @Override
    public String getIconCls() {
        return Const.CONTACT_REPORT_MENU_ICON_CLASS;
    }

    @Override
    public String getText() {
        return Const.CONTACT_REPORT_MENU_TEXT;
    }

    @Override
    public String getRouteId() {
        return Const.CONTACT_REPORT_MENU_ROUTE_ID;
    }

    @Override
    public String getPermission() {
        return Const.CONTACT_REPORT_MENU_PERMISSION;
    }

}
