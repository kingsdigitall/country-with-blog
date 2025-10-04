// DEFAULT: Import statements with enhanced error handling for all JSON content files
let aboutData: any;
let blogDataJson: any;
let blogCategoryMetaJson: any;
let contactPageDataJson: any;
let contactDataJson: any;
let homePageDataJson: any;
let locationPageDataJson: any;
let brandsDataJson: any;
let servicePageDataJson: any;
let subDomainUrlContentJson: any;
let galleryDataJson: any;

// DEFAULT: Enhanced error handling with detailed console warnings
try {
  aboutData = require("@/components/Content/about.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load about.json, using comprehensive default values",
  );
  aboutData = {};
}

try {
  blogDataJson = require("@/components/Content/blogs.json");
} catch (error) {
  console.warn("DEFAULT: Failed to load blogs.json, using default blog posts");
  blogDataJson = [];
}

try {
  blogCategoryMetaJson = require("@/components/Content/blogsCategoryMetas.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load blogsCategoryMetas.json, using default category metadata",
  );
  blogCategoryMetaJson = {};
}

try {
  contactPageDataJson = require("@/components/Content/contact.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load contact.json, using default contact page content",
  );
  contactPageDataJson = {};
}

try {
  contactDataJson = require("@/components/Content/ContactInfo.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load ContactInfo.json, using default contact information",
  );
  contactDataJson = {};
}

try {
  homePageDataJson = require("@/components/Content/home.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load home.json, using default home page content",
  );
  homePageDataJson = {};
}

try {
  locationPageDataJson = require("@/components/Content/location.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load location.json, using default location content",
  );
  locationPageDataJson = {};
}

try {
  brandsDataJson = require("@/components/Content/ourBrand.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load ourBrand.json, using default brand information",
  );
  brandsDataJson = {};
}

try {
  servicePageDataJson = require("@/components/Content/servicePage.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load servicePage.json, using default service page content",
  );
  servicePageDataJson = {};
}


try {
  subDomainUrlContentJson = require("@/components/Content/subDomainUrlContent.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load subDomainUrlContent.json, using default subdomain content",
  );
  subDomainUrlContentJson = {};
}

try {
  galleryDataJson = require("@/components/Content/gallery.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load gallery.json, using default gallery content",
  );
  galleryDataJson = {
    "metaTitle": "Gallery - Photo Collection",
    "metaDescription": "Browse our photo gallery collection showcasing our work and projects.",
    "galleries": [
      {
        "id": "projects",
        "title": "Our Work",
        "images": [
          {
            "id": "p1",
            "image": "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
            "title": "Project 1"
          }
        ]
      }
    ]
  };
}

// DEFAULT: Comprehensive helper function to provide fallback for empty, null, or missing values
function getValueOrDefault(value: any, defaultValue: any): any {
  if (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" &&
      value !== null &&
      Object.keys(value).length === 0)
  ) {
    return defaultValue;
  }
  return value;
}

// DEFAULT: Enhanced helper function to ensure mission section has complete data with fallbacks
function ensureMissionSection(missionSection: any[]): any[] {
  const defaultMissionSections = [
    {
      title: "DEFAULT: Our Mission",
      description:
        "DEFAULT: Our mission is to provide top-tier water damage restoration services focused on fast response, quality workmanship, and customer satisfaction in [location].",
    },
    {
      title: "DEFAULT: Our Vision",
      description:
        "DEFAULT: We're building the most reliable name in water damage restoration in [location] by staying committed to clear communication, fast response times, and expert service.",
    },
    {
      title: "DEFAULT: Our Values",
      description:
        "DEFAULT: We believe in responding quickly, offering honest assessments, providing quality restoration work, and keeping your property safe and dry.",
    },
  ];

  if (!Array.isArray(missionSection) || missionSection.length === 0) {
    return defaultMissionSections;
  }

  return missionSection.map((item: any, index: number) => ({
    title: getValueOrDefault(
      item?.title,
      defaultMissionSections[index]?.title || "DEFAULT: Our Mission",
    ),
    description: getValueOrDefault(
      item?.description,
      defaultMissionSections[index]?.description ||
        "DEFAULT: Our commitment to excellence in water damage restoration service in [location].",
    ),
  }));
}

// DEFAULT: Helper function to ensure FAQ array has complete data with fallbacks
function ensureFaqSection(faqSection: any[]): any[] {
  const defaultFaq = [
    {
      FAQ: "DEFAULT: How quickly can you respond to water damage in [location]?",
      Answer:
        "DEFAULT: We provide 24/7 emergency response and can typically arrive within 60 minutes for water damage emergencies in [location].",
      question: "DEFAULT: How quickly can you respond to water damage in [location]?",
      answer:
        "DEFAULT: We provide 24/7 emergency response and can typically arrive within 60 minutes for water damage emergencies in [location].",
    },
    {
      FAQ: "DEFAULT: What types of water damage do you restore in [location]?",
      Answer:
        "DEFAULT: We handle all types of water damage including floods, burst pipes, storm damage, sewage backups, and appliance leaks.",
      question: "DEFAULT: What types of water damage do you restore in [location]?",
      answer:
        "DEFAULT: We handle all types of water damage including floods, burst pipes, storm damage, sewage backups, and appliance leaks.",
    },
    {
      FAQ: "DEFAULT: Do you work with insurance companies in [location]?",
      Answer:
        "DEFAULT: Yes, we work directly with all major insurance companies and can help you navigate the claims process for faster restoration.",
      question: "DEFAULT: Do you work with insurance companies in [location]?",
      answer:
        "DEFAULT: Yes, we work directly with all major insurance companies and can help you navigate the claims process for faster restoration.",
    },
  ];

  if (!Array.isArray(faqSection) || faqSection.length === 0) {
    return defaultFaq;
  }

  return faqSection.map((item: any, index: number) => ({
    FAQ: getValueOrDefault(
      item?.FAQ || item?.question,
      defaultFaq[index]?.FAQ || "DEFAULT: Water Damage Restoration Question",
    ),
    Answer: getValueOrDefault(
      item?.Answer || item?.answer,
      defaultFaq[index]?.Answer ||
        "DEFAULT: Professional water damage restoration answer for [location].",
    ),
    question: getValueOrDefault(
      item?.question || item?.FAQ,
      defaultFaq[index]?.question || "DEFAULT: Water Damage Restoration Question",
    ),
    answer: getValueOrDefault(
      item?.answer || item?.Answer,
      defaultFaq[index]?.answer ||
        "DEFAULT: Professional water damage restoration answer for [location].",
    ),
  }));
}

// DEFAULT: Helper function to ensure reviews array has complete data with fallbacks
function ensureReviewsSection(reviewsSection: any[]): any[] {
  const defaultReviews = [
    {
      name: "DEFAULT: John D.",
      rating: 5,
      review:
        "DEFAULT: Excellent water damage restoration service! Fast response and professional work. Highly recommended!",
      Review:
        "DEFAULT: Excellent water damage restoration service! Fast response and professional work. Highly recommended!",
    },
    {
      name: "DEFAULT: Sarah M.",
      rating: 5,
      review:
        "DEFAULT: Professional team handled our flood damage perfectly. Great communication and quality restoration work.",
      Review:
        "DEFAULT: Professional team handled our flood damage perfectly. Great communication and quality restoration work.",
    },
    {
      name: "DEFAULT: Mike R.",
      rating: 5,
      review:
        "DEFAULT: Quick response to our emergency. Made our water damage cleanup stress-free and efficient.",
      Review:
        "DEFAULT: Quick response to our emergency. Made our water damage cleanup stress-free and efficient.",
    },
  ];

  if (!Array.isArray(reviewsSection) || reviewsSection.length === 0) {
    return defaultReviews;
  }

  return reviewsSection.map((item: any, index: number) => ({
    name: getValueOrDefault(
      item?.name,
      defaultReviews[index]?.name || "DEFAULT: Satisfied Customer",
    ),
    rating: getValueOrDefault(item?.rating, defaultReviews[index]?.rating || 5),
    review: getValueOrDefault(
      item?.review || item?.Review,
      defaultReviews[index]?.review ||
        "DEFAULT: Great water damage restoration service in [location]!",
    ),
    Review: getValueOrDefault(
      item?.Review || item?.review,
      defaultReviews[index]?.Review ||
        "DEFAULT: Great water damage restoration service in [location]!",
    ),
  }));
}


// DEFAULT: Helper function to ensure service data lists have complete data with comprehensive fallbacks
function ensureServiceDataLists(serviceData: any): any {
  const defaultServiceData = {
    title: "DEFAULT: Complete Water Damage Restoration Solutions",
    p: "",
    lists: [
      {
        title: "DEFAULT: Emergency Water Damage Restoration in [location]",
        description:
          "DEFAULT: Call Us At [phone]. We offer emergency water damage restoration in [location] for floods, burst pipes, storm damage, and water emergencies.",
        h2: "DEFAULT: Need Emergency Water Damage Restoration?",
        p2: "DEFAULT: Emergency water damage restoration in [location] makes it easy to quickly restore your property after floods, leaks, or storm damage. Whether it's residential or commercial property, we've got the expertise for the job. Call Us At [phone]",
        h3: "DEFAULT: Perfect For All Types of Water Damage",
        p3: "DEFAULT: Flood damage | Burst pipes | Storm damage | Sewage backup | Appliance leaks | Roof leaks | Basement flooding | Emergency water extraction",
        seoContent:
          "DEFAULT: <h2>Emergency Water Damage Restoration in [location]</h2><p>Our emergency water damage restoration service in [location] is designed to quickly restore your property after water emergencies. We provide fast response and complete restoration services, perfect for residential and commercial properties. Call Us At [phone]</p>",
        slug: "DEFAULT: emergency-water-damage-restoration",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
      {
        title: "DEFAULT: Commercial Water Damage Restoration in [location]",
        description:
          "DEFAULT: Call Us At [phone]. Dependable commercial water damage restoration in [location] for businesses and commercial properties needing reliable restoration services.",
        h2: "DEFAULT: Built for Commercial Properties",
        p2: "DEFAULT: Our commercial water damage restoration in [location] supports businesses, office buildings, and commercial properties with comprehensive restoration services. With fast response and complete restoration, we keep your business running smoothly. Call Us At [phone]",
        h3: "DEFAULT: Trusted by Local Businesses",
        p3: "DEFAULT: Office buildings | Retail stores | Restaurants | Warehouses | Manufacturing facilities | Hotels | Medical facilities | Educational institutions",
        seoContent:
          "DEFAULT: <h2>Commercial Water Damage Restoration in [location]</h2><p>We supply reliable commercial water damage restoration in [location] tailored to meet the demanding needs of local businesses and commercial properties. From emergency response to complete restoration, we've got your business covered. Call Us At [phone]</p>",
        slug: "DEFAULT: commercial-water-damage-restoration",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
      {
        title: "DEFAULT: Residential Water Damage Restoration in [location]",
        description:
          "DEFAULT: Call Us At [phone]. Residential water damage restoration in [location] with comprehensive services for homes, apartments, and residential properties.",
        h2: "DEFAULT: Restore Your Home Quickly",
        p2: "DEFAULT: Our residential water damage restoration in [location] is ideal for homes, apartments, and residential properties. We provide comprehensive solutions and dependable service with flexible scheduling. Call Us At [phone]",
        h3: "DEFAULT: Ideal for Home Restoration",
        p3: "DEFAULT: Single family homes | Apartments | Condominiums | Townhouses | Mobile homes | Basements | Attics | Residential water damage",
        seoContent:
          "DEFAULT: <h2>Residential Water Damage Restoration in [location]</h2><p>For dependable residential water damage restoration in [location], homeowners trust us for fast response, quality restoration, and comprehensive services. We help restore your home to pre-loss condition. Call Us At [phone]</p>",
        slug: "DEFAULT: residential-water-damage-restoration",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
      {
        title: "DEFAULT: Storm Damage Restoration in [location]",
        description:
          "DEFAULT: Call Us At [phone]. Professional storm damage restoration in [location] for severe weather damage requiring comprehensive restoration services.",
        h2: "DEFAULT: Complete Storm Damage Restoration Services",
        p2: "DEFAULT: We provide storm damage restoration in [location] with emergency response and comprehensive services. Choose from complete restoration solutions for your storm damage—no compromising on quality or results. Call Us At [phone]",
        h3: "DEFAULT: Storm Damage Restoration Works Great For",
        p3: "DEFAULT: Hurricane damage | Tornado damage | Hail damage | Wind damage | Tree damage | Roof damage | Siding damage | Window damage",
        seoContent:
          "DEFAULT: <h2>Storm Damage Restoration in [location]</h2><p>Our storm damage restoration service in [location] is comprehensive, professional, and built to restore your property completely. With advanced equipment and expert technicians, your property will be fully restored. Call Us At [phone]</p>",
        slug: "DEFAULT: storm-damage-restoration",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
      {
        title: "DEFAULT: Same Day Water Damage Restoration in [location]",
        description:
          "DEFAULT: Call Us At [phone]. Get same day water damage restoration in [location] when you're facing an emergency or urgent water damage needs immediate restoration services.",
        h2: "DEFAULT: Need Water Damage Restoration Fast? We've Got You",
        p2: "DEFAULT: When time's critical, we're the go-to for same day water damage restoration in [location]. Call in the morning, get emergency response that afternoon—no stress, no wait. Call Us At [phone]",
        h3: "DEFAULT: Perfect for Emergency Situations",
        p3: "DEFAULT: Burst pipes | Flooding emergencies | Storm damage | Appliance leaks | Roof leaks | Sewage backups | Emergency water extraction | Critical water damage",
        seoContent:
          "DEFAULT: <h2>Same Day Water Damage Restoration in [location]</h2><p>Our same day water damage restoration in [location] helps you handle emergency situations fast. With responsive service and immediate availability, you get the restoration you need without delay. Call Us At [phone]</p>",
        slug: "DEFAULT: same-day-water-damage-restoration",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
      {
        title: "DEFAULT: Mold Remediation Services in [location]",
        description:
          "DEFAULT: Call Us At [phone]. Reliable mold remediation services in [location] for mold removal, prevention, and comprehensive mold restoration.",
        h2: "DEFAULT: Keep Your Property Safe and Mold-Free",
        p2: "DEFAULT: Our mold remediation services in [location] provide safe, effective mold removal for residential and commercial properties. Keep your property healthy and safe. Call Us At [phone]",
        h3: "DEFAULT: Great For All Types of Mold Issues",
        p3: "DEFAULT: Black mold | Toxic mold | Basement mold | Attic mold | Bathroom mold | Crawl space mold | HVAC mold | Post-water damage mold",
        seoContent:
          "DEFAULT: <h2>Mold Remediation Services in [location]</h2><p>Make your property safe with mold remediation services in [location]. We provide complete mold removal and prevention services to protect your property and health. Call Us At [phone]</p>",
        slug: "DEFAULT: mold-remediation-services",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
    ],
  };

  if (!serviceData || typeof serviceData !== "object") {
    return defaultServiceData;
  }

  const ensuredLists =
    Array.isArray(serviceData.lists) && serviceData.lists.length > 0
      ? serviceData.lists.map((item: any, index: number) => ({
          title: getValueOrDefault(
            item?.title,
            defaultServiceData.lists[index]?.title ||
              "DEFAULT: Water Damage Restoration Service",
          ),
          description: getValueOrDefault(
            item?.description,
            defaultServiceData.lists[index]?.description ||
              "DEFAULT: Professional water damage restoration service in [location].",
          ),
          h2: getValueOrDefault(
            item?.h2,
            defaultServiceData.lists[index]?.h2 ||
              "DEFAULT: Professional Service",
          ),
          p2: getValueOrDefault(
            item?.p2,
            defaultServiceData.lists[index]?.p2 ||
              "DEFAULT: Quality water damage restoration service in [location].",
          ),
          h3: getValueOrDefault(
            item?.h3,
            defaultServiceData.lists[index]?.h3 || "DEFAULT: Service Benefits",
          ),
          p3: getValueOrDefault(
            item?.p3,
            defaultServiceData.lists[index]?.p3 ||
              "DEFAULT: Professional solutions for all your needs.",
          ),
          seoContent: getValueOrDefault(
            item?.seoContent,
            defaultServiceData.lists[index]?.seoContent ||
              "DEFAULT: <h2>Professional Water Damage Restoration Service</h2><p>Quality restoration service in [location].</p>",
          ),
          slug: getValueOrDefault(
            item?.slug,
            defaultServiceData.lists[index]?.slug || "default-service",
          ),
          imageUrl: getValueOrDefault(
            item?.imageUrl,
            defaultServiceData.lists[index]?.imageUrl ||
              "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
          ),
        }))
      : defaultServiceData.lists;

  return {
    title: getValueOrDefault(serviceData.title, defaultServiceData.title),
    p: getValueOrDefault(serviceData.p, defaultServiceData.p),
    lists: ensuredLists,
  };
}

// DEFAULT: Helper function to ensure gallery data has complete data with comprehensive fallbacks
function ensureGalleryData(galleryData: any): any {
  const defaultGalleryData = {
    metaTitle: "DEFAULT: Water Damage Restoration Gallery | Before & After Photos",
    metaDescription: "DEFAULT: View our water damage restoration work gallery showing before and after photos of flood cleanup, mold removal, and structural drying projects in [location].",
    galleries: [
      {
        id: "projects",
        title: "DEFAULT: Our Water Damage Restoration Work",
        images: [
          {
            id: "p1",
            image: "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
            title: "DEFAULT: Water Damage Project 1"
          },
          {
            id: "p2",
            image: "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
            title: "DEFAULT: Water Damage Project 2"
          },
          {
            id: "p3",
            image: "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
            title: "DEFAULT: Water Damage Project 3"
          }
        ]
      }
    ]
  };

  if (!galleryData || typeof galleryData !== "object") {
    return defaultGalleryData;
  }

  const ensuredGalleries = Array.isArray(galleryData.galleries) && galleryData.galleries.length > 0
    ? galleryData.galleries.map((gallery: any, galleryIndex: number) => {
        const ensuredImages = Array.isArray(gallery.images) && gallery.images.length > 0
          ? gallery.images.map((image: any, imageIndex: number) => ({
              id: getValueOrDefault(
                image?.id,
                `DEFAULT: p${imageIndex + 1}`
              ),
              image: getValueOrDefault(
                image?.image,
                "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930"
              ),
              title: getValueOrDefault(
                image?.title,
                `DEFAULT: Water Damage Project ${imageIndex + 1}`
              )
            }))
          : defaultGalleryData.galleries[galleryIndex]?.images || defaultGalleryData.galleries[0].images;

        return {
          id: getValueOrDefault(
            gallery?.id,
            defaultGalleryData.galleries[galleryIndex]?.id || "projects"
          ),
          title: getValueOrDefault(
            gallery?.title,
            defaultGalleryData.galleries[galleryIndex]?.title || "DEFAULT: Our Water Damage Restoration Work"
          ),
          images: ensuredImages
        };
      })
    : defaultGalleryData.galleries;

  return {
    metaTitle: getValueOrDefault(
      galleryData.metaTitle,
      defaultGalleryData.metaTitle
    ),
    metaDescription: getValueOrDefault(
      galleryData.metaDescription,
      defaultGalleryData.metaDescription
    ),
    galleries: ensuredGalleries
  };
}

// DEFAULT: Contact Content with comprehensive default fallbacks
const {
  No = "DEFAULT: (555) 123-4567",
  tel = "DEFAULT: +15551234567",
  mail = "DEFAULT: info@waterdamagerestoration.com",
  baseUrl = "DEFAULT: https://waterdamagerestoration.com/",
  host = "DEFAULT: waterdamagerestoration.com",
  name = "DEFAULT: Premier Water Damage Restoration",
  address = "DEFAULT: 123 Main Street, Your City, State 12345",
  service = "DEFAULT: Water Damage Restoration",
  location = "DEFAULT: Your City, State",
  zipCode = "DEFAULT: 12345",
  bannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  logoImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  favicon = "DEFAULT: /favicon.ico",
  googleAnalytics = "DEFAULT: GA_MEASUREMENT_ID",
  minor = "DEFAULT: #fed700",
  main = "DEFAULT: #283143",
} = (contactDataJson as any) || {};

const contactContent: any = {
  No: getValueOrDefault(contactDataJson?.No, "DEFAULT: (555) 123-4567"),
  tel: getValueOrDefault(contactDataJson?.tel, "DEFAULT: +15551234567"),
  mail: getValueOrDefault(
    contactDataJson?.mail,
    "",
  ),
  baseUrl: getValueOrDefault(
    contactDataJson?.baseUrl,
    "DEFAULT: https://waterdamagerestoration.com/",
  ),
  host: getValueOrDefault(contactDataJson?.host, "DEFAULT: waterdamagerestoration.com"),
  name: getValueOrDefault(
    contactDataJson?.name,
    "DEFAULT: Premier Water Damage Restoration",
  ),
  address: getValueOrDefault(
    contactDataJson?.address,
    "",
  ),
  service: getValueOrDefault(
    contactDataJson?.service,
    "DEFAULT: Water Damage Restoration",
  ),
  location: getValueOrDefault(
    contactDataJson?.location,
    "DEFAULT: Your City, State",
  ),
  zipCode: getValueOrDefault(contactDataJson?.zipCode, "DEFAULT: 12345"),
  bannerImage: getValueOrDefault(
    contactDataJson?.bannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  logoImage: getValueOrDefault(
    contactDataJson?.logoImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  favicon: getValueOrDefault(contactDataJson?.favicon, "DEFAULT: /favicon.ico"),
  googleAnalytics: getValueOrDefault(
    contactDataJson?.googleAnalytics,
    "DEFAULT: GA_MEASUREMENT_ID",
  ),
  minor: getValueOrDefault(contactDataJson?.minor, "DEFAULT: #fed700"),
  main: getValueOrDefault(contactDataJson?.main, "DEFAULT: #283143"),
};

// DEFAULT: About Content with comprehensive enhanced default fallbacks
const {
  metaTitle,
  metaDescription,
  bannerQuote,
  bannerImage: aboutBannerImage,
  h1Banner,
  p1Banner,
  p2,
  h2Image,
  missionSection,
  areaweserveSection,
} = aboutData || {};

const aboutContent: any = {
  metaTitle: getValueOrDefault(
    metaTitle,
    "DEFAULT: Professional Water Damage Restoration in [location] | About Us",
  ),
  metaDescription: getValueOrDefault(
    metaDescription,
    "DEFAULT: Need professional water damage restoration in [location]? 24/7 emergency response, certified technicians, and insurance assistance. Call Us at [phone] for immediate help.",
  ),
  bannerQuote: getValueOrDefault(
    bannerQuote,
    "DEFAULT: Your Trusted Partner for Water Damage Restoration Solutions",
  ),
  bannerImage: getValueOrDefault(
    aboutBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    h1Banner,
    "DEFAULT: Professional Water Damage Restoration in [location] - 24/7 Emergency Service",
  ),
  p1Banner: getValueOrDefault(
    p1Banner,
    "DEFAULT: Need professional water damage restoration in [location]? 24/7 emergency response, certified technicians, and insurance assistance. Call Us at [phone] for immediate help.",
  ),
  p2: getValueOrDefault(
    p2,
    "DEFAULT: We provide professional water damage restoration in [location] for homeowners, businesses, and property managers. Whether you're dealing with flood damage, burst pipes, storm damage, or sewage backups, our certified technicians are ready to provide fast, effective restoration services. From water extraction and structural drying to mold remediation and full reconstruction, we handle every aspect of water damage recovery. With 24/7 emergency response, advanced equipment, and direct insurance billing, our service is trusted by customers who need fast and reliable solutions for water damage emergencies.",
  ),
  h2Image: getValueOrDefault(
    h2Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  missionSection: ensureMissionSection(missionSection),
  areaweserveSection: (() => {
    const defaultAreaSection = {
      description:
        "DEFAULT: We proudly provide water damage restoration services across [location], responding to homes, businesses, and commercial properties 24/7.",
      linkText: "DEFAULT: Check our Water Damage Restoration service locations here.",
      link: "DEFAULT: /locations",
    };

    if (!areaweserveSection || typeof areaweserveSection !== "object") {
      return defaultAreaSection;
    }

    return {
      description: getValueOrDefault(
        areaweserveSection.description,
        defaultAreaSection.description,
      ),
      linkText: getValueOrDefault(
        areaweserveSection.linkText,
        "DEFAULT: Check our Water Damage Restoration service locations here.",
      ),
      link: getValueOrDefault(areaweserveSection.link, defaultAreaSection.link),
    };
  })(),
};

// DEFAULT: Blogs Content with comprehensive fallbacks
const blogContent: any = {
  posts: (() => {
    const defaultBlogPosts = [
      {
        title:
          "DEFAULT: How to Handle Water Damage Emergency in Your Home",
        metaTitle:
          "DEFAULT: Emergency Water Damage Response Guide for [location] Homeowners",
        metaDescription:
          "DEFAULT: Learn essential steps to handle water damage emergencies in [location]. Expert tips for minimizing damage and starting the restoration process.",
        category: "DEFAULT: water-damage-tips",
        categoryName: "DEFAULT: Water Damage Tips",
        slug: "DEFAULT: handle-water-damage-emergency",
        h1: "DEFAULT: How to Handle Water Damage Emergency in Your Home",
        description:
          "DEFAULT: Quick action during a water damage emergency can save your property and prevent costly repairs.",
        postImageSrc:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        postImageAlt: "DEFAULT: water damage emergency response guide",
        publishedAt: "DEFAULT: 2025-01-01",
        body: "DEFAULT: <p>When facing water damage in your home, quick action is essential. This comprehensive guide will help you respond effectively to water damage emergencies in [location].</p>",
      },
    ];

    if (!Array.isArray(blogDataJson) || blogDataJson.length === 0) {
      return defaultBlogPosts;
    }

    return blogDataJson.map((post: any, index: number) => {
      // Ensure fallback defaults for all fields regardless of index
      const baseFallback = {
        title: "DEFAULT: Water Damage Restoration Tips",
        metaTitle: "DEFAULT: Water Damage Restoration Information",
        metaDescription: "DEFAULT: Learn about water damage restoration in [location].",
        category: "DEFAULT: general",
        categoryName: "DEFAULT: General",
        slug: `DEFAULT: blog-post-${index + 1}`,
        h1: "DEFAULT: Water Damage Restoration Blog Post",
        description: "DEFAULT: Helpful information about water damage restoration.",
        postImageSrc: "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        postImageAlt: "DEFAULT: blog post image",
        publishedAt: "DEFAULT: 2025-01-01",
        body: "DEFAULT: <p>Blog content about water damage restoration services.</p>"
      };
      
      return {
        title: getValueOrDefault(
          post?.title,
          defaultBlogPosts[index]?.title || baseFallback.title,
        ),
        metaTitle: getValueOrDefault(
          post?.metaTitle,
          defaultBlogPosts[index]?.metaTitle || baseFallback.metaTitle,
        ),
        metaDescription: getValueOrDefault(
          post?.metaDescription,
          defaultBlogPosts[index]?.metaDescription || baseFallback.metaDescription,
        ),
        category: getValueOrDefault(
          post?.category,
          defaultBlogPosts[index]?.category || baseFallback.category,
        ),
        categoryName: getValueOrDefault(
          post?.categoryName,
          defaultBlogPosts[index]?.categoryName || baseFallback.categoryName,
        ),
        slug: getValueOrDefault(
          post?.slug,
          defaultBlogPosts[index]?.slug || baseFallback.slug,
        ),
        h1: getValueOrDefault(
          post?.h1,
          defaultBlogPosts[index]?.h1 || baseFallback.h1,
        ),
        description: getValueOrDefault(
          post?.description,
          defaultBlogPosts[index]?.description || baseFallback.description,
        ),
        postImageSrc: getValueOrDefault(
          post?.postImageSrc,
          defaultBlogPosts[index]?.postImageSrc || baseFallback.postImageSrc,
        ),
        postImageAlt: getValueOrDefault(
          post?.postImageAlt,
          defaultBlogPosts[index]?.postImageAlt || baseFallback.postImageAlt,
        ),
        publishedAt: getValueOrDefault(
          post?.publishedAt,
          defaultBlogPosts[index]?.publishedAt || baseFallback.publishedAt,
        ),
        body: getValueOrDefault(
          post?.body,
          defaultBlogPosts[index]?.body || baseFallback.body,
        ),
      };
    });
  })(),
};

// DEFAULT: Blogs Category Content with comprehensive fallbacks
const blogCategoryMetaMap: any = (() => {
  const defaultCategoryMetas = {
    "DEFAULT: general": {
      title:
        "DEFAULT: Water Damage Restoration Tips and Information | [location] Insights",
      description:
        "DEFAULT: Discover helpful tips and insights about water damage restoration services in [location]. Expert advice for your property restoration needs.",
      bannerImage:
        "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
    },
  };

  if (
    !blogCategoryMetaJson ||
    typeof blogCategoryMetaJson !== "object" ||
    Object.keys(blogCategoryMetaJson).length === 0
  ) {
    return defaultCategoryMetas;
  }

  const processedMetas: any = {};
  for (const [key, value] of Object.entries(blogCategoryMetaJson)) {
    if (value && typeof value === "object") {
      const categoryData = value as any;
      processedMetas[key] = {
        title: getValueOrDefault(
          categoryData?.title,
          `DEFAULT: ${key} Category | [location] Information`,
        ),
        description: getValueOrDefault(
          categoryData?.description,
          `DEFAULT: Learn about ${key} related to water damage restoration in [location].`,
        ),
        bannerImage: getValueOrDefault(
          categoryData?.bannerImage,
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        ),
      };
    }
  }

  return Object.keys(processedMetas).length > 0
    ? processedMetas
    : defaultCategoryMetas;
})();

// DEFAULT: Contact Page Content with comprehensive default fallbacks
const {
  metaTitle:
    contactPageMetaTitle = "DEFAULT: Contact Us - [location] Water Damage Restoration | Get Emergency Help",
  metaDescription:
    contactPageMetaDescription = "DEFAULT: Contact our [location] water damage restoration team for 24/7 emergency service. Call [phone] for immediate response and professional restoration.",
  bannerQuote:
    contactPageBannerQuote = "DEFAULT: Emergency Water Damage? Contact Us Now!",
  bannerImage:
    contactPageBannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h1Banner:
    contactPageH1Banner = "DEFAULT: Contact Our [location] Water Damage Restoration Team",
  p1Banner:
    contactPageP1Banner = "DEFAULT: Get immediate help from our certified water damage restoration team in [location]. Call [phone] for 24/7 emergency response and professional restoration services.",
  h2 = "DEFAULT: Get Your Free Water Damage Assessment",
  h2Image:
    contacth2Image = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  p2: contactp2 = "DEFAULT: Our certified technicians are ready to help you with any water damage emergency. Whether it's flood damage, burst pipes, or storm damage, we have the expertise to restore your property in [location].",
  h3 = "DEFAULT: Why Choose Our Water Damage Restoration Service?",
  p3 = "DEFAULT: 24/7 emergency response, certified technicians, and direct insurance billing make us the top choice for water damage restoration in [location]. Call [phone] to get immediate help.",
  h3Image = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ctaText = "DEFAULT: Water damage emergency? Call [phone] now for immediate response and professional restoration service in [location]!",
  mapLink = "https://maps.google.com/maps?q=[location]&t=&z=10&ie=UTF8&iwloc=&output=embed",
} = (contactPageDataJson as any) || {};

const contactPageContent: any = {
  metaTitle: getValueOrDefault(
    contactPageMetaTitle,
    "DEFAULT: Contact Us - [location] Water Damage Restoration | Get Emergency Help",
  ),
  metaDescription: getValueOrDefault(
    contactPageMetaDescription,
    "DEFAULT: Contact our [location] water damage restoration team for 24/7 emergency service. Call [phone] for immediate response and professional restoration.",
  ),
  bannerQuote: getValueOrDefault(
    contactPageBannerQuote,
    "DEFAULT: Emergency Water Damage? Contact Us Now!",
  ),
  bannerImage: getValueOrDefault(
    contactPageBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    contactPageH1Banner,
    "DEFAULT: Contact Our [location] Water Damage Restoration Team",
  ),
  p1Banner: getValueOrDefault(
    contactPageP1Banner,
    "DEFAULT: Get immediate help from our certified water damage restoration team in [location]. Call [phone] for 24/7 emergency response and professional restoration services.",
  ),
  h2: getValueOrDefault(h2, "DEFAULT: Get Your Free Water Damage Assessment"),
  h2Image: getValueOrDefault(
    contacth2Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  p2: getValueOrDefault(
    contactp2,
    "DEFAULT: Our certified technicians are ready to help you with any water damage emergency. Whether it's flood damage, burst pipes, or storm damage, we have the expertise to restore your property in [location].",
  ),
  h3: getValueOrDefault(h3, "DEFAULT: Why Choose Our Water Damage Restoration Service?"),
  p3: getValueOrDefault(
    p3,
    "DEFAULT: 24/7 emergency response, certified technicians, and direct insurance billing make us the top choice for water damage restoration in [location]. Call [phone] to get immediate help.",
  ),
  h3Image: getValueOrDefault(
    h3Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  ctaText: getValueOrDefault(
    ctaText,
    "DEFAULT: Water damage emergency? Call [phone] now for immediate response and professional restoration service in [location]!",
  ),
  mapLink: getValueOrDefault(
    mapLink,
    "https://maps.google.com/maps?q=[location]&t=&z=10&ie=UTF8&iwloc=&output=embed",
  ),
};

// DEFAULT: Home Content with comprehensive enhanced default fallbacks
const {
  metaTitle:
    homeMetaTitle = "DEFAULT: #1 Water Damage Restoration in [location] | 24/7 Emergency Service",
  metaDescription:
    homeMetaDescription = "DEFAULT: Top-rated water damage restoration service in [location]. 24/7 emergency response, certified technicians, and insurance assistance. Call [phone] for immediate help!",
  bannerQuote: homeBannerQuote = "DEFAULT: Fast, Professional, Reliable",
  bannerImage:
    homeBannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h1Banner: homeH1Banner = "DEFAULT: #1 Water Damage Restoration Service in [location]",
  p1Banner:
    homeP1Banner = "DEFAULT: Get fast, professional water damage restoration service in [location]. 24/7 emergency response available. Call [phone] for immediate help!",
  h2: homeh2 = "DEFAULT: Why Choose Our Water Damage Restoration Service?",
  p2: homep2 = "DEFAULT: We provide the fastest, most reliable water damage restoration service in [location] with certified technicians and comprehensive restoration solutions.",
  h2Image:
    homeh2Image = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h3: homeh3 = "DEFAULT: Professional Water Damage Restoration Solutions",
  p3: homep3 = "DEFAULT: From flood damage to burst pipes, we have the expertise and equipment to restore your property quickly and efficiently in [location].",
  h3Image:
    homeh3Image = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  mapLink:
    homemapLink = " https://maps.google.com/maps?q=[location]&t=&z=10&ie=UTF8&iwloc=&output=embed",
  faq = [
    {
      FAQ: "DEFAULT: How quickly can you respond to water damage?",
      Answer:
        "DEFAULT: We provide 24/7 emergency response and can typically arrive within 60 minutes for water damage emergencies.",
      question: "DEFAULT: How quickly can you respond to water damage?",
      answer:
        "DEFAULT: We provide 24/7 emergency response and can typically arrive within 60 minutes for water damage emergencies.",
    },
    {
      FAQ: "DEFAULT: Do you work with insurance companies?",
      Answer:
        "DEFAULT: Yes, we work directly with all major insurance companies and can help you navigate the claims process in [location].",
      question: "DEFAULT: Do you work with insurance companies?",
      answer:
        "DEFAULT: Yes, we work directly with all major insurance companies and can help you navigate the claims process in [location].",
    },
  ],
  reviews = [
    {
      name: "DEFAULT: John D.",
      rating: 5,
      review:
        "DEFAULT: Excellent water damage restoration service! Quick response and professional work. Highly recommended!",
      Review:
        "DEFAULT: Excellent water damage restoration service! Quick response and professional work. Highly recommended!",
    },
    {
      name: "DEFAULT: Sarah M.",
      rating: 5,
      review:
        "DEFAULT: Professional team handled our flood damage perfectly. Great communication and quality restoration work.",
      Review:
        "DEFAULT: Professional team handled our flood damage perfectly. Great communication and quality restoration work.",
    },
  ],
  whyChooseSection = {
    title: "DEFAULT: Why Choose Our Water Damage Restoration Service?",
    whyChooseData: [
      {
        title: "DEFAULT: 24/7 Emergency Response",
        description: "DEFAULT: Immediate response to water damage emergencies",
        imageUrl: "DEFAULT: Comprehensive-Services.svg",
      },
      {
        title: "DEFAULT: Certified Technicians",
        description: "DEFAULT: IICRC certified water damage restoration specialists in [location]",
        imageUrl: "DEFAULT: Transparent-Pricing.png",
      },
      {
        title: "DEFAULT: Insurance Assistance",
        description:
          "DEFAULT: Direct billing and claims assistance with all major insurance companies",
        imageUrl: "DEFAULT: Expert-Team.png",
      },
    ],
  },
  affordableWidget = {
    title: "DEFAULT: Professional Water Damage Restoration Solutions",
    description:
      "DEFAULT: Get expert water damage restoration in [location] with transparent pricing and comprehensive service packages.",
    ctaText: "DEFAULT: Get Your Free Assessment",
    cards: [
      {
        title: "DEFAULT: Residential Restoration",
        description: "DEFAULT: Complete water damage restoration for homes and apartments",
        price: "DEFAULT: Free Assessment",
      },
      {
        title: "DEFAULT: Commercial Restoration",
        description: "DEFAULT: Professional water damage restoration for businesses",
        price: "DEFAULT: 24/7 Available",
      },
    ],
  },
  processWidget = {
    title: "DEFAULT: Simple 3-Step Restoration Process",
    description:
      "",
    steps: [
      {
        step: "DEFAULT: 1",
        title: "DEFAULT: Emergency Call",
        description: "DEFAULT: Call us at [phone] for immediate response",
      },
      {
        step: "DEFAULT: 2",
        title: "DEFAULT: Assessment & Extraction",
        description: "DEFAULT: We assess damage and begin water extraction in [location]",
      },
      {
        step: "DEFAULT: 3",
        title: "DEFAULT: Restoration & Repair",
        description: "DEFAULT: Complete restoration and repairs to pre-loss condition",
      },
    ],
  },
  hourCtaWidget = {
    title: "DEFAULT: 24-Hour Emergency Water Damage Restoration Available",
  },
} = (homePageDataJson as any) || {};

const homePageContent: any = {
  metaTitle: getValueOrDefault(
    homeMetaTitle,
    "DEFAULT: #1 Water Damage Restoration in [location] | 24/7 Emergency Service",
  ),
  metaDescription: getValueOrDefault(
    homeMetaDescription,
    "DEFAULT: Top-rated water damage restoration service in [location]. 24/7 emergency response, certified technicians, and insurance assistance. Call [phone] for immediate help!",
  ),
  bannerQuote: getValueOrDefault(
    homeBannerQuote,
    "DEFAULT: Fast, Professional, Reliable",
  ),
  bannerImage: getValueOrDefault(
    homeBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    homeH1Banner,
    "DEFAULT: #1 Water Damage Restoration Service in [location]",
  ),
  p1Banner: getValueOrDefault(
    homeP1Banner,
    "DEFAULT: Get fast, professional water damage restoration service in [location]. 24/7 emergency response available. Call [phone] for immediate help!",
  ),
  h2: getValueOrDefault(
    homeh2,
    "DEFAULT: Why Choose Our Water Damage Restoration Service?",
  ),
  p2: getValueOrDefault(
    homep2,
    "DEFAULT: We provide the fastest, most reliable water damage restoration service in [location] with certified technicians and comprehensive restoration solutions.",
  ),
  h2Image: getValueOrDefault(
    homeh2Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h3: getValueOrDefault(
    homeh3,
    "DEFAULT: Professional Water Damage Restoration Solutions",
  ),
  p3: getValueOrDefault(
    homep3,
    "DEFAULT: From flood damage to burst pipes, we have the expertise and equipment to restore your property quickly and efficiently in [location].",
  ),
  h3Image: getValueOrDefault(
    homeh3Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  mapLink: getValueOrDefault(
    homemapLink,
    "https://maps.google.com/maps?q=[location]&t=&z=10&ie=UTF8&iwloc=&output=embed",
  ),
  faq: ensureFaqSection(faq),
  reviews: ensureReviewsSection(reviews),
  whyChooseSection: (() => {
    const defaultWhyChoose = {
      title: "DEFAULT: Why Choose Our Water Damage Restoration Service?",
      whyChooseData: [
        {
          title: "DEFAULT: Fast Response",
          description: "DEFAULT: 24/7 emergency response available",
          imageUrl: "DEFAULT: Comprehensive-Services.svg",
        },
        {
          title: "DEFAULT: Professional Restoration",
          description: "DEFAULT: Certified technicians and advanced equipment in [location]",
          imageUrl: "DEFAULT: Transparent-Pricing.png",
        },
        {
          title: "DEFAULT: Professional Service",
          description:
            "DEFAULT: Experienced team with excellent customer service",
          imageUrl: "DEFAULT: Expert-Team.png",
        },
      ],
    };

    if (!whyChooseSection || typeof whyChooseSection !== "object") {
      return defaultWhyChoose;
    }

    const ensuredWhyChooseData =
      Array.isArray(whyChooseSection.whyChooseData) &&
      whyChooseSection.whyChooseData.length > 0
        ? whyChooseSection.whyChooseData.map((item: any, index: number) => ({
            title: getValueOrDefault(
              item?.title,
              defaultWhyChoose.whyChooseData[index]?.title ||
                "DEFAULT: Service Feature",
            ),
            description: getValueOrDefault(
              item?.description,
              defaultWhyChoose.whyChooseData[index]?.description ||
                "DEFAULT: Quality service description",
            ),
            imageUrl: getValueOrDefault(
              item?.imageUrl,
              defaultWhyChoose.whyChooseData[index]?.imageUrl ||
                "DEFAULT: service-icon.svg",
            ),
          }))
        : defaultWhyChoose.whyChooseData;

    return {
      title: getValueOrDefault(whyChooseSection.title, defaultWhyChoose.title),
      whyChooseData: ensuredWhyChooseData,
    };
  })(),
  affordableWidget: (() => {
    const defaultAffordable = {
      title: "DEFAULT: Affordable Water Damage Restoration Solutions",
      description:
        "DEFAULT: Get the best prices on water damage restoration in [location] with transparent pricing and no hidden fees.",
      ctaText: "DEFAULT: Get Your Free Quote",
      cards: [
        {
          title: "DEFAULT: Emergency Services",
          description: "DEFAULT: Perfect for floods, storms, and water emergencies",
          price: "DEFAULT: Starting at $99",
        },
        {
          title: "DEFAULT: Restoration Services",
          description: "DEFAULT: Ideal for complete property restoration",
          price: "DEFAULT: Starting at $149",
        },
      ],
    };

    if (!affordableWidget || typeof affordableWidget !== "object") {
      return defaultAffordable;
    }

    const ensuredCards =
      Array.isArray(affordableWidget.cards) && affordableWidget.cards.length > 0
        ? affordableWidget.cards.map((card: any, index: number) => ({
            title: getValueOrDefault(
              card?.title,
              defaultAffordable.cards[index]?.title ||
                "DEFAULT: Service Package",
            ),
            description: getValueOrDefault(
              card?.description,
              defaultAffordable.cards[index]?.description ||
                "DEFAULT: Service description",
            ),
            price: getValueOrDefault(
              card?.price,
              defaultAffordable.cards[index]?.price ||
                "DEFAULT: Contact for pricing",
            ),
          }))
        : defaultAffordable.cards;

    return {
      title: getValueOrDefault(affordableWidget.title, defaultAffordable.title),
      description: getValueOrDefault(
        affordableWidget.description,
        defaultAffordable.description,
      ),
      ctaText: getValueOrDefault(
        affordableWidget.ctaText,
        defaultAffordable.ctaText,
      ),
      cards: ensuredCards,
    };
  })(),
  processWidget: (() => {
    const defaultProcess = {
      title: "DEFAULT: Simple 3-Step Restoration Process",
      description:
        "",
      steps: [
        {
          step: "DEFAULT: 1",
          title: "DEFAULT: Emergency Call",
          description: "DEFAULT: Contact us at [phone] for emergency response",
        },
        {
          step: "DEFAULT: 2",
          title: "DEFAULT: Assessment & Extraction",
          description: "DEFAULT: Fast response to your location in [location]",
        },
        {
          step: "DEFAULT: 3",
          title: "DEFAULT: Restoration & Repair",
          description: "DEFAULT: We handle complete restoration for you",
        },
      ],
    };

    if (!processWidget || typeof processWidget !== "object") {
      return defaultProcess;
    }

    const ensuredSteps =
      Array.isArray(processWidget.steps) && processWidget.steps.length > 0
        ? processWidget.steps.map((step: any, index: number) => ({
            step: getValueOrDefault(
              step?.step,
              defaultProcess.steps[index]?.step || `DEFAULT: ${index + 1}`,
            ),
            title: getValueOrDefault(
              step?.title,
              defaultProcess.steps[index]?.title || "DEFAULT: Process Step",
            ),
            description: getValueOrDefault(
              step?.description,
              defaultProcess.steps[index]?.description ||
                "DEFAULT: Step description",
            ),
          }))
        : defaultProcess.steps;

    return {
      title: getValueOrDefault(processWidget.title, defaultProcess.title),
      description: getValueOrDefault(
        processWidget.description,
        defaultProcess.description,
      ),
      steps: ensuredSteps,
    };
  })(),
  hourCtaWidget: (() => {
    const defaultHourCta = {
      title: "DEFAULT: 24-Hour Water Damage Restoration Service Available",
    };

    if (!hourCtaWidget || typeof hourCtaWidget !== "object") {
      return defaultHourCta;
    }

    return {
      title: getValueOrDefault(hourCtaWidget.title, defaultHourCta.title),
    };
  })(),
};

// DEFAULT: Location Page Content with comprehensive default fallbacks
const {
  metaTitle:
    locationMetaTitle = "DEFAULT: Water Damage Restoration Service Areas | [location] and Surrounding Areas",
  metaDescription:
    locationMetaDescription = "DEFAULT: We provide water damage restoration services throughout [location] and surrounding areas. Find your location and get fast, reliable restoration today.",
  bannerQuote:
    locationBannerQuote = "DEFAULT: Serving [location] and Surrounding Areas",
  bannerImage:
    locationBannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h1Banner:
    locationH1Banner = "DEFAULT: Water Damage Restoration Service Areas in [location]",
  p1Banner:
    locationP1Banner = "DEFAULT: We proudly serve [location] and surrounding areas with fast, reliable water damage restoration services. Find your location below or call [phone] to confirm service availability.",
  blogMetas = {
    metaTitle: "DEFAULT: Local Water Damage Restoration Tips and Information",
    metaDescription:
      "DEFAULT: Get helpful tips and information about water damage restoration in your area.",
  },
} = (locationPageDataJson as any) || {};

const locationPageContent: any = {
  metaTitle: getValueOrDefault(
    locationMetaTitle,
    "DEFAULT: Water Damage Restoration Service Areas | [location] and Surrounding Areas",
  ),
  metaDescription: getValueOrDefault(
    locationMetaDescription,
    "DEFAULT: We provide water damage restoration services throughout [location] and surrounding areas. Find your location and get fast, reliable restoration today.",
  ),
  bannerQuote: getValueOrDefault(
    locationBannerQuote,
    "DEFAULT: Serving [location] and Surrounding Areas",
  ),
  bannerImage: getValueOrDefault(
    locationBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    locationH1Banner,
    "DEFAULT: Water Damage Restoration Service Areas in [location]",
  ),
  p1Banner: getValueOrDefault(
    locationP1Banner,
    "DEFAULT: We proudly serve [location] and surrounding areas with fast, reliable water damage restoration services. Find your location below or call [phone] to confirm service availability.",
  ),
  blogMetas: (() => {
    const defaultBlogMetas = {
      metaTitle: "DEFAULT: Local Water Damage Restoration Tips and Information",
      metaDescription:
        "DEFAULT: Get helpful tips and information about water damage restoration in your area.",
    };

    if (!blogMetas || typeof blogMetas !== "object") {
      return defaultBlogMetas;
    }

    return {
      metaTitle: getValueOrDefault(
        blogMetas.metaTitle,
        defaultBlogMetas.metaTitle,
      ),
      metaDescription: getValueOrDefault(
        blogMetas.metaDescription,
        defaultBlogMetas.metaDescription,
      ),
    };
  })(),
};

// DEFAULT: Brands Content with comprehensive default fallbacks
const {
  metaTitle:
    brandsMetaTitle = "DEFAULT: Our Trusted Water Damage Restoration Partners | Quality Equipment & Service",
  metaDescription:
    brandsMetaDescription = "DEFAULT: Learn about our trusted water damage restoration partners and equipment. We use only the highest quality restoration equipment for reliable service in [location].",
  bannerImage:
    brandsBannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h1Banner: brandsH1Banner = "DEFAULT: Our Trusted Water Damage Restoration Partners",
  h2: brandh2 = "DEFAULT: Quality Equipment You Can Trust",
  p2: brandsP2 = "DEFAULT: We partner with the most reliable suppliers in the industry to ensure you get quality restoration equipment and professional service every time in [location].",
  h2Image:
    brandsh2Image = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  brandslist = [
    {
      name: "DEFAULT: Premium Water Damage Restoration Solutions",
      description: "DEFAULT: Industry-leading water damage restoration equipment",
      image:
        "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930+1",
      brandName: "DEFAULT: Premium Water Damage Restoration Solutions",
      brandLink: "DEFAULT: #",
      brandDescription:
        "DEFAULT: Industry-leading water damage restoration equipment and professional service",
    },
    {
      name: "DEFAULT: Reliable Restoration Management",
      description: "DEFAULT: Trusted restoration management solutions",
      image:
        "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930+2",
      brandName: "DEFAULT: Reliable Restoration Management",
      brandLink: "DEFAULT: #",
      brandDescription:
        "DEFAULT: Trusted restoration management solutions for all your needs",
    },
  ],
} = (brandsDataJson as any) || {};

const brandsContent: any = {
  metaTitle: getValueOrDefault(
    brandsMetaTitle,
    "DEFAULT: Our Trusted Water Damage Restoration Partners | Quality Equipment & Service",
  ),
  metaDescription: getValueOrDefault(
    brandsMetaDescription,
    "DEFAULT: Learn about our trusted water damage restoration partners and equipment. We use only the highest quality restoration equipment for reliable service in [location].",
  ),
  bannerImage: getValueOrDefault(
    brandsBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    brandsH1Banner,
    "DEFAULT: Our Trusted Water Damage Restoration Partners",
  ),
  h2: getValueOrDefault(brandh2, "DEFAULT: Quality Equipment You Can Trust"),
  p2: getValueOrDefault(
    brandsP2,
    "DEFAULT: We partner with the most reliable suppliers in the industry to ensure you get quality restoration equipment and professional service every time in [location].",
  ),
  h2Image: getValueOrDefault(
    brandsh2Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  brandslist: (() => {
    const defaultBrandsList = [
      {
        name: "DEFAULT: Premium Water Damage Restoration Solutions",
        description: "DEFAULT: Industry-leading water damage restoration equipment",
        image:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        brandName: "DEFAULT: Premium Water Damage Restoration Solutions",
        brandLink: "DEFAULT: #",
        brandDescription:
          "DEFAULT: Industry-leading water damage restoration equipment and professional service",
      },
      {
        name: "DEFAULT: Reliable Restoration Management",
        description: "DEFAULT: Trusted restoration and water damage solutions",
        image:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        brandName: "DEFAULT: Reliable Restoration Management",
        brandLink: "DEFAULT: #",
        brandDescription:
          "DEFAULT: Trusted waste management solutions for all your needs",
      },
    ];

    if (!Array.isArray(brandslist) || brandslist.length === 0) {
      return defaultBrandsList;
    }

    return brandslist.map((brand: any, index: number) => ({
      name: getValueOrDefault(
        brand?.name || brand?.brandName,
        defaultBrandsList[index]?.name || "DEFAULT: Trusted Brand",
      ),
      description: getValueOrDefault(
        brand?.description || brand?.brandDescription,
        defaultBrandsList[index]?.description ||
          "DEFAULT: Quality service provider",
      ),
      image: getValueOrDefault(
        brand?.image,
        defaultBrandsList[index]?.image ||
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      ),
      brandName: getValueOrDefault(
        brand?.brandName || brand?.name,
        defaultBrandsList[index]?.brandName || "DEFAULT: Trusted Brand",
      ),
      brandLink: getValueOrDefault(
        brand?.brandLink,
        defaultBrandsList[index]?.brandLink || "DEFAULT: #",
      ),
      brandDescription: getValueOrDefault(
        brand?.brandDescription || brand?.description,
        defaultBrandsList[index]?.brandDescription ||
          "DEFAULT: Quality service provider",
      ),
    }));
  })(),
};

// DEFAULT: Service Page Content with comprehensive default fallbacks
const {
  metaTitle:
    serviceMetaTitle = "DEFAULT: Professional Water Damage Restoration Services in [location] | All Event Types",
  metaDescription:
    serviceMetaDescription = "DEFAULT: Complete water damage restoration services in [location]. Emergency response, flood damage, mold removal, and structural drying. Call [phone] for fast service.",
  bannerQuote:
    serviceBannerQuote = "DEFAULT: Professional Water Damage Restoration Services",
  bannerImage:
    serviceBannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h1Banner:
    serviceH1Banner = "DEFAULT: Professional Water Damage Restoration Services in [location]",
  p1Banner:
    serviceP1Banner = "DEFAULT: We provide comprehensive water damage restoration services for all types of properties and emergencies in [location]. From residential homes to commercial buildings, we have you covered.",
  serviceTitle = "DEFAULT: Our Water Damage Restoration Services",
  serviceData = {
    title: "DEFAULT: Complete Water Damage Restoration Solutions",
    p: "DEFAULT: We offer a full range of water damage restoration services to meet all your property restoration needs in [location].",
    lists: [
      {
        title: "DEFAULT: Emergency Water Damage Services in [location]",
        description:
          "DEFAULT: Call Us At [phone]. We offer emergency water damage services in [location] for flood cleanup, water extraction, structural drying, and emergency restoration.",
        h2: "DEFAULT: Need Emergency Water Damage Services?",
        p2: "DEFAULT: Emergency water damage services in [location] make it easy to quickly address water emergencies and restore your property. Whether you're dealing with burst pipes or flooding, we've got the expertise for the job. Call Us At [phone]",
        h3: "DEFAULT: Perfect For Water Damage Emergencies",
        p3: "DEFAULT: Flood cleanup | Water extraction | Structural drying | Emergency response | Burst pipe repair | Storm damage | Sewage cleanup | Mold prevention",
        seoContent:
          "DEFAULT: <h2>Emergency Water Damage Services in [location]</h2><p>Our emergency water damage services in [location] are designed to respond quickly to water emergencies and restore your property. We provide comprehensive restoration services with rapid response times, perfect for residential and commercial properties. Call Us At [phone]</p>",
        slug: "DEFAULT: emergency-water-damage-services",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      }
    ],
  },
} = (servicePageDataJson as any) || {};

const servicePageContent: any = {
  metaTitle: getValueOrDefault(
    serviceMetaTitle,
    "DEFAULT: Professional Water Damage Restoration Services in [location] | All Event Types",
  ),
  metaDescription: getValueOrDefault(
    serviceMetaDescription,
    "DEFAULT: Complete water damage restoration services in [location]. Emergency response, flood damage, mold removal, and structural drying. Call [phone] for fast service.",
  ),
  bannerQuote: getValueOrDefault(
    serviceBannerQuote,
    "DEFAULT: Professional Water Damage Restoration Services",
  ),
  bannerImage: getValueOrDefault(
    serviceBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    serviceH1Banner,
    "DEFAULT: Professional Water Damage Restoration Services in [location]",
  ),
  p1Banner: getValueOrDefault(
    serviceP1Banner,
    "DEFAULT: We provide comprehensive water damage restoration services for all types of properties and emergencies in [location]. From residential homes to commercial buildings, we have you covered.",
  ),
  serviceTitle: getValueOrDefault(
    serviceTitle,
    "DEFAULT: Our Water Damage Restoration Services",
  ),
  serviceData: ensureServiceDataLists(serviceData),
};



// DEFAULT: SubDomain URL Content with comprehensive default fallbacks
const subDomainUrlContent: any = (() => {
  const defaultSubDomainContent = {
    "default-location": {
      name: "DEFAULT: Your City",
      publishedAt: "DEFAULT: 2025-01-01",
      slug: "DEFAULT: your-city",
      metaTitle: "DEFAULT: Affordable Dumpster Rental Services in Your City",
      metaDescription:
        "DEFAULT: Looking for reliable dumpster rental in Your City? We offer fast delivery, flexible sizes, and affordable pricing. Call us at [phone]!",
      bannerImage:
        "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      h1Banner: "DEFAULT: Dumpster Rentals in Your City Near You",
      h2: "DEFAULT: Your Trusted Dumpster Rental Partner in Your City",
      p2: "DEFAULT: Whether you're managing a home renovation, clearing out a property, or running a construction site, our dumpster rental service in Your City has the right bin for the job.",
      h2Image:
        "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      serviceTtile: "DEFAULT: Our Dumpster Rental Services",
      needsSection: {
        title: "DEFAULT: Why Choose Us for Dumpster Rental in Your City",
        description: "DEFAULT: Professional service you can trust",
        needslist: [
          {
            title: "DEFAULT: Same-Day Delivery",
            description:
              "DEFAULT: Get your dumpster when you need it. We offer fast delivery so your project doesn't have to wait.",
          },
          {
            title: "DEFAULT: Flat-Rate Pricing",
            description:
              "DEFAULT: No hidden fees. Just straightforward pricing that makes budgeting simple.",
          },
        ],
      },
      processSection: {
        title: "DEFAULT: How Our Dumpster Rental Process Works",
        processData: [
          {
            title: "DEFAULT: Choose Your Dumpster",
            description:
              "DEFAULT: Pick the size that fits your cleanup. Not sure? Our team can help you decide.",
          },
          {
            title: "DEFAULT: Schedule Delivery",
            description:
              "DEFAULT: Tell us when and where. We'll drop the bin off right where you need it.",
          },
        ],
      },
      h5: "DEFAULT: Affordable Water Damage Restoration Company for Every Emergency",
      p5: "DEFAULT: Whether it's a flood emergency or storm damage, our water damage restoration services offer the ideal restoration solution.",
      h5Image:
        "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      faq: [
        {
          ques: "DEFAULT: What types of water damage do you restore?",
          ans: "DEFAULT: We restore all types of water damage including flood damage, burst pipes, storm damage, sewage backups, and appliance leaks.",
        },
      ],
      reviews: [],
      neighbourhoods: "DEFAULT: Local Neighborhoods",
      zipCodes: "DEFAULT: 12345",
      address: "DEFAULT: 123 Main Street, Your City, State 12345",
    },
  };

  if (
    !subDomainUrlContentJson ||
    typeof subDomainUrlContentJson !== "object" ||
    Object.keys(subDomainUrlContentJson).length === 0
  ) {
    return defaultSubDomainContent;
  }

  const processedSubdomains: any = {};
  for (const [key, locationData] of Object.entries(subDomainUrlContentJson)) {
    if (locationData && typeof locationData === "object") {
      const location = locationData as any;
      processedSubdomains[key] = {
        name: getValueOrDefault(location?.name, `DEFAULT: ${key}`),
        publishedAt: getValueOrDefault(
          location?.publishedAt,
          "DEFAULT: 2025-01-01",
        ),
        slug: getValueOrDefault(location?.slug, `DEFAULT: ${key}`),
        metaTitle: getValueOrDefault(
          location?.metaTitle,
          `DEFAULT: Affordable Water Damage Restoration Services in ${location?.name || key}`,
        ),
        metaDescription: getValueOrDefault(
          location?.metaDescription,
          `DEFAULT: Looking for reliable water damage restoration in ${location?.name || key}? We offer fast response and professional restoration services.`,
        ),
        bannerImage: getValueOrDefault(
          location?.bannerImage,
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        ),
        h1Banner: getValueOrDefault(
          location?.h1Banner,
          `DEFAULT: Water Damage Restoration in ${location?.name || key} Near You`,
        ),
        h2: getValueOrDefault(
          location?.h2,
          `DEFAULT: Your Trusted Water Damage Restoration Partner in ${location?.name || key}`,
        ),
        p2: getValueOrDefault(
          location?.p2,
          `DEFAULT: Professional water damage restoration service in ${location?.name || key} for all your property restoration needs.`,
        ),
        h2Image: getValueOrDefault(
          location?.h2Image,
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        ),
        serviceTtile: getValueOrDefault(
          location?.serviceTtile,
          "DEFAULT: Our Water Damage Restoration Services",
        ),
        serviceTitle: getValueOrDefault(
          location?.serviceTitle || location?.serviceTtile,
          "DEFAULT: Our Water Damage Restoration Services",
        ),
        needsSection: (() => {
          const defaultNeeds = {
            title: `DEFAULT: Why Choose Us for Water Damage Restoration in ${location?.name || key}`,
            description: "DEFAULT: Professional service you can trust",
            needslist: [
              {
                title: "DEFAULT: Same-Day Delivery",
                description:
                  "DEFAULT: Fast delivery so your project doesn't have to wait.",
              },
            ],
          };

          if (
            !location?.needsSection ||
            typeof location.needsSection !== "object"
          ) {
            return defaultNeeds;
          }

          const ensuredNeedsList =
            Array.isArray(location.needsSection.needslist) &&
            location.needsSection.needslist.length > 0
              ? location.needsSection.needslist.map(
                  (need: any, index: number) => ({
                    title: getValueOrDefault(
                      need?.title,
                      `DEFAULT: Service Feature ${index + 1}`,
                    ),
                    description: getValueOrDefault(
                      need?.description,
                      "DEFAULT: Quality service description",
                    ),
                  }),
                )
              : defaultNeeds.needslist;

          return {
            title: getValueOrDefault(
              location.needsSection.title,
              defaultNeeds.title,
            ),
            description: getValueOrDefault(
              location.needsSection.description,
              defaultNeeds.description,
            ),
            needslist: ensuredNeedsList,
          };
        })(),
        processSection: (() => {
          const defaultProcess = {
            title: "DEFAULT: How Our Water Damage Restoration Process Works",
            processData: [
              {
                title: "DEFAULT: Choose Your Restoration Service",
                description: "DEFAULT: Pick the restoration service that fits your water damage emergency.",
              },
            ],
          };

          if (
            !location?.processSection ||
            typeof location.processSection !== "object"
          ) {
            return defaultProcess;
          }

          const ensuredProcessData =
            Array.isArray(location.processSection.processData) &&
            location.processSection.processData.length > 0
              ? location.processSection.processData.map(
                  (process: any, index: number) => ({
                    title: getValueOrDefault(
                      process?.title,
                      `DEFAULT: Step ${index + 1}`,
                    ),
                    description: getValueOrDefault(
                      process?.description,
                      "DEFAULT: Process description",
                    ),
                  }),
                )
              : defaultProcess.processData;

          return {
            title: getValueOrDefault(
              location.processSection.title,
              defaultProcess.title,
            ),
            processData: ensuredProcessData,
          };
        })(),
        h5: getValueOrDefault(
          location?.h5,
          "DEFAULT: Affordable Water Damage Restoration Company for Every Emergency",
        ),
        p5: getValueOrDefault(
          location?.p5,
          "DEFAULT: Whether it's a flood emergency or storm damage, our water damage restoration services offer the ideal restoration solution.",
        ),
        h5Image: getValueOrDefault(
          location?.h5Image,
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        ),
        faq:
          Array.isArray(location?.faq) && location.faq.length > 0
            ? location.faq.map((faqItem: any, index: number) => ({
                ques: getValueOrDefault(
                  faqItem?.ques,
                  `DEFAULT: Frequently Asked Question ${index + 1}`,
                ),
                ans: getValueOrDefault(
                  faqItem?.ans,
                  "DEFAULT: Professional answer to your water damage restoration question.",
                ),
              }))
            : [
                {
                  ques: "DEFAULT: What types of water damage do you restore?",
                  ans: "DEFAULT: We offer multiple types to suit every event.",
                },
              ],
        reviews: Array.isArray(location?.reviews) ? location.reviews : [],
        neighbourhoods: getValueOrDefault(
          location?.neighbourhoods,
          "DEFAULT: Local Neighborhoods",
        ),
        zipCodes: getValueOrDefault(location?.zipCodes, "DEFAULT: 12345"),
        address: getValueOrDefault(
          location?.address,
          "DEFAULT: 123 Main Street, Your City, State 12345",
        ),
      };
    }
  }

  return Object.keys(processedSubdomains).length > 0
    ? processedSubdomains
    : defaultSubDomainContent;
})();

// DEFAULT: Enhanced utility function to replace placeholders in strings with comprehensive error handling
function replacePlaceholders(obj: any, ContactInfo: any): any {
  // DEFAULT: Ensure ContactInfo has comprehensive default values if missing
  const safeContactInfo = {
    location: ContactInfo?.location || "DEFAULT: Your City, State",
    No: ContactInfo?.No || "DEFAULT: (555) 123-4567",
    tel: ContactInfo?.tel || "DEFAULT: +15551234567",
    mail: ContactInfo?.mail ,
    baseUrl: ContactInfo?.baseUrl || "DEFAULT: https://waterdamagerestoration.com/",
    host: ContactInfo?.host || "DEFAULT: waterdamagerestoration.com",
    name: ContactInfo?.name || "DEFAULT: Premier Water Damage Restoration",
    address:
      ContactInfo?.address ||
      "DEFAULT: 123 Main Street, Your City, State 12345",
    service: ContactInfo?.service || "DEFAULT: Water Damage Restoration",
    zipCode: ContactInfo?.zipCode || "DEFAULT: 12345",
    ...ContactInfo,
  };

  if (typeof obj === "string") {
    return obj
      .split("[location]")
      .join(safeContactInfo.location)
      .split("[phone]")
      .join(safeContactInfo.No);
  } else if (Array.isArray(obj)) {
    return obj.map((item) => replacePlaceholders(item, safeContactInfo));
  } else if (obj && typeof obj === "object") {
    const result: any = {};
    for (const key in obj) {
      result[key] = replacePlaceholders(obj[key], safeContactInfo);
    }
    return result;
  }
  return obj;
}

// DEFAULT: Use contactContent as ContactInfo for replacements with enhanced error handling
const ContactInfo = contactContent || {
  location: "DEFAULT: Your City, State",
  No: "DEFAULT: (555) 123-4567",
  tel: "DEFAULT: +15551234567",
  mail: "",
  baseUrl: "DEFAULT: https://waterdamagerestoration.com/",
  host: "DEFAULT: waterdamagerestoration.com",
  name: "DEFAULT: Premier Water Damage Restoration",
  address: "DEFAULT: 123 Main Street, Your City, State 12345",
  service: "DEFAULT: Water Damage Restoration",
  zipCode: "DEFAULT: 12345",
  bannerImage:
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  logoImage:
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  favicon: "DEFAULT: /favicon.ico",
  googleAnalytics: "DEFAULT: GA_MEASUREMENT_ID",
  minor: "DEFAULT: #fed700",
  main: "DEFAULT: #283143",
};

// DEFAULT: Gallery Content with comprehensive fallbacks
const galleryContent: any = ensureGalleryData(galleryDataJson);

// DEFAULT: Enhanced comprehensive content export with complete error handling and subdomain support
const content: {
  aboutContent: any;
  contactContent: any;
  blogContent: any;
  blogCategoryMetaMap: any;
  contactPageContent: any;
  homePageContent: any;
  locationPageContent: any;
  brandsContent: any;
  servicePageContent: any;
  subDomainUrlContent: any;
  galleryContent: any;
} = {
  aboutContent: replacePlaceholders(aboutContent || {}, ContactInfo),
  contactContent: replacePlaceholders(
    contactContent || ContactInfo,
    ContactInfo,
  ),
  blogContent: replacePlaceholders(blogContent || { posts: [] }, ContactInfo),
  blogCategoryMetaMap: replacePlaceholders(
    blogCategoryMetaMap || {},
    ContactInfo,
  ),
  contactPageContent: replacePlaceholders(
    contactPageContent || {},
    ContactInfo,
  ),
  homePageContent: replacePlaceholders(homePageContent || {}, ContactInfo),
  locationPageContent: replacePlaceholders(
    locationPageContent || {},
    ContactInfo,
  ),
  brandsContent: replacePlaceholders(brandsContent || {}, ContactInfo),
  servicePageContent: replacePlaceholders(
    servicePageContent || {},
    ContactInfo,
  ),
  subDomainUrlContent: replacePlaceholders(
    subDomainUrlContent || {},
    ContactInfo,
  ),
  galleryContent: replacePlaceholders(
    galleryContent || {},
    ContactInfo,
  ),
};

// DEFAULT: Enhanced debug logging to help troubleshoot content loading with comprehensive details
// if (typeof window === 'undefined') {
//   console.log('DEFAULT: Content processing summary:', {
//     aboutContentKeys: Object.keys(content.aboutContent),
//     contactContentKeys: Object.keys(content.contactContent),
//     blogPostsCount: content.blogContent?.posts?.length || 0,
//     blogCategoriesCount: Object.keys(content.blogCategoryMetaMap).length,
//     homeContentKeys: Object.keys(content.homePageContent),
//     locationContentKeys: Object.keys(content.locationPageContent),
//     brandsContentKeys: Object.keys(content.brandsContent),
//     serviceContentKeys: Object.keys(content.servicePageContent),
//     typesContentKeys: Object.keys(content.typesJsonContent),
//     subdomainLocationsCount: Object.keys(content.subDomainUrlContent).length,
//     missionSectionLength: content.aboutContent?.missionSection?.length || 0,
//     hasAreaweserveSection: !!content.aboutContent?.areaweserveSection,
//     faqCount: content.homePageContent?.faq?.length || 0,
//     reviewsCount: content.homePageContent?.reviews?.length || 0,
//     whyChooseDataCount: content.homePageContent?.whyChooseSection?.whyChooseData?.length || 0,
//     processStepsCount: content.homePageContent?.processWidget?.steps?.length || 0,
//     affordableCardsCount: content.homePageContent?.affordableWidget?.cards?.length || 0,
//     serviceListsCount: content.servicePageContent?.serviceData?.lists?.length || 0,
//     typesListsCount: content.typesJsonContent?.serviceData?.lists?.length || 0,
//     brandsListCount: content.brandsContent?.brandslist?.length || 0
//   });
// }

export default content;
