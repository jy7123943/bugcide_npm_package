import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Bugcide from '../dist/index';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

describe('Bugcide npm package', () => {
  let mockToken;
  let MockBugcide;
  let mockEventFn;

  beforeEach(() => {
    mockToken = 'mock-token';
    MockBugcide = new Bugcide();
    let mockSendApi = sinon.stub(MockBugcide, 'sendErrorApi');
    mockSendApi.returns(Promise.resolve({result: 'ok'}));

    mockEventFn = sinon.spy();

    window.addEventListener = mockEventFn;
    MockBugcide.init({ projectToken: mockToken });
  });

  it('register window error eventlistener', () => {
    expect(mockEventFn).to.have.been.calledWith('error');
  });

  it('change projectToken property', () => {
    const mockEvent = {
      error: {
        name: 'mockName',
        message: 'mockMessage',
        stack: 'mockMessage'
      },
      filename: 'mockFile',
      lineno: 10,
      colno: 5
    };
    MockBugcide.startTracking(mockEvent, mockToken);

    expect(MockBugcide.projectToken).to.equal(mockToken);
  });
});
