const MockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: MockHistoryPush,
  })
}));

export { MockHistoryPush };