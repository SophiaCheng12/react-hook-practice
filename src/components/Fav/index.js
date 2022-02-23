import React, {useState, useReducer} from 'react';

const InitContextValue = {
  favList: ['19f14ec4-959f-495d-9fa8-bca93bfd15f0'],
  add: () => 0,
  remove: () => 0,
};

const FavContext = React.createContext(InitContextValue);

function FavProvider(props) {
  //以下寫完就可以把資料用context傳到子層去，從23行開始進階成reducer的寫法
  const [favList, dispatch] = useReducer(
    controlFavContext,
    InitContextValue.favList,
  );
  const add = id => dispatch({type: 'ADD', id});
  const remove = id => dispatch({type: 'REMOVE', id});

  return (
    <FavContext.Provider value={{favList, add, remove}}>
      {props.children}
    </FavContext.Provider>
  );
}
//使用reducer，舊的state和新的action產生出新的state
function controlFavContext(state, action) {
  switch (action.type) {
    case 'ADD':
      //如果id已經在state(favList)裡
      if (state.indexOf(action.id) !== -1) {
        return state;
      }
      //如果id不在state(favList)裡，就把它加在最尾端
      return [...state, action.id];
    case 'REMOVE':
      if (state.indexOf(action.id) === -1) {
        return state;
      } else {
        let newState = [...state];
        newState.splice(newState.indexOf(action.id), 1);
        return newState;
      }

    default:
      return state;
  }
}

// function FavProvider(props) {
//   const [favList, dispatch] = React.useReducer(
//     controlFavContext,
//     InitContextValue.favList,
//   );

//   const add = id => dispatch({type: 'ADD', id});
//   const remove = id => dispatch({type: 'REMOVE', id});

//   return (
//     <FavContext.Provider value={{favList, add, remove}}>
//       {props.children}
//     </FavContext.Provider>
//   );
// }

// function controlFavContext(state, action) {
//   switch (action.type) {
//     case 'ADD':
//       if (state.indexOf(action.id) !== -1) {
//         return state;
//       }

//       return [...state, action.id];
//     case 'REMOVE':
//       if (state.indexOf(action.id) === -1) {
//         return state;
//       } else {
//         let newState = [...state];
//         newState.splice(newState.indexOf(action.id), 1);
//         return newState;
//       }
//     default:
//       return state;
//   }
// }

// function useFav() {
//   const {favList, add, remove} = React.useContext(FavContext);

//   const isInFavList = id => favList.indexOf(id) !== -1;
//   const toggleFav = id => (isInFavList(id) ? remove(id) : add(id));

//   return {isInFavList, toggleFav};
// }

//使用 custom hook ， custom hook的開頭都是use

const useFav = () => {
  const {favList, add, remove} = React.useContext(FavContext);

  const isInFavList = id => favList.indexOf(id) !== -1;
  const toggleFav = id => (isInFavList(id) ? remove(id) : add(id));

  return {isInFavList, toggleFav};
};

export {FavContext, InitContextValue, FavProvider, useFav};

// import React from 'react';

// const InitContextValue = {
//   favList: [],
// };

// const FavContext = React.createContext(InitContextValue);

// export {FavContext, InitContextValue};
