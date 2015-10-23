package cn.com.rexen.roffice.cm.entities.internal;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

/**
 * Created by lenovo on 2015/10/23.
 */
public class InitActivator implements BundleActivator {
    @Override
    public void start(BundleContext bundleContext) throws Exception {
        System.out.println(bundleContext.getBundle().getSymbolicName() +"--start");
    }

    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        System.out.println(bundleContext.getBundle().getSymbolicName() +"--stop");
    }
}
