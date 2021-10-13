const initialState = { //значение state по умолчанию (первоначальное значение state)
  friends: [
    {id: 1, name: 'Yury', avatar: 'https://vraki.net/sites/default/files/inline/images/3_76.jpg'},
    {id: 2, name: 'Dima', avatar: 'https://cdn.fishki.net/upload/post/2019/01/05/2827841/5-image.jpg'},
    {id: 3, name: 'Vika', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg'}
  ]
};


const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;