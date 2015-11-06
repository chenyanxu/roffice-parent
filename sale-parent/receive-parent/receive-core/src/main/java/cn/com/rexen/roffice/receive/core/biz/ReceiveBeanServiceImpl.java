package cn.com.rexen.roffice.receive.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.api.security.IShiroService;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.core.util.Assert;
import cn.com.rexen.roffice.receive.api.biz.IReceiveBeanService;
import cn.com.rexen.roffice.receive.api.dao.IReceiveBeanDao;
import cn.com.rexen.roffice.receive.entities.ReceiveBean;
import org.apache.commons.lang.StringUtils;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class ReceiveBeanServiceImpl extends GenericBizServiceImpl<IReceiveBeanDao, ReceiveBean> implements IReceiveBeanService {
    private JsonStatus jsonStatus = new JsonStatus();
    private IShiroService shiroService;

    public ReceiveBeanServiceImpl() {
        super.init(ReceiveBean.class.getName());
    }

    @Override
    public void beforeSaveEntity(ReceiveBean entity, JsonStatus status) {
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
