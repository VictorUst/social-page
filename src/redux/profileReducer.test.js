import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

const state = {
  posts: [
    {id: 1, message:'Hi, how are you?', count: '20'},
    {id: 2, message:'It is my first post', count: '15'}
  ]
};

test('length of posts should be incremented', () => {
  // 1. test data
  const action = addPostActionCreator('new post text');

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

test('after deleting length of messages should be decremented', () => {
  // 1. test data
  const action = deletePost(1);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
});

test('after deleting length of messages shouldn`t be decrement if id is incorrect', () => {
  // 1. test data
  const action = deletePost(100);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});



