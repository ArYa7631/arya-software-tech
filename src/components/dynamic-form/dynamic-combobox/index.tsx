import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import React from "react"
import { Control } from "react-hook-form";

interface DynamicComboboxProps {
    control: Control<any>,
    formField: {
        name: string,
        label: string,
        placeholder?: string,
        formDescription?: string,
        formType: string
    },
    comboboxData?: {
        label: string,
        value: string
    }[],
    onSelectHandler: (languageKey: string, languageValue: string) => void
}

const DynamicCombobox = ({ control, formField, comboboxData, onSelectHandler }: DynamicComboboxProps) => {
    return (
        <FormField
            control={control}
            name={formField.name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>{formField.label}</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                        "w-[200px] flex justify-between items-center",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value
                                        ? comboboxData?.find(
                                            (language) => language.value === field.value
                                        )?.label
                                        : formField.placeholder}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput placeholder="Search framework..." />
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup>
                                    {comboboxData?.map((language) => (
                                        <CommandItem
                                            value={language.label}
                                            key={language.value}
                                            onSelect={() => {
                                                onSelectHandler(formField.name, language.value)
                                            }}
                                        >
                                            <Checkbox
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    language.value === field.value
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                            {language.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <FormDescription>
                        {formField.formDescription}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
};

export default DynamicCombobox;
