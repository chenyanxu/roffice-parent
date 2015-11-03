package cn.com.rexen.roffice.chance.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class ChanceMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getModuleId() {
        return "chanceModule";
    }

    @Override
    public String getParentMenuId() {
        return "chanceMenu";
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
    public String getPermission() {
        return "admin:chanceModule:chanceMenu:chanceMenu";
    }

    @Override
    public String getIconCls() {
        return "x-fa fa-cubes";
    }

    @Override
    public String getText() {
        return "项目机会";
    }

    @Override
    public String getRouteId() {
        return "roffice/Chance";
    }
}
