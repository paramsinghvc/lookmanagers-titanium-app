var args = arguments[0] || {};
var customers = Alloy.Collections.instance('customers');
// var customers = Alloy.Collections.instance('customers', {id : '4'});
// var customer = Alloy.createModel('customers', {id : '9'});
customers.url = function() {
	return Alloy.Globals.apiUri +"customers?phouse=1";
};
customers.fetch({
	data : {
		page : 3
	}
});


 var customerRowClick = function(event){
	 var customerId = customers.at(event.index).attributes.id;
	
	var cust = Alloy.createController('customers/customer', {customerId : customerId}).getView();
	args.dm.drawermainview.add(cust);	
	
	
		
	
};
