/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Regional Indian Cuisines Dataset
 */

import { Dish } from '../types/travel';

export const CUISINES_DATA: Dish[] = [
  // ================= NORTH INDIAN CUISINE =================
  {
    id: 'butter-chicken',
    name: 'Butter Chicken (Murgh Makhani)',
    hindiName: 'मुर्ग़ मखनी',
    region: 'North',
    state: 'Delhi / Punjab',
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    description: 'Tender chicken marinated in yogurt and aromatic spices, roasted in a clay tandoor, then simmered in a silky, mildly spiced velvety tomato, butter, and cream gravy with dried fenugreek leaves (kasuri methi).',
    culturalSignificance: 'Invented in the 1950s by Kundan Lal Gujral at Moti Mahal in Daryaganj, Old Delhi, to prevent unsold tandoori chicken from drying out. Today it is an international ambassador for Indian cuisine.',
    isVegetarian: false,
    spiceLevel: 'Mild',
    bestSpotsToTaste: 'Moti Mahal (Daryaganj, Delhi), Gulati (Pandara Road, Delhi), Havemore (Delhi)',
    mealType: 'Main Course'
  },
  {
    id: 'chole-bhature',
    name: 'Chole Bhature',
    hindiName: 'छोले भटूरे',
    region: 'North',
    state: 'Punjab & Delhi',
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    description: 'Dark, spicy, and tangy chickpeas slow-simmered with dried pomegranate seeds (anardana), paired with fluffy, deep-fried puffed sourdough bread (bhatura), pickled carrots, and green chilies.',
    culturalSignificance: 'The undisputed breakfast and brunch king of North India, embodying the hearty, generous culinary spirit of Punjab and Delhi street corners.',
    isVegetarian: true,
    spiceLevel: 'Spicy',
    bestSpotsToTaste: 'Sita Ram Diwan Chand (Paharganj, Delhi), Chache Di Hatti (Kamla Nagar, Delhi), Kesar Da Dhaba (Amritsar)',
    mealType: 'Breakfast'
  },
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    hindiName: 'दाल मखनी',
    region: 'North',
    state: 'Punjab',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    description: 'Whole black lentils (urad) and kidney beans (rajma) slow-cooked over smouldering charcoal for 12 to 16 hours with generous dollops of white butter, fresh cream, and aromatic garam masala.',
    culturalSignificance: 'Born in Punjab post-partition, it elevated simple home lentils into a luxurious royal banquet staple across the nation.',
    isVegetarian: true,
    spiceLevel: 'Mild',
    bestSpotsToTaste: 'Bukhara at ITC Maurya (Delhi), Kesar Da Dhaba (Amritsar)',
    mealType: 'Main Course'
  },
  {
    id: 'kashmiri-rogan-josh',
    name: 'Kashmiri Rogan Josh',
    hindiName: 'रोगन जोश',
    region: 'North',
    state: 'Jammu & Kashmir',
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
    description: 'Succulent lamb braised in an intensely fragrant crimson gravy colored naturally with Kashmiri dried cockscomb flower (maval) and Kashmiri dry red chilies, flavored with fennel and dry ginger (sonth).',
    culturalSignificance: 'One of the seven jewel courses of the royal Kashmiri multi-course feast "Wazwan", influenced by Persian court heritage.',
    isVegetarian: false,
    spiceLevel: 'Medium',
    bestSpotsToTaste: 'Ahdoos Restaurant (Srinagar), Mughal Darbar (Residency Road, Srinagar)',
    mealType: 'Main Course'
  },

  // ================= SOUTH INDIAN CUISINE =================
  {
    id: 'masala-dosa',
    name: 'Mysore Masala Dosa',
    hindiName: 'मैसूर मसाला डोसा',
    region: 'South',
    state: 'Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    description: 'Crisp, golden fermented rice and black gram crepe coated inside with fiery red garlic-chili paste, stuffed with spiced mashed potatoes, served with fresh coconut chutney and piping hot sambar.',
    culturalSignificance: 'World-famous breakfast staple originated in the royal kitchens of Mysuru and Udupi temple chefs, perfected across generations.',
    isVegetarian: true,
    spiceLevel: 'Medium',
    bestSpotsToTaste: 'Mylari Hotel (Mysore), Vidyarthi Bhavan (Bangalore), CTR Shri Sagar (Malleswaram, Bangalore)',
    mealType: 'Breakfast'
  },
  {
    id: 'kerala-sadya',
    name: 'Traditional Kerala Sadya',
    hindiName: 'केरल सद्या',
    region: 'South',
    state: 'Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
    description: 'A grand vegetarian feast served on a fresh plantain leaf consisting of red Matta rice with over 24 distinct preparations: Avial, Sambar, Thoran, Olan, Kaalan, Pachadi, Rasam, and Payasam desserts.',
    culturalSignificance: 'The culinary soul of Onam and Vishu festivals in Kerala, designed to encompass all six fundamental tastes (Shadruchikal) in perfect Ayurvedic balance.',
    isVegetarian: true,
    spiceLevel: 'Medium',
    bestSpotsToTaste: 'Mothers Veg Plaza (Trivandrum), Grand Pavilion (Kochi), BTH Sarovaram (Ernakulam)',
    mealType: 'Main Course'
  },
  {
    id: 'hyderabadi-biryani',
    name: 'Hyderabadi Dum Biryani',
    hindiName: 'हैदराबादी दम बिरयानी',
    region: 'South',
    state: 'Telangana',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    description: 'Kachi Gosht (raw marinated tender meat) layered with fragrant parboiled aged basmati rice, mint, fried onions (birista), saffron milk, and sealed with dough in a heavy handi to slow-cook under "Dum" pressure.',
    culturalSignificance: 'Created in the kitchens of the Nizams of Hyderabad, blending Mughlai cooking techniques with fiery Andhra spices and sourness.',
    isVegetarian: false,
    spiceLevel: 'Spicy',
    bestSpotsToTaste: 'Paradise Biryani (Secunderabad), Bawarchi (RTC X Roads), Shadab (Old City, Hyderabad)',
    mealType: 'Main Course'
  },
  {
    id: 'chettinad-chicken',
    name: 'Chettinad Pepper Chicken',
    hindiName: 'चेट्टिनाड चिकन',
    region: 'South',
    state: 'Tamil Nadu',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    description: 'Country chicken cooked with freshly stone-ground whole spices: star anise, kalpasi (black stone flower), marathi mokku, black peppercorns, curry leaves, and toasted coconut.',
    culturalSignificance: 'Culinary jewel of the affluent merchant community of Chettiars, famed for using exotic spices brought from their historical Southeast Asian maritime trade.',
    isVegetarian: false,
    spiceLevel: 'Spicy',
    bestSpotsToTaste: 'The Bangala (Karaikudi), Anjappar (Chennai), Junior Kuppanna (Chennai)',
    mealType: 'Main Course'
  },

  // ================= EAST INDIAN CUISINE =================
  {
    id: 'bengali-macher-jhol',
    name: 'Bengali Macher Jhol',
    hindiName: 'माछेर झोल',
    region: 'East',
    state: 'West Bengal',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh Rohu or Hilsa (Ilish) freshwater river fish fried in pure mustard oil, simmered in a light, fragrant broth tempered with panch phoron (Bengali 5-spice blend), green chilies, turmeric, and ginger.',
    culturalSignificance: 'The comforting heartbeat of every Bengali household, celebrated in literature and poetry as the essence of Bengal’s riverine civilization.',
    isVegetarian: false,
    spiceLevel: 'Medium',
    bestSpotsToTaste: '6 Ballygunge Place (Kolkata), Kasturi (Park Street, Kolkata), Oh! Calcutta (Kolkata)',
    mealType: 'Main Course'
  },
  {
    id: 'odia-chhena-poda',
    name: 'Odia Chhena Poda',
    hindiName: 'छेना पोड़ा',
    region: 'East',
    state: 'Odisha',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh homemade cottage cheese (chhena) kneaded with sugar, semolina, cardamom, and raisins, wrapped in Sal leaves, and slow-baked for hours until the outer crust deep-caramelizes into sweet smoky perfection.',
    culturalSignificance: 'Known as the "Indian Cheesecake", it was invented in Nayagarh in the first half of the 20th century and is offered to Lord Jagannath in temple rituals.',
    isVegetarian: true,
    spiceLevel: 'Mild',
    bestSpotsToTaste: 'Nayagarh sweet shops, Nimapara sweets stalls in Bhubaneswar and Puri',
    mealType: 'Dessert'
  },
  {
    id: 'litti-chokha',
    name: 'Litti Chokha',
    hindiName: 'लिट्टी चोखा',
    region: 'East',
    state: 'Bihar',
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    description: 'Whole wheat dough balls stuffed with roasted gram flour (sattu) spiced with carom seeds (ajwain), kalonji, mustard oil, and roasted garlic; baked over cow dung charcoal cakes and submerged in desi ghee, accompanied by mashed roasted brinjal/tomato chokha.',
    culturalSignificance: 'Ancient survival food of Magadha warriors, eaten by freedom fighters during 1857, celebrated for its high protein and zero-spoilage endurance.',
    isVegetarian: true,
    spiceLevel: 'Medium',
    bestSpotsToTaste: 'Maurya Lok (Patna), Bhojpuri stalls near Patna Junction',
    mealType: 'Main Course'
  },
  {
    id: 'bengali-rosogolla',
    name: 'Bengali Rosogolla & Mishti Doi',
    hindiName: 'रसगुल्ला और मिष्टी दोई',
    region: 'East',
    state: 'West Bengal & Odisha',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    description: 'Spongy, porous dumplings of fresh chhena cooked in light sugar syrup, alongside Mishti Doi (clay-pot fermented caramelized sweet curd).',
    culturalSignificance: 'Pinnacle of East Indian confectionery with GI recognition; indispensable in weddings, Pujas, and joyous occasions across Bengal and Odisha.',
    isVegetarian: true,
    spiceLevel: 'Mild',
    bestSpotsToTaste: 'K.C. Das (Esplanade, Kolkata), Balaram Mullick & Radharaman Mullick (Kolkata), Bhikharam Chandmal',
    mealType: 'Dessert'
  },

  // ================= WEST INDIAN CUISINE =================
  {
    id: 'dal-baati-churma',
    name: 'Rajasthani Dal Baati Churma',
    hindiName: 'दाल बाटी चूरमा',
    region: 'West',
    state: 'Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    description: 'Hard-baked wheat dumplings (baatis) drenched in pure golden cow ghee, served with panchmel dal (5-lentil curry), fiery garlic chutney, and sweet crushed wheat churma topped with dry fruits.',
    culturalSignificance: 'Born during the era of Maharana Pratap and Rajput desert campaigns, designed to withstand water scarcity and deliver immense sustenance.',
    isVegetarian: true,
    spiceLevel: 'Spicy',
    bestSpotsToTaste: 'Chokhi Dhani (Jaipur), Rawat Mishthan Bhandar (Jaipur), Krishna Dal Bati (Udaipur)',
    mealType: 'Main Course'
  },
  {
    id: 'mumbai-vada-pav',
    name: 'Mumbai Vada Pav',
    hindiName: 'मुंबई वड़ा पाव',
    region: 'West',
    state: 'Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    description: 'Spicy mashed potato patty battered in chickpea flour, deep-fried until crisp, tucked inside a soft bakery bun (pav) lathered with dry red garlic-peanut chutney and fried green chilies.',
    culturalSignificance: 'Created in 1966 outside Dadar station by Ashok Vaidya for textile mill workers. It is the fuel that powers millions of Mumbaikars every single day.',
    isVegetarian: true,
    spiceLevel: 'Spicy',
    bestSpotsToTaste: 'Ashok Vada Pav (Kirti College, Dadar), Aram Vada Pav (CSMT), Anand Vada Pav (Vile Parle)',
    mealType: 'Street Food'
  },
  {
    id: 'goan-fish-curry',
    name: 'Goan Fish Curry (Xitt Codi)',
    hindiName: 'गोअन फिश करी',
    region: 'West',
    state: 'Goa',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh Kingfish or Pomfret simmered in a creamy coconut milk gravy infused with tart Kokum (Garcinia indica), Kashmiri chilies, coriander seeds, and cumin seeds.',
    culturalSignificance: 'The daily staple of Goan households that encapsulates the tropical coastal way of life known as "Susegad".',
    isVegetarian: false,
    spiceLevel: 'Medium',
    bestSpotsToTaste: 'Fisherman’s Wharf (Panaji & Cavelossim), Ritz Classic (Panaji), Martin’s Corner (Betalbatim)',
    mealType: 'Main Course'
  },
  {
    id: 'gujarati-thali',
    name: 'Traditional Gujarati Thali & Dhokla',
    hindiName: 'गुजराती थाली और ढोकला',
    region: 'West',
    state: 'Gujarat',
    imageUrl: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
    description: 'An elaborate vegetarian platter with sweet-and-savory Gujarati Kadhi, Undhiyu (winter mixed vegetables cooked upside-down in earthen pots), steamed spongy Khaman Dhokla, Rotlis, and Shrikhand.',
    culturalSignificance: 'Exemplifies the Jain and Vaishnava vegetarian philosophy of ahimsa, balancing sweet jaggery with sour lemon and mild chilies.',
    isVegetarian: true,
    spiceLevel: 'Mild',
    bestSpotsToTaste: 'Agashiye at The House of MG (Ahmedabad), Vishalla (Ahmedabad), Sasuma Gujarati Thali (Surat)',
    mealType: 'Main Course'
  },

  // ================= NORTHEAST INDIAN CUISINE =================
  {
    id: 'assamese-khaar-masor-tenga',
    name: 'Assamese Masor Tenga & Khaar',
    hindiName: 'असमिया मासोर तेंगा',
    region: 'Northeast',
    state: 'Assam',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Light, soothing river fish curry made sour with elephant apple (ou tenga) or fresh tomatoes and tempered with fenugreek seeds; preceded in the meal by Khaar, an alkaline delicacy prepared from sundried banana peel ash.',
    culturalSignificance: 'A cornerstone of Assamese gastro-culture that aids digestion in humid monsoon climates and preserves ancient organic farming methods.',
    isVegetarian: false,
    spiceLevel: 'Mild',
    bestSpotsToTaste: 'Paradise Restaurant (Guwahati), Khorikaa (Guwahati), Maihang (Jorhat)',
    mealType: 'Main Course'
  },
  {
    id: 'meghalaya-jadoh',
    name: 'Khasi Jadoh',
    hindiName: 'खासी जादोह',
    region: 'Northeast',
    state: 'Meghalaya',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    description: 'Short-grained hill red rice cooked with succulent pork cuts, crushed black sesame seeds (nei-lieh), ginger, garlic, and wild indigenous bay leaves.',
    culturalSignificance: 'The signature celebratory meal of the matrilineal Khasi tribe of Meghalaya, served in traditional bamboo stalls during community festivals.',
    isVegetarian: false,
    spiceLevel: 'Medium',
    bestSpotsToTaste: 'Trattoria (Police Bazar, Shillong), Jadoh Stall (Laitumkhrah, Shillong)',
    mealType: 'Main Course'
  },
  {
    id: 'naga-smoked-pork',
    name: 'Naga Smoked Pork with Fermented Bamboo Shoot',
    hindiName: 'नागा स्मोक्ड पोर्क',
    region: 'Northeast',
    state: 'Nagaland',
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
    description: 'Wood-smoked dry pork cooked with tangy fermented bamboo shoot (bastenga) and fiery Raja Mircha (Ghost Pepper / Bhut Jolokia), creating an intense, earthy, and aromatic explosion.',
    culturalSignificance: 'Rooted in ancestral hunting and smoking preservation methods of Naga tribes living in deep forested hills.',
    isVegetarian: false,
    spiceLevel: 'Spicy',
    bestSpotsToTaste: 'Naga Kitchen (Kohima), Ethnic Table (Sechu Zubza, Kohima), City Restaurant (Dimapur)',
    mealType: 'Main Course'
  },
  {
    id: 'tibetan-momos-thukpa',
    name: 'Himalayan Momos & Thukpa',
    hindiName: 'मोमोज और थुकपा',
    region: 'Northeast',
    state: 'Sikkim & Arunachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    description: 'Hand-pleated thin flour dumplings stuffed with seasoned local vegetables, fresh cheese (chhurpi), or meat, steamed piping hot and served with a fiery paste made from Sikkim’s indigenous Dalle Khursani chili and clear bone broth.',
    culturalSignificance: 'A warming comfort staple embraced across the high-altitude Buddhist Himalayan regions of Sikkim, Arunachal Pradesh, and Darjeeling.',
    isVegetarian: true,
    spiceLevel: 'Medium',
    bestSpotsToTaste: 'Roll House & Taste of Tibet (MG Marg, Gangtok), Dragon Restaurant (Tawang)',
    mealType: 'Street Food'
  }
];
