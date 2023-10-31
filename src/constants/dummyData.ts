import { FOOTER_BG_COLOR, FOOTER_IDENT_COLOR, FOOTER_LINK_HEADER_COLOR, FOOTER_TEXT_COLOR } from "./colorConstant";

export const NavLinkData = [
  {
    name: "Home",
    href: "#",
    active: false
  },
  {
    name: "About",
    href: "#",
    active: true
  },
  {
    name: "Services",
    href: "#",
    active: false
  },
  {
    name: "Pricing",
    href: "#",
    active: false
  },
  {
    name: "Contact",
    href: "#",
    active: false
  }
]


export const profileLIinkData = [
  {
    name: "Dashboard",
    active: false,
    href: "#"
  },
  {
    name: "Settings",
    active: false,
    href: "#"
  },
  {
    name: "Earnings",
    active: false,
    href: "#"
  },
  {
    name: "Sign out",
    id: "logout",
    active: false,
    href: "#"
  },

]

export const jumbotronData = {
  title: "We invest in the world’s potential",
  description:
    "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  buttonLabels: {
    start: "Get started",
    learn: "Learn more",
  },
};
export const iconData = [
  { icon: "🚀", text: "Rocket Launch" },
  { icon: "🌟", text: "Starry Night" },
  { icon: "🌈", text: "Rainbow Joy" },
];


export const galleryImages: string[] = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
];

interface InfoImgProps {
  backgroundColor?: string;
  backgroundImage?: string;
  sectionHeader?: string;
  headerDescription?: string;
  images: Array<{
    src: string;
    alt: string;
    title: string;
    description: string;
    buttonLabel: string;
  }>;
}

export const infoImgData: InfoImgProps = {
  backgroundColor: 'transparent', // Specify your background color
  backgroundImage: '/images/laptop.jpg', // Specify your background image URL
  sectionHeader: 'Custom Section Header',
  headerDescription: 'Custom header description goes here.',
  images: [
    {
      src: '/images/laptop.jpg',
      alt: 'Image 1',
      title: 'Image 1',
      description: 'Description of Image 1 goes here.',
      buttonLabel: 'Button 1',
    },
    {
      src: '/images/tablet.jpg',
      alt: 'Image 2',
      title: 'Image 2',
      description: 'Description of Image 2 goes here.',
      buttonLabel: 'Button 2',
    },
    {
      src: '/images/mobile_phone.jpg',
      alt: 'Image 3',
      title: 'Image 3',
      description: 'Description of Image 3 goes here.',
      buttonLabel: 'Button 3',
    },
  ],
};


export const imgDescriptionData = {
  image: "images/laptop.jpg",
  header: "Your Header",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  buttonLabel: "Learn More",
  alignLeft: false, // Set to true for left alignment, false for right alignment
};

export const imgDescriptionData2 = {
  image: "images/laptop.jpg",
  header: "Your Header",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  buttonLabel: "Learn More",
  alignLeft: true, // Set to true for left alignment, false for right alignment
};

export const footerData = {
  footerText: "AryaSoftwareTech",
  footerIdentColor: FOOTER_IDENT_COLOR,
  footerLinkHeaderColor: FOOTER_LINK_HEADER_COLOR,
  footerBgColor: FOOTER_BG_COLOR,
  footerTextColor: FOOTER_TEXT_COLOR,
  resourcesList: [
    { label: "Flowbite", link: "https://flowbite.com" },
    { label: "Tailwind CSS", link: "https://tailwindcss.com/" },
    // Add more resources as needed
  ],
  followUsList: [
    { label: "Github", link: "https://github.com/themesberg/flowbite" },
    { label: "Discord", link: "https://discord.gg/4eeurUVvTy" },
    // Add more follow us links as needed
  ],
  legalList: [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms & Conditions", link: "#" },
    // Add more legal links as needed
  ],
};

export const imageData = [
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    alt: "img 1",
    legend: "This is image one"
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    alt: "img 2",
    legend: "This is image two"
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    alt: "img 3",
    legend: "This is image three"
  },
];


export const dummy_editor_data = {
    time: 1635851479569,
    blocks: [
      { id: "YWMraElphC", type: "paragraph", data: { text: "<b>Hello</b>" } },
      {
        id: "EAniKmugQq",
        type: "paragraph",
        data: { text: '<i><code class="inline-code">npm init</code></i>' }
      },
      {
        id: "Diw_9mPof3",
        type: "simpleImage",
        data: {
          url:
            "https://cdn4.buysellads.net/uu/1/93750/1628773830-carbon-ads-2021-08_2x.png",
          caption: "Hey",
          withBorder: false,
          withBackground: true,
          stretched: false
        }
      },
      {
        id: "TSb458m5kU",
        type: "table",
        data: {
          withHeadings: false,
          content: [
            ["<b>Name</b>", "<b>Age</b>"],
            ["Ikbel", "29"],
            ["Mimi", "30"]
          ]
        }
      },
      { id: "l9POcr6KjI", type: "paragraph", data: { text: "Alright" } }
    ],
    version: "2.28.0"
  };