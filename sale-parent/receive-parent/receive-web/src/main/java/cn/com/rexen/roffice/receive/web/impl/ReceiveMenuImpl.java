package cn.com.rexen.roffice.receive.web.impl;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.roffice.core.web.app.Const;

public class ReceiveMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getModuleId() {
        return Const.CM_MODULE_ID;
    }

    @Override
    public String getParentMenuId() {
        return null;
    }

    @Override
    public String getId() {
        return Const.RECEIVE_MENU_ID;
    }

    @Override
    public String getDescription() {
        return Const.RECEIVE_MENU_TEXT;
    }

    @Override
    public String getIcon() {
        return null;
    }

    @Override
    public int getIndex() {
        return Const.RECEIVE_MENU_INDEX;
    }

    @Override
    public String getPermission() {
        return Const.RECEIVE_MENU_PERMISSION;
    }

    @Override
    public String getIconCls() {
        return Const.RECEIVE_MENU_ICON_CLASS;
    }

    @Override
    public String getText() {
        return Const.RECEIVE_MENU_TEXT;
    }

    @Override
    public String getRouteId() {
        return Const.RECEIVE_MENU_ROUTE_ID;
    }
}
