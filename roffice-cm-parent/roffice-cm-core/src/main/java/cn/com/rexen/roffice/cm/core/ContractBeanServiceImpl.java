package cn.com.rexen.roffice.cm.core;


//import cn.com.rexen.core.impl.biz.ShiroGenericBizServiceImpl;
import cn.com.rexen.core.impl.biz.ShiroGenericBizServiceImpl;
import cn.com.rexen.roffice.cm.api.biz.IContractBeanService;
import cn.com.rexen.roffice.cm.api.dao.IContractBeanDao;
import cn.com.rexen.roffice.cm.entities.ContractBean;

public class ContractBeanServiceImpl extends ShiroGenericBizServiceImpl<IContractBeanDao, ContractBean> implements IContractBeanService {
    public ContractBeanServiceImpl() {
        super.init(ContractBean.class.getName());
    }
}
