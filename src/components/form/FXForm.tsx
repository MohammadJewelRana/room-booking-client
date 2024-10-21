"use client";

import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface formConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends formConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

export default function FXForm({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: IProps) {
  //for default values and resolver
  const formConfig: formConfig = {};

  // !! object convert in boolean and check
  //if default value has then add in config
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig); //get all methods of useForm and pass resolver or default values if have

  const submitHandler = methods.handleSubmit; //catch hook form handler

  return (
    //pass all methods to provider
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
