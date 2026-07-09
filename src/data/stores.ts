export interface Store {
  name: string;
  slug: string;
  logo: string;
  bgImg: string;
  hours: string;
  floor: string;
  category: string;
}

export const categories: { name: string; count: number }[] = [
  { name: "Fashion & Apparel", count: 16 },
  { name: "Food & Beverage", count: 10 },
  { name: "Electronics & Technology", count: 8 },
  { name: "Beauty & Personal Care", count: 5 },
  { name: "Footwear", count: 4 },
  { name: "Jewelry & Accessories", count: 4 },
  { name: "Fragrances", count: 3 },
  { name: "General Lifestyle", count: 3 },
  { name: "Kids & Entertainment", count: 2 },
  { name: "Body Art", count: 1 },
  { name: "Books & Stationery", count: 1 },
  { name: "Dry Cleaning & Laundry", count: 1 },
  { name: "Educational Services", count: 1 },
  { name: "Fashion & Accessories", count: 1 },
  { name: "Fitness & Wellness", count: 1 },
  { name: "Home Furnishings", count: 1 },
];

export const stores: Store[] = [
  { name: "H&H Premium Fitness", slug: "hh-premium-fitness", logo: "https://oberonmall.com/wp-content/uploads/2024/12/dsfsdfsdf-photoaidcom-cropped.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-17-at-1.00.59-PM-2.jpg", hours: "5 AM - 11 PM", floor: "Fourth Floor", category: "Fitness & Wellness" },
  { name: "Food Circle", slug: "food-circle", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-17-at-124555-PM-photoaidcom-cropped.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2021-12-12.jpg", hours: "11 AM - 10 PM", floor: "Fourth Floor", category: "Food & Beverage" },
  { name: "Sim & Sam", slug: "sim-sam-party-play-town", logo: "https://oberonmall.com/wp-content/uploads/2024/12/logo_2.png.webp", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2024-07-30.jpg", hours: "11 AM - 10 PM", floor: "Fourth Floor", category: "Kids & Entertainment" },
  { name: "Laura Salon", slug: "laura-salon", logo: "https://oberonmall.com/wp-content/uploads/2024/12/bjbdscb.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2023-08-06.jpg", hours: "10 AM - 8:30 PM", floor: "Fourth Floor", category: "Beauty & Personal Care" },
  { name: "Chicking", slug: "chicking", logo: "https://oberonmall.com/wp-content/uploads/2024/12/b08816_00b19dec3d48430fb7987acd22e88c24mv2.png.avif", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/20c6653f84dc8a6615ad91a33c5ca353.jpg-scaled.avif", hours: "11 AM - 11 PM", floor: "Fourth Floor", category: "Food & Beverage" },
  { name: "Momo & Me", slug: "momo-me", logo: "https://oberonmall.com/wp-content/uploads/2024/12/images-removebg-preview-3.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/C04AF0CE-3424-4189-8581-D6FD7D647B97-e1734417301654.jpeg", hours: "10:30 AM - 11 PM", floor: "Fourth Floor", category: "Food & Beverage" },
  { name: "London Street Cafe", slug: "london-street-cafe", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-17-at-11.33.14-AM.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-17-at-11.34.38-AM.jpg", hours: "11 AM - 11 PM", floor: "Fourth Floor", category: "Food & Beverage" },
  { name: "Chippayi", slug: "house-of-chippayi", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-17-at-112213-AM-photoaidcom-cropped.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-17-at-11.22.28-AM.jpg", hours: "10 AM - 10 PM", floor: "Fourth Floor", category: "Fashion & Apparel" },
  { name: "Crossword", slug: "crossword", logo: "https://oberonmall.com/wp-content/uploads/2024/12/crossword_logo_small_2d787591-0993-421e-999c-246295b476c4_small.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/img-1.jpeg", hours: "10 AM - 10 PM", floor: "Third Floor", category: "Books & Stationery" },
  { name: "Fragomen Educational Services", slug: "fragomen-educational-services", logo: "https://oberonmall.com/wp-content/uploads/2024/12/FES-Logos.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-17-at-12.29.30-AM.jpg", hours: "10 AM - 6:30 PM", floor: "Third Floor", category: "Educational Services" },
  { name: "Galaxy Educational Services", slug: "galaxy-educational-services", logo: "https://oberonmall.com/wp-content/uploads/2024/12/1680670155.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2148294082.jpg", hours: "10 AM - 7 PM", floor: "Third Floor", category: "Educational Services" },
  { name: "INCUSPAZE", slug: "incuspaze", logo: "https://oberonmall.com/wp-content/uploads/2024/12/incuspaze-office-space-logo.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/DSC4334-copy.jpg", hours: "9 AM - 7 PM", floor: "Third Floor", category: "General Lifestyle" },
  { name: "Lenovo", slug: "lenovo", logo: "https://oberonmall.com/wp-content/uploads/2024/12/lenovo-logo-red.png.webp", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Lenovo-laptop-Yoga-730.png", hours: "11 AM - 9 PM", floor: "Third Floor", category: "Electronics & Technology" },
  { name: "Vismay", slug: "vismay", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-17-at-120537-AM-photoaidcom-cropped.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2017-09-02.jpg", hours: "10 AM - 9 PM", floor: "Third Floor", category: "Fashion & Apparel" },
  { name: "Urbaan Collections", slug: "urbaan-collections", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-11.57.11-PM.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2023-06-07.jpg", hours: "11 AM - 9 PM", floor: "Third Floor", category: "Fashion & Apparel" },
  { name: "Healtox Beauty Lounge & SPA", slug: "healtox-beauty-lounge-spa", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-10.54.39-PM.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/healtox-beauty-lounge-and-spa-edapally-ernakulam-beauty-parlours-for-pedicure-10bq2jgvpt.jpg.avif", hours: "11 AM - 8 PM", floor: "Third Floor", category: "Beauty & Personal Care" },
  { name: "Funskool", slug: "funskool", logo: "https://oberonmall.com/wp-content/uploads/2024/12/FS_LOGO_PNG.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/IMG20220410124632.jpg", hours: "10 AM - 10 PM", floor: "Third Floor", category: "Kids & Entertainment" },
  { name: "Rajasthan Mehandi Art", slug: "mehandi", logo: "", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2024-12-01.jpg", hours: "10 AM - 9 PM", floor: "Second Floor", category: "Body Art" },
  { name: "Reliance ResQ Service Center", slug: "reliance-resq-service-center", logo: "https://oberonmall.com/wp-content/uploads/2024/12/92879ec2c29c85356a81b445d7167454_icon.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2148836081.jpg", hours: "9:30 AM - 9:30 PM", floor: "Second Floor", category: "Electronics & Technology" },
  { name: "Payless", slug: "payless", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Payless-500x100-1.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2023-04-26.jpg", hours: "10 AM - 10 PM", floor: "Second Floor", category: "Footwear" },
  { name: "Reliance Jio", slug: "reliance-jio", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Reliance_Jio_Logo.svg_.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/unnamed.jpg", hours: "9:30 AM - 6 PM", floor: "Second Floor", category: "Electronics & Technology" },
  { name: "Fuji Film", slug: "fuji-film", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-9.53.21-PM.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-9.57.23-PM.jpg", hours: "10 AM - 6:30 PM", floor: "Second Floor", category: "Electronics & Technology" },
  { name: "Easy Buy", slug: "easy-buy", logo: "https://oberonmall.com/wp-content/uploads/2024/12/easy-buy-logo-01-01.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-9.37.30-PM.jpg", hours: "11 AM - 10 PM", floor: "Second Floor", category: "General Lifestyle" },
  { name: "Trends Footwear", slug: "trends-footwear", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Trends-Footwear-Logo-With-background-white-Capital-Mall.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-9.30.41-PM.png", hours: "11 AM - 9:30 PM", floor: "Second Floor", category: "Footwear" },
  { name: "Reliance Digital", slug: "reliance-digital", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-9.17.16-PM.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2024-06-14.jpg", hours: "11 AM - 10 PM", floor: "Second Floor", category: "Electronics & Technology" },
  { name: "Methiyadi", slug: "methiyadi", logo: "", bgImg: "", hours: "11 AM - 9:30 PM", floor: "Second Floor", category: "Footwear" },
  { name: "Soles", slug: "soles", logo: "https://oberonmall.com/wp-content/uploads/2024/12/SOLES.png.avif", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2022-01-29.jpg", hours: "10 AM - 9:30 PM", floor: "Second Floor", category: "Footwear" },
  { name: "ASUS", slug: "asus", logo: "https://oberonmall.com/wp-content/uploads/2024/12/asus-logo1086b8efe-6521-4e48-b9fd-df700ebdf321.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-3.28.51-PM.jpg", hours: "10 AM - 8 PM", floor: "Second Floor", category: "Electronics & Technology" },
  { name: "Collage", slug: "collage", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot_2024-12-16_at_3.17.43_PM-removebg-preview.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/1000109939-e1734342714118.jpg", hours: "10 AM - 10 PM", floor: "Second Floor", category: "Fashion & Apparel" },
  { name: "John Players", slug: "john-players", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot_2024-12-16_at_3.11.40_PM-removebg-preview.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-3.07.46-PM.jpg", hours: "10 AM - 9:30 PM", floor: "First Floor", category: "Fashion & Apparel" },
  { name: "Style Union", slug: "style-union", logo: "https://oberonmall.com/wp-content/uploads/2024/12/MicrosoftTeams-image_16_300x14b0d3ed-cbf0-471c-b22c-1ed9a01bc475.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-2.47.28-PM.jpg", hours: "11 AM - 9:30 PM", floor: "First Floor", category: "Fashion & Apparel" },
  { name: "Avantra By Trends", slug: "avantra-by-trends", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Avantra-Logo-without-bg-untrimmed-center-aligned.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-2.38.17-PM.jpg", hours: "11 AM - 9 PM", floor: "First Floor", category: "Fashion & Apparel" },
  { name: "Trends", slug: "trends", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-2.25.01-PM.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-2.23.17-PM.jpg", hours: "10 AM - 9:30 PM", floor: "First Floor", category: "Fashion & Apparel" },
  { name: "Jockey", slug: "jockey", logo: "https://oberonmall.com/wp-content/uploads/2024/12/ashjvjsi.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-1.45.30-PM.jpg", hours: "10:30 AM - 9:30 PM", floor: "First Floor", category: "Fashion & Apparel" },
  { name: "BASICS", slug: "basics", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Untitled-4-01_80x@2x.png.avif", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-1.37.07-PM.jpg", hours: "10 AM - 10 PM", floor: "First Floor", category: "Fashion & Apparel" },
  { name: "Zivame", slug: "zivame", logo: "https://oberonmall.com/wp-content/uploads/2024/12/sdfsdfsd.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/featured-2021-3-1.webp", hours: "10:30 AM - 10:30 PM", floor: "First Floor", category: "Fashion & Apparel" },
  { name: "Kingdom of White", slug: "kingdom-of-white", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Logo_40px_1_480x.png.avif", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-11.34.25-AM.jpg", hours: "10 AM - 7 PM", floor: "First Floor", category: "Fashion & Apparel" },
  { name: "Twin Birds", slug: "twin-birds", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Twin_Birds_-_Logo.jpg.avif", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-16-at-11.29.52-AM.jpg", hours: "10 AM - 10 PM", floor: "First Floor", category: "Fashion & Apparel" },
  { name: "KFC", slug: "kfc", logo: "https://oberonmall.com/wp-content/uploads/2024/12/kfc_logo_png.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/11fe8a27-5cff-4511-aa96-25f1a5dc262a.jpg", hours: "11 AM - 11 PM", floor: "Ground Floor", category: "Food & Beverage" },
  { name: "Reliance Smart", slug: "reliance-smart", logo: "https://oberonmall.com/wp-content/uploads/2024/12/smart_bazaar_Logo_1_png.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2019-02-19.jpg", hours: "8 AM - 10 PM", floor: "Ground Floor", category: "Food & Beverage" },
  { name: "The Perfume Palette", slug: "the-perfume-palette", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-11.31.45-PM.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-11.32.14-PM.jpg", hours: "10 AM - 10 PM", floor: "Ground Floor", category: "Fragrances" },
  { name: "Mehak By Kottaram", slug: "mehak-by-kottaram", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-11.19.09-PM.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-11.21.19-PM.jpg", hours: "10 AM - 10 PM", floor: "Ground Floor", category: "Jewelry & Accessories" },
  { name: "Purplle", slug: "purplle", logo: "https://oberonmall.com/wp-content/uploads/2024/12/6655a13a9693b578088d35fd_1_partner_purplle.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2024-10-30.jpg", hours: "10 AM - 9:30 PM", floor: "Ground Floor", category: "Beauty & Personal Care" },
  { name: "Accessories", slug: "accessories", logo: "", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-10.38.06-PM.jpg", hours: "10:30 AM - 10 PM", floor: "Ground Floor", category: "Fashion & Accessories" },
  { name: "Coffee Lounge", slug: "coffee-lounge", logo: "", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-10.29.13-PM.jpg", hours: "10 AM - 10 PM", floor: "Ground Floor", category: "Food & Beverage" },
  { name: "Al Buruj", slug: "al-buruj", logo: "", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-10.22.37-PM.jpg", hours: "9:30 AM - 10 PM", floor: "Ground Floor", category: "Fashion & Apparel" },
  { name: "McDonald's", slug: "mcdonalds", logo: "https://oberonmall.com/wp-content/uploads/2024/12/arches-logo_108x108-removebg-preview.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-10.13.09-PM.jpg", hours: "10 AM - 11 PM", floor: "Ground Floor", category: "Food & Beverage" },
  { name: "Sere Perfume", slug: "sere-perfume", logo: "https://oberonmall.com/wp-content/uploads/2024/12/sere_logo_17eff84f-66d9-4497-9f11-f275486011df.png.avif", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-10.02.18-PM.jpg", hours: "10 AM - 9 PM", floor: "Ground Floor", category: "Fragrances" },
  { name: "Fabrich", slug: "fabrich", logo: "https://oberonmall.com/wp-content/uploads/2024/12/fabrich-logo-01-01.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-9.54.32-PM.jpg", hours: "10:30 AM - 9 PM", floor: "Ground Floor", category: "Home Furnishings" },
  { name: "Boho Baby", slug: "boho-baby", logo: "https://oberonmall.com/wp-content/uploads/2024/12/jggayusxfhs.webp", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-9.36.28-PM.jpg", hours: "10 AM - 10 PM", floor: "Ground Floor", category: "Kids & Entertainment" },
  { name: "Planet Fashion", slug: "planet-fashion", logo: "https://oberonmall.com/wp-content/uploads/2024/12/PLANET-FASHION-01.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/1159.jpg", hours: "10 AM - 9 PM", floor: "Ground Floor", category: "Fashion & Apparel" },
  { name: "Baskin Robbins", slug: "baskin-robbins", logo: "https://oberonmall.com/wp-content/uploads/2024/12/asdsdfsd-scaled.webp", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-9.11.44-PM.jpg", hours: "11 AM - 11:30 PM", floor: "Ground Floor", category: "Food & Beverage" },
  { name: "World Of Titan", slug: "world-of-titan", logo: "https://oberonmall.com/wp-content/uploads/2024/12/d3ca44ad81a24fcbe71b4e2d78e8d41b.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/ascdacvdsvds.webp", hours: "10 AM - 10 PM", floor: "Ground Floor", category: "Jewelry & Accessories" },
  { name: "KAIR", slug: "kair", logo: "https://oberonmall.com/wp-content/uploads/2024/12/Artboard_34_7df05f3c-fa32-4b9c-b97e-7ef0d7372da4.png.avif", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2147825039.jpg", hours: "9:30 AM - 9:30 PM", floor: "Ground Floor", category: "Fashion & Apparel" },
  { name: "HP World", slug: "hp-world", logo: "https://oberonmall.com/wp-content/uploads/2024/12/zxcsdfsf.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-7.20.34-PM.jpg", hours: "10 AM - 9 PM", floor: "Third Floor", category: "Electronics & Technology" },
  { name: "Mamaearth", slug: "mamaearth", logo: "https://oberonmall.com/wp-content/uploads/2024/12/mamaearth-logo.png.avif", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-7.03.54-PM.jpg", hours: "10:30 AM - 9:30 PM", floor: "Ground Floor", category: "Beauty & Personal Care" },
  { name: "Samsonite", slug: "samsonite", logo: "https://oberonmall.com/wp-content/uploads/2024/12/sadasdcas.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-6.45.52-PM.png", hours: "10 AM - 10 PM", floor: "Ground Floor", category: "Fashion & Accessories" },
  { name: "Lenskart", slug: "lenskart", logo: "https://oberonmall.com/wp-content/uploads/2024/12/sadqds.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-6.53.39-PM.png", hours: "10 AM - 10 PM", floor: "Ground Floor", category: "Jewelry & Accessories" },
  { name: "Cafe Coffee Day", slug: "cafe-coffee-day", logo: "https://oberonmall.com/wp-content/uploads/2024/12/sadsad.jpeg", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-6.50.22-PM.png", hours: "10 AM - 10 PM", floor: "Ground Floor", category: "Food & Beverage" },
  { name: "Tangle Teezer", slug: "tangle-teezer", logo: "https://oberonmall.com/wp-content/uploads/2024/12/unnamed.webp", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/20649.jpg", hours: "10:30 AM - 9:30 PM", floor: "Ground Floor", category: "Beauty & Personal Care" },
  { name: "Black Swan", slug: "black-swan", logo: "https://oberonmall.com/wp-content/uploads/2024/12/logo.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2148857523.jpg", hours: "10 AM - 8 PM", floor: "Ground Floor", category: "Fashion & Apparel" },
  { name: "Bodyart", slug: "bodyart", logo: "https://oberonmall.com/wp-content/uploads/2024/12/images-removebg-preview-2.png", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/2147834092.jpg", hours: "10 AM - 10 PM", floor: "Ground Floor", category: "Body Art" },
  { name: "Sere Perfume", slug: "sere-perfume-2", logo: "https://oberonmall.com/wp-content/uploads/2024/12/sere_logo_17eff84f-66d9-4497-9f11-f275486011df.png.avif", bgImg: "https://oberonmall.com/wp-content/uploads/2024/12/Screenshot-2024-12-15-at-10.02.18-PM.jpg", hours: "10 AM - 9 PM", floor: "Ground Floor", category: "Fragrances" },
];

export const diningStores = stores.filter(s => s.category === "Food & Beverage");

export const newsArticles = [
  {
    title: "Oberon Mall: Kerala's Iconic Lifestyle Destination Gets a Refresh After 15 Years",
    date: "December 5, 2024",
    slug: "keralas-iconic-lifestyle-destination-gets-a-refresh",
    excerpt: "Discover how Oberon Mall has evolved over 15 years to remain Kerala's premier shopping and entertainment destination.",
  },
  {
    title: "Essential Tips for Smart Shopping: Getting the Best Deals Without Compromising Quality",
    date: "November 29, 2024",
    slug: "essential-tips-for-smart-shopping",
    excerpt: "Learn how to maximize your shopping experience at Oberon Mall with these insider tips for getting the best deals.",
  },
  {
    title: "How to Build a Capsule Wardrobe Without Breaking the Bank",
    date: "November 20, 2024",
    slug: "how-to-build-a-capsule-wardrobe",
    excerpt: "A guide to building a versatile wardrobe using the diverse fashion brands available at Oberon Mall.",
  },
];

export const siteConfig = {
  name: "Oberon Mall",
  tagline: "Ultimate Hub for Shopping & Entertainment in Kochi",
  logo: "https://oberonmall.com/wp-content/uploads/2024/11/Screenshot_2024-11-27_at_7.21.27_PM-removebg-preview.png",
  heroVideo: "https://oberonmall.com/wp-content/uploads/2024/11/Oberon-Video.mp4",
  phone: "+91 484 400 0040",
  phoneLink: "tel:+914844000040",
  email: "info@oberonmall.com",
  email2: "support@oberonmall.com",
  address: "34, 195 Road, NH Bye Pass, Padivattom, Edappally, Ernakulam, Kochi, Kerala 682024",
  hours: "Mon-Sun: 10:00 AM - 10:00 PM",
  social: {
    facebook: "https://www.facebook.com/OberonMall/",
    twitter: "https://x.com/OberonKochi",
    instagram: "https://www.instagram.com/oberonmall/",
    youtube: "https://www.youtube.com/channel/UCaZD7aEGCgdxi2Im2tL0l9Q",
  },
  colors: {
    primary: "#563A6D",
    gold: "#b0a257",
    darkText: "#252525",
    bodyBg: "#f9fafb",
    footerBg: "#313131",
    goldAccent: "#fbb321",
    cream: "#F8F7F2",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Stores", href: "/brand/" },
  { label: "Dining", href: "/dining/" },
  { label: "Events", href: "/events/" },
  { label: "Movies", href: "/movies/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "News", href: "/news/" },
  { label: "Contact", href: "/contact/" },
];