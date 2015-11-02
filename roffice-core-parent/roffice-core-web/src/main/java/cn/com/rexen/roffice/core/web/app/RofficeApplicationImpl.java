package cn.com.rexen.roffice.core.web.app;

import cn.com.rexen.core.api.web.IApplication;
import cn.com.rexen.core.api.web.IModule;

import java.util.List;

/**
 * Roffice Application
 *
 * @author chenyanxu
 */
public class RofficeApplicationImpl implements IApplication {
    @Override
    public List<IModule> getModules() {
        return null;
    }

    @Override
    public String getTitle() {
        return "协同办公";
    }

    @Override
    public String getId() {
        return Const.APPLICATION_NAME;
    }

    @Override
    public String getText() {
        return "协同办公";
    }

    @Override
    public String getDescription() {
        return "";
    }

    @Override
    public String getIcon() {
        return "resources/images/cog.png";
    }

    @Override
    public String getRouteId() {
        return "";
    }

    @Override
    public int getIndex() {
        return 3;
    }

    @Override
    public String getPermission() {
        return null;
    }
}
