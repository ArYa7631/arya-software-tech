import { toast } from "@/components/ui/use-toast";

export const errorUiHandler = (error:any) => {
    let errorMessage = 'An error occurred. Please try again later.';
    if (error.response) {
        errorMessage = error.response.data.message;
        
    }else if(error.message){
        errorMessage = error.message
    }
    else {
        errorMessage = 'An error occurred. Please try again later.'
    }
    toast({
        variant: 'destructive',
        description: errorMessage
    });
};