package cn.com.rexen.roffice.deploy.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.roffice.deploy.api.biz.IDeployBeanService;
import cn.com.rexen.roffice.deploy.api.dao.IDeployBeanDao;
import cn.com.rexen.roffice.deploy.entities.DeployBean;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class DeployBeanServiceImpl extends GenericBizServiceImpl<IDeployBeanDao, DeployBean> implements IDeployBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public DeployBeanServiceImpl() {
        super.init(DeployBean.class.getName());
    }
}
