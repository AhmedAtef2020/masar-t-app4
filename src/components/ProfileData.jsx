const profileData = [
    {
        imgTitle: "المشروع الأول",
        imgSrc: "./images/Profile-Sample1.jpg",
        imgAlt: "profile sample 1",
        category: "التسويق الرقمي",
    },
    {
        imgTitle: "المشروع الثاني",
        imgSrc: "./images/Profile-Sample2.jpg",
        imgAlt: "profile sample 2",
        category: "المواقع والتطبيقات",
    },
    {
        imgTitle: "المشروع الثالث",
        imgSrc: "./images/Profile-Sample3.jpg",
        imgAlt: "profile sample 3",
        category: "الهوية البصرية",
    },
    {
        imgTitle: "المشروع الرابع",
        imgSrc: "./images/Profile-Sample4.jpg",
        imgAlt: "profile sample 4",
        category: "التغليف",
    },
    {
        imgTitle: "المشروع الخامس",
        imgSrc: "./images/Profile-Sample1.jpg",
        imgAlt: "profile sample 1",
        category: "البروفايل",
    },
    {
        imgTitle: "المشروع السادس",
        imgSrc: "./images/Profile-Sample2.jpg",
        imgAlt: "profile sample 2",
        category: "الكتاب",
    },
    {
        imgTitle: "المشروع الرابع",
        imgSrc: "./images/Profile-Sample4.jpg",
        imgAlt: "profile sample 4",
        category: "التغليف",
    },
    {
        imgTitle: "المشروع الخامس",
        imgSrc: "./images/Profile-Sample1.jpg",
        imgAlt: "profile sample 1",
        category: "البروفايل",
    },
    {
        imgTitle: "المشروع السادس",
        imgSrc: "./images/Profile-Sample2.jpg",
        imgAlt: "profile sample 2",
        category: "الكتاب",
    },
    {
        imgTitle: "المشروع السابع",
        imgSrc: "./images/Profile-Sample3.jpg",
        imgAlt: "profile sample 3",
        category: "البروفايل",
    },
    {
        imgTitle: "المشروع الثامن",
        imgSrc: "./images/Profile-Sample4.jpg",
        imgAlt: "profile sample 4",
        category: "الدعاية",
    },
    {
        imgTitle: "المشروع التاسع",
        imgSrc: "./images/Profile-Sample2.jpg",
        imgAlt: "profile sample 2",
        category: "الافتات الإعلانية",
    },
    {
        imgTitle: "المشروع السابع",
        imgSrc: "./images/Profile-Sample3.jpg",
        imgAlt: "profile sample 3",
        category: "التغليف",
    },
    {
        imgTitle: "المشروع الثامن",
        imgSrc: "./images/Profile-Sample4.jpg",
        imgAlt: "profile sample 4",
        category: "تصوير المنتجات",
    },
    {
        imgTitle: "المشروع التاسع",
        imgSrc: "./images/Profile-Sample2.jpg",
        imgAlt: "profile sample 2",
        category: "تنظيم المعارض",
    },
];

const categories = [...new Set(profileData.map(item => item.category))];

export { profileData, categories };


// lists: ["الهوية البصرية", "المواقع والتطبيقات", "التسويق الرقمي", "الكتاب", "البروفايل", "الدعاية", "الافتات الإعلانية", "التغليف", "تصوير المنتجات", "تنظيم المعارض"],