import Document, { Head, Main, NextScript, DocumentContext } from 'next/document'
import Header from './Layout/Header';
import { Provider } from "../context/totalProvider";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head></Head>
                <Provider>
                    <body className="custom_class">
                    <Header />
                    <Main />
                    <NextScript />
                    </body>
                </Provider>
            </html>
        )
    }
}