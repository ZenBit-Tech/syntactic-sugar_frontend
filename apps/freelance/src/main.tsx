import { StrictMode, Suspense } from "react";
import * as ReactDOM from "react-dom/client";
import App from "../../../app";
import "./i18n";
import { ThemeProvider } from "styled-components";
import { ThemeColors, GlobalStyle } from "@freelance/components";
import store, { persistor } from "src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<StrictMode>
		<Suspense fallback={"Loading..."}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<GlobalStyle />
					<ThemeProvider theme={ThemeColors}>
						<App />
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</Suspense>
	</StrictMode>,
);
