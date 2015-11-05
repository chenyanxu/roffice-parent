package cn.com.rexen.roffice.deploy.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class DeployMenuImpl implements IMenu {
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
        return "deployMenu";
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
        return "实施项目";
    }

    @Override
    public String getRouteId() {
        return "roffice/Deploy";
    }
}
