import { CreditCard, Wallet, Banknote, PiggyBank, Landmark, Smartphone } from "lucide-react";

export const products = [
  {
    name: "Corporate Payments",
    icon: Wallet,
    rating: 2.8,
    votes: 14,
    description: "Transfer money to accounts and external accounts",
    category: "PAYMENTS",
  },
  {
    name: "Corporate Collections",
    icon: PiggyBank,
    rating: 3.7,
    votes: 7,
    description: "Services for recurring deposit and fixed deposit",
    category: "ENQUIRY",
  },
  {
    name: "Transactions",
    icon: Smartphone,
    rating: 3.5,
    votes: 8,
    description: "Services for transactions",
    category: "MOBILE MONEY PAYMENT",
  },
  {
    name: "Account Balance",
    icon: CreditCard,
    rating: 4.0,
    votes: 10,
    description: "Enquiry service for balance check",
    category: "ENQUIRY",
  },
  {
    name: "Payment Status",
    icon: Banknote,
    rating: 4.2,
    votes: 12,
    description: "Service to check payment status",
    category: "PAYMENTS",
  }
];
