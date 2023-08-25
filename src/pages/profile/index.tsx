import React from "react"
import DynamicForm from "@/components/dynamic-form";
import Abd from "@/components/profile/index";
import { DUMMY_FORM_DATA, DUMMY_FORM_SCHEMA } from "@/components/dynamic-form/dynamic-constant";
import { z } from "zod";
const Profile = () => {
  const onSubmit=(values: z.infer<typeof DUMMY_FORM_SCHEMA>)=>{


  }
  const formDefaultValues = {
    username: "nitesh arya check",
    mobile: false,
    language: ""
  };

  return (
    <div className=" flex justify-center ml-auto mr-auto w-3/4">
      {/* <Abd /> */}
      <DynamicForm onSubmit={onSubmit} formData={DUMMY_FORM_DATA} formSchema={DUMMY_FORM_SCHEMA} formDefaultValues={formDefaultValues} />
    </div>
  )
};

export default Profile;
