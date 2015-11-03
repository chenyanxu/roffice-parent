package cn.com.rexen.roffice.chance.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.roffice.chance.api.biz.IChanceBeanService;
import cn.com.rexen.roffice.chance.api.dao.IChanceBeanDao;
import cn.com.rexen.roffice.chance.entities.ChanceBean;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class ChanceBeanServiceImpl extends GenericBizServiceImpl<IChanceBeanDao, ChanceBean> implements IChanceBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public ChanceBeanServiceImpl() {
        super.init(ChanceBean.class.getName());
    }
}
