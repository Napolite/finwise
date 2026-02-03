import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

export const transactionsByMonth = [
  {
    month: "April",
    transactions: [
      {
        name: "Salary",
        date: "18:27 - April 30",
        type: "monthly",
        amount: 40000,
        icon: <MaterialIcons name="attach-money" size={26} color="#fff" />,
      },
      {
        name: "Freelance Payment",
        date: "10:15 - April 28",
        type: "one-time",
        amount: 12000,
        icon: <FontAwesome5 name="laptop-code" size={26} color="#fff" />,
      },
      {
        name: "Office Rent",
        date: "09:00 - April 25",
        type: "monthly",
        amount: -8000,
        icon: <MaterialIcons name="home-work" size={26} color="#fff" />,
      },
      {
        name: "Cloud Hosting",
        date: "14:42 - April 24",
        type: "monthly",
        amount: -3200,
        icon: <Ionicons name="cloud-outline" size={26} color="#fff" />,
      },
      {
        name: "Bonus",
        date: "16:10 - April 20",
        type: "one-time",
        amount: 5000,
        icon: <MaterialIcons name="celebration" size={26} color="#fff" />,
      },
      {
        name: "Internet Subscription",
        date: "08:30 - April 18",
        type: "monthly",
        amount: -1500,
        icon: <Ionicons name="wifi-outline" size={26} color="#fff" />,
      },
    ],
  },

  {
    month: "March",
    transactions: [
      {
        name: "Client Retainer",
        date: "11:05 - March 15",
        type: "monthly",
        amount: 18000,
        icon: <FontAwesome5 name="handshake" size={26} color="#fff" />,
      },
      {
        name: "Software Licenses",
        date: "13:50 - March 14",
        type: "monthly",
        amount: -2700,
        icon: <MaterialIcons name="apps" size={26} color="#fff" />,
      },
      {
        name: "Equipment Purchase",
        date: "17:22 - March 12",
        type: "one-time",
        amount: -9500,
        icon: <FontAwesome5 name="tools" size={26} color="#fff" />,
      },
      {
        name: "Consulting Fee",
        date: "12:40 - March 10",
        type: "one-time",
        amount: 7000,
        icon: <MaterialIcons name="support-agent" size={26} color="#fff" />,
      },
      {
        name: "Electricity Bill",
        date: "07:55 - March 8",
        type: "monthly",
        amount: -2100,
        icon: <Ionicons name="flash-outline" size={26} color="#fff" />,
      },
    ],
  },

  {
    month: "February",
    transactions: [
      {
        name: "Transport Allowance",
        date: "18:05 - February 5",
        type: "monthly",
        amount: 3000,
        icon: <Ionicons name="car-outline" size={26} color="#fff" />,
      },
      {
        name: "Tax Payment",
        date: "15:30 - February 3",
        type: "quarterly",
        amount: -6000,
        icon: (
          <FontAwesome5 name="file-invoice-dollar" size={26} color="#fff" />
        ),
      },
      {
        name: "Investment Dividend",
        date: "10:00 - February 2",
        type: "quarterly",
        amount: 4200,
        icon: <MaterialIcons name="trending-up" size={26} color="#fff" />,
      },
      {
        name: "Miscellaneous Expense",
        date: "19:10 - February 1",
        type: "one-time",
        amount: -1800,
        icon: <Ionicons name="ellipsis-horizontal" size={26} color="#fff" />,
      },
    ],
  },
];
