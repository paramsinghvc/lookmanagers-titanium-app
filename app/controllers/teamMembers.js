var args = arguments[0] || {};

Alloy.Globals.teamMembersTab = $.teamMembersTab;

var teamMembers = Alloy.Collections.instance('teamMembers');
teamMembers.url = function() {
	return Alloy.Globals.apiUri + "team_members?phouse=1";
};
teamMembers.fetch({
	data : {
		page : 1
	}
});

function modelTransform(model) {

	var t = model.toJSON();
	if (!t.photo_url) {
		t.imageUri = 'images/no_photo.png';
	} else {
		if (t.photo_url.indexOf('http') > -1) {
			t.imageUri = t.photo_url;
		} else {
			t.imageUri = encodeURI(Alloy.Globals.thumbsBase + "team_members/" + t.photo_url);
		}
	}

	return t;

}


 var teamMemberRowClick = function(event){
	 var teamMemberId = teamMembers.at(event.index).attributes.id;
	
	var teamMember = Alloy.createController('teamMembers/teamMember', {teamMemberId : teamMemberId}).getView();
	
	
	$.teamMembersTab.open(teamMember);
		
	
};
