package cn.com.rexen.roffice.cm.core;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.api.security.IShiroService;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.core.util.Assert;
import cn.com.rexen.roffice.cm.api.biz.IContractDetailBeanService;
import cn.com.rexen.roffice.cm.api.dao.IContractDetailBeanDao;
import cn.com.rexen.roffice.cm.entities.ContractDetailBean;
import org.apache.commons.lang.StringUtils;

public class ContractDetailBeanServiceImpl extends GenericBizServiceImpl<IContractDetailBeanDao, ContractDetailBean> implements IContractDetailBeanService {
    private IShiroService shiroService;

    public ContractDetailBeanServiceImpl() {
        super.init(ContractDetailBean.class.getName());
    }

    @Override
    public void beforeSaveEntity(ContractDetailBean entity, JsonStatus status) {
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
