package cn.com.rexen.roffice.travel.web.impl;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.roffice.core.web.app.Const;

public class TravelMenuImpl implements IMenu {
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
        return Const.TRAVEL_MENU_ID;
    }

    @Override
    public String getDescription() {
        return Const.TRAVEL_MENU_ID;
    }

    @Override
    public String getIcon() {
        return "admin/resources/images/building.png";
    }

    @Override
    public int getIndex() {
        return Const.TRAVEL_MENU_INDEX;
    }

    @Override
    public String getPermission() {
        return Const.TRAVEL_MENU_PERMISSION;
    }

    @Override
    public String getIconCls() {
        return Const.TRAVEL_MENU_ICON_CLASS;
    }

    @Override
    public String getText() {
        return Const.TRAVEL_MENU_TEXT;
    }

    @Override
    public String getRouteId() {
        return Const.TRAVEL_MENU_ROUTE_ID;
    }


}
