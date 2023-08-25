import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import React from "react"
import { Control } from "react-hook-form";

interface DynamicSwitchProps {
    control: Control<any>,
    formField: {
        name: string,
        label: string,
        formDescription?: string,
        formType: string
    }
}

const DynamicSwitch = ({ control, formField }: DynamicSwitchProps) => {
    return (
        <FormField
            control={control}
            name={formField.name}
            render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <FormLabel className="text-base">
                            {formField.label}
                        </FormLabel>
                        <FormDescription>
                            {formField.formDescription}
                        </FormDescription>
                    </div>
                    <FormControl>
                        <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    )
};

export default DynamicSwitch;
