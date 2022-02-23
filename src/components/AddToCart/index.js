import React, {useState, useContext, useRef, useEffect} from 'react';
import {Input, Icon, Transition} from 'semantic-ui-react';
import CartContext from '../Context/CartContext';

const Moltin = require('../../../lib/moltin');

const AddToCart = ({productId}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState(false);
  const {addToCart} = useContext(CartContext);

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const handleSubmit = async () => {
    const cartId = await localStorage.getItem('mcart');

    const error = validate(quantity);
    setError(error);
    if (!error) {
      setLoading(true);
      Moltin.addToCart(cartId, productId, quantity)
        .then(() => {
          addToCart(quantity, cartId);
          setLoading(false);
          setQuantity(quantity);
          setVisible(true);
          toggleMessage();
        })
        .catch(err => {
          setError(`Error: ${err.errors[0].detail}` || 'Something went wrong');
          setLoading(false);
        });
    }
  };

  // 驗證input不能是空白和非數字

  const validate = quantity => {
    let error;
    const re = /^[0-9\b]+$/;

    if (!quantity) error = "Can't be blank";
    if (!re.test(quantity)) error = 'Please enter an integer for the quantity';

    return error;
  };

  return (
    <>
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        min={1}
        //step按上下鍵時數字一次加多少
        step={1}
        //error={!!error}有toggle的意思，有錯的時候就紅框，沒錯的時候就普通框，若
        // 是只加error就會都一直呈現紅框
        error={!!error}
        // error
        onChange={e => setQuantity(e.target.value)}
        action={{
          color: 'orange',
          content: '加入購物車',
          icon: 'plus cart',
          onClick: handleSubmit,
          //loading === true 就會開始loading
          loading,
          //loading === true 按鈕就會disabled
          disabled: loading,
        }}
      />
      {error && (
        <div
          style={{
            color: 'red',
            position: 'absolute',
            left: '9rem',
            top: '4.5rem',
          }}>
          {error}
        </div>
      )}

      <Transition duration={{hide: 600, show: 600}} visible={visible}>
        <div
          style={{
            color: 'green',
            position: 'absolute',
            left: '9rem',
            top: '4.5rem',
          }}>
          <Icon name="check" />
          已加入購物車
        </div>
      </Transition>
    </>
  );
};

/*
 * 左為輸入、右為按鍵
 * 檢查參數
 * 防止重複點擊
 * autofocus
 */

// const AddToCart = ({productId}) => {
//   const [value, setValue] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const {addToCart} = useContext(CartContext);
//   const inputRef = useRef('');

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const handleSubmit = async () => {
//     console.log('ok');
//     setLoading(true);

//     if (!value) {
//       setError('不得為空');
//       setLoading(false);
//     }

//     if (!/^[0-9\b]+$/.test(value)) {
//       setError('請輸入數字');
//       setLoading(false);
//     }

//     const cartId = await localStorage.getItem('mcart');
//     // Moltin是跟elasticpath這個後端有關
//     await Moltin.addToCart(cartId, productId, value);
//     addToCart(value, cartId);
//     setLoading(false);
//     setValue('');
//     setError('');
//   };

//   return (
//     <>
//       <Input
//         type="number"
//         placeholder="請輸入數量"
//         value={value}
//         onChange={e => setValue(e.target.value)}
//         min={1}
//         step={1}
//         action={{
//           color: 'orange',
//           content: '加入購物車',
//           icon: 'plus cart',
//           onClick: handleSubmit,
//           loading,
//           disabled: loading,
//         }}
//         ref={inputRef}
//       />
//       <div style={{color: 'red'}}>{error}</div>
//     </>
//   );
// };

// function AddToCart({productId}) {
//   const [value, setValue] = React.useState(null);
//   const [error, setError] = React.useState(null);
//   const [loading, setLoading] = React.useState(false);
//   const {addToCart} = useContext(CartContext);

//   const inputRef = React.useRef(null);
//   React.useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const handleSummit = async () => {
//     setLoading(true);

//     if (!value) {
//       setError('不得為空');
//       setLoading(false);
//     }

//     if (!/^[0-9\b]+$/.test(value)) {
//       setError('請輸入數字');
//       setLoading(false);
//     }

//     const cartId = await localStorage.getItem('mcart');

//     await Moltin.addToCart(cartId, productId, value);
//     addToCart(value, cartId);
//     setValue(null);

//     setError(null);
//     setLoading(false);
//   };

//   return (
//     <>
//       <Input
//         type="number"
//         placeholder="請輸入數量"
//         value={value}
//         onChange={e => setValue(e.target.value)}
//         min={1}
//         step={1}
//         action={{
//           color: 'orange',
//           content: '加入購物車',
//           icon: 'plus cart',
//           onClick: handleSummit,
//           loading,
//           disabled: loading,
//         }}
//         ref={inputRef}
//       />
//       {error && <div style={{color: 'red'}}>{error}</div>}
//     </>
//   );
// }

// const AddToCart = ({productId}) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [visible, setVisible] = useState(false);
//   const {addToCart} = useContext(CartContext);

//   const toggleMessage = () => {
//     setTimeout(() => {
//       setVisible(false);
//     }, 1000);
//   };

//   const validate = quantity => {
//     let error;
//     const re = /^[0-9\b]+$/;

//     if (!quantity) error = "Can't be blank";
//     if (!re.test(quantity)) error = 'Please enter an integer for the quantity';

//     return error;
//   };

//   const handleSubmit = async () => {
//     const cartId = await localStorage.getItem('mcart');

//     const error = validate(quantity);
//     setError(error);
//     if (!error) {
//       setLoading(true);
//       Moltin.addToCart(cartId, productId, quantity)
//         .then(() => {
//           addToCart(quantity, cartId);
//           setLoading(false);
//           setQuantity(quantity);
//           setVisible(true);
//           toggleMessage();
//         })
//         .catch(err => {
//           setError(`Error: ${err.errors[0].detail}` || 'Something went wrong');
//           setLoading(false);
//         });
//     }
//   };

//   const handleChange = ({target: {value}}) => setQuantity(value);

//   return (
//     <>
//       <Input
//         type="number"
//         placeholder="Quantity"
//         value={quantity}
//         min={1}
//         step={1}
//         error={!!error}
//         onChange={handleChange}
//         action={{
//           color: 'orange',
//           content: '加入購物車',
//           icon: 'plus cart',
//           onClick: handleSubmit,
//           loading,
//           disabled: loading,
//         }}
//       />
//       {error && <div style={{color: 'red', position: 'absolute'}}>{error}</div>}
//       <Transition duration={{hide: 500, show: 500}} visible={visible}>
//         <div
//           style={{
//             color: 'green',
//             position: 'absolute',
//             left: '9rem',
//             top: '4.5rem',
//           }}>
//           <Icon name="check" />
//           已加入購物車
//         </div>
//       </Transition>
//     </>
//   );
// };

export default AddToCart;
