import Head from "next/head";

export const HeadMetadata = ({ title }) => (
    <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
    </Head>
);
