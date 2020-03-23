import {action, select, thunk} from 'easy-peasy';

const actions = {
  // ACTIONS
  setTest: action((state, payload) => {
    state.istest = payload;
  }),
  setName: action((state, {key, value}) => {
    state[key] = value;
  }),
};

const thunks = {
  // THUNKS
  updateName: thunk((actions, payload) => {
    // Notice that the thunk will receive the actions allowing you to dispatch
    // other actions after you have performed your side effect.
    const first = 'HARISH';
    const last = 'JANGRA';

    actions.setName({key: 'firstName', value: first});
    actions.setName({key: 'lastName', value: last});
  }),
};

const TestModel = {
  ...actions,
  ...thunks,
  istest: 'TEST',
  firstName: '',
  lastName: '',
};

export default TestModel;
