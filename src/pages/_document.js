import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>PaddyCare - Diagnosis Penyakit Tanaman Padi</title>
        <meta
          name="title"
          content="PaddyCare - Diagnosis Penyakit Tanaman Padi"
        />
        <meta
          name="description"
          content="PaddyCare adalah sistem pakar yang membantu petani dalam mendiagnosis penyakit pada tanaman padi. Dengan menggunakan metode Certainty Factor, PaddyCare memberikan analisis dan rekomendasi tindakan yang tepat untuk mengatasi berbagai penyakit tanaman padi."
        />
        <meta
          name="keywords"
          content="PaddyCare, sistem pakar, diagnosis penyakit padi, penyakit tanaman padi, Certainty Factor, pertanian, kesehatan tanaman, analisis penyakit padi, rekomendasi penyakit padi, teknologi pertanian"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cfpadi.prazzdev.com" />
        <meta
          property="og:title"
          content="PaddyCare - Diagnosis Penyakit Tanaman Padi"
        />
        <meta
          property="og:description"
          content="PaddyCare adalah sistem pakar yang membantu petani dalam mendiagnosis penyakit pada tanaman padi. Dengan menggunakan metode Certainty Factor, PaddyCare memberikan analisis dan rekomendasi tindakan yang tepat untuk mengatasi berbagai penyakit tanaman padi."
        />
        <meta
          property="og:image"
          content="https://cfpadi.prazzdev.com/assets/images/paddy.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cfpadi.prazzdev.com" />
        <meta
          property="twitter:title"
          content="PaddyCare - Diagnosis Penyakit Tanaman Padi"
        />
        <meta
          property="twitter:description"
          content="PaddyCare adalah sistem pakar yang membantu petani dalam mendiagnosis penyakit pada tanaman padi. Dengan menggunakan metode Certainty Factor, PaddyCare memberikan analisis dan rekomendasi tindakan yang tepat untuk mengatasi berbagai penyakit tanaman padi."
        />
        <meta
          property="twitter:image"
          content="https://cfpadi.prazzdev.com/assets/images/paddy.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
