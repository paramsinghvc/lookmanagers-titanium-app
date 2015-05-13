var args = arguments[0] || {};

Alloy.Globals.customersTab = $.customersTab;
var customers = Alloy.Collections.customers;

customers.url = function() {
	return Alloy.Globals.apiUri + "customers?phouse=1";
};
function fetchData(e) {

	customers.fetch({
		data : {
			page : 1
		},
		success : function() {
			if (e)
				e.hide();
		},
		error : function() {
			if (e)
				e.hide();
		}
	});
}

if (OS_ANDROID)
	$.ptr.refresh();

if (OS_IOS || OS_MOBILEWEB) {
	fetchData();
}
var customerRowClick = function(event) {
	var customerId = customers.at(event.index).attributes.id;

	var cust = Alloy.createController('customers/customer', {
		customerId : customerId
	}).getView();

	$.customersTab.open(cust);
};

function addCustomer() {
	var custNew = Alloy.createController('customers/customerNew').getView();
	$.customersTab.open(custNew);
}

if (OS_IOS || OS_MOBILEWEB) {
	$.addCustomerButton.addEventListener('click', addCustomer);
}

