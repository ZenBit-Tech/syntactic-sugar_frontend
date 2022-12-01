import { StrictMode, Suspense } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./app/app";
import "./i18n";
import { ThemeProvider } from "styled-components";
import { ThemeColors, GlobalStyle } from "@freelance/components";
import store, { persistor } from "src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<StrictMode>
		<Suspense fallback={"Loading..."}>
			<GoogleOAuthProvider clientId={`${process.env["NX_APP_GOOGLE_KEY"]}`}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<GlobalStyle />
						<ThemeProvider theme={ThemeColors}>
							{/* <BrowserRouter> */}
							<App />
							{/* </BrowserRouter> */}
						</ThemeProvider>
					</PersistGate>
				</Provider>
			</GoogleOAuthProvider>
		</Suspense>
	</StrictMode>,
);
