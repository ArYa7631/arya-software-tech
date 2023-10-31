import React, { useState } from "react"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import 'react-phone-number-input/style.css';
import { Control } from "react-hook-form";
import { cn } from "@/lib/utils"

interface DynamicPhoneInputProps {
    control: Control<any>,
    formField: {
        name: string,
        label: string,
        type?: string,
        placeholder?: string,
        formDescription?: string,
        formType: string
    }
}
const DynamicPhoneInput = ({ control, formField }: DynamicPhoneInputProps) => {
    return (
        <FormField
            control={control}
            name={formField.name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{formField.label}</FormLabel>
                    <FormControl>
                        <PhoneInputWithCountry
                            // name={formField.name}
                            placeholder={formField.placeholder}
                            className={cn(
                                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pt-0 pb-0 pr-0",
                            )}
                            control={control}
                            defaultCountry="IN"
                            {...field}
                            />
                    </FormControl>
                    {formField.formDescription && (
                        <FormDescription>
                            {formField.formDescription}
                        </FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
};

export default DynamicPhoneInput;
