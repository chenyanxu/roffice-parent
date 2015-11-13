package cn.com.rexen.roffice.purchaseinvoice.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.api.security.IShiroService;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.core.util.Assert;
import cn.com.rexen.roffice.purchaseinvoice.api.biz.IPurchaseInvoiceBeanService;
import cn.com.rexen.roffice.purchaseinvoice.api.dao.IPurchaseInvoiceBeanDao;
import cn.com.rexen.roffice.purchaseinvoice.entities.PurchaseInvoiceBean;
import org.apache.commons.lang.StringUtils;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class PurchaseInvoiceBeanServiceImpl extends GenericBizServiceImpl<IPurchaseInvoiceBeanDao, PurchaseInvoiceBean> implements IPurchaseInvoiceBeanService {
    private JsonStatus jsonStatus = new JsonStatus();
    private IShiroService shiroService;

    public PurchaseInvoiceBeanServiceImpl() {
        super.init(PurchaseInvoiceBean.class.getName());
    }

    @Override
    public void beforeSaveEntity(PurchaseInvoiceBean entity, JsonStatus status) {
        String userName = shiroService.getCurrentUserName();
        Assert.notNull(userName, "用户名不能为空.");
        if (StringUtils.isNotEmpty(userName)) {
            entity.setCreateBy(userName);
            entity.setUpdateBy(userName);
        }
    }

    public void setShiroService(IShiroService shiroService) {
        this.shiroService = shiroService;
    }
}
