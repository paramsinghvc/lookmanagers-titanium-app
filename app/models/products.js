exports.definition = {  
    config: {
        
        // "debug": 1, 
        "adapter": {
            "type": "restapi",
            "collection_name": "products",
            "idAttribute": "id"
        }
        
    },      
    extendModel: function(Model) {      
        _.extend(Model.prototype, {
        	
        });
        return Model;
    },  
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {
        	parse : function(resp){
        		return resp.data;
        	}
        	
        });
        return Collection;
    }       
};