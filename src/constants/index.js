export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
 
];

export const myProjects = [
  {
    title: 'AlgoLab - Learn ML Algorithms Visually',
    desc: 'AlgoLab is an open-source educational platform that transforms the way machine learning is learned. By focusing on visual and interactive explanations, it helps learners intuitively understand how ML algorithms work, bridging the gap between theory and practical understanding.',
    subdesc:
      'Built as an open-source learning project using Python, scikit-learn, pandas, numpy, and visualization libraries like matplotlib and seaborn, AlgoLab is designed to make machine learning concepts accessible, interactive, and beginner-friendly for anyone who wants to learn ML visually.',
    href: 'https://github.com/manasvi-0/AlgoLab.git',
    texture: 'public/textures/project/algolab.mov',
    logo: '/assets/logo1.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/icons/python.png',
      },
      {
        id: 2,
        name: 'GitHub',
        path: '/icons/git.png',
      },
      {
        id: 3,
        name: 'Pandas',
        path: '/icons/pandas.png',
      },
      {
        id: 4,
        name: 'Numpy',
        path: '/icons/numpy.png',
      },
    ],
  },
  {
    title: 'Book-Recommender - Personalized Book Recommendation System',
    desc: 'Book-Recommender is an open-source recommendation system that suggests personalized book recommendations based on user ratings and interaction history. It provides an interactive way for readers to discover new books tailored to their preferences using real-world dataset analysis and recommendation logic.',
    subdesc:
      'Built as a machine learning-powered recommendation engine using Python and data science tools, Book-Recommender leverages algorithms like collaborative filtering and similarity scoring to deliver book suggestions. The project includes a web interface and preprocessed datasets, making it easy to explore and extend for enhanced recommendation experiences.',
    href: 'https://github.com/manasvi-0/Book-Recommender.git',
    texture: '/textures/project/book.mov',
    logo: '/assets/logo2.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/icons/python.png',
      },
      {
        id: 2,
        name: 'Flask',
        path: '/icons/flask.png',
      },
      {
        id: 3,
        name: 'Jupyter Notebook',
        path: '/icons/jupyter.png',
      },
      {
        id: 4,
        name: 'Pandas',
        path: '/icons/pandas.png',
      },
    ],
  },
  {
    title: 'DoctorAI - Health Management System',
    desc: 'DoctorAi is an AI-driven healthcare assistant that leverages natural language processing to provide users with intelligent medical guidance. It helps users understand symptoms, offers context-aware health insights, and acts as a conversational medical support interface—bringing the power of AI to everyday health queries.',
    subdesc:
      'Built as an intelligent AI healthcare companion using cutting-edge natural language processing models (e.g., OpenAI GPT), DoctorAi is designed to interpret user health prompts and deliver meaningful responses. With a focus on accessibility and real-time interaction, this project showcases practical applications of AI in the medical assistance domain.',
    href: 'https://github.com/manasvi-0/DoctorAi.git',
    texture: '/textures/project/doctorAi.mov',
    logo: '/assets/logo3.png',
    logoStyle: {
       backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Jupyter Notebook',
        path: '/icons/jupyter.png',
      },
      {
        id: 2,
        name: 'Flask',
        path: '/icons/flask.png',
      },
      {
        id: 3,
        name: 'HTML',
        path: '/icons/html.png',
      },
      {
        id: 4,
        name: 'Gemini AI',
        path: '/icons/gemini.png',
      },
    ],
  },
  {
    title: 'Stock Market Time Series Forecasting',
    desc: 'Stock Market Time Series Forecasting is a data-driven analytics platform that enables users to analyze historical stock prices and forecast future market trends. It provides a unified framework for comparing statistical and deep learning models, visualizing time series patterns, and evaluating prediction accuracy to support informed financial decision-making.',
    subdesc:
      'This project analyzes and forecasts stock market trends using time series analysis techniques. We explore statistical models like ARIMA, SARIMA, and Facebook Prophet, as well as a deep learning-based LSTM model to make short- and long-term stock price predictions.',
    href: 'https://github.com/manasvi-0/stock-market-time-series-forecasting.git',
    texture: '/textures/project/stock.mov',
    logo: '/icons/stock.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/icons/python.png',
      },
      {
        id: 2,
        name: 'Plotly',
        path: '/icons/plotly.png',
      },
      {
        id: 3,
        name: 'Seaborn',
        path: '/icons/seaborn.png',
      },
      {
        id: 4,
        name: 'Streamlit',
        path: '/icons/streamlit.png',
      },
    ],
  },
  {
    title: 'Customer Churn Prediction App',
    desc: 'Customer Churn Prediction App is an interactive web application that helps businesses predict which customers are likely to churn (stop using the service) and provides actionable insights for improving customer retention. It offers a user-friendly interface where users can input customer attributes and instantly receive a churn likelihood prediction powered by a trained machine learning model',
    subdesc:
      'This project is a web-based application for predicting customer churn using a pre-trained Logistic Regression model. It helps businesses identify customers who are likely to leave and provides actionable tips for churn prevention and customer retention.',
    href: 'https://github.com/manasvi-0/churn_pred.git',
    texture: '/textures/project/churn.mov',
    logo: '/assets/churn.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Streamlit',
        path: '/icons/streamlit.png',
      },
      {
        id: 2,
        name: 'Python',
        path: '/icons/python.png',
      },
      {
        id: 3,
        name: 'Pandas',
        path: '/icons/pandas.png',
      },
      {
        id: 4,
        name: 'Numpy',
        path: '/icons/numpy.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? [3,3,3] : isMobile ? [4,4,4] : [6,6,6],
    deskPosition: isSmall ? [-0.1, 1.7, -8.9] : isMobile ? [-0.1, 1.7, -8.9] : isTablet ? [0.1,-2.5,7.1] : [0.1,-9.5,0.1],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};


// Re-export carousel data so imports from "../constants" can access STRIP_* and sizing
export * from "./carouselData";
