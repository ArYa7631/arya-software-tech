import React from "react"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

interface DynamicInputProps {
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
const DynamicInput = ({ control, formField }: DynamicInputProps) => {
    return (
        <FormField
            control={control}
            name={formField.name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{formField.label}</FormLabel>
                    <FormControl>
                        <Input placeholder={formField.placeholder} type={formField.type} {...field} />
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

export default DynamicInput;
