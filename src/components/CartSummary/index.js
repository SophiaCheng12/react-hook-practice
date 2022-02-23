import React, {useState} from 'react';
import {Button, Segment, Divider} from 'semantic-ui-react';
import {Label} from 'semantic-ui-react';

// const test = () => {
//   console.log('ok');
//   setCouponMode(true);
// };

export default ({
  display_price: {
    with_tax: {formatted},
  },
}) => (
  <>
    <div>
      <Divider />
      <Segment clearing size="large">
        <span>
          <strong>總額</strong>
          {` ${formatted}`}
        </span>

        <Button
          color="black"
          floated="right"
          onClick={() => window.alert('結帳')}>
          結帳去！
        </Button>
      </Segment>
    </div>

    <div style={{margin: '1rem'}}>
      {/* onClick={test} */}
      <Label as="a" color="yellow" tag>
        A購物券
      </Label>
      <Label as="a" color="red" tag>
        B購物券
      </Label>
      <Label as="a" color="teal" tag>
        C購物券
      </Label>
    </div>
  </>
);
