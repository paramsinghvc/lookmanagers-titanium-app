var args = arguments[0] || {};

Alloy.Globals.productsTab = $.customersTab;

var customers = Alloy.Collections.instance('customers');

customers.url = function() {
	return Alloy.Globals.apiUri +"customers?phouse=1";
};
customers.fetch({
	data : {
		page : 1
	}
});


 var customerRowClick = function(event){
	 var customerId = customers.at(event.index).attributes.id;
	
	var cust = Alloy.createController('customers/customer', {customerId : customerId}).getView();
	
	
	$.customersTab.open(cust);
		
	
};
