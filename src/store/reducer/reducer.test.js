import { reducer } from './reducer';
import { ACTION_TYPES, initialState } from '../store';

const testElement = {
  id: '1',
  name: '2',
  date: '3',
  isCompleted: false
};

test('При экшне add reducer возвращает состояние стора, в котором в list содержится новый элемент, переданный в payload экшна', () => {
  const testState = {
    ...initialState
  };
  const testAction = {
    type: ACTION_TYPES.ADD,
    payload: testElement
  };
  const length = testState.list.length;

  const result = reducer(testState, testAction);
  expect(result.list).toHaveLength(length + 1);
  expect(result.list[0]).toEqual(testElement);
});

test('При экшне remove reducer возвращает состояние стора, в котором в list удаляется элемент, id которого передан в payload экшна', () => {
  const testState = {
    ...initialState,
    list: [...initialState.list, testElement]
  };
  const length = testState.list.length;
  const testAction = {
    type: ACTION_TYPES.REMOVE,
    payload: testElement.id
  };

  const result = reducer(testState, testAction);
  expect(result.list).toHaveLength(length - 1);
});

test('При экшне complete reducer возвращает состояние стора, в котором в state.list у элемента, id которого передан в payload экшна, поле isCompleted изменяется на противоположное', () => {
  const testState = {
    ...initialState,
    list: [...initialState.list, testElement]
  };
  const testAction = {
    type: ACTION_TYPES.COMPLETE,
    payload: testElement.id
  };
  const result = reducer(testState, testAction);
  expect(result.list[0].isCompleted).toBe(true);
});
