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
import { useMutation } from 'react-query';
import { userService } from "@/services/userService"
import { useToast } from "@/components/ui/use-toast"
import { errorUiHandler } from "@/helpers/api/errorUiHandler"
import { successUiHandler } from "@/helpers/api/successUiHandler"

const LOGIN_FORM_DATA = [{
    formType: DYNAMIC_TYPE.INPUT,
    name: "name",
    label: "Name",
    placeholder: "your name please",
},
{
    formType: DYNAMIC_TYPE.INPUT,
    name: "email",
    label: "Email",
    placeholder: "your email please"
},
{
    formType: DYNAMIC_TYPE.PHONE_INPUT,
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "your phone number please"
},
{
    formType: DYNAMIC_TYPE.INPUT,
    name: "password",
    label: "Password",
    placeholder: "your password please",
    type: "password"
},
{
    formType: DYNAMIC_TYPE.INPUT,
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "your confirm password please",
    type: "password"
}
]

const SIGNUP_FORM_SCHEMA = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    phone: z.string().refine((value: string) => !!value, {
        message: "Phone number is required.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().refine((data: any) => data.confirmPassword === data.password, {
        message: "Passwords do not match.",
    }),
})
const SignUpForm = () => {
    const [open, setOpen] = useState(false);
    const mutation = useMutation(userService.submitSignupFormData);

    const openChangeHandler = (openStatus: boolean) => {
        setOpen(openStatus)
    }

    const signupFormHandler = async (form_data: any) => {
        try {
            // tempDefaultValue.name='a'
            // form_data = tempDefaultValue
            console.log('dfsdf');
            // form_data.email = 'dfsdfs'
            const response = await mutation.mutateAsync(form_data);
            console.log(response)
            successUiHandler("singup successfully")
        } catch (error: any) {
            errorUiHandler(error)
        }
    }

    const tempDefaultValue = { name: 'dfasf', phone: '+917631286357', email: 'dfasdf@gmail.com', password: '123456', confirmPassword: '123456' }
    return (
        <Dialog open={open} onOpenChange={openChangeHandler}>
            <DialogTrigger asChild>
                <Button variant={'secondary'} >SIGNUP</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] " onPointerDownOutside={(event) => event.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Signup Form</DialogTitle>
                    <DialogDescription>
                        Fill your name,username,email and password for login. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div style={{ maxHeight: '60vh', paddingBottom: '10px', overflowY: 'scroll' }} >
                    <DynamicForm onSubmit={signupFormHandler} formData={LOGIN_FORM_DATA} formSchema={SIGNUP_FORM_SCHEMA} formDefaultValues={tempDefaultValue} >
                        <div className="flex justify-end gap-3 mb-8">
                            <Button type="button" variant={'secondary'} onClick={() => openChangeHandler(false)} >Cancel</Button>
                            <Button type="submit"> {mutation.isLoading ? 'Submitting...' : 'Submit'}</Button>

                        </div>
                    </DynamicForm>
                </div>
            </DialogContent>
        </Dialog>
    )
};

export default SignUpForm;
