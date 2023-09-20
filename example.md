navbar and footer full dynamic and color dynamic by theme



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
import dynamic from 'next/dynamic';
import Video from '@/components/section/video';
import Foooter from '@/components/section/footer';
import Footer from '@/components/section/footer';
import { db } from '@/lib/db';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/section/navbar';
import Gallery from '@/components/section/gallery';
import Jumbotron from '@/components/section/jumbotron';
import Carousel from '@/components/section/carousel';
import VideoGallery from '@/components/section/video-gallery';
import InfoColumns from '@/components/section/info-icons';
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { fetchMarketplaceConfiguration } from '@/services/marketplaceService';
const inter = Inter({ subsets: ['latin'] })
// test.js
interface User {
  id: number;
  username: string;
  email: string;
}

interface HomeProps {
  usersData: User[];
}

export default function Home({ usersData }: HomeProps) {
  const { toast } = useToast();
  const [users, setUsers] = useState<User[]>([]);
  const { locale, locales, defaultLocale } = useRouter();
  const { data, error, isLoading} = useQuery<AxiosResponse<any>,Error>(['todos'],fetchMarketplaceConfiguration);

  console.log(locale, locales, defaultLocale);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        description: 'There was a problem fetching users.',
      });
    }
  };

  async function main() {
    const users = await db.user.findMany();
    console.log(users);
  }
  const toastClickHandler = () => {
    fetchUsers();
    toast({
      // variant: 'destructive',
      // title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      // action: <ToastAction altText="Try again">Try again</ToastAction>,
    })
  }

  const incrementAmountHandler = () => {
  }

  const decrementAmountHandler = () => {
  }
  return (

    <main>
      <div className='ml-auto mr-auto gap-5'>
        <Navbar />
        <Jumbotron />
        <Carousel />
        <div className=' w-11/12 ml-auto mr-auto'>

          <Gallery />
        </div>
        <div className=' w-11/12 ml-auto mr-auto'>
          <InfoColumns />
        </div>
        <VideoGallery />
        <Video />
      </div>
      <h1 className='text-sm'>hello world</h1>
      <Button variant="default"
        onClick={incrementAmountHandler}
      >
        incremnt amount


      </Button>
      <Button variant="default"
        onClick={decrementAmountHandler}
      >
        decrement amount


      </Button>
      {users?.map((item) => (
        <p key={item.id}>{item.email}</p>
      ))}
      {usersData?.map((item) => (
        <p key={item.id}>{item.email}</p>
      ))}
      {/* <CustomEditor></CustomEditor> */}
      {/* <Profile></Profile> */}
      {/* <ThemeToggle></ThemeToggle> */}
      {/* <Community></Community> */}

      <Footer></Footer>
      <Toaster />

    </main>
  )
}


export async function getServerSideProps() {
  try {
    const users = await db.user.findMany();
    return {
      props: {
        usersData: [],
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        usersData: [],
      },
    };
  }
}