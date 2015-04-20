var args = arguments[0] || {};
var cm = Alloy.Models.instance('customers');

cm.url = function() {
	return Alloy.Globals.apiUri + "customers/" + args.customerId;
};
cm.parse = function(resp) {
	return resp.customer;
};

cm.fetch({
	success : function(data) {
		$.name.text = data.attributes.name;
		$.gender.text = data.attributes.gender;
		$.city.text = data.attributes.city;
	},
	error : function(err) {
		console.log(err);
	}
});

