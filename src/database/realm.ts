import Realm from "realm";

import TarantulaSchema from "./schemas/Tarantula";

export default function getRealm() {
  return Realm.open({
    schema: [TarantulaSchema],
  });
}
