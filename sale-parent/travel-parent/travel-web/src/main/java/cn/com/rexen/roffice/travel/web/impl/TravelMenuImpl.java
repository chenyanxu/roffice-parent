package cn.com.rexen.roffice.travel.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class TravelMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getModuleId() {
        return "saleModule";
    }

    @Override
    public String getParentMenuId() {
        return null;
    }

    @Override
    public String getId() {
        return "travelMenu";
    }

    @Override
    public String getDescription() {
        return null;
    }

    @Override
    public String getIcon() {
        return "admin/resources/images/building.png";
    }

    @Override
    public int getIndex() {
        return 0;
    }

    //todo add permission
    @Override
    public String getPermission() {
        return "";
    }

    //todo change iconcls
    @Override
    public String getIconCls() {
        return "x-fa fa-cubes";
    }

    @Override
    public String getText() {
        return "出差记录";
    }

    @Override
    public String getRouteId() {
        return "roffice/Travel";
    }
}
