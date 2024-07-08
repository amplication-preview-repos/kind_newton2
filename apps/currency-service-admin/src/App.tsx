import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ApiProviderList } from "./apiProvider/ApiProviderList";
import { ApiProviderCreate } from "./apiProvider/ApiProviderCreate";
import { ApiProviderEdit } from "./apiProvider/ApiProviderEdit";
import { ApiProviderShow } from "./apiProvider/ApiProviderShow";
import { ExchangeRateList } from "./exchangeRate/ExchangeRateList";
import { ExchangeRateCreate } from "./exchangeRate/ExchangeRateCreate";
import { ExchangeRateEdit } from "./exchangeRate/ExchangeRateEdit";
import { ExchangeRateShow } from "./exchangeRate/ExchangeRateShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
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
        title={"CurrencyService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ApiProvider"
          list={ApiProviderList}
          edit={ApiProviderEdit}
          create={ApiProviderCreate}
          show={ApiProviderShow}
        />
        <Resource
          name="ExchangeRate"
          list={ExchangeRateList}
          edit={ExchangeRateEdit}
          create={ExchangeRateCreate}
          show={ExchangeRateShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
