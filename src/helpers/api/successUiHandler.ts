import { toast } from "@/components/ui/use-toast";

export const successUiHandler = (successMessage:any) => {
    toast({
        variant: 'default',
        description: successMessage
    });
};