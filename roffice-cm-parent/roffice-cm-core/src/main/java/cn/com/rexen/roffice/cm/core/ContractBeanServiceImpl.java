package cn.com.rexen.roffice.cm.core;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.api.persistence.JsonData;
import cn.com.rexen.core.api.security.IShiroService;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.core.util.Assert;
import cn.com.rexen.roffice.cm.api.biz.IContractBeanService;
import cn.com.rexen.roffice.cm.api.dao.IContractBeanDao;
import cn.com.rexen.roffice.cm.api.query.ContractDto;
import cn.com.rexen.roffice.cm.entities.ContractBean;
import org.apache.commons.lang.StringUtils;

public class ContractBeanServiceImpl extends GenericBizServiceImpl<IContractBeanDao, ContractBean> implements IContractBeanService {
    private IShiroService shiroService;

    public ContractBeanServiceImpl() {
        super.init(ContractBean.class.getName());
    }

    @Override
    public void beforeSaveEntity(ContractBean entity, JsonStatus status) {
        String userName = shiroService.getCurrentUserName();
        Assert.notNull(userName, "用户名不能为空.");
        if (StringUtils.isNotEmpty(userName)) {
            entity.setCreateBy(userName);
            entity.setUpdateBy(userName);
        }
    }

    @Override
    public JsonData getAllEntityByCustomQuery(int page, int limit, String contractNumber) {
        ContractDto queryDto = new ContractDto();

        queryDto.setPage(page);
        queryDto.setLimit(limit);
        queryDto.setContractNumber(contractNumber);

        return getAllEntityByQuery(queryDto);
    }

    public void setShiroService(IShiroService shiroService) {
        this.shiroService = shiroService;
    }
}
