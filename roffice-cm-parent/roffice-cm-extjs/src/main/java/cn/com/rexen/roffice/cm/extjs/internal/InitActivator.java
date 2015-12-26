package cn.com.rexen.roffice.cm.extjs.internal;

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

        reference = bundleContext.getServiceReference(HttpService.class);

        if (reference != null) {
            httpService = (HttpService) bundleContext.getService(reference);
        }

        if (httpService != null) {
            httpService.registerResources(contextPath+ "/app/roffice/contract", "/roffice/contract", null);
            httpService.registerResources(contextPath+ "/app/roffice/invoice", "/roffice/invoice", null);
            httpService.registerResources(contextPath+ "/app/roffice/contractDetail", "/roffice/contractDetail", null);
            httpService.registerResources(contextPath+ "/roffice/cm/resources/images", "/resources/images", null);
        }
    }

    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        System.out.println("STOP--BUNDLE->" + bundleContext.getBundle());

        if (httpService != null) {
            httpService.unregister(contextPath+ "/app/roffice/contract");
            httpService.unregister(contextPath+ "/app/roffice/invoice");
            httpService.unregister(contextPath+ "/app/roffice/contractDetail");
            httpService.unregister(contextPath+ "/roffice/cm/resources/images");
        }

        if (reference != null) {
            bundleContext.ungetService(reference);
        }
    }
}
