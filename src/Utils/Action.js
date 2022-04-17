const Action = (type) => {
  function Payload(payload = null) {
    return {
      type,
      payload
    };
  }
  Payload.type = type;
  return Payload;
};
export default Action;
