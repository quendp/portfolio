import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ isLoading }) => {
  const NAME_REGEX = /^[\w'\-,.][^0-9_!¡÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{1,30}$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const MESSAGE_REGEX = /^[\w\n '\-,.!¡÷?¿/\\+=@#$%^&*{}|~<>;:[\]]{1,2000}$/;

  const form = useRef();
  const [errMsg, setErrMsg] = useState(["", 0]);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [message, setMessage] = useState("");
  const [messageIsValid, setMessageIsValid] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    if (NAME_REGEX.test(e.target.value)) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    if (EMAIL_REGEX.test(e.target.value)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
    if (MESSAGE_REGEX.test(e.target.value)) {
      setMessageIsValid(true);
    } else {
      setMessageIsValid(false);
    }
  };
  const onSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    setIsSubmitClicked(true);
    if (nameIsValid && emailIsValid && messageIsValid) {
      setErrMsg(["Submitting...", 1]);
      console.log(name, email, message);
      emailjs
        .sendForm(
          "service_tw2uqld",
          "template_eejxlqi",
          form.current,
          "tvJZnW1Ugbcar5bBK"
        )
        .then(
          (result) => {
            setErrMsg([
              "Form successfully submitted. Thank you for contacting me. I will get back to you as soon as possible.",
              2,
            ]);
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            setErrMsg([
              "Sorry, an internal server error occurred. Please try again later.",
              1,
            ]);
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <div className="mb-10 flex w-full flex-col items-center justify-center border-b-2 border-cyan-900">
        <h1 className="custom-ff-bold mb-5 text-center text-xl text-cyan-500 md:text-5xl">
          Let us talk!
        </h1>
        <div className="mb-10 flex justify-center md:justify-start">
          <a
            className="m-1 sm:m-2"
            href="https://github.com/quendp/"
            target="blank"
          >
            <img src="https://img.shields.io/badge/-GitHub-083344?style=flat-square&logo=github" />
          </a>
          <a
            className="m-1 sm:m-2"
            href="https://linkedin.com/in/quendp/"
            target="blank"
          >
            <img src="https://img.shields.io/badge/-Linkedin-083344?style=flat-square&logo=linkedin" />
          </a>
          <a className="m-1 sm:m-2" href="mailto:hello@quendp.com">
            <img src="https://img.shields.io/badge/-Email-083344?style=flat-square&logo=gmail&logoColor=white" />
          </a>
          <a
            className="m-1 sm:m-2"
            href="https://www.facebook.com/itskendp"
            target="blank"
          >
            <img src="https://img.shields.io/badge/-Facebook-083344?style=flat-square&logo=facebook" />
          </a>
          <a
            className="m-1 sm:m-2"
            href="https://www.youtube.com/@quendp"
            target="blank"
          >
            <img src="https://img.shields.io/badge/-YouTube-083344?style=flat-square&logo=youtube" />
          </a>
        </div>
      </div>
      <div className="custom-ff-heading md:text-md flex w-full justify-center text-sm text-cyan-500">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <p className="mb-6 text-center">{errMsg[0]}</p>
          {errMsg[1] != 2 && (
            <form ref={form} onSubmit={onSubmit} noValidate>
              <div className="mb-6 flex flex-col">
                <label className="mb-2 pl-8 md:pl-16" htmlFor="name">
                  Full Name :
                </label>
                <div className="custom-clip-path__button flex items-center bg-cyan-400 p-px">
                  <input
                    className={`custom-clip-path__button w-full bg-cyan-900 py-2 pl-8 text-cyan-200 focus:bg-cyan-900/90 md:px-16`}
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={nameChangeHandler}
                    value={name}
                  />
                </div>
                <div
                  className={`px-16 text-center text-xs text-rose-500 ${
                    isSubmitClicked && !nameIsValid ? "block" : "hidden"
                  }`}
                >
                  The full name you entered is invalid, try again.
                </div>
              </div>
              <div className="mb-6 flex flex-col">
                <label className="mb-2 pl-8 md:pl-16" htmlFor="email">
                  Email Address :
                </label>
                <div className="custom-clip-path__button flex items-center bg-cyan-400 p-px">
                  <input
                    className={`custom-clip-path__button w-full bg-cyan-900 py-2 pl-8 text-cyan-200 focus:bg-cyan-900/90 md:px-16`}
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={emailChangeHandler}
                    value={email}
                  />
                </div>
                <div
                  className={`pl-8 text-center text-xs text-rose-500 md:px-16 ${
                    isSubmitClicked && !emailIsValid ? "block" : "hidden"
                  }`}
                >
                  The email you entered is invalid, try again.
                </div>
              </div>
              <div className="mb-6 flex flex-col">
                <label className="mb-2 pl-8 md:pl-16" htmlFor="message">
                  Message :
                </label>
                <div className="custom-clip-path__card flex items-center bg-cyan-400 p-px">
                  <textarea
                    className={` focus:bg-cyan-900/90} custom-clip-path__card h-full w-full bg-cyan-900 p-8 text-cyan-200`}
                    id="message"
                    rows={5}
                    name="message"
                    required
                    onChange={messageChangeHandler}
                    value={message}
                  />
                </div>

                <div
                  className={`px-16 text-center text-xs text-rose-500 ${
                    isSubmitClicked && !messageIsValid ? "block" : "hidden"
                  }`}
                >
                  The message you entered is invalid, try again. Up to 2000
                  characters.
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className=" custom-clip-path__card my-3 w-48 bg-cyan-500 px-5 py-2 text-cyan-900 hover:bg-cyan-600"
                  type="submit"
                  disabled={errMsg[1] === 1 ? true : false}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
