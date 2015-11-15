package cn.com.rexen.roffice.cm.extjs.internal;

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
    public static final String KALIX_APP_ROFFICE_CONTRACT = "/kalix/app/roffice/contract";
    public static final String KALIX_APP_ROFFICE_INVOICE = "/kalix/app/roffice/invoice";
    public static final String KALIX_APP_ROFFICE_CONTRACTDETAIL = "/kalix/app/roffice/contractDetail";
    public static final String KALIX_ROFFICE_CM_RESOURCES_IMAGES = "/kalix/roffice/cm/resources/images";
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
            httpService.registerResources(KALIX_APP_ROFFICE_CONTRACT, "/roffice/contract", null);
            httpService.registerResources(KALIX_APP_ROFFICE_INVOICE, "/roffice/invoice", null);
            httpService.registerResources(KALIX_APP_ROFFICE_CONTRACTDETAIL, "/roffice/contractDetail", null);
            httpService.registerResources(KALIX_ROFFICE_CM_RESOURCES_IMAGES, "/resources/images", null);
        }
    }

    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        System.out.println("STOP--BUNDLE->" + bundleContext.getBundle());

        if (httpService != null) {
            httpService.unregister(KALIX_APP_ROFFICE_CONTRACT);
            httpService.unregister(KALIX_APP_ROFFICE_INVOICE);
            httpService.unregister(KALIX_APP_ROFFICE_CONTRACTDETAIL);
            httpService.unregister(KALIX_ROFFICE_CM_RESOURCES_IMAGES);
        }

        if (reference != null) {
            bundleContext.ungetService(reference);
        }
    }
}
