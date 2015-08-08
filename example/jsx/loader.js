var Loader = function(mod, path){
	return React.createClass({
		displayName: 'ReactProxy',
		loadComponent: function(callback){
			var that = this;

			if(!that.state.component){
				var script = document.createElement('script');
				script.src = path;
				script.onload = function(){
					callback && callback(window[mod]);
				};
				document.body.appendChild(script);
			}else{
				return that.state.component;
			}
		},
		componentWillMount: function(){
			if(!this.state.component) {
				this.loadComponent(function(component) {
					if(this.isMounted()) {
						this.setState({ component: component });
					}
				}.bind(this));
			}
		},
		getInitialState: function(){
			return { component: null };
		},
		render: function(){
			var Component = this.state.component;
			if(Component) {
				return React.createElement(Component, this.props, this.props.children);
			} else if(this.renderUnavailable) {
				return this.renderUnavailable();
			} else {
				return null;
			}
		}
	});
};
