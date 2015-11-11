package cn.com.rexen.roffice.support.web.impl;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.roffice.core.web.app.Const;

public class SupportMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getModuleId() {
        return Const.SALE_MODULE_ID;
    }

    @Override
    public String getParentMenuId() {
        return null;
    }

    @Override
    public String getId() {
        return Const.SUPPORT_MENU_ID;
    }

    @Override
    public String getDescription() {
        return Const.SUPPORT_MENU_TEXT;
    }

    @Override
    public String getIcon() {
        return Const.APPLICATION_NAME;
    }

    @Override
    public int getIndex() {
        return Const.SUPPORT_MENU_INDEX;
    }

    @Override
    public String getIconCls() {
        return Const.SUPPORT_MENU_ICON_CLASS;
    }

    @Override
    public String getText() {
        return Const.SUPPORT_MENU_TEXT;
    }

    @Override
    public String getRouteId() {
        return Const.SUPPORT_MENU_ROUTE_ID;
    }

    @Override
    public String getPermission() {
        return Const.SUPPORT_MENU_PERMISSION;
    }


}
