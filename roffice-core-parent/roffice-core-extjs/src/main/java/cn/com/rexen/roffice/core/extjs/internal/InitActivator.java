package cn.com.rexen.roffice.core.extjs.internal;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.http.HttpService;

/**
 * BundleActivator for runtime initialize
 *
 * @author ：Chenyanxu
 */
public class InitActivator implements BundleActivator {
    public static final String KALIX_APP_ROFFICE = "/kalix/app/roffice";
    public static final String KALIX_ROFFICE_RESOURCES_IMAGES = "/kalix/roffice/resources/images";
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
            httpService.registerResources(KALIX_APP_ROFFICE, "/roffice", null);
            httpService.registerResources(KALIX_ROFFICE_RESOURCES_IMAGES, "/resources/images", null);
        }
    }

    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        System.out.println("STOP--BUNDLE->" + bundleContext.getBundle());

        if (httpService != null) {
            httpService.unregister(KALIX_APP_ROFFICE);
            httpService.unregister(KALIX_ROFFICE_RESOURCES_IMAGES);
        }

        if (reference != null) {
            bundleContext.ungetService(reference);
        }

    }
}
