package cn.com.rexen.roffice.cm.core;

import cn.com.rexen.core.security.impl.ShiroGenericBizServiceImpl;
import cn.com.rexen.roffice.cm.api.biz.IContractDetailBeanService;
import cn.com.rexen.roffice.cm.api.dao.IContractDetailBeanDao;
import cn.com.rexen.roffice.cm.entities.ContractDetailBean;

public class ContractDetailBeanServiceImpl extends ShiroGenericBizServiceImpl<IContractDetailBeanDao, ContractDetailBean> implements IContractDetailBeanService {
    public ContractDetailBeanServiceImpl() {
        super.init(ContractDetailBean.class.getName());
    }
}
