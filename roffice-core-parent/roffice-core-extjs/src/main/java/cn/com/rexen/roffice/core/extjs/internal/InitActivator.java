package cn.com.rexen.roffice.core.extjs.internal;

import cn.com.rexen.core.api.osgi.KalixBundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.http.HttpService;

/**
 * BundleActivator for runtime initialize
 *
 * @author ：Chenyanxu
 */
public class InitActivator extends KalixBundleActivator {
    private ServiceReference reference;
    private HttpService httpService;

    @Override
    public void start(BundleContext bundleContext) throws Exception {
        System.out.println("START-BUNDLE->" + bundleContext.getBundle());

        reference = bundleContext.getServiceReference(HttpService.class.getName());

        if (reference != null) {
            httpService = (HttpService) bundleContext.getService(reference);
        }

        if (httpService != null) {
            httpService.registerResources(contextPath+ "/app/roffice", "/roffice", null);
            httpService.registerResources(contextPath+ "/roffice/resources/images", "/resources/images", null);
        }
    }

    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        System.out.println("STOP--BUNDLE->" + bundleContext.getBundle());

        if (httpService != null) {
            httpService.unregister(contextPath+ "/app/roffice");
            httpService.unregister(contextPath+ "/roffice/resources/images");
        }

        if (reference != null) {
            bundleContext.ungetService(reference);
        }

    }
}
