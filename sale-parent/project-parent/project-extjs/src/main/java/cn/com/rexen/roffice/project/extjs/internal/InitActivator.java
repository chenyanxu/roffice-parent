package cn.com.rexen.roffice.project.extjs.internal;

import cn.com.rexen.core.api.osgi.KalixBundleActivator;
import cn.com.rexen.core.util.SystemUtil;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.http.HttpService;

/**
 * Created by sunlf on 14-3-23.
 */
public class InitActivator extends KalixBundleActivator {

    private static final String BUNDLE_NAME = " Roffice Project Extjs ";
    private ServiceReference reference;
    private HttpService httpService;

    @Override
    public void start(BundleContext bundleContext) throws Exception {
        SystemUtil.succeedPrintln(String.format("Start-up %s bundle!!", BUNDLE_NAME));

        reference = bundleContext.getServiceReference(HttpService.class.getName());
        httpService = (HttpService) bundleContext.getService(reference);
        httpService.registerResources(contextPath+ "/app/roffice/project", "/roffice/project", null);
        httpService.registerResources(contextPath+ "/roffice/project/resources/images", "/resources/images", null);
    }

    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        SystemUtil.succeedPrintln(String.format("Stop %s bundle!!", BUNDLE_NAME));

        if (httpService != null) {
            httpService.unregister(contextPath+ "/app/roffice/project");
            httpService.unregister(contextPath+ "/roffice/project/resources/images");
        }
        if (reference != null)
            bundleContext.ungetService(reference);
    }
}
