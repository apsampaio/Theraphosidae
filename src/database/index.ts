import Realm from "realm";

import TarantulaSchema from "./schemas/TarantulaSchema";

export default function getRealm() {
  return Realm.open({
    schema: [TarantulaSchema],
  });
}
