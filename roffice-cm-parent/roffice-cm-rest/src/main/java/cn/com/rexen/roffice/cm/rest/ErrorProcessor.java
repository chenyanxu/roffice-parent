package cn.com.rexen.roffice.cm.rest;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;

import java.util.HashMap;
import java.util.Map;


public class ErrorProcessor implements Processor {
    private Map<String, Object> rtnMap = null;

    public ErrorProcessor() {
        this.rtnMap = new HashMap();
    }

    @Override
    public void process(Exchange exchange) throws Exception {
        this.rtnMap.clear();
        this.rtnMap.put("success", false);
        this.rtnMap.put("msg",  ((Exception)exchange.getProperties().get("CamelExceptionCaught")).getMessage());

        exchange.getIn().setBody(rtnMap);
    }
}
