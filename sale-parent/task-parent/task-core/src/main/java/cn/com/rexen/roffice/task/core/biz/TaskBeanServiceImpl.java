package cn.com.rexen.roffice.task.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.core.util.ScriptRunner;
import cn.com.rexen.roffice.task.api.biz.ITaskBeanService;
import cn.com.rexen.roffice.task.api.dao.ITaskBeanDao;
import cn.com.rexen.roffice.task.entities.TaskBean;

import javax.sql.DataSource;
import java.io.*;
import java.sql.SQLException;

/**
 * @类描述： 
 * @创建人：  
 * @创建时间： 
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class TaskBeanServiceImpl extends GenericBizServiceImpl<ITaskBeanDao, TaskBean> implements ITaskBeanService {
    private DataSource dataSource;
    private JsonStatus jsonStatus = new JsonStatus();

    public TaskBeanServiceImpl() {
        super.init(TaskBean.class.getName());
    }

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    /**
     * 重新计算任务的完成情况
     */
    @Override
    public void runTaskCalculate() throws UnsupportedEncodingException {
        InputStream inputStream=this.getClass().getClassLoader().getResourceAsStream("caculate.sql");
        BufferedReader br = new BufferedReader(new InputStreamReader(inputStream,"UTF-8"));
        ScriptRunner scriptRunner=new ScriptRunner(dataSource,false,true);
        try {
            scriptRunner.runScript(br);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
}
