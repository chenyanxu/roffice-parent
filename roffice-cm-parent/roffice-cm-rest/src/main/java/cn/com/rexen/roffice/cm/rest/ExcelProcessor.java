package cn.com.rexen.roffice.cm.rest;

import cn.com.rexen.core.util.ConfigUtil;
import cn.com.rexen.core.util.SerializeUtil;
import cn.com.rexen.excel.api.IExcelService;
import cn.com.rexen.roffice.cm.api.biz.IContractBeanService;
import cn.com.rexen.roffice.cm.entities.ContractBean;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.util.ObjectHelper;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.fileupload.servlet.ServletRequestContext;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.io.InputStream;
import java.util.Dictionary;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class ExcelProcessor implements Processor {
    private IContractBeanService contractBeanService = null;
    private IExcelService excelService=null;
    private ServletFileUpload uploader = null;
    private Map<String, Object> rtnMap = null;

    public ExcelProcessor() {
        this.rtnMap = new HashMap();
        this.uploader = new ServletFileUpload(new DiskFileItemFactory());
    }

    @Override
    @Transactional
    public void process(Exchange exchange) throws Exception {
        this.rtnMap.clear();

        //try {
        HttpServletRequest request = ObjectHelper.cast(HttpServletRequest.class, exchange.getIn().getHeader(Exchange.HTTP_SERVLET_REQUEST));

        if (!ServletFileUpload.isMultipartContent(request)) {
            throw new RuntimeException("Invalid Multipart Content request!");
        }

        uploader.setHeaderEncoding("utf-8");

        ServletRequestContextWrapper wrapper = new ServletRequestContextWrapper(request);
        wrapper.setInputStream(exchange.getIn().getBody(InputStream.class));
        List<FileItem> items = uploader.parseRequest(wrapper);
        if (items.isEmpty()) {
            throw new RuntimeException("Invalid Multipart/form-data Content, file item is empty!");
        }

        FileItem fileItem = null;

        if (items.size() == 1) {
            fileItem = items.get(0);
        }

        exchange.getIn().setHeader("Content-Type", "text/html;charset=utf-8");

        if (fileItem != null) {
            if(fileItem.getSize()>(10*1024*1024)){
                this.rtnMap.put("success", false);
                this.rtnMap.put("msg", "文件过大（上限10MB）！");
            } else {
                Dictionary dictionary = ConfigUtil.getAllConfig("ConfigContractColumnMap");
                Object wb = excelService.OpenExcel(fileItem.getInputStream(), fileItem.getName());
                Object sheet = excelService.OpenSheet(wb, dictionary.get("sheet").toString());
                Map columnMap = excelService.GetColumnDic(sheet, 0, dictionary);
                int startRow = new Integer(dictionary.get("start_row").toString()) - 1;
                int rowCount = excelService.GetRowCount(sheet);

                for (int idx = startRow; idx < rowCount; ++idx) {
                    Map rowMap = excelService.GetRowMap(sheet, idx, columnMap);
                    ContractBean obj = SerializeUtil.unserializeJson(SerializeUtil.serializeJson(rowMap), ContractBean.class);

                    if (obj != null) {
                        contractBeanService.saveEntity(obj);
                    }
                    else{
                        throw new RuntimeException("xxxx");
                    }
                }
            }
        }

        this.rtnMap.put("success", true);
        this.rtnMap.put("msg", "文件导入成功");

        exchange.getIn().setBody(rtnMap);
    }

    public static final class ServletRequestContextWrapper extends ServletRequestContext {

        public InputStream inputStream;

        public ServletRequestContextWrapper(HttpServletRequest request) {
            super(request);
        }

        @Override
        public InputStream getInputStream() {
            return inputStream;
        }

        public void setInputStream(InputStream inputStream) {
            this.inputStream = inputStream;
        }
    }

    public IContractBeanService getContractBeanService() {
        return contractBeanService;
    }

    public void setContractBeanService(IContractBeanService contractBeanService) {
        this.contractBeanService = contractBeanService;
    }

    public IExcelService getExcelService() {
        return excelService;
    }

    public void setExcelService(IExcelService excelService) {
        this.excelService = excelService;
    }
}
