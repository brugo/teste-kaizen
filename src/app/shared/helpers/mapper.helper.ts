const attrsToIgnore = ["restangular", "url"];
export const OR_DELIMITER = "|";

export function mapPayloadToAttribute(object: object, payload: {}) {
  const attrs = Object.getOwnPropertyNames(object);
  attrs.forEach(element => {
    if (attrsToIgnore.includes(element) || object[element].res === "") {
      return;
    }
    const indexes = object[element].res.split(OR_DELIMITER);
    for (const index of indexes) {
      if (payload[index] !== undefined) {
        object[element].value = payload[index];
        break;
      }
    }
  });
}
