import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from '@/components/ui/toaster';
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
import SectionWrapper from '@/components/section-wrapper';
import { CustomEditor } from '@/components/custom-editor';
import { dummy_editor_data, galleryImages, iconData, imageData, imgDescriptionData, imgDescriptionData2, infoImgData, jumbotronData } from '@/constants/dummyData';
import InfoImg from '@/components/section/info-img';
import { GLOBAL_BG_COLOR } from '@/constants/colorConstant';
import ImgDescription from '@/components/section/img-description';

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
  // const { data, error, isLoading } = useQuery<AxiosResponse<any>, Error>(['todos'], fetchMarketplaceConfiguration);

  console.log(locale, locales, defaultLocale);
  const videoUrl = 'https://www.youtube.com/embed/asw-wTDzGUQ';

  const dummyData = {
    version: "2.28.0",
    time: 1693036088893,
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Editor.js with Dummy Data',
          level: 2,
        },
      },
      {
        type: 'paragraph',
        data: {
          text: 'This is some dummy content.',
        },
      },
    ],
  };

  const editorSubmitHandler=()=>{

  }
  return (

    <main>
      <SectionWrapper>
        <Carousel imageData={imageData}/>
        {/* <Jumbotron {...jumbotronData} /> */}
        <InfoColumns data={iconData} />
        <Gallery imageUrls={galleryImages} />
        <InfoImg {...infoImgData}/>
        <ImgDescription {...imgDescriptionData}/>
        <ImgDescription {...imgDescriptionData2}/>
        {/* <VideoGallery />
        <Video videoUrl={videoUrl} /> */}
        <CustomEditor onSubmit={editorSubmitHandler} readOnly={true} editorData={dummy_editor_data}/>
      </SectionWrapper>
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