import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Style = styled.div`
	header {
		background: #0071bc;
		color: #fff;
	}
`;

const Header: React.FunctionComponent = () => {
	return (
		<Style>
			<header role="banner">
				<div>
					<Link to="/">
						<img src="" alt="markuplint" />
					</Link>
				</div>
			</header>
		</Style>
	);
};

export default Header;
