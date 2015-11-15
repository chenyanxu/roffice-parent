package cn.com.rexen.roffice.cm.web.menu;

import cn.com.rexen.core.api.web.IMenu;

/**
 * @author chenyanxu
 */
public class ContractDetailMenuImpl implements IMenu {
    @Override
    public boolean isLeaf() {
        return true;
    }

    @Override
    public String getModuleId() {
        return "cmModule";
    }

    @Override
    public String getParentMenuId() {
        return null;
    }

    @Override
    public String getIconCls() {
        return "x-fa fa-credit-card";
    }

    @Override
    public String getId() {
        return "contractDetailMenu";
    }

    @Override
    public String getText() {
        return "合同清单";
    }

    @Override
    public String getDescription() {
        return null;
    }

    @Override
    public String getIcon() {
        return null;
    }

    @Override
    public String getRouteId() {
        return "roffice/ContractDetail";
    }

    @Override
    public int getIndex() {
        return 2;
    }

    @Override
    public String getPermission() {
        return null;
    }


}
