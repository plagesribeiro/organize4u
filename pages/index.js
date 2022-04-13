import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>OrganizeU</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="h-screen bg-gray-200 flex flex-col items-center justify-start pt-8">
        <h1>Dashboard</h1>
        <h2>Esse é meu dashboard</h2>
        <h2>Vamos que Vamos</h2>
      </div>
    </div>
  );
}
