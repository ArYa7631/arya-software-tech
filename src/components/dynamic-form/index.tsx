import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import DynamicInput from "./dynamic-input"
import { DYNAMIC_TYPE } from "./dynamic-constant"
import DynamicCheckbox from "./dynamic-checkbox"
import DynamicCalendar from "./dynamic-calendar"
import DynamicRadioGroup from "./dynamic-radio-group"
import DynamicRadioSelect from "./dynamic-select"
import DynamicSwitch from "./dynamic-switch"
import DynamicTextarea from "./dynamic-textarea"
import DynamicCombobox from "./dynamic-combobox"
import { Form } from "../ui/form"

type YourFormDataItemType = {
    formType: string;
    name: string;
    label: string;
    placeholder?: string;
    formDescription?: string;
    linkHref?: string;
    linkLabel?: string;
    radioData?: Array<{ label: string; value: string }>;
    selectData?: Array<{ label: string; value: string }>;
    comboboxData?: Array<{ label: string; value: string }>;
};

interface DynamicFormProps {
    onSubmit: (values: any) => void;
    formData: Array<YourFormDataItemType>; // Replace with actual type
    formSchema: z.ZodObject<Record<string, z.ZodType<any>>>; // Replace with actual type
    formDefaultValues: Record<string, any>;
  }

const DynamicForm = ({ onSubmit, formData, formSchema,formDefaultValues }: DynamicFormProps)=> {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: formDefaultValues,
      });

    const comboboxSelectHandler=(selectKey:string,selectValue: string)=>{
        form.setValue(selectKey, selectValue)
    }
    const {INPUT,CHECKBOX,CALENDAR,RADIO_GROUP,SELECT,SWITCH,TEXTAREA,COMBOBOX} = DYNAMIC_TYPE

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {formData.map((item) => {
                        const formProps = {control: form.control,formField: item}
                        const formType = item.formType
                        return (
                        <div key={item.name}>
                            {formType == INPUT && <DynamicInput {...formProps} />}
                            {formType == CHECKBOX && <DynamicCheckbox {...formProps} />}
                            {formType == CALENDAR && <DynamicCalendar {...formProps} />}
                            {formType == RADIO_GROUP && <DynamicRadioGroup {...formProps} radioGroupData={item.radioData} />}
                            {formType == SELECT && <DynamicRadioSelect {...formProps} selectItemData={item.selectData} />}
                            {formType == SWITCH && <DynamicSwitch {...formProps} />}
                            {formType == TEXTAREA && <DynamicTextarea {...formProps} />}
                            {formType == COMBOBOX && <DynamicCombobox {...formProps} comboboxData={item.comboboxData} onSelectHandler={comboboxSelectHandler} />}
                        </div>
                    )})}
                    <div className="flex justify-end">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
};

export default DynamicForm;
