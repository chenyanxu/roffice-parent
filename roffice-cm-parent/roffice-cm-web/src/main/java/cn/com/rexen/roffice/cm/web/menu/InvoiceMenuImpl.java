package cn.com.rexen.roffice.cm.web.menu;

import cn.com.rexen.core.api.web.IMenu;

/**
 * @author chenyanxu
 */
public class InvoiceMenuImpl implements IMenu {
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
        return "billMenu";
    }

    @Override
    public String getText() {
        return "项目合同发票";
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
        return "roffice/Invoice";
    }

    @Override
    public int getIndex() {
        return 1;
    }

    @Override
    public String getPermission() {
        return null;
    }


}
