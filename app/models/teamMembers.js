exports.definition = {
	config: {
		debug : "1",
		adapter: {
			type: "restapi",
			collection_name: "teamMembers",
			idAttribute: "id"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			initialize : function(args){

			}
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			
			parse: function(resp){
				return resp.data;
			}
		});

		return Collection;
	}
};