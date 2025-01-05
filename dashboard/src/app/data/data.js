import home from "../../../public/icons/home.png";
import category from "../../../public/icons/category.png";
import candle from "../../../public/icons/candle.png";
import people from "../../../public/icons/people.png";
import setting from "../../../public/icons/setting.png";
import properties from "../../../public/icons/properties.png";
import book from "../../../public/icons/book.png";

export const links = [
  {
      id: 1,
      title: "Dashboard",
      icon: home,
      path: "/"
  },
  {
      id: 2,
      title: "Properties",
      icon: properties,
      path: "/properties"
  }, {
      id: 3,
      title: "User Management",
      icon: people,
      path: "/user-management"
  },
  {
      id: 4,
      title: "Bookings",
      icon: category,
      path: "/bookings"
  },
  {
      id: 5,
      title: "Dispute Centre",
      icon: candle,
      path: "/dispute-centre"
  },
  {
      id: 6,
      title: "Settings",
      icon: setting,
      path: "/settings"
  },
];

export const privacyPolicy = {
  id: 1,
  title: "Privacy Policy",
  icon: book,
  path: "/privacy-policy"
}

export const languages = [
  {
    id: 1,
    name: "English",
    code: "EN"
  }, {
    id: 2,
    name: "Chinese",
    code: "CH"
  }, {
    id: 3,
    name: "French",
    code: "FR"
  }, {
    id: 4,
    name: "Russian",
    code: "RU"
  }
]

export const currencies = [
  {
    id: 1,
    name: "USD",
    code: "USD"
  }, {
    id: 2,
    name: "EUR",
    code: "EUR"
  }, {
    id: 3,
    name: "JPY",
    code: "JPY"
  }, {
    id: 4,
    name: "AUD",
    code: "AUD"
  }
]

export const durations = [
  "Week", "Month", "Year"
]

export const stats = {
  activeUsers: {
    Week: {
      value: 360,
      growthStatus: "Up",
      growthRate: "30.5326%",
    },
    Month: {
      value: 3632,
      growthStatus: "Up",
      growthRate: "30.5326%",
    },
    Year: {
      value: 1594,
      growthStatus: "Down",
      growthRate: "-15.6231%",
    },
  },
  totalProperties: {
    Week: {
      value: "2k+",
      growthStatus: "Up",
      growthRate: "25.6521%",
    },
    Month: {
      value: "10k+",
      growthStatus: "Down",
      growthRate: "18.4632%",
    },
    Year: {
      value: "100k+",
      growthStatus: "Up",
      growthRate: "-8.3125%",
    },
  },
  totalRevenue: {
    Week: {
      value: "$200k",
      growthStatus: "Up",
      growthRate: "12.4523%",
    },
    Month: {
      value: "$900k",
      growthStatus: "Up",
      growthRate: "22.1934%",
    },
    Year: {
      value: "$8M",
      growthStatus: "Down",
      growthRate: "-7.3412%",
    },
  },
};

export const bookings = [
  {
    name: "Olivia Daddario",
    status: "Completed",
    price: "$633.00",
    capacity: "60 (Seated)",
    duration: {
      startDate: "24 May 2024",
      endDate: "28 May 2024"
    }
  },
  {
    name: "Jack Paul",
    status: "In Progress",
    price: "$231.00",
    capacity: "60 (Seated)",
    duration: {
      startDate: "24 May 2024",
      endDate: "28 May 2024"
    }
  },
  {
    name: "Mr Alexander",
    status: "Cancelled",
    price: "$260.00",
    capacity: "60 (Seated)",
    duration: {
      startDate: "24 May 2024",
      endDate: "28 May 2024"
    }
  },
  {
    name: "Arnold Archer",
    status: "Completed",
    price: "$900.00",
    capacity: "60 (Seated)",
    duration: {
      startDate: "24 May 2024",
      endDate: "28 May 2024"
    }
  }, {
    name: "Arnold Alexander",
    status: "Cancelled",
    price: "$650.00",
    capacity: "60 (Seated)",
    duration: {
      startDate: "24 May 2024",
      endDate: "28 May 2024"
    }
  },
  {
    name: "Jack Paul",
    status: "In Progress",
    price: "$231.00",
    capacity: "60 (Seated)",
    duration: {
      startDate: "24 May 2024",
      endDate: "28 May 2024"
    }
  }, {
    name: "Alexander Paul",
    status: "Completed",
    price: "$299.00",
    capacity: "60 (Seated)",
    duration: {
      startDate: "24 May 2024",
      endDate: "28 May 2024"
    }
  },
  {
    name: "Mr Alexander",
    status: "Cancelled",
    price: "$260.00",
    capacity: "60 (Seated)",
    duration: {
      startDate: "24 May 2024",
      endDate: "28 May 2024"
    }
  }, {
    name: "Mr Paul",
    status: "In Progress",
    price: "$260.00",
    capacity: "60 (Seated)",
    duration: {
      startDate: "24 May 2024",
      endDate: "28 May 2024"
    }
  },

];

export const table1 = [
  "name",
  "Status",
  "Price",
  "Capacity",
  "Duration",
  "Action"
]

export const table2 = [
  "Name",
  "Company",
  "Join Date",
  "Email",
  "Action"
]

export const registrations = [
  {
    name: "Mr Paul",
    company: "Guest",
    joinDate: "Jan 13, 2022",
    email: "Userefandex1234@gmail.com"
  }, {
    name: "Jack Arnold",
    company: "Host",
    joinDate: "Jan 13, 2022",
    email: "Userefandex1234@gmail.com"
  }, {
    name: "Mr Arnold",
    company: "Guest",
    joinDate: "Jan 13, 2022",
    email: "Userefandex1234@gmail.com"
  }, {
    name: "Alexander",
    company: "Host",
    joinDate: "Jan 13, 2022",
    email: "Userefandex1234@gmail.com"
  }, {
    name: "Arnold Paul",
    company: "Guest",
    joinDate: "Jan 13, 2022",
    email: "Userefandex1234@gmail.com"
  }, {
    name: "Jack Alexander",
    company: "Host",
    joinDate: "Jan 13, 2022",
    email: "Userefandex1234@gmail.com"
  },

];

