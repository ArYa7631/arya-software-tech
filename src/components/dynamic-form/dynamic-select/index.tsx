import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import React from "react"
import { Control } from "react-hook-form";

interface DynamicSelectProps {
    control: Control<any>,
    formField: {
        name: string,
        label: string,
        placeholder?: string,
        formDescription?: string,
        formType: string,
        linkHref?: string,
        linkLabel?: string
    },
    selectItemData?: {
        label: string,
        value: string
    }[]
}

const DynamicSelect = ({ control, formField, selectItemData }: DynamicSelectProps) => {
    return (
        <FormField
            control={control}
            name={formField.name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{formField.label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={formField.placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {selectItemData?.map((item) => (
                                <SelectItem value={item.value}>{item.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormDescription>
                        {formField.formDescription}
                        {formField.linkHref && <Link href={formField.linkHref}>{formField.label}</Link>}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
};

export default DynamicSelect;
