import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const store =  {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message:'Hi, how are you?', count: '20'},
        {id: 1, message:'It is my first post', count: '15'}
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Yury', avatar: 'https://vraki.net/sites/default/files/inline/images/3_76.jpg'},
        {id: 2, name: 'Alexandr', avatar: 'https://w7.pngwing.com/pngs/103/461/png-transparent-businessperson-avatar-business-guy-s-public-relations-monochrome-recruiter.png'},
        {id: 3, name: 'Vika', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg'},
        {id: 4, name: 'Dima', avatar: 'https://cdn.fishki.net/upload/post/2019/01/05/2827841/5-image.jpg'},
        {id: 5, name: 'Natasha', avatar: 'https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/kartinka-na-avatar-dlya-devushki-9.jpg'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'You are best'},
        {id: 3, message: 'Thank you'},
        {id: 4, message: 'How are you?'},
        {id: 5, message: 'The weather is sunny today'}
      ],
      newMessageText: '',
    },
    navbarPage: {
      friends: [
        {id: 1, name: 'Yury', avatar: 'https://vraki.net/sites/default/files/inline/images/3_76.jpg'},
        {id: 2, name: 'Dima', avatar: 'https://cdn.fishki.net/upload/post/2019/01/05/2827841/5-image.jpg'},
        {id: 3, name: 'Vika', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg'}
      ]
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbarPage = sidebarReducer(this._state.navbarPage, action);

    this._callSubscriber(this._state);

  }
}

export default store;
window.store = store;