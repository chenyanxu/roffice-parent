package cn.com.rexen.roffice.travel.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.roffice.travel.api.biz.ITravelBeanService;
import cn.com.rexen.roffice.travel.api.dao.ITravelBeanDao;
import cn.com.rexen.roffice.travel.entities.TravelBean;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class TravelBeanServiceImpl extends GenericBizServiceImpl<ITravelBeanDao, TravelBean> implements ITravelBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public TravelBeanServiceImpl() {
        super.init(TravelBean.class.getName());
    }
}
