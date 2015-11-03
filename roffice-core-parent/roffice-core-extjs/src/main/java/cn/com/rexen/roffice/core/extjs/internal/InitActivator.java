package cn.com.rexen.roffice.core.extjs.internal;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.service.http.HttpService;

/**
 * BundleActivator for runtime initialize
 *
 * @author ：Chenyanxu
 */
public class InitActivator implements BundleActivator {
    @Override
    public void start(BundleContext bundleContext) throws Exception {
        System.out.println("START-BUNDLE->" + bundleContext.getBundle());

        reference = bundleContext.getServiceReference(HttpService.class.getName());
        httpService = (HttpService) bundleContext.getService(reference);
        httpService.registerResources("/kalix/app/roffice", "/roffice", null);
    }

    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        System.out.println("STOP--BUNDLE->" + bundleContext.getBundle());
    }
}
