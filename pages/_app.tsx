import { Provider } from "next-auth/client"

export default function App({ Component, pageProps }: any) {
    const { session } = pageProps;

    return (
    <Provider session={session}>
        <Component {...pageProps} />
    </Provider>
    )
}