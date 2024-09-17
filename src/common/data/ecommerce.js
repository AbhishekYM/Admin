const products = [
    {
        id: 1,
        img: require("@/assets/images/products/img-1.png"),
        img_alt: "img-1.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "215.00",
        discount: "25%",
        orders: "06",
        ratings: "4.9",
        publish: "12 Oct, 2022"
    }, {
        id: 2,
        img: require("@/assets/images/products/img-2.png"),
        img_alt: "img-2.png",
        title: "Like style travel black handbag",
        category: "Luggage",
        stock: "06",
        price: "160.00",
        discount: "0%",
        orders: "02",
        ratings: "4.3",
        publish: "06 Jan, 2023"
    }, {
        id: 3,
        img: require("@/assets/images/products/img-3.png"),
        img_alt: "img-3.png",
        title: "Fossil Gen 5E Smart Watch",
        category: "Watches",
        stock: "19",
        price: "120.00",
        discount: "42%",
        orders: "21",
        ratings: "4.3",
        publish: "26 Mar, 2021"
    }, {
        id: 4,
        img: require("@/assets/images/products/img-4.png"),
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 5,
        img: require("@/assets/images/products/img-5.png"),
        img_alt: "img-5.png",
        title: "Willage Volleyball Ball Size 4",
        category: "Sports",
        stock: "30",
        price: "99.00",
        discount: "10%",
        orders: "21",
        ratings: "4.0",
        publish: "30 Mar, 2021"
    }, {
        id: 6,
        img: require("@/assets/images/products/img-6.png"),
        img_alt: "img-6.png",
        title: "Blive Printed Men Round Neck",
        category: "Fashion",
        stock: "35",
        price: "250.00",
        discount: "0%",
        orders: "02",
        ratings: "3.8",
        publish: "12 Oct, 2021"
    }, {
        id: 7,
        img: require("@/assets/images/products/img-7.png"),
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }, {
        id: 8,
        img: require("@/assets/images/products/img-8.png"),
        img_alt: "img-8.png",
        title: "Full Sleeve Solid Men Sweatshirt/Hoody",
        category: "Fashion",
        stock: "20",
        price: "260.00",
        discount: "12%",
        orders: "20",
        ratings: "4.1",
        publish: "21 Jun, 2021"
    }, {
        id: 9,
        img: require("@/assets/images/products/img-10.png"),
        img_alt: "img-10.png",
        title: "Men's Round Neck Half Sleeves Solid T-Shirt",
        category: "Fashion",
        stock: "21",
        price: "160.00",
        discount: "0%",
        orders: "08",
        ratings: "4.4",
        publish: "15 Jan, 2021"
    }, {
        id: 10,
        img: require("@/assets/images/products/img-9.png"),
        img_alt: "img-9.png",
        title: "Flip-Flops and House Slippers",
        category: "Footwear",
        stock: "30",
        price: "150.00",
        discount: "0%",
        orders: "10",
        ratings: "4.2",
        publish: "06 Jan, 2023"
    }, {
        id: 11,
        img: require("@/assets/images/products/img-11.png"),
        img_alt: "img-11.png",
        title: "Jeans blue men boxer",
        category: "Fashion",
        stock: "50",
        price: "97.99",
        discount: "25%",
        orders: "51",
        ratings: "3.9",
        publish: "12 Oct, 2021"
    }, {
        id: 12,
        img: require("@/assets/images/products/img-12.png"),
        img_alt: "img-12.png",
        title: "MAG back to the future shoes",
        category: "Footwear",
        stock: "06",
        price: "274.99",
        discount: "0%",
        orders: "06",
        ratings: "4.2",
        publish: "06 Jan, 2021"
    }, {
        id: 13,
        img: require("@/assets/images/products/img-4.png"),
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 14,
        img: require("@/assets/images/products/img-7.png"),
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }
];

const customers = [
    {
        id: "1",
        img: require("@/assets/images/users/avatar-2.jpg"),
        name: "Javon Pouros",
        email: "rashawn@steex.com",
        phone: "+(253) 12345 67890",
        create_date: "28 Feb, 2023",
        status: "Unactive"
    }, {
        id: "2",
        img: require("@/assets/images/users/avatar-3.jpg"),
        name: "Willy Gulgowski",
        email: "gulgowski@steex.com",
        phone: "+(152) 32165 49873",
        create_date: "20 Feb, 2023",
        status: "Block"
    }, {
        id: "3",
        img: require("@/assets/images/users/avatar-4.jpg"),
        name: "Verona Mosciski",
        email: "vmosciski@steex.com",
        phone: "+(231) 14562 32165",
        create_date: "16 Feb, 2023",
        status: "Active"
    }, {
        id: "4",
        img: require("@/assets/images/users/avatar-5.jpg"),
        name: "Vinnie Huels",
        email: "vinnie@steex.com",
        phone: "+(44) 98765 32104",
        create_date: "23 Jan, 2023",
        status: "Active"
    }, {
        id: "5",
        img: require("@/assets/images/users/avatar-6.jpg"),
        name: "Deondre Huel",
        email: "rashawn@steex.com",
        phone: "+(251) 25874 13690",
        create_date: "17 Jan, 2023",
        status: "Active"
    }, {
        id: "6",
        img: require("@/assets/images/users/avatar-7.jpg"),
        name: "Nelson Schaden",
        email: "nelson@steex.com",
        phone: "+(92) 67890 12345",
        create_date: "02 Feb, 2023",
        status: "Unactive"
    }, {
        id: "7",
        img: require("@/assets/images/users/avatar-8.jpg"),
        name: "Juanita Price",
        email: "juanitaprice@steex.com",
        phone: "+(62) 35791 15935",
        create_date: "29 Dec, 2022",
        status: "Block"
    }, {
        id: "8",
        img: require("@/assets/images/users/avatar-9.jpg"),
        name: "Mac Gyver",
        email: "macGyver@steex.com",
        phone: "+(251) 15935 35795",
        create_date: "24 Dec, 2022",
        status: "Active"
    }, {
        id: "9",
        img: require("@/assets/images/users/avatar-10.jpg"),
        name: "Zachary Stokes",
        email: "zacharystokes@steex.com",
        phone: "+(532) 35795 15935",
        create_date: "14 Dec, 2022",
        status: "Active"
    }, {
        id: "10",
        img: require("@/assets/images/users/user-dummy-img.jpg"),
        name: "Sarai Schmidt",
        email: "sschmidt@steex.com",
        phone: "+(120) 15935 32165",
        create_date: "08 Dec, 2022",
        status: "Block"
    }, {
        id: "11",
        img: require("@/assets/images/users/avatar-1.jpg"),
        name: "Ubaldo Bartell",
        email: "ubaldobartell@steex.com",
        phone: "+(105) 93521 23165",
        create_date: "01 Dec, 2022",
        status: "Unactive"
    }, {
        id: "12",
        img: require("@/assets/images/users/avatar-2.jpg"),
        name: "Soledad Vandervort",
        email: "vandervort@steex.com",
        phone: "+(210) 95162 15935",
        create_date: "24 Nov, 2022",
        status: "Active"
    }, {
        id: "13",
        img: require("@/assets/images/users/avatar-3.jpg"),
        name: "Marcelino Smith",
        email: "marcelino@steex.com",
        phone: "+(512) 34682 17935",
        create_date: "21 Nov, 2022",
        status: "Active"
    }
];

const orders = [
    {
        id: "1",
        order_date: "22 Feb, 2023",
        delivery_date: "02 Mar, 2023",
        product: "Cotton collar tshirts for men",
        customer: "Deondre Fahey",
        img: require("@/assets/images/companies/img-6.png"),
        name: "Ratke Group",
        pay_method: "COD",
        price: "$109.00",
        ratings: "-",
        delivery_status: "New"
    }, {
        id: "2",
        order_date: "14 Feb, 2023",
        delivery_date: "27 Feb, 2023",
        product: "Like style travel black handbag",
        customer: "Warren Anderson",
        img: require("@/assets/images/companies/img-1.png"),
        name: "Zibra Fashion",
        pay_method: "Mastercard",
        price: "$149.00",
        ratings: "4.5",
        delivery_status: "Pending"
    }, {
        id: "3",
        order_date: "30 Jan, 2023",
        delivery_date: "10 Feb, 2023",
        product: "Fossil gen 5E smart watch",
        customer: "Dianna Bogan",
        img: require("@/assets/images/companies/img-2.png"),
        name: "Brand Infosys",
        pay_method: "Visa",
        price: "$215.00",
        ratings: "4.9",
        delivery_status: "Out of Delivered"
    }, {
        id: "4",
        order_date: "25 Jan, 2023",
        delivery_date: "03 Feb, 2023",
        product: "Super bass blutooth wireless headphone",
        customer: "Josefa Weissnat",
        img: require("@/assets/images/companies/img-3.png"),
        name: "Brand Infosys",
        pay_method: "Mastercard",
        price: "$199.00",
        ratings: "4.3",
        delivery_status: "Shipping"
    }, {
        id: "5",
        order_date: "19 Jan, 2023",
        delivery_date: "27 Jan, 2023",
        product: "Willage volleyball ball size 4",
        customer: "Ophelia Steuber",
        img: require("@/assets/images/companies/img-4.png"),
        name: "Themesbrand",
        pay_method: "COD",
        price: "$330.00",
        ratings: "4.7",
        delivery_status: "Delivered"
    }, {
        id: "6",
        order_date: "16 Jan, 2023",
        delivery_date: "19 Jan, 2023",
        product: "Branded T-Shirts",
        customer: "Federico Hand",
        img: require("@/assets/images/companies/img-5.png"),
        name: "Zibra Fashion",
        pay_method: "Visa",
        price: "$745.11",
        ratings: "4.6",
        delivery_status: "Pending"
    }, {
        id: "7",
        order_date: "01 Jan, 2023",
        delivery_date: "11 Jan, 2023",
        product: "Flip-Flops and house slippers",
        customer: "Uriel King",
        img: require("@/assets/images/companies/img-1.png"),
        name: "Zibra Fashion",
        pay_method: "Mastercard",
        price: "$99.99",
        ratings: "4.9",
        delivery_status: "New"
    }, {
        id: "8",
        order_date: "27 Dec, 2022",
        delivery_date: "02 Jan, 2023",
        product: "Flip-Flops and house slippers",
        customer: "Buck Roberts",
        img: require("@/assets/images/companies/img-6.png"),
        name: "Ratke Group",
        pay_method: "Mastercard",
        price: "$150.00",
        ratings: "4.6",
        delivery_status: "Pending"
    }, {
        id: "9",
        order_date: "22 Dec, 2022",
        delivery_date: "28 Dec, 2022",
        product: "Jeans blue men boxer",
        customer: "Axel Kozey",
        img: require("@/assets/images/companies/img-4.png"),
        name: "Themesbrand",
        pay_method: "Visa",
        price: "$136.14",
        ratings: "4.6",
        delivery_status: "Pending"
    }, {
        id: "10",
        order_date: "21 Dec, 2022",
        delivery_date: "29 Dec, 2022",
        product: "MAG back to the future shoes",
        customer: "Dallin Schowalter",
        img: require("@/assets/images/companies/img-3.png"),
        name: "Brand Infosys",
        pay_method: "COD",
        price: "$179.99",
        ratings: "4.7",
        delivery_status: "Delivered"
    }, {
        id: "11",
        order_date: "25 Jan, 2023",
        delivery_date: "03 Feb, 2023",
        product: "Super bass blutooth wireless headphone",
        customer: "Josefa Weissnat",
        img: require("@/assets/images/companies/img-3.png"),
        name: "Brand Infosys",
        pay_method: "Mastercard",
        price: "$199.00",
        ratings: "4.3",
        delivery_status: "Shipping"
    }, {
        id: "12",
        order_date: "01 Jan, 2023",
        delivery_date: "11 Jan, 2023",
        product: "Flip-Flops and house slippers",
        customer: "Uriel King",
        img: require("@/assets/images/companies/img-1.png"),
        name: "Zibra Fashion",
        pay_method: "Mastercard",
        price: "$99.99",
        ratings: "4.9",
        delivery_status: "New"
    }
];

