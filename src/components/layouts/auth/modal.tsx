"use client";

import Image from "next/image";
import classNames from "classnames";
import { X } from "lucide-react";
import styles from "./CSSModules/modal.module.css";
import { MouseEventHandler, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useShallow } from "zustand/react/shallow";
// import axios from "axios";
// import { useAuthStore } from "@/app/store/useAuthStore";
// import AuthForm from "../fragments/AuthForm";
// import AuthProviders from "../fragments/AuthProviders";

interface ModalProps {
  state: boolean;
  setState: (state: boolean) => void;
}

export default function Modal({ state, setState }: ModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const overlay = useRef(null);
  const router = useRouter();

  //   const { authType, setAuthType } = useAuthStore(useShallow((state) => ({ authType: state.authType, setAuthType: state.setAuthType })));

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<FieldValues>({
  //     defaultValues: {
  //       name: "",
  //       email: "",
  //       password: "",
  //     },
  //   });

  const closeModal: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      setState(false);
      router.push("/");
    }
  };

  const handleCloseModal = () => {
    setState(false);
    router.push("/");
  };

  const handleAuthType = (type: string) => {
    if (type === "register") {
      //   setAuthType("login");
      router.push("/auth/login");
    } else if (type === "login") {
      //   setAuthType("register");
      router.push("/auth/register");
    }
  };

  //   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //     const signInData = await signIn("credentials", {
  //       name: data.name,
  //       email: data.email,
  //       password: data.password,
  //     });

  //     console.log("Apa ini? awal");
  //     console.log({ signInData });
  //     console.log("Apa ini? akhir");
  //     setIsLoading(true);

  // axios
  //   .post("/api/register", data)
  //   .then((res) => {
  //     console.log(res);
  //     if (res.data.status === 409) {
  //       setErrorMsg(res.data.message);
  //       alert(errorMsg);
  //     } else if (res.data.status === 200 || res.data.status === 201) {
  //       console.log(res);
  //       alert("Registrasi Di persilahkan!");
  //       setState(false);
  //       // router.push("/dashboard");
  //     }
  //   })
  //   .catch((e) => {
  //     console.error(`Ada error nich: ${e}`);
  //   });
  // .finnaly(() => {
  //   setState(false);
  // });
  //   };

  return (
    <div
      className={classNames({
        "pointer-events-auto bg-black/50 z-10": state === true,
        "pointer-events-none ": state === false,
        "transition duration-300 fixed w-full h-screen": true,
      })}
    >
      <div
        ref={overlay}
        onClick={closeModal}
        className={classNames({
          "translate-y-0 opacity-1": state === true,
          "translate-y-9 opacity-0": state === false,
          "m-4 fixed flex justify-center items-center mx-auto top-0 left-0 right-0 bottom-0 transition duration-300": true,
        })}
      >
        <div className=" w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="modal__header flex items-center border-b border-black/30 pb-6">
            <button onClick={handleCloseModal}>
              <X />
            </button>
            <h5 className="text-xl mx-auto text-center font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
          </div>
          {/* <AuthProviders /> */}
          <span className={`${styles.label} text-center`}>Atau</span>
          {/* <AuthForm state={state} setState={setState} /> */}
        </div>
      </div>
    </div>
  );
}
