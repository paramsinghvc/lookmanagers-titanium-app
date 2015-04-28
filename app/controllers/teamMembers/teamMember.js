var args = arguments[0] || {};
var cm = Alloy.Models.instance('teamMembers');
cm.set('id', args.teamMemberId);
cm.url = function() {
	return Alloy.Globals.apiUri + "team_members";
};
cm.parse = function(resp) {
	return resp.team_member;
};

cm.fetch({
	success : function(data) {
		console.log('success data');
		console.log(data.attributes);
		$.name.text = data.attributes.name;
		$.gender.text = data.attributes.gender;
		$.email.text = data.attributes.email;
		$.phone.text = data.attributes.phone;
		var photo_url = data.attributes.photo_url;
		var imageView = Ti.UI.createImageView({
			image : photo_url.indexOf('http') > -1 ? photo_url : encodeURI(Alloy.Globals.imagesBase + "team_members/" + photo_url)
		});
		
		$.cHolder.add(imageView);
	},
	error : function(err) {
		console.log(err);
	}
});
