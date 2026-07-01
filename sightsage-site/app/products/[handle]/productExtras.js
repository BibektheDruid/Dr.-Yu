// Page-local data: KB-derived per-product extras (verbatim from
// context/Sight Sage/products/*.md). Only products whose KB file provides
// named ingredient blurbs / curated benefit bullets / product FAQs appear
// here; products without these simply omit those sections on the template.
//
// Shape per handle:
//   benefits:    string[]            -> "Key Benefits" bullets
//   ingredients: {name, note}[]      -> ingredient grid (named actives w/ blurbs)
//   faqs:        {q, a}[]            -> per-product FAQ accordion
// All text is copied verbatim from the captured knowledge base.

// Shared FAQ block reused on the eye/hair/wellness products that carry it.
const SHARED_FAQS = [
  {
    q: 'How quickly will I see results?',
    a: 'Results vary from person to person. Some customers see results within two weeks, while others see them within 30 days. Factors such as age, lifestyle, DNA, and underlying health conditions can have an effect on results.',
  },
  {
    q: 'Do they have any side-effects?',
    a: "Our products made with 100% natural ingredients and you shouldn't experience any side-effects. With that being said, everybody is different, if you experience any unwanted side-effects stop using the product and contact Kathy and our Customer Care team.",
  },
  {
    q: 'How much is shipping?',
    a: 'Shipping is free for customers in Canada and the USA. Shipping is free for international customers when they place orders of $300 or more.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Orders typically take 5 days to arrive; however, due to delays in customs and Local Postal Services orders outside Canada may take up to 1 week. All orders leave our Vancouver, BC warehouse within two business days after your order is placed.',
  },
  {
    q: 'How do I contact the customer care team?',
    a: 'You can contact our customer care team through our online form, live chat, social media, or by emailing us directly at support@sightsage.com.',
  },
];

const EXTRAS = {
  'sightc-natural-dry-eye-supplement': {
    benefits: [
      'Marketed as an "eye drop alternative" for dry, itchy, red eyes',
      'Provides essential vitamins, minerals, antioxidants, and amino acids (Lutein, Zeaxanthin, Zinc, Vitamin B1, Omega-3 Fatty Acids, Vitamin C)',
      'Customers reported improved dry eyes, eye fatigue, and blurry vision after using SightC',
      'Full spectrum of nutrition to support and enhance your overall eye health and vision',
      'Contains no unnecessary additives',
    ],
    ingredients: [
      { name: 'Goji Berries', note: 'Celebrated for their high antioxidant content.' },
      { name: 'Turmeric', note: 'Valued for its powerful anti-inflammatory properties.' },
      { name: 'Cherokee Rose', note: 'Traditionally used to bolster the immune system.' },
      { name: 'Dwarf Lily Turf', note: 'Esteemed in herbal medicine for its beneficial respiratory health effects.' },
      { name: 'Dandelion', note: 'A natural diuretic with a rich herbal remedy history.' },
      { name: 'Chinese Yam', note: 'Known for its role in nutrition and digestion.' },
      { name: 'Hawthorn', note: 'Employed for centuries for its cardiovascular health benefits.' },
    ],
    faqs: [
      {
        q: 'How quickly will I see results from SightC?',
        a: 'Results vary from person to person. Some customers experience results within 30 minutes while others experience results over 30 days. Factors such as age, lifestyle, DNA, and underlying health conditions can have an effect on results.',
      },
      {
        q: 'Does SightC have any side-effect?',
        a: "SightC is made with all natural ingredients and you shouldn't experience any side-effects. With that being said, everybody is different, if you experience any unwanted side-effects stop using SightC and contact our Customer Care team.",
      },
      {
        q: 'How do I contact the customer care team?',
        a: 'You can contact our customer care team through our online form, live chat, social media, or by emailing us directly at support@sightsage.com.',
      },
      {
        q: 'How much is shipping?',
        a: 'Shipping is free for customers in Canada and the USA. Shipping is free for international customers when they place orders of $300 or more.',
      },
      {
        q: 'How long does shipping take?',
        a: 'Orders typically take 1-2 weeks to arrive; however, due to delays in customs and Local Postal Services orders outside Canada may take up to 3-4 weeks. All orders will leave our Vancouver, BC warehouse within two business days after your order is placed.',
      },
    ],
  },

  'blueberry-gummy': {
    benefits: [
      'Targeted Eye Support: Helps relieve dry eyes, reduce fatigue, and clear up blurry vision.',
      'All-Natural Ingredients: Made with 100% Canadian blueberries and sweetened with Monk Fruit—no added sugar, keto-friendly.',
      'Trusted Expertise: Formulated by Dr. Weidong Yu, a renowned traditional Chinese medicine practitioner.',
      'Packed with essential vitamins (C, K, E, B6), minerals (Copper, Manganese, Potassium), and antioxidants (Anthocyanins, Lutein, Zeaxanthin, Beta-carotene)',
      'Plant-based, low-calorie, Halal, and Kosher; perfect for on-the-go snacking',
    ],
    ingredients: [
      { name: '100% Canadian Blueberries', note: 'Rich in anthocyanins, Vitamins C, K, E, B6, Lutein, Zeaxanthin, Beta-carotene and Copper.' },
      { name: 'Monk Fruit Extract', note: '200 times sweeter than table sugar, with zero calories and zero carbs; no added sugar, keto-friendly.' },
    ],
    faqs: [
      {
        q: 'How quickly will I see results?',
        a: 'Results vary from person to person. Some customers see results within two weeks, while others see them within 30 days. Factors such as age, lifestyle, DNA, and underlying health conditions can have an effect on results.',
      },
      ...SHARED_FAQS.slice(1),
    ],
  },

  'blueberry-gummies-20-packs-of-3': {
    benefits: [
      'Targeted Eye Support: Helps relieve dry eyes, reduce fatigue, and clear up blurry vision.',
      'All-Natural Ingredients: Made with 100% Canadian blueberries and sweetened with Monk Fruit—no added sugar, keto-friendly.',
      'Trusted Expertise: Formulated by Dr. Weidong Yu, renowned for treating retinitis pigmentosa patients.',
      'Plant-based and low-calorie — perfect for on-the-go snacking',
    ],
    ingredients: [
      { name: '100% Canadian Blueberries', note: 'Rich in anthocyanins, Vitamins C, K, E, B6, Lutein, Zeaxanthin, Beta-carotene and Copper.' },
      { name: 'Monk Fruit', note: 'Natural zero-sugar sweetener — keto-friendly with no added sugar.' },
    ],
    faqs: [
      {
        q: 'How quickly will I see results?',
        a: 'Results vary from person to person. Some customers see results within two weeks, while others see them within 30 days. Factors such as age, lifestyle, DNA, and underlying health conditions can have an effect on results.',
      },
      ...SHARED_FAQS.slice(1),
    ],
  },

  'adaptogen-x': {
    benefits: [
      'Reduces cortisol levels, helping manage stress-induced hair loss',
      'Reduces grey hairs and stops hair loss',
      'Strengthens roots and enhances hair vitality',
      'Treats hormonal imbalances behind hair loss and premature grey/white hairs',
      'Optimal for people dealing with PCOS, thyroid issues, and perimenopause',
    ],
    ingredients: [
      { name: 'Red Ginseng', note: 'Revitalizes and aids in recovering energy. Strengthens the roots of the hair and stimulates the scalp, enhancing hair growth and reducing hair loss.' },
      { name: 'American Ginseng', note: 'Supports immune function and boosts mental performance.' },
      { name: 'Schisandra Chinensis', note: 'Improves liver function and overall vitality.' },
      { name: 'Siberian Ginseng', note: 'Increases blood circulation and energy. Helps adapt to stress.' },
      { name: 'Mai Dong', note: 'Hydrates and nourishes the scalp, promoting healthy hair growth. Helps reduce stress, which can minimize hair loss and improve hair vitality.' },
    ],
    faqs: SHARED_FAQS,
  },

  'hair-pro': {
    benefits: [
      'Helps prevent hair loss and promote natural hair growth',
      'Treats alopecia by reducing androgen levels',
      'Fortifies hair follicles and reduces thinning',
      'Boosts scalp hydration, balances oil levels, and stimulates blood circulation',
      'Includes B Vitamins, including Biotin, for hair strength, texture, and growth',
      "Positioned as Rogaine's natural alternative",
    ],
    ingredients: [
      { name: 'Fleeceflower Root', note: 'Renowned for its hair-nourishing properties.' },
      { name: 'Blackberry and Ginseng Extracts', note: 'Antioxidant-rich, boosting scalp health and circulation.' },
      { name: 'Pumpkin Seed Extract', note: 'Supports scalp balance and hydration.' },
      { name: 'Ginkgo Biloba', note: 'Enhances blood flow to the scalp.' },
      { name: 'B Vitamins (B3, B5, B6, B7, B9, B12)', note: 'Includes Biotin that is vital for hair strength, texture, and growth.' },
      { name: 'Vitamin D3', note: 'Nourishes and fortifies hair follicles.' },
    ],
    faqs: SHARED_FAQS,
  },

  'superfoods-wellness-tea': {
    benefits: [
      'Cravings + appetite support to help you stay consistent',
      'Healthy blood sugar balance and insulin sensitivity support',
      'Metabolism support with nutrient-dense whole foods',
      'Bloating + digestive comfort for a lighter feel',
      'Liver wellness support (including fatty liver support goals)',
      'Packed with 29 whole foods and food-grade herbs',
    ],
    faqs: SHARED_FAQS,
  },
};

export function getProductExtras(handle) {
  return EXTRAS[handle] || null;
}
