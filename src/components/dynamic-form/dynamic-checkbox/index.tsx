import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import Link from "next/link";
import React from "react"
import { Control } from "react-hook-form";

interface DynamicCheckboxProps {
    control: Control<any>,
    formField: {
        name: string,
        label: string,
        placeholder?: string,
        formDescription?: string,
        formType: string,
        linkHref?: string,
        linkLabel?: string
    }
}

const DynamicCheckbox = ({ control, formField }: DynamicCheckboxProps) => {
    return (
        <FormField
            control={control}
            name={formField.name}
            render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>
                            {formField.label}
                        </FormLabel>
                        {formField.formDescription && <FormDescription>
                            {formField.formDescription}
                            {formField.linkLabel && formField.linkHref && <Link href={formField.linkHref}>{formField.linkLabel}</Link>}
                        </FormDescription>}
                    </div>
                </FormItem>
            )}
        />
    )
};

export default DynamicCheckbox;
