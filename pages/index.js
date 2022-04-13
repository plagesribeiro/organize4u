import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HYS - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-gray-200 flex flex-col items-center justify-start pt-8">
        <h1>Dashboard</h1>
        <h2>Esse é meu dashboard</h2>
        <h2>Vamos que Vamos</h2>
      </div>
    </div>
  );
}
