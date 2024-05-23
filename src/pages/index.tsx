import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { z } from "zod";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(1);
const firstNameSchema = z.string().min(1);
const lastNameSchema = z.string().min(1);

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Error States
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    const firstNameResult = firstNameSchema.safeParse(firstName);
    const lastNameResult = lastNameSchema.safeParse(lastName);
    const emailResult = emailSchema.safeParse(email);
    const passwordResult = passwordSchema.safeParse(password);

    if (
      firstNameResult.success &&
      lastNameResult.success &&
      emailResult.success &&
      passwordResult.success
    ) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setFirstNameError("");
      setLastNameError("");
      setEmailError("");
      setPasswordError("");
    } else {
      if (!firstNameResult.success) {
        setFirstNameError("First Name cannot be empty");
      } else {
        setFirstNameError("");
      }

      if (!lastNameResult.success) {
        setLastNameError("Last Name cannot be empty");
      } else {
        setLastNameError("");
      }

      if (!emailResult.success) {
        setEmailError("Looks like this is not an email");
      } else {
        setEmailError("");
      }

      if (!passwordResult.success) {
        setPasswordError("Password cannot be empty");
      } else {
        setPasswordError("");
      }
      if (
        firstNameResult.success &&
        lastNameResult.success &&
        emailResult.success &&
        passwordResult.success
      ) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      }
    }
  }

  return (
    <>
      <Head>
        <title>SignUp Form</title>
        <meta name="description" content="intro-signup-form" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="font-poppinsReg relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-red py-20 lg:content-center lg:px-20 lg:py-0">
        <Image
          className="absolute left-0 top-0 z-[0] block h-screen w-screen lg:hidden"
          src="/images/bg-intro-mobile.png"
          width={100}
          height={100}
          alt="Mobile Background"
        />
        <Image
          className="absolute left-0 top-0 z-[0] hidden h-screen w-screen object-cover lg:block"
          src="/images/bg-intro-desktop.png"
          width={100}
          height={100}
          alt="Desktop Background"
        />
        {/* Container Container */}
        <div className="z-10 flex h-full w-full flex-col gap-12 text-center lg:flex-row lg:gap-0">
          {/* Text Container */}
          <div className="flex w-screen flex-col gap-6 px-10 text-start lg:h-screen lg:justify-center">
            <h1 className="text-3xl font-extrabold text-white lg:text-6xl">
              Learn to code by watching others
            </h1>
            <p className="text-lg text-white">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          {/* Form Container */}
          <div className="relative flex w-screen flex-col gap-6 px-10 lg:h-screen lg:justify-center">
            <button className="font-poppinsLight h-20 w-full rounded-xl bg-blue py-4 font-light text-white shadow-2xl">
              <strong className="font-poppinsBold font-bold">
                Try it free 7 days{" "}
              </strong>
              then $20/mo. thereafter
            </button>
            <form
              onSubmit={handleFormSubmit}
              className="relative flex flex-col rounded-xl bg-white p-5 pt-6 shadow-2xl"
            >
              <input
                className={`mt-4 h-12 rounded-md border-2 p-2 text-dark-blue focus:border-dark-blue ${firstNameError ? "border-red placeholder-red" : "border-gray placeholder-gray"}`}
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="First Name"
              />
              {firstNameError && (
                <p className="h-4 text-end text-red">{firstNameError}</p>
              )}
              <input
                className={`mt-4 h-12 rounded-md border-2 p-2 text-dark-blue focus:border-dark-blue ${firstNameError ? "border-red placeholder-red" : "border-gray placeholder-gray"}`}
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Last Name"
              />
              {lastNameError && (
                <p className="h-4 text-end text-red">{lastNameError}</p>
              )}
              <input
                className={`mt-4 h-12 rounded-md border-2 p-2 text-dark-blue focus:border-dark-blue ${firstNameError ? "border-red placeholder-red" : "border-gray placeholder-gray"}`}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email Address"
              />
              {emailError && (
                <p className="h-4 text-end text-red">{emailError}</p>
              )}
              <input
                className={`mt-4 h-12 rounded-md border-2 p-2 text-dark-blue focus:border-dark-blue ${firstNameError ? "border-red placeholder-red" : "border-gray placeholder-gray"}`}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
              {passwordError && (
                <p className="h-4 text-end text-red">{passwordError}</p>
              )}
              <button
                type="submit"
                className="mt-6 h-[50px] w-full rounded-lg bg-green tracking-wider text-white shadow-2xl"
              >
                CLAIM YOUR FREE TRIAL
              </button>
              <span className="my-4 px-5 text-xs text-grayish-blue">
                By clicking the button, you are agreeing to our{" "}
                <a href="#" className="font-bold text-red">
                  Terms and Services
                </a>
              </span>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
