package org.runner;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class ReportGeneration {
	
	public static void generateJVMReport(String jsonFile)
	{
	File a =new File("C:\\Users\\user\\eclipse-workspace\\CucumberFW\\src\\test\\resources\\Reports");
	Configuration c = new Configuration(a,"Adactin Hotel Automation");
	c.addClassifications("Browser Name", "Chrome");
	c.addClassifications("Browser version", "96");
	c.addClassifications("OS", "Win10");
	List<String> jsonFiles = new ArrayList<String>();
	jsonFiles.add(jsonFile);
	ReportBuilder r = new ReportBuilder(jsonFiles,c);
	r.generateReports();
}
}