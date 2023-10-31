import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import DynamicForm from "@/components/dynamic-form"
import { DYNAMIC_TYPE } from "@/components/dynamic-form/dynamic-constant"
import { z } from "zod"
import { errorUiHandler } from "@/helpers/api/errorUiHandler"
import { successUiHandler } from "@/helpers/api/successUiHandler"
import { useMutation } from "react-query"
import { getLocalStorage, setLocalStorage } from "@/storage/localStorage"
import { userService } from "@/services/userService"

const LOGIN_FORM_DATA = [{
    formType: DYNAMIC_TYPE.INPUT,
    name: "email",
    label: "Email",
    placeholder: "your email please",
},
{
    formType: DYNAMIC_TYPE.INPUT,
    name: "password",
    label: "Password",
    placeholder: "your password please",
    type: "password"
}
]

const LOGIN_FORM_SCHEMA = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})

const SignInForm = () => {
    const [open, setOpen] = useState(false);
    const mutation = useMutation(userService.submitLoginFormData);
    const openChangeHandler=(openStatus:boolean)=>{
        setOpen(openStatus)
    }

    const loginFormHandler = async (form_data: any) => {
        try {
            const response = await mutation.mutateAsync(form_data);
            const user = response.data
            console.log(response)
            successUiHandler("login successfully")
        } catch (error: any) {
            errorUiHandler(error)
        }
    }

    const tempDefaultValue = { name: 'dfasf', phone: '+917631286357', email: 'dfasdf@gmail.com', password: '123456', confirmPassword: '123456' }
    return (
        <Dialog open={open} onOpenChange={openChangeHandler}>
            <DialogTrigger asChild>
                <Button variant={'secondary'} >LOGIN</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]" onPointerDownOutside={(event) => event.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Login Form</DialogTitle>
                    <DialogDescription>
                        Fill your username and password for login. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <DynamicForm onSubmit={loginFormHandler} formData={LOGIN_FORM_DATA} formSchema={LOGIN_FORM_SCHEMA} formDefaultValues={tempDefaultValue}>
                <div className="flex justify-end gap-2">
                        <Button type="button" onClick={()=>openChangeHandler(false)} >Cancel</Button>
                        <Button type="submit">{mutation.isLoading ? 'Submitting...' : 'Submit'}</Button>
                    </div>
                </DynamicForm>
            </DialogContent>
        </Dialog>
    )
};

export default SignInForm;
