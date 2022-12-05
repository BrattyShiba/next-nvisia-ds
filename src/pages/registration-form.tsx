import Head from "next/head";
import { Header } from "../components/Header";

export default function RegistrationForm() {
  return (
    <div>
      <Head>
        <title>NV Design System | Registration Form</title>
        <meta name="description" content="Nvisia design system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <h2>Registration Form Page</h2>
      </main>
    </div>
  );
}
