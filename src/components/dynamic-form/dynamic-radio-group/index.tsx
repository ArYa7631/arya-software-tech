import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroup } from "@radix-ui/react-radio-group";
import React from "react"
import { Control } from "react-hook-form";

interface DynamicRadioGroupProps {
    control: Control<any>,
    formField: {
        name: string,
        label: string,
        placeholder?: string,
        formDescription?: string,
        formType: string
    },
    radioGroupData?: {
        label: string,
        value: string
    }[]
}

const DynamicRadioGroup = ({ control, formField, radioGroupData }: DynamicRadioGroupProps) => {


    return (
        <FormField
            control={control}
            name={formField.name}
            render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormLabel>{formField.label}</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                        >
                            {radioGroupData?.map((item) => (
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value={item.value} />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        {item.label}
                                    </FormLabel>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
};

export default DynamicRadioGroup;
