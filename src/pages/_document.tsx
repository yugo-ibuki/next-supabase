import Document, { Head, Main, NextScript, DocumentContext } from 'next/document'
import Header from './Layout/Header';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head></Head>
                <body className="custom_class">
                <Header />
                <Main />
                <NextScript />
                </body>
            </html>
        )
    }
}
