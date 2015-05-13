var args = arguments[0] || {};

var radioButton = require('tiRadioButton');
var image;
var genderRadioGroup = radioButton.createGroup({
	groupId : 1,
	width : 50,
	height : 20,
	layout : 'horizontal',
	radioItemsValue : ['Male', 'Female'],
	radioItemsPadding : 10,
	radioItemsBackgroundSelectedImage : 'radioButtonActive.png',
	radioItemsBackgroundImage : 'radioButton.png',
	radioItemsWidth : 16,
	radioItemsHeight : 16
});

$.genderRadio.add(genderRadioGroup);

var customerTypeRadioGroup = radioButton.createGroup({
	groupId : 1,
	width : 50,
	height : 20,
	layout : 'horizontal',
	radioItemsValue : ['Store', 'Client'],
	radioItemsPadding : 10,
	radioItemsBackgroundSelectedImage : 'radioButtonActive.png',
	radioItemsBackgroundImage : 'radioButton.png',
	radioItemsWidth : 16,
	radioItemsHeight : 16
});

$.customerTypeRadio.add(customerTypeRadioGroup);

function saveCustomer() {
	var cust = Alloy.createModel('customers');
	var data = {
		name : $.name.value,
		gender : genderRadioGroup.value == 'Male' ? 'male' : 'female',
		customer_type_id : customerTypeRadioGroup.value == 'store' ? '1' : '2',
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
		success : function(model, response, options) {
			alert('Customer Saved Successfully');

		},
		error : function(model, response, options) {
			alert('This phone has already been taken!');

		}
	});
}

$.saveCustomerButton.addEventListener('click', saveCustomer);

$.photoUpload.addEventListener('click', function() {

	var dialog = Titanium.UI.createOptionDialog({

		title : 'Choose an image source...',

		options : ['Camera', 'Photo Gallery', 'Cancel'],

		cancel : 2
	});

	dialog.addEventListener('click', function(e) {

		if (e.index == 0) {

			Titanium.Media.showCamera({

				success : function(event) {

					 image = event.media;

					if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {

						if (image.width > 4096 || image.height > 4096) {
							image = image.imageAsResized(image.width / 1.5, image.height / 1.5);
							if (image.width > 4096 || image.height > 4096) {
								image = image.imageAsResized(image.width / 1.5, image.height / 1.5);
							}
						}
						$.photo.image = image;
					}
				},
				cancel : function() {

				},
				error : function(error) {

					var a = Titanium.UI.createAlertDialog({
						title : 'Camera'
					});

					if (error.code == Titanium.Media.NO_CAMERA) {
						a.setMessage('Device does not have camera');
					} else {
						a.setMessage('Unexpected error: ' + error.code);
					}

					// show alert
					a.show();
				},
				allowImageEditing : true,
				saveToPhotoGallery : true
			});
		} else if (e.index == 1) {

			Titanium.Media.openPhotoGallery({
				success : function(event) {

					 image = event.media;

					if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {

						if (image.width > 4096 || image.height > 4096) {
							image = image.imageAsResized(image.width / 1.5, image.height / 1.5);
							if (image.width > 4096 || image.height > 4096) {
								image = image.imageAsResized(image.width / 1.5, image.height / 1.5);
							}
						}
						$.photo.image = image;
					}
				},
				cancel : function() {
				}
			});
		} else {

		}
	});

	//show dialog
	dialog.show();
});