const sellerOverview = [
    {
        id: 1,
        img: require("@/assets/images/products/img-1.png"),
        img_alt: "img-1.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "$215.00",
        discount: "25%",
        orders: "06",
        ratings: "4.9",
        publish: "12 Oct, 2022"
    }, {
        id: 2,
        img: require("@/assets/images/products/img-2.png"),
        img_alt: "img-2.png",
        title: "Like style travel black handbag",
        category: "Luggage",
        stock: "06",
        price: "$160.00",
        discount: "0%",
        orders: "02",
        ratings: "4.3",
        publish: "06 Jan, 2023"
    }, {
        id: 3,
        img: require("@/assets/images/products/img-3.png"),
        img_alt: "img-3.png",
        title: "Fossil Gen 5E Smart Watch",
        category: "Watches",
        stock: "19",
        price: "$120.00",
        discount: "42%",
        orders: "21",
        ratings: "4.3",
        publish: "26 Mar, 2021"
    }, {
        id: 4,
        img: require("@/assets/images/products/img-4.png"),
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "$180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 5,
        img: require("@/assets/images/products/img-5.png"),
        img_alt: "img-5.png",
        title: "Willage Volleyball Ball Size 4",
        category: "Sports",
        stock: "30",
        price: "$99.00",
        discount: "10%",
        orders: "21",
        ratings: "4.0",
        publish: "30 Mar, 2021"
    }, {
        id: 6,
        img: require("@/assets/images/products/img-6.png"),
        img_alt: "img-6.png",
        title: "Blive Printed Men Round Neck",
        category: "Fashion",
        stock: "35",
        price: "$250.00",
        discount: "0%",
        orders: "02",
        ratings: "3.8",
        publish: "12 Oct, 2021"
    }, {
        id: 7,
        img: require("@/assets/images/products/img-7.png"),
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "$180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }, {
        id: 8,
        img: require("@/assets/images/products/img-8.png"),
        img_alt: "img-8.png",
        title: "Full Sleeve Solid Men Sweatshirt/Hoody",
        category: "Fashion",
        stock: "20",
        price: "$260.00",
        discount: "12%",
        orders: "20",
        ratings: "4.1",
        publish: "21 Jun, 2021"
    }, {
        id: 9,
        img: require("@/assets/images/products/img-10.png"),
        img_alt: "img-10.png",
        title: "Men's Round Neck Half Sleeves Solid T-Shirt",
        category: "Fashion",
        stock: "21",
        price: "$160.00",
        discount: "0%",
        orders: "08",
        ratings: "4.4",
        publish: "15 Jan, 2021"
    }, {
        id: 10,
        img: require("@/assets/images/products/img-9.png"),
        img_alt: "img-9.png",
        title: "Flip-Flops and House Slippers",
        category: "Footwear",
        stock: "30",
        price: "$150.00",
        discount: "0%",
        orders: "10",
        ratings: "4.2",
        publish: "06 Jan, 2023"
    }, {
        id: 11,
        img: require("@/assets/images/products/img-11.png"),
        img_alt: "img-11.png",
        title: "Jeans blue men boxer",
        category: "Fashion",
        stock: "50",
        price: "$97.99",
        discount: "25%",
        orders: "51",
        ratings: "3.9",
        publish: "12 Oct, 2021"
    }, {
        id: 12,
        img: require("@/assets/images/products/img-12.png"),
        img_alt: "img-12.png",
        title: "MAG back to the future shoes",
        category: "Footwear",
        stock: "06",
        price: "$274.99",
        discount: "0%",
        orders: "06",
        ratings: "4.2",
        publish: "06 Jan, 2021"
    }, {
        id: 13,
        img: require("@/assets/images/products/img-4.png"),
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "$180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 14,
        img: require("@/assets/images/products/img-7.png"),
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "$180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }
];

const sellers = [
    {
        id: 1,
        img: require("@/assets/images/companies/img-7.png"),
        img_alt: "img-7.png",
        name: "Pich Hub",
        seller: "Lenna Labadie",
        email: "lennalabadie@dayrep.com",
        phone: "+(253) 12345 67890",
        stock: "451",
        revenue: "$253.32",
        chartColor: ["#ff6c6c"],
        series: [{
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
        }]
    }, {
        id: 2,
        img: require("@/assets/images/companies/img-5.png"),
        img_alt: "img-5.png",
        name: "Jorce Medicines",
        seller: "Dallin Schowalter",
        email: "dallinschowalter@rhyta.com",
        phone: "+(152) 32165 49873",
        stock: "1163",
        revenue: "$992.14",
        chartColor: ["#2dcb73"],
        series: [{
            data: [12, 14, 2, 47, 42, 15, 35, 75, 20, 67, 89],
        }]
    }, {
        id: 3,

        img: require("@/assets/images/companies/img-2.png"),
        img_alt: "img-2.png",
        name: "Rotic Fashion",
        seller: "Alvina Smitham",
        email: "alvinasmitham@dayrep.com",
        phone: "+(231) 14562 32165",
        stock: "1023",
        revenue: "$954.08",
        chartColor: ["#2dcb73"],
        series: [{
            data: [45, 20, 8, 42, 30, 5, 35, 79, 22, 54, 64],
        }]
    }, {
        id: 4,

        img: require("@/assets/images/companies/img-6.png"),
        img_alt: "img-6.png",
        name: "Terry & Jerry",
        seller: "Dallin Schowalter",
        email: "dallinschowalter@jourrapide.com",
        phone: "+(44) 98765 32104",
        stock: "357",
        revenue: "$346.35",
        chartColor: ["#2dcb73"],
        series: [{
            data: [26, 15, 48, 12, 47, 19, 35, 19, 85, 68, 50],
        }]
    }, {
        id: 5,

        img: require("@/assets/images/companies/img-3.png"),
        img_alt: "img-3.png",
        name: "Themesbrand",
        seller: "Kenyon Nienow",
        email: "kenyonnienow@dayrep.com",
        phone: "+(251) 25874 13690",
        stock: "841",
        revenue: "$654.78",
        chartColor: ["#ff6c6c"],
        series: [{
            data: [60, 67, 12, 49, 6, 78, 63, 51, 33, 8, 16],
        }]
    }, {
        id: 6,

        img: require("@/assets/images/companies/img-2.png"),
        img_alt: "img-2.png",
        name: "Brand Infosys",
        seller: "Alexandrea Jacobi",
        email: "alexandreajacobi@jourrapide.com",
        phone: "+(92) 67890 12345",
        stock: "395",
        revenue: "$153.84",
        chartColor: ["#2dcb73"],
        series: [{
            data: [78, 63, 51, 33, 8, 16, 60, 67, 12, 49],
        }]
    }, {
        id: 7,

        img: require("@/assets/images/companies/img-7.png"),
        img_alt: "img-7.png",
        name: "Pich Fashion",
        seller: "Jaylon McClure",
        email: "jaylonmcclure@armyspy.com",
        phone: "+(62) 35791 15935",
        stock: "792",
        revenue: "$357.44",
        chartColor: ["#2dcb73"],
        series: [{
            data: [15, 35, 75, 20, 67, 8, 42, 30, 5, 35],
        }]
    }, {
        id: 8,

        img: require("@/assets/images/companies/img-1.png"),
        img_alt: "img-1.png",
        name: "Zibra Fashion",
        seller: "Lenna Labadie",
        email: "lennalabadie@dayrep.com",
        phone: "+(120) 15935 32165",
        stock: "451",
        revenue: "$253.32",
        chartColor: ["#ff6c6c"],
        series: [{
            data: [45, 32, 68, 55, 36, 10, 48, 25, 74, 54],
        }]
    }
];

const productsGrid = [
    {
        id: 1,
        img: require("@/assets/images/products/img-1.png"),
        img_alt: "img-1.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "215.00",
        discount: "25%",
        orders: "06",
        ratings: "4.9",
        publish: "12 Oct, 2022"
    }, {
        id: 2,
        img: require("@/assets/images/products/img-2.png"),
        img_alt: "img-2.png",
        title: "Like style travel black handbag",
        category: "Luggage",
        stock: "06",
        price: "160.00",
        discount: "0%",
        orders: "02",
        ratings: "4.3",
        publish: "06 Jan, 2023"
    }, {
        id: 3,
        img: require("@/assets/images/products/img-3.png"),
        img_alt: "img-3.png",
        title: "Fossil Gen 5E Smart Watch",
        category: "Watches",
        stock: "19",
        price: "120.00",
        discount: "42%",
        orders: "21",
        ratings: "4.3",
        publish: "26 Mar, 2021"
    }, {
        id: 4,
        img: require("@/assets/images/products/img-4.png"),
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 5,
        img: require("@/assets/images/products/img-5.png"),
        img_alt: "img-5.png",
        title: "Willage Volleyball Ball Size 4",
        category: "Sports",
        stock: "30",
        price: "99.00",
        discount: "10%",
        orders: "21",
        ratings: "4.0",
        publish: "30 Mar, 2021"
    }, {
        id: 6,
        img: require("@/assets/images/products/img-6.png"),
        img_alt: "img-6.png",
        title: "Blive Printed Men Round Neck",
        category: "Fashion",
        stock: "35",
        price: "250.00",
        discount: "0%",
        orders: "02",
        ratings: "3.8",
        publish: "12 Oct, 2021"
    }, {
        id: 7,
        img: require("@/assets/images/products/img-7.png"),
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }, {
        id: 8,
        img: require("@/assets/images/products/img-8.png"),
        img_alt: "img-8.png",
        title: "Full Sleeve Solid Men Sweatshirt/Hoody",
        category: "Fashion",
        stock: "20",
        price: "260.00",
        discount: "12%",
        orders: "20",
        ratings: "4.1",
        publish: "21 Jun, 2021"
    }, {
        id: 9,
        img: require("@/assets/images/products/img-10.png"),
        img_alt: "img-10.png",
        title: "Men's Round Neck Half Sleeves Solid T-Shirt",
        category: "Fashion",
        stock: "21",
        price: "160.00",
        discount: "0%",
        orders: "08",
        ratings: "4.4",
        publish: "15 Jan, 2021"
    }, {
        id: 10,
        img: require("@/assets/images/products/img-9.png"),
        img_alt: "img-9.png",
        title: "Flip-Flops and House Slippers",
        category: "Footwear",
        stock: "30",
        price: "150.00",
        discount: "0%",
        orders: "10",
        ratings: "4.2",
        publish: "06 Jan, 2023"
    }, {
        id: 11,
        img: require("@/assets/images/products/img-11.png"),
        img_alt: "img-11.png",
        title: "Jeans blue men boxer",
        category: "Fashion",
        stock: "50",
        price: "97.99",
        discount: "25%",
        orders: "51",
        ratings: "3.9",
        publish: "12 Oct, 2021"
    }, {
        id: 12,
        img: require("@/assets/images/products/img-12.png"),
        img_alt: "img-12.png",
        title: "MAG back to the future shoes",
        category: "Footwear",
        stock: "06",
        price: "274.99",
        discount: "0%",
        orders: "06",
        ratings: "4.2",
        publish: "06 Jan, 2021"
    }, {
        id: 13,
        img: require("@/assets/images/products/img-4.png"),
        img_alt: "img-4.png",
        title: "Super Bass Blutooth wireless headphone",
        category: "Headphones",
        stock: "23",
        price: "180.00",
        discount: "0%",
        orders: "19",
        ratings: "4.1",
        publish: "19 Apr, 2021"
    }, {
        id: 14,
        img: require("@/assets/images/products/img-7.png"),
        img_alt: "img-7.png",
        title: "Cotton collar tshirts for men",
        category: "Fashion",
        stock: "12",
        price: "180.00",
        discount: "0%",
        orders: "10",
        ratings: "4.0",
        publish: "15 May, 2021"
    }
];

const reviews = [
    {
        id: 1,
        rating: 4.5,
        name: "Jansh Brown",
        date: "08 Mar, 2023",
        title: 'Product Quality',
        decs: 'This is an incredible framework worth so much in the right hands! Nowhere else are you going to get so much flexibility and great code for a few dollars. Highly recommend purchasing today! Like right now! "',
        img: [
            { id: 1, priview: require("@/assets/images/products/img-1.png"), formattedSize: "7.87 KB", path: "img-1.png", size: '6000' },
            { id: 2, priview: require("@/assets/images/products/img-6.png"), formattedSize: "5.87 KB", path: "img-6.png", size: '3000' },
            { id: 3, priview: require("@/assets/images/products/img-7.png"), formattedSize: "7.00 KB", path: "img-7.png", size: '6800' },
        ]
    },
    {
        id: 2,
        rating: 4.0,
        name: "Camilla Harber",
        date: "03 Mar, 2023",
        title: 'Product Quality',
        decs: " We have used your other templates as well and seems it's amazing with the design and code quality. Wish you best for the future updates. Keep updated you will be #1 in near future. ",
    },
    {
        id: 3,
        rating: 5.0,
        name: "Kaylin Bechtelar",
        date: "28 Feb, 2023",
        title: 'Design Quality',
        decs: " This template is incredibly comprehensive considering how new and modern it is! I bought 8 different admin templates recently and all of them had some good features, but were always missing stuff that you only realise after purchase. I've migrated my site to this template and have yet to find anything missing or lacking! Plus, the online documentation is really easy to use and access and very comprehensive! Well done guys and thank you! ",
    },
    {
        id: 4,
        rating: 3.5,
        name: "Dedrick Shields",
        date: "24 Feb, 2023",
        title: 'Feature Availability',
        decs: " Hello everyone, I would like to suggest here two contents that you could create. Course pages and blog pages. In them you could insert the listing and management of courses and listing and management of blog. The theme is perfect, one of the best purchases I've ever made. ",
    },
];


export { products, customers, orders, sellerOverview, sellers, productsGrid, reviews }; 