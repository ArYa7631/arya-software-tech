import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from '@/components/ui/toaster';
import { ToastAction } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/components/theme-provider';
import { useTheme } from 'next-themes';
import Profile from '@/components/profile';
import ThemeToggle from '@/components/theme-provider/ThemeToggle';
import Community from '@/components/community';
import DynamicForm from '@/components/dynamic-form';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { toast } = useToast();
  const toastClickHandler = () => {
    toast({
      // variant: 'destructive',
      // title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      // action: <ToastAction altText="Try again">Try again</ToastAction>,
    })
  }
  return (

    <main
     
    >
      <h1 className='text-sm'>hello world</h1>
      <Button variant="default"
        onClick={toastClickHandler}
      >
        click me
      

      </Button>
      {/* <Profile></Profile> */}
      {/* <ThemeToggle></ThemeToggle> */}
      {/* <Community></Community> */}
      <div className=' ml-auto mr-auto w-4/5 p-10 border-2'>

      </div>
      <Toaster />

    </main>
  )
}
