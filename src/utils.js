export const CATEGORY_NAMES = [
    'Technology',
    'Food',
    'Web Development',
    'Entertainment',
    'News',
    'Education',
    'Information & Technology',
    'Vlog',
    'Daily Life',
    'Other',
  ];

  export const AUTHOR_NAMES = [
    'Mohammed Faran',
    'Mohammed Hasnain',
    'Fazil Shah',
    'Ashad Khan',
    'Deepak',
    'Aneesh'
  ];

  export const FILTER_BY_DATE_OPTIONS = [
    '1 Day',
    '1 Week',
    '1 Month',
    'Any'
  ];

  export const BLOG_DATA = [
    {
      title : "How to create dron via arduino",
      imageSrc: "https://images.pexels.com/photos/4234529/pexels-photo-4234529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ['Technology', 'Web Development'],
      description: "Here is the full blog to how to create dron, via Arduino. Plaese Like and Subscribe.",
      id: "1",
      author: "Mohammed Faran"
    },
    {
      title : "How to create dron via arduino 2",
      imageSrc: "https://images.pexels.com/photos/11276365/pexels-photo-11276365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ['Entertainment', 'Web Development'],
      description: "Here is the full blog to how to create dron, via Arduino. Plaese Like and Subscribe.",
      id: "2",
      author: "Mohammed Hasnain"
    },
    {
      title : "How to create dron via arduino 3",
      imageSrc: "https://images.pexels.com/photos/9828321/pexels-photo-9828321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ['Information & Technology', 'Daily Life'],
      description: "Here is the full blog to how to create dron, via Arduino. Plaese Like and Subscribe.",
      id: "3",
      author: "Mohammed Hasnain"
    },
    {
      title : "How to create dron via arduino 4",
      imageSrc: "https://images.pexels.com/photos/14320920/pexels-photo-14320920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ['Technology', 'Other'],
      description: "Here is the full blog to how to create dron, via Arduino. Plaese Like and Subscribe.",
      id: "4",
      author: "Fazil Shah"
    },
  ];

  export const handleOpenSocialMedia = (url) => {
    if(url)
      window.open(url, '_blank');
};