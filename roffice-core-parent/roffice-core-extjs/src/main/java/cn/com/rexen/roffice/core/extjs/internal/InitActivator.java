package cn.com.rexen.roffice.core.extjs.internal;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

/**
 * BundleActivator for runtime initialize
 *
 * @author ：Chenyanxu
 */
public class InitActivator implements BundleActivator {
    @Override
    public void start(BundleContext bundleContext) throws Exception {
        System.out.println("START-BUNDLE->" + bundleContext.getBundle());
    }

    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        System.out.println("STOP--BUNDLE->" + bundleContext.getBundle());
    }
}
