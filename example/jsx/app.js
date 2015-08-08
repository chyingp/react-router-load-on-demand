var Router = ReactRouter,
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute;

var RouteHandler = Router.RouteHandler;

var routes = (
  <Route handler={App}>
  	<DefaultRoute handler={Loader('Home', 'js/home.js')}/>
  	<Route name="home" path="home" handler={Loader('Home', 'js/home.js')} />
  	<Route name="about" path="about" handler={Loader('About', 'js/about.js')}></Route>
  	<Route name="login" path="login" handler={Loader('Login', 'js/login.js')}></Route>
  </Route>
);

var App = React.createClass({
	render: function(){
		return (			
			<RouteHandler />
			);
	}
});

Router.run(routes, function(Handler){
	React.render(<Handler/>, document.getElementById('container'));
});