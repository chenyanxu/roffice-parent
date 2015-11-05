package cn.com.rexen.roffice.chance.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class ChanceMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getModuleId() {
        return SaleConst.MODULE_NAME;
    }

    @Override
    public String getParentMenuId() {
        return null;
    }

    @Override
    public String getId() {
        return "chanceMenu";
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


    @Override
    public String getIconCls() {
        return "x-fa fa-cutlery";
    }

    @Override
    public String getText() {
        return "项目机会";
    }

    @Override
    public String getRouteId() {
        return "roffice/Chance";
    }

    @Override
    public String getPermission() {
        return "";
    }


}
