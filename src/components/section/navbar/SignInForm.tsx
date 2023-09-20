import React from "react"

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

const LOGIN_FORM_DATA = [{
    formType: DYNAMIC_TYPE.INPUT,
    name: "username",
    label: "Username",
    placeholder: "your username please",
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
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    })
})
const SignInForm = () => {
    const loginFormHandler = () => {

    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'secondary'} >LOGIN</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Login Form</DialogTitle>
                    <DialogDescription>
                        Fill your username and password for login. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <DynamicForm onSubmit={loginFormHandler} formData={LOGIN_FORM_DATA} formSchema={LOGIN_FORM_SCHEMA} formDefaultValues={{}} />
            </DialogContent>
        </Dialog>
    )
};

export default SignInForm;
