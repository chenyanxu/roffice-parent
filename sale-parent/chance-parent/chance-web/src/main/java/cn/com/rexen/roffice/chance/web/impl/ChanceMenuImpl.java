package cn.com.rexen.roffice.chance.web.impl;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.roffice.core.web.app.Const;

public class ChanceMenuImpl implements IMenu {
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
        return Const.CHANCE_MENU_ID;
    }

    @Override
    public String getDescription() {
        return Const.CHANCE_MENU_TEXT;
    }

    @Override
    public String getIcon() {
        return null;
    }

    @Override
    public int getIndex() {
        return Const.CHANCE_MENU_INDEX;
    }


    @Override
    public String getIconCls() {
        return Const.CHANCE_MENU_ICON_CLASS;
    }

    @Override
    public String getText() {
        return Const.CHANCE_MENU_TEXT;
    }

    @Override
    public String getRouteId() {
        return Const.CHANCE_MENU_ROUTE_ID;
    }

    @Override
    public String getPermission() {
        return Const.CHANCE_MENU_PERMISSION;
    }


}
