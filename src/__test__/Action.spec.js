
import Action from "../Utils/Action";

describe('../Utils/Action', () => {
  it('should return a Payload', () => {
    const FakePayload = Action('FakeType');
    expect(FakePayload()).toEqual({ type: 'FakeType', payload: null })
  })
})
