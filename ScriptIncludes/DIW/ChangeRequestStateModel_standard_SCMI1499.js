var ChangeRequestStateModel_standard = Class.create();
ChangeRequestStateModel_standard.prototype = Object.extendsObject(ChangeRequestStateModelSNC_standard, {
	draft: {
		nextState: [ "assess", "canceled"], 
		assess:{
			moving: function() {
				//return this.toAssess_moving();
				return true;
			},
			
			canMove: function() {
				//return this.toAssess_canMove();
				return true;
			}
		},
		
		
		canceled: {
			moving: function() {
				return this.toCanceled_moving();
			},
			
			canMove: function() {
				return this.toCanceled_canMove();
			}
		}
	},
	
	assess: {
		nextState: [ "authorize" ],
		
		draft: {
			moving: function() {
				return true;
			},
			
			canMove: function() {
				return true;
			}
		},
		
		authorize: {
			moving: function() {
				// return this.toAuthorize_moving();
				return true;
			},
			
			canMove: function() {
				//return this.toAuthorize_canMove();
				return true;
			}
		},
		
		scheduled: {
			moving: function() {
				return true;
			},
			
			canMove: function() {
				return true;
			}
		},
		
		canceled: {
			moving: function() {
				return this.toCanceled_moving();
			},
			
			canMove: function() {
				return this.toCanceled_canMove();
			}
		}
	},
	
	authorize: {
		
		nextState: [ "scheduled", "canceled" ],
		
		
		scheduled: {
			moving: function() {
				return true;
			},
			
			canMove: function() {
				return true;
			}
		},
		
		draft: {
			moving: function() {
				return true;
			},
			
			canMove: function() {
				return true;
			}
		},
		
		canceled: {
			moving: function() {
				return this.toCanceled_moving();
			},
			
			canMove: function() {
				return this.toCanceled_canMove();
			}
		}
	},
	
	scheduled: {
		nextState: [ "implement", "canceled" ],
		
		implement: {
			moving: function() {
				return this.toImplement_moving();
			},
			canMove: function() {
				return this.toImplement_canMove();
			}
		},
		
		draft: {
			moving: function() {
				return true;
			},
			
			canMove: function() {
				return true;
			}
		},
		assess:{
			moving: function() {
				//return this.toAssess_moving();
				return true;
			},
			
			canMove: function() {
				//return this.toAssess_canMove();
				return true;
			}
		},
		
		canceled: {
			moving: function() {
				return this.toCanceled_moving();
			},
			
			canMove: function() {
				return this.toCanceled_canMove();
			}
		}
	},
	
	implement: {
		nextState: [ "review" , "canceled" ],
		
		review: {
			moving: function() {
				return this.toReview_moving();
			},
			
			canMove: function() {
				return this.toReview_canMove();
			}
		},
		
		canceled: {
			moving: function() {
				return this.toCanceled_moving();
			},
			
			canMove: function() {
				return this.toCanceled_canMove();
			}
		}
	},
	
	review: {
		nextState: [ "closed" , "canceled"],
		
		closed: {
			moving: function() {
				return this.toClosed_moving();
			},
			
			canMove: function() {
				return this.toClosed_canMove();
			}
		},
		
		canceled: {
			moving: function() {
				return this.toCanceled_moving();
			},
			
			canMove: function() {
				return this.toCanceled_canMove();
			}
		}
	},
	
	closed: {},
		
		canceled: {},
			
			type: "ChangeRequestStateModel_standard"
		});