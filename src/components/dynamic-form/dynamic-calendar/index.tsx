import React from "react"
import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Control } from "react-hook-form";

interface DynamicCalendarProps {
    control: Control<any>,
    formField: {
        name: string,
        label: string,
        placeholder?: string,
        formDescription?: string,
        formType: string,
    }
}

const DynamicCalendar = ({ control, formField }: DynamicCalendarProps) => {
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
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] pl-3 text-left font-normal flex",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value ? (
                                        format(field.value, "PPP")
                                    ) : (
                                        <span>{formField.placeholder}</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    {formField.formDescription && <FormDescription>
                        {formField.formDescription}
                    </FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
};

export default DynamicCalendar;
