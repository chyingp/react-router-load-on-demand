var Link = ReactRouter.Link;
var Nav = React.createClass({
	render: function(){
		return (
			<ul className="nav">				
				<li><Link to="home">home</Link></li>
				<li><Link to="about">about</Link></li>
				<li><Link to="login">login</Link></li>
			</ul>
			);
	}
});