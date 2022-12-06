import Head from "next/head";
import BearForm from "../components/BearForm";
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
        <BearForm />
      </main>
    </div>
  );
}
