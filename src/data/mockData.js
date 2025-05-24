import { format } from 'date-fns';

export const currentUser = {
  id: 'user-1',
  name: 'Paloma',
  role: 'Support Agent',
  avatar: 'https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain',
};

const generateTime = (minutesAgo) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - minutesAgo);
  return date;
};

export const conversations = [
  {
    id: 'conv-1',
    customer: {
      id: 'customer-1',
      name: 'Paloma',
      company: 'Leetcode',
      avatar: 'https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain',
    },
    subject: 'I purchased a product from your store in November as a Christmas gift for a family member, but it hasn’t arrived yet. Could you provide an update on the shipping status?',
    snippet: 'Hey! I have a issue...',
    unread: false,
    priority: 'medium',
    status: 'open',
    lastMessage: generateTime(45),
    tags: ['returns', 'refund'],
    messages: [
      {
        id: 'msg-1',
        sender: 'customer',
        content: 'I purchased a product from your store in November as a Christmas gift for a family member, but it hasn’t arrived yet. Could you provide an update on the shipping status?',
        timestamp: generateTime(60),
        status: 'delivered',
      },
      {
        id: 'msg-2',
        sender: 'agent',
        content: 'Let me just look into this for you, Luis.',
        timestamp: generateTime(55),
        status: 'seen',
        agentId: 'user-1',
      },
      {
        id: 'msg-3',
        sender: 'ai',
        content: 'Hi, I\'m Fin AI Copilot\nAsk me anything about this conversation.',
        timestamp: generateTime(54),
      },
    ],
  },
  {
    id: 'conv-2',
    customer: {
      id: 'customer-2',
      name: 'John Doe',
      company: 'Apple',
      avatar: 'https://wallpaperaccess.com/full/2562964.jpg',
    },
    subject: 'Order delay',
    snippet: 'Hi there, I have a problem realted to my order...',
    unread: false,
    priority: 'medium',
    status: 'open',
    lastMessage: generateTime(30),
    tags: ['order', 'shipping'],
    messages: [
      {
        id: 'msg-1',
        sender: 'customer',
        content: 'Hi there, I have a question about my order #12345. It was supposed to arrive yesterday but I haven\'t received it yet. Can you help me track it?',
        timestamp: generateTime(35),
        status: 'delivered',
      },
    ],
  },
  {
    id: 'conv-5',
    customer: {
      id: 'customer-5',
      name: 'Monika',
      company: 'SBI Bank',
      avatar: 'https://wallpaperaccess.com/full/2299703.jpg',
    },
    subject: 'Account upgrade',
    snippet: 'Hey there, I\'m here to...',
    unread: false,
    priority: 'low',
    status: 'open',
    lastMessage: generateTime(45),
    tags: ['account', 'upgrade'],
    messages: [
      {
        id: 'msg-1',
        sender: 'customer',
        content: 'Hey there, I\'m here to inquire about upgrading our account to the enterprise plan. What are the steps involved?',
        timestamp: generateTime(70),
        status: 'delivered',
      },
    ],
  },
  {
    id: 'conv-3',
    customer: {
      id: 'customer-3',
      name: 'Lead from London',
      company: 'Meta',
      avatar: 'https://th.bing.com/th/id/OIP.osA363r88emYJVqGwCIrPwHaLH?rs=1&pid=ImgDetMain',
    },
    subject: 'Product inquiry',
    snippet: 'Good morning, let me know...',
    unread: false,
    priority: 'medium',
    status: 'open',
    lastMessage: generateTime(45),
    tags: ['sales', 'inquiry'],
    messages: [
      {
        id: 'msg-1',
        sender: 'customer',
        content: 'Good morning, I\'m interested in your premium package. Could you provide more details about the features included?',
        timestamp: generateTime(50),
        status: 'delivered',
      },
    ],
  },
  {
    id: 'conv-4',
    customer: {
      id: 'customer-4',
      name: 'API problems ',
      company: 'Small Crafts',
      avatar: '',
    },
    subject: 'Bug report',
    snippet: 'Bug report',
    unread: false,
    priority: 'high',
    status: 'open',
    lastMessage: generateTime(45),
    tags: ['technical', 'bug'],
    messages: [
      {
        id: 'msg-1',
        sender: 'customer',
        content: 'We\'re experiencing issues with the booking API. The endpoint /api/v1/bookings is returning a 500 error intermittently.',
        timestamp: generateTime(65),
        status: 'delivered',
      },
    ],
  },
  {
    id: 'conv-5',
    customer: {
      id: 'customer-5',
      name: 'Radhika',
      company: 'JTG',
      avatar: 'https://i.pinimg.com/originals/17/a5/43/17a5432757cc2f2505ab10807eaae034.jpg',
    },
    subject: 'Account upgrade',
    snippet: 'Hey there, I\'m here to...',
    unread: false,
    priority: 'low',
    status: 'open',
    lastMessage: generateTime(45),
    tags: ['account', 'upgrade'],
    messages: [
      {
        id: 'msg-1',
        sender: 'customer',
        content: 'Hey there, I\'m here to inquire about upgrading our account to the enterprise plan. What are the steps involved?',
        timestamp: generateTime(70),
        status: 'delivered',
      },
    ],
  },
  {
    id: 'conv-2',
    customer: {
      id: 'customer-2',
      name: 'Michael',
      company: 'Adidas',
      avatar: 'https://i.pinimg.com/originals/07/6d/98/076d98265d5d25371521c16e92577b00.jpg',
    },
    subject: 'Order delay',
    snippet: 'i want to inquire about my order...',
    unread: true,
    priority: 'medium',
    status: 'open',
    lastMessage: generateTime(30),
    tags: ['order', 'shipping'],
    messages: [
      {
        id: 'msg-1',
        sender: 'customer',
        content: 'Hi there, I have a question about my order #12345. It was supposed to arrive yesterday but I haven\'t received it yet. Can you help me track it?',
        timestamp: generateTime(35),
        status: 'delivered',
      },
    ],
  },
  {
    id: 'conv-5',
    customer: {
      id: 'customer-5',
      name: 'Rachit',
      company: 'GOOGLE',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    subject: 'Account upgrade',
    snippet: ' I\'m here to...',
    unread: false,
    priority: 'high',
    status: 'open',
    lastMessage: generateTime(45),
    tags: ['account', 'upgrade'],
    messages: [
      {
        id: 'msg-1',
        sender: 'customer',
        content: ' I’d like to inquire about upgrading our account to the Enterprise plan. Could you please guide me through the steps involved?',
        timestamp: generateTime(70),
        status: 'delivered',
      },
    ],
  },
];

export const suggestions = [
  {
    id: 'sug-1',
    content: 'How do I get a refund?',
  },
  {
    id: 'sug-2',
    content: 'What\'s your return policy?',
  },
  {
    id: 'sug-3',
    content: 'How long do refunds take to process?',
  }
];

export const getAIResponse = (query) => {
  const responses = {
    refund: "Based on our policy, we offer **refunds** for unopened items within **30 days** of purchase. I can help process this refund request. Would you like me to guide you through the process?",
    return: "Our **return policy** allows returns within **30 days** of purchase. The item must be in its original condition with tags attached. Here's what you need to do:\n\n1. **Package the item** securely\n2. Include the **original receipt**\n3. Use our **return shipping label**",
    shipping: "We offer multiple shipping options:\n\n- **Standard shipping**: 3-5 business days\n- **Express shipping**: 1-2 business days\n- **Same-day delivery**: Available in select areas",
    payment: "We accept the following **payment methods**:\n\n- Credit/Debit cards\n- PayPal\n- Apple Pay\n- Google Pay",
    default: "I'm here to help! I notice you're discussing a return. Here are some key points:\n\n- **30-day return window**\n- **Original packaging** required\n- **Free return shipping**\n\nWhat specific information can I provide?"
  };

  const lowercaseQuery = query.toLowerCase();
  
  if (lowercaseQuery.includes('refund')) return responses.refund;
  if (lowercaseQuery.includes('return')) return responses.return;
  if (lowercaseQuery.includes('shipping')) return responses.shipping;
  if (lowercaseQuery.includes('payment')) return responses.payment;
  return responses.default;
};

export const formatTime = (date) => {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000 / 60); // difference in minutes
  
  if (diff < 1) {
    return 'Just now';
  } else if (diff < 60) {
    return `${diff}m`;
  } else if (diff < 24 * 60) {
    return format(date, 'h:mm a');
  } else if (diff < 48 * 60) {
    return 'Yesterday';
  } else {
    return format(date, 'MMM d');
  }
};