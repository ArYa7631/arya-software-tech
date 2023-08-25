import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import React from "react"
import { Control } from "react-hook-form";

interface DynamicTextareaProps {
    control: Control<any>,
    formField: {
        name: string,
        label: string,
        placeholder?: string,
        formDescription?: string,
        formType: string
    }
}
const DynamicTextarea = ({control,formField}:DynamicTextareaProps) => {
  return (
    <FormField
    control={control}
    name="bio"
    render={({ field }) => (
        <FormItem>
            <FormLabel>{formField.label}</FormLabel>
            <FormControl>
                <Textarea
                    placeholder={formField.placeholder}
                    className="resize-none"
                    {...field}
                />
            </FormControl>
            <FormDescription>
                {formField.formDescription}
            </FormDescription>
            <FormMessage />
        </FormItem>
    )}
/>
  )
};

export default DynamicTextarea;
