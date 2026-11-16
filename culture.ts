/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Culture, Heritage, Festivals, Dance, Music & Handicrafts Dataset
 */

import { Festival, CulturalItem } from '../types/travel';

export const FESTIVALS_DATA: Festival[] = [
  {
    id: 'diwali',
    name: 'Diwali (Deepavali)',
    hindiName: 'दीपावली',
    month: 'October / November (Kartik Amavasya)',
    statesCelebrated: 'Pan-India, with special grandeur in Ayodhya, Varanasi, and Jaipur',
    description: 'The Festival of Lights celebrating the triumphant return of Lord Rama to Ayodhya after 14 years of exile and the victory of light over spiritual darkness and ignorance.',
    significance: 'Homes are adorned with warm earthen clay diyas, elaborate floral rangoli patterns, firecrackers, sweet distributions, and Lakshmi Puja for prosperity.',
    keyRitual: 'Lighting millions of clay lamps (Diyas), Lakshmi-Ganesha puja at dusk, and exchanging Kaju Katli sweets.',
    imageUrl: 'https://images.unsplash.com/photo-1510525009512-ab4ef37fa284?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'holi',
    name: 'Holi – The Festival of Colours',
    hindiName: 'होली',
    month: 'March (Phalguna Purnima)',
    statesCelebrated: 'Uttar Pradesh (Mathura, Vrindavan, Barsana Lathmar), Rajasthan, Delhi',
    description: 'A jubilant carnival marking the end of winter, advent of spring harvest, and the divine love of Radha and Krishna, celebrating forgiveness and renewal.',
    significance: 'People smear each other with fragrant organic gulal powders (gulal made from tesu flowers), dance to dhol beats, and drink refreshing thandai with gujiya sweets.',
    keyRitual: 'Holika Dahan bonfire the eve before, followed by play with vibrant colours and splashing water guns (pichkaris).',
    imageUrl: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'durga-puja',
    name: 'Durga Puja (UNESCO Intangible Heritage)',
    hindiName: 'दुर्गा पूजा',
    month: 'September / October (Sharad Navratri)',
    statesCelebrated: 'West Bengal (Kolkata), Tripura, Assam, Odisha',
    description: 'Inscribed on the UNESCO Intangible Cultural Heritage list, a massive public art and spiritual festival celebrating Goddess Durga’s victory over Mahishasura.',
    significance: 'Neighborhoods build awe-inspiring temporary architectural pavilions (pandals) showcasing themes from world monuments to contemporary social issues, accompanied by traditional Dhak drums and Dhunuchi dance.',
    keyRitual: 'Dhunuchi Naach dance with burning coconut husks, Sindoor Khela on Vijayadashami, and grand river immersion.',
    imageUrl: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rath-yatra',
    name: 'Puri Rath Yatra',
    hindiName: 'रथ यात्रा',
    month: 'June / July (Ashadha Shukla Dwitiya)',
    statesCelebrated: 'Odisha (Puri), celebrated internationally',
    description: 'The ancient chariot festival where Lord Jagannath, along with siblings Balabhadra and Subhadra, emerges from the sanctum sanctorum to meet all devotees.',
    significance: 'Three gigantic, handcrafted wooden chariots (Nandighosha, Taladhwaja, Darpadalana) are pulled through Puri’s Grand Road (Bada Danda) by over a million pilgrims.',
    keyRitual: 'Chhera Pahanra – where the Gajapati King of Puri sweeps the chariot platforms with a golden broom, symbolizing equality of all humans before the Divine.',
    imageUrl: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'onam',
    name: 'Onam',
    hindiName: 'ओणम',
    month: 'August / September (Chingam)',
    statesCelebrated: 'Kerala',
    description: 'The harvest festival of Kerala commemorating the golden and egalitarian rule of mythical King Mahabali, celebrated across religious lines with egalitarian unity.',
    significance: 'Features exquisite flower carpets (Pookkalam), the famous Vallam Kali snake boat races on Pampa river, and the lavish 26-course Onam Sadya feast.',
    keyRitual: 'Vallam Kali (Nehru Trophy snake boat races), Pulikali (tiger mask dance), and laying fresh flower tapestries every morning.',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pushkar-mela',
    name: 'Pushkar Camel Fair',
    hindiName: 'पुष्कर मेला',
    month: 'November (Kartik Purnima)',
    statesCelebrated: 'Rajasthan (Pushkar)',
    description: 'One of the world’s largest camel and livestock gatherings blended with holy lake dip rituals, vibrant Rajasthani folk dances, and mustache competitions.',
    significance: 'Over 50,000 decorated camels, horses, and cattle traded across sandy dunes while desert musicians perform Kalbelia and Morchang tunes.',
    keyRitual: 'Kartik Purnima holy dip in sacred Pushkar Lake, camel beauty pageants, and hot-air balloon flights.',
    imageUrl: 'https://images.unsplash.com/photo-1603262110263-fb010d6e75dc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bihu',
    name: 'Rongali & Magh Bihu',
    hindiName: 'बिहू',
    month: 'April (Rongali) & January (Magh)',
    statesCelebrated: 'Assam',
    description: 'The agrarian heartbeat of Assam marking the Assamese New Year (Rongali Bihu) and the winter harvest thanksgiving (Magh Bihu).',
    significance: 'Youth perform the energetic Bihu dance wearing golden Muga silk mekhela chadors to the rhythmic beat of the Dhol, Pepa (buffalo horn flute), and Gogona.',
    keyRitual: 'Building community thatch cottages (Bhelaghar) and lighting the sacred bonfire (Meji) during Magh Bihu.',
    imageUrl: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80'
  }
];

