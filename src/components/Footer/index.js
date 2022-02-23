import React from 'react';
import {Link} from 'gatsby';
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react';

const facebookLink = (
  <a href="https://www.facebook.com/RevtelTech" alt="facebook link">
    Facebook
  </a>
);
const emailLink = (
  <a href="mailto:contact@revteltech.com" alt="email link">
    Email
  </a>
);

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}>
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="關於我們" />
            <List>
              <List.Item as={Link} to="/cart">
                立刻結帳
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="商品列表" />
            <List>
              <List.Item as={Link} to="/">
                回到頂部
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">聯絡我們</Header>
            <List horizontal style={{display: 'flex'}}>
              <List.Item
                icon="facebook"
                style={{display: 'flex'}}
                content={facebookLink}
              />
              <List.Item
                icon="mail"
                style={{display: 'flex'}}
                content={emailLink}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
