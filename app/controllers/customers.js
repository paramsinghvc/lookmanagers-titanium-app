var args = arguments[0] || {};

Alloy.Globals.productsTab = $.customersTab;

var customers = Alloy.Collections.instance('customers');

customers.url = function() {
	return Alloy.Globals.apiUri + "customers?phouse=1";
};
customers.fetch({
	data : {
		page : 1
	}
});

var customerRowClick = function(event) {
	var customerId = customers.at(event.index).attributes.id;

	var cust = Alloy.createController('customers/customer', {
		customerId : customerId
	}).getView();

	$.customersTab.open(cust);

};

function addCustomer() {
	var cust = Alloy.createModel('customers');
	var data = {
		name : 'Denis',
		gender : 'male',
		customer_type_id : '1',
		production_house_id : '1',
		email : 'paramsinghvc@gmail.com',
		phone : '8750243793'
	};
	cust.url = function() {
		return Alloy.Globals.apiUri + "customers";
	};
	cust.save(data, {
		success : function(res) {
			// console.log(res);
		},
		error : function(err) {
			// console.log(err);
		}
	});
}

if (OS_IOS) {
	$.addCustomerButton.addEventListener('click', addCustomer);
}