export const CULTURAL_ITEMS: CulturalItem[] = [
  // Dance Forms
  {
    id: 'dance-kathak',
    category: 'dance',
    title: 'Kathak Dance',
    originState: 'Uttar Pradesh & Northern India',
    description: 'Deriving its name from "Katha" (storyteller), this classical dance form features swift pirouettes (chakkars), complex rhythmic footwork synchronized with ankle bells (ghungroos), and expressive mime.',
    culturalSignificance: 'Flourished in Hindu temple traditions and later gained refined elegance in Mughal and Awadhi royal courts.',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dance-bharatanatyam',
    category: 'dance',
    title: 'Bharatanatyam Dance',
    originState: 'Tamil Nadu',
    description: 'The oldest classical dance tradition of India, renowned for geometric body lines, sculpturesque poses (karanas), dramatic facial expressions (abhinaya), and hand gestures (mudras).',
    culturalSignificance: 'Originally performed by Devadasis in grand Chola temples like Thanjavur Brihadisvara, codified in Bharata Muni’s ancient Natyashastra.',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dance-kathakali',
    category: 'dance',
    title: 'Kathakali Dance-Drama',
    originState: 'Kerala',
    description: 'A stylized classical dance-drama distinguished by elaborate makeup (chutti), monumental headdresses (kireetam), and mesmerizing eye movements accompanied by Sopana Sangeetham and Chenda drums.',
    culturalSignificance: 'Depicts epic stories from the Ramayana and Mahabharata with green-painted noble kings (Paccha) and red-bearded demons (Katti).',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dance-odissi',
    category: 'dance',
    title: 'Odissi Dance',
    originState: 'Odisha',
    description: 'Graceful classical dance known for its sensual Tribhanga posture (three-bend curve of the body) and Chauka stance, evoking the living sculptures carved on Sun Temple Konark walls.',
    culturalSignificance: 'Traditionally performed by Maharis inside Jagannath Temple in devotion to Lord Jagannath, accompanied by Odissi music and Geeta Govinda verses.',
    imageUrl: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80'
  },

  // Traditional Clothing
  {
    id: 'clothing-saree',
    category: 'clothing',
    title: 'The Indian Saree (6 to 9 Yards of Grace)',
    originState: 'Pan-India (Kanjeevaram, Banarasi, Chanderi, Paithani)',
    description: 'An unstitched drape of handwoven fabric spanning 5 to 9 meters, worn with grace across millennia. Each region boasts distinct weaving techniques, from Kanchipuram pure mulberry silk with gold zari to gossamer Banarasi brocade.',
    culturalSignificance: 'Mentioned in Rigveda and Indus Valley seals; embodies timeless feminine elegance, cultural pride, and regional handloom heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'clothing-kurta-sherwani',
    category: 'clothing',
    title: 'Kurta-Pajama & Royal Sherwani',
    originState: 'Northern & Central India',
    description: 'Tailored tunic paired with churidar trousers, elevated for royal weddings and festivals into an intricately embroidered silk Sherwani with Nehru collar, pocket square, and royal safa (turban).',
    culturalSignificance: 'Synonymous with royal Lucknowi Chikankari embroidery and aristocratic formal heritage across India.',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'clothing-mekhela-chador',
    category: 'clothing',
    title: 'Mekhela Chador (Assam Silk)',
    originState: 'Assam',
    description: 'Two-piece indigenous traditional attire woven from lustrous golden Muga silk (found only in Assam) and Eri ahimsa silk, featuring red, black, and green floral motif borders.',
    culturalSignificance: 'Worn by Assamese women during Bihu and weddings, Muga silk has natural golden shimmer that becomes more lustrous with every wash.',
    imageUrl: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80'
  },

  // Music
  {
    id: 'music-hindustani',
    category: 'music',
    title: 'Hindustani Classical Music',
    originState: 'Northern India',
    description: 'A melodic tradition rooted in ancient Vedic chants and courtly Gharanas (Gwalior, Agra, Kirana). Explores melodic frameworks called Ragas and rhythmic cycles called Taals, featuring Sitar, Sarod, Bansuri, and Tabla.',
    culturalSignificance: 'Each Raga corresponds to a specific time of day (e.g., Raga Bhairav at dawn, Raga Yaman at dusk) or season (Raga Megh for monsoons).',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'music-carnatic',
    category: 'music',
    title: 'Carnatic Classical Music',
    originState: 'Southern India (Tamil Nadu, Karnataka, Andhra, Kerala)',
    description: 'Vocal-centric classical music emphasizing structured compositions (Kritis) by the musical trinity (Tyagaraja, Muthuswami Dikshitar, Syama Sastri), accompanied by Veena, Violin, and Mridangam.',
    culturalSignificance: 'Celebrated every winter during the December Chennai Music Season, one of the world’s largest cultural festivals.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
  },

  // Handicrafts
  {
    id: 'craft-pashmina',
    category: 'handicraft',
    title: 'Kashmiri Pashmina Shawls',
    originState: 'Jammu & Kashmir / Ladakh',
    description: 'Spun from the undercoat fleece of Changthangi mountain goats grazing at 14,000 ft in Ladakh, spun on traditional wooden wheels (charkhas), and embroidered with Sozni needlework.',
    culturalSignificance: 'So feather-light that a full-sized shawl can pass effortlessly through a finger ring, cherished by royalty worldwide for centuries.',
    imageUrl: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'craft-madhubani',
    category: 'handicraft',
    title: 'Madhubani (Mithila) Painting',
    originState: 'Bihar',
    description: 'Ancient folk art created using fingers, twigs, brushes, and matchsticks with natural dyes derived from turmeric, indigo, soot, and flowers, depicting deities, nature, and flora.',
    culturalSignificance: 'Originated when King Janaka commissioned artists to paint his palace for Princess Sita’s wedding to Lord Rama in the Ramayana.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'craft-blue-pottery',
    category: 'handicraft',
    title: 'Jaipur Blue Pottery',
    originState: 'Rajasthan',
    description: 'Turquoise and cobalt glazed ceramic craft made uniquely without clay—using quartz stone powder, Fuller’s earth (multani mitti), powdered glass, and gum.',
    culturalSignificance: 'Brought to Jaipur in the 19th century under Maharaja Sawai Ram Singh II, famous for floral Mughal arabesque patterns.',
    imageUrl: 'https://images.unsplash.com/photo-1603262110263-fb010d6e75dc?auto=format&fit=crop&w=800&q=80'
  }
];
