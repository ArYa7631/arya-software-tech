import * as z from "zod"
export enum DYNAMIC_TYPE {
    INPUT = "INPUT",
    PHONE_INPUT = "PHONE_INPUT",
    CHECKBOX = "CHECKBOX",
    CALENDAR = "CALENDAR",
    RADIO_GROUP = "RADIO_GROUP",
    SELECT = "SELECT",
    SWITCH = "SWITCH",
    TEXTAREA = "TEXTAREA",
    COMBOBOX = "COMBOBOX"

}

export const DUMMY_FORM_SCHEMA = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    mobile: z.boolean(),
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    type: z.enum(["all", "mentions", "none"], {
        required_error: "You need to select a notification type.",
    }),
    email: z
        .string({
            required_error: "Please select an email to display.",
        })
        .email(),
    marketing_emails: z.boolean().default(false).optional(),
    bio: z
        .string()
        .min(10, {
            message: "Bio must be at least 10 characters.",
        })
        .max(160, {
            message: "Bio must not be longer than 30 characters.",
        }),
    language: z.string({
        required_error: "Please select a language.",
    }),
})

export const DUMMY_FORM_DATA = [{
    formType: DYNAMIC_TYPE.INPUT,
    name: "username",
    label: "Username",
    placeholder: "your name please",
    formDescription: "This is your public display name.",
}, {
    formType: DYNAMIC_TYPE.CHECKBOX,
    name: "mobile",
    label: "Use different settings for my mobile devices",
    placeholder: "your name please",
    formDescription: "You can manage your mobile notifications in thegood",
    linkHref: "/examples/forms",
    linkLabel: "mobile settings"
},
{
    formType: DYNAMIC_TYPE.CALENDAR,
    name: "dob",
    label: "Date of birth",
    placeholder: "Pick a date",
    formDescription: "Your date of birth is used to calculate your age.",
},
{
    formType: DYNAMIC_TYPE.RADIO_GROUP,
    name: "type",
    label: "Notify me about...",
    radioData: [
        { label: "All new messages", value: "all" },
        { label: "Direct messages and mentions", value: "mentions" },
        { label: "Nothing", value: "none" }]
},
{
    formType: DYNAMIC_TYPE.SELECT,
    name: "email",
    label: "Email",
    placeholder: "Select a verified email to display",
    formDescription: "You can manage email addresses in your ",
    linkHref: "/examples/forms",
    linkLabel: "email settings",
    selectData: [{
        label: "m@example.com",
        value: "m@example.com"
    }, {
        label: "m@google.com",
        value: "m@google.com"
    }, {
        label: "m@support.com",
        value: "m@support.com"
    }
    ]
},
{
    formType: DYNAMIC_TYPE.SWITCH,
    name: "marketing_emails",
    label: "Marketing emails",
    formDescription: "TReceive emails about new products, features, and more.",
},
{
    formType: DYNAMIC_TYPE.TEXTAREA,
    name: "bio",
    placeholder: "Tell us a little bit about yourself",
    label: "Bio",
    formDescription: "You can @mention other users and organizations.",
},
{
    formType: DYNAMIC_TYPE.COMBOBOX,
    name: "language",
    placeholder: "Select language",
    label: "Language",
    formDescription: "This is the language that will be used in the dashboard.",
    comboboxData: [
        { label: "English", value: "en" },
        { label: "French", value: "fr" },
        { label: "German", value: "de" },
        { label: "Spanish", value: "es" },
        { label: "Portuguese", value: "pt" },
        { label: "Russian", value: "ru" },
        { label: "Japanese", value: "ja" },
        { label: "Korean", value: "ko" },
        { label: "Chinese", value: "zh" },
    ]
}

]