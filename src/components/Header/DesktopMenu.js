import React, {useState, useEffect} from 'react';
import {Link, withPrefix} from 'gatsby';
import {Menu, Container} from 'semantic-ui-react';
import ShoppingCartIcon from './ShoppingCartIcon';
import Logo from './Logo';

const DesktopMenu = ({location: {pathname}, cartCount}) => {
  const [activeItem, setActiveItem] = useState(pathname);

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  return (
    <Menu size="huge" borderless pointing>
      <Container text>
        <Menu.Item as={Link} to="/" header>
          <Logo />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/cart/"
            active={activeItem === withPrefix('/cart/')}>
            <ShoppingCartIcon cartCount={cartCount} name="Cart" />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default DesktopMenu;
