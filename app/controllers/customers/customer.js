var args = arguments[0] || {};
var cm = Alloy.Models.instance('customers');
cm.set('id', args.customerId);
cm.url = function() {
	return Alloy.Globals.apiUri + "customers";
};
cm.parse = function(resp) {
	return resp.customer;
};

cm.fetch({
	success : function(data) {
		$.name.text = data.attributes.name;
		$.gender.text = data.attributes.gender;
		$.city.text = data.attributes.current_city;
		$.email.text = data.attributes.email;
		$.phone.text = data.attributes.phone;
	},
	error : function(err) {
		console.log(err);
	}
});

