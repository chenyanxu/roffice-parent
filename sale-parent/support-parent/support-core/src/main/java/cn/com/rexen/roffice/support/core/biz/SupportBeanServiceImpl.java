package cn.com.rexen.roffice.support.core.biz;

import cn.com.rexen.core.impl.biz.ShiroGenericBizServiceImpl;
import cn.com.rexen.roffice.support.api.biz.ISupportBeanService;
import cn.com.rexen.roffice.support.api.dao.ISupportBeanDao;
import cn.com.rexen.roffice.support.entities.SupportBean;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class SupportBeanServiceImpl extends ShiroGenericBizServiceImpl<ISupportBeanDao, SupportBean> implements ISupportBeanService {
    public SupportBeanServiceImpl() {
        super.init(SupportBean.class.getName());
    }
}
