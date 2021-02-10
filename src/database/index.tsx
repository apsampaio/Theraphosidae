import Realm from "realm";

const getRealmApp = () => {
  const appId = "theraphosidae-app";
  const appConfig = {
    id: appId,
    timeout: 10000,
  };

  return new Realm.App(appConfig);
};

export default getRealmApp;
