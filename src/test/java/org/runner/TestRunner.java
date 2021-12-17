package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/resources/Features/CancelBooking.feature"},glue = {"org.stepdefn"},dryRun = false
,plugin = {"pretty","json:src/test/resources/Reports/Output.json"},monochrome = true )
public class TestRunner extends ReportGeneration{
	@AfterClass
	public static void b() {
		generateJVMReport("C:\\Users\\user\\eclipse-workspace\\CucumberFW\\src\\test\\resources\\Reports\\Output.json");
	}

}
