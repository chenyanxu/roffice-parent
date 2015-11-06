package cn.com.rexen.roffice.receive.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.roffice.receive.api.biz.IReceiveBeanService;
import cn.com.rexen.roffice.receive.api.dao.IReceiveBeanDao;
import cn.com.rexen.roffice.receive.entities.ReceiveBean;

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

    public ReceiveBeanServiceImpl() {
        super.init(ReceiveBean.class.getName());
    }
}
