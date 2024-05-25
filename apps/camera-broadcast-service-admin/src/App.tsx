import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CameraList } from "./camera/CameraList";
import { CameraCreate } from "./camera/CameraCreate";
import { CameraEdit } from "./camera/CameraEdit";
import { CameraShow } from "./camera/CameraShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SettingList } from "./setting/SettingList";
import { SettingCreate } from "./setting/SettingCreate";
import { SettingEdit } from "./setting/SettingEdit";
import { SettingShow } from "./setting/SettingShow";
import { BroadcastList } from "./broadcast/BroadcastList";
import { BroadcastCreate } from "./broadcast/BroadcastCreate";
import { BroadcastEdit } from "./broadcast/BroadcastEdit";
import { BroadcastShow } from "./broadcast/BroadcastShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CameraBroadcastService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Camera"
          list={CameraList}
          edit={CameraEdit}
          create={CameraCreate}
          show={CameraShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Setting"
          list={SettingList}
          edit={SettingEdit}
          create={SettingCreate}
          show={SettingShow}
        />
        <Resource
          name="Broadcast"
          list={BroadcastList}
          edit={BroadcastEdit}
          create={BroadcastCreate}
          show={BroadcastShow}
        />
      </Admin>
    </div>
  );
};

export default App;
