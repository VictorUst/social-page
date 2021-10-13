const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = { //значение state по умолчанию (первоначальное значение state)
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const text = state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {id: 6, message: text}]
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.messageText
      };
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: text });

export default dialogsReducer;