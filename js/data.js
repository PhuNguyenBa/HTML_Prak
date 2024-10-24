const items = [
    {
        backgroundImage: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/gia%CC%80y%20Converse%20da%20bo%CC%81ng/giay-converse-da-bong-5.jpg',
        name: 'The express',
        priceOld: 600,
        brand: 'whoo',
        originName: 'Корея',
        saleOffPercent: 25,
        tags: ['женщинам'],
        stars: 5
    },
    {
        
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2-MqPUfv2VkQ8KkoXVz0fYwjbu_eVq3PSw&s',
        name: 'TRUNG GROUP',
        priceOld: 1845,
        brand: 'whoo',
        originName: 'Китай',
        saleOffPercent: 60,
        tags: ['мужчинам', 'женщинам', 'обувь'],
        stars: 1
    },
    {
        
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEr6f3GDe0cdxrppQAfC7WM9hur2P4mYa1Q&s',
        name: 'SHOE TRENDS',
        priceOld: 1290,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 69,
        tags: ['детям'],
        stars: 2
    },
    {
        
        backgroundImage: 'https://basket-15.wbbasket.ru/vol2290/part229058/229058814/images/c516x688/1.webp',
        name: 'FAYZ SHOE',
        priceOld: 4990,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 90,
        tags: ['мужчинам', 'женщинам'],
        stars: 5
    },
    {
        
        backgroundImage: 'https://basket-15.wbbasket.ru/vol2290/part229058/229058815/images/c516x688/1.webp',
        name: 'JOYCITY SHOE',
        priceOld: 10000,
        brand: 'whoo',
        originName: 'Китай',
        saleOffPercent: 95,
        tags: ['мужчинам'],
        stars: 4
    },
    {
        
        backgroundImage: 'https://basket-14.wbbasket.ru/vol2085/part208527/208527526/images/c516x688/1.webp',
        name: 'DC Shoes',
        priceOld: 8990,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 35,
        tags: ['мужчинам', 'женщинам'],
        stars: 3
    },
    {
        
        backgroundImage: 'https://basket-16.wbbasket.ru/vol2488/part248878/248878403/images/c516x688/1.webp',
        name: 'Air Bags',
        priceOld: 12879,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 90,
        tags: ['женщинам'],
        stars: 3
    },
    {
        
        backgroundImage: 'https://basket-16.wbbasket.ru/vol2610/part261029/261029493/images/c516x688/1.webp',
        name: 'SHOE CHIC',
        priceOld: 800,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 82,
        tags: ['мужчинам', 'женщинам', 'обувь'],
        stars: 2
    },
    {
        
        backgroundImage: 'https://basket-15.wbbasket.ru/vol2257/part225791/225791433/images/c516x688/1.webp',
        name: 'SHOE TRENDS',
        priceOld: 5790,
        brand: 'whoo',
        originName: 'Китай',
        saleOffPercent: 41,
        tags: ['мужчинам', 'женщинам', 'обувь'],
        stars: 1
    },
    {
        
        backgroundImage: 'https://basket-14.wbbasket.ru/vol2085/part208527/208527523/images/c516x688/1.webp',
        name: 'UNICORN SHOE LAB',
        priceOld: 1799,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 0,
        tags: ['тренд'],
        stars: 2
    },
    {
        
        backgroundImage: 'https://basket-14.wbbasket.ru/vol2078/part207802/207802632/images/c516x688/1.webp',
        name: 'SHOE HOUSE',
        priceOld: 2010,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 0,
        tags: ['тренд'],
        stars: 3
    },
    {
        
        backgroundImage: 'https://basket-15.wbbasket.ru/vol2195/part219528/219528220/images/c516x688/1.webp',
        name: 'SHOE WORLD',
        priceOld: 1649,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 45,
        tags: ['тренд'],
        stars: 1
    },
    {
        
        backgroundImage: 'https://basket-14.wbbasket.ru/vol2085/part208536/208536033/images/c516x688/1.webp',
        name: 'FAYZ SHOE',
        priceOld: 28990,
        brand: 'whoo',
        originName: 'Китай',
        saleOffPercent: 0,
        tags: ['женщинам'],
        stars: 5
    },
    {
        
        backgroundImage: 'https://basket-14.wbbasket.ru/vol2078/part207802/207802657/images/c516x688/1.webp',
        name: 'Tarrago',
        priceOld: 6010,
        brand: 'whoo',
        originName: 'Вьетнам',
        saleOffPercent: 5,
        tags: ['мужчинам', 'женщинам'],
        stars: 4
    },
    {
        
        backgroundImage: 'https://basket-15.wbbasket.ru/vol2229/part222988/222988487/images/c516x688/1.webp',
        name: 'SHOE CHIC',
        priceOld: 1380,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 70,
        tags: ['тренд'],
        stars: 2
    },
    {
        
        backgroundImage: 'https://basket-14.wbbasket.ru/vol2078/part207802/207802612/images/c516x688/1.webp',
        name: 'SHOE TRENDS',
        priceOld: 2357,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 15,
        tags: ['тренд'],
        stars: 4
    },
    {
        
        backgroundImage: 'https://basket-14.wbbasket.ru/vol2077/part207796/207796778/images/c516x688/1.webp',
        name: 'SHOE BRANDS',
        priceOld: 9690,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 29,
        tags: ['мужчинам', 'бестселлер'],
        stars: 4
    },
    {
        
        backgroundImage: 'https://basket-14.wbbasket.ru/vol2078/part207802/207802626/images/c516x688/1.webp',
        name: 'SHOE TRENDS',
        priceOld: 760,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 0,
        tags: ['женщинам'],
        stars: 5
    },
    {
        
        backgroundImage: 'https://basket-16.wbbasket.ru/vol2610/part261027/261027959/images/c516x688/1.webp',//женщинам
        name: 'FAYZ SHOE',
        priceOld: 541,
        brand: 'whoo',
        originName: 'Россия',
        saleOffPercent: 35,
        tags: ['женщинам'],
        stars: 3
    },
    {
        
        backgroundImage: 'https://basket-14.wbbasket.ru/vol2078/part207802/207802617/images/c516x688/1.webp',//детям
        name: 'SHOE CHIC',
        priceOld: 466,
        brand: 'whoo',
        originName: 'Вьетнам',
        saleOffPercent: 27,
        tags: ['женщинам'],
        stars: 1
    },
];