import React, { Component } from 'react';
import {
	Collapse, 
	Navbar, 
	NavbarToggler,
	NavbarBrand, 
	Nav, 
	NavItem, 
	NavLink, 
	Container
} from 'reactstrap';

class AppNavbar extends Component {

	state = {
		isOpen: false
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	// 	<Collapse isOpen={this.state.isOpen} navbar> // was before <nav>

	render() {

		return (
			<div>
				<Navbar
					color="dark"
					dark
					expand="sm"
					className="mb-5">

					<Container>
						<NavbarBrand href="/">Flo Life</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="/">
										Flo Life
									</NavLink>
								</NavItem>
							</Nav>
					</Container>

				</Navbar>
			</div>

		)
		
	}

}



export default AppNavbar;