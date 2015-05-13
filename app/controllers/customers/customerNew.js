var args = arguments[0] || {};
var radioButton = require('./tiRadioButton');

function saveCustomer() {
	var cust = Alloy.createModel('customers');
	var data = {
		name : $.name.value,
		gender : $.gender.value,
		customer_type_id : '1',
		production_house_id : '1',
		email : $.email.value,
		phone : $.phone.value,
		current_city : $.city.value,
		facebook_id : $.facebook_id.value
	};
	cust.url = function() {
		return Alloy.Globals.apiUri + "customers";
	};

	cust.save(data, {
		success : function(model,response, options) {
			alert('Customer Saved Successfully');			
			
		},
		error : function(model, response, options) {
			alert('This phone has already been taken!');
			
		}
	});
}


var radioGroup = radioButton.createGroup({
    groupId:1,
    width:119,
    height:34,
    layout:'horizontal',
    radioItemsValue:['One', 'Two', 'Three'],
    radioItemsPadding:10,
    radioItemsBackgroundSelectedImage:'radioButtonActive.png',
    radioItemsBackgroundImage:'radioButton.png',
    radioItemsWidth:33,
    radioItemsHeight:34
});
$.parentHolder.add(radioGroup);

$.saveCustomerButton.addEventListener('click', saveCustomer);
