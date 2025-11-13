import React from "react";

const FaUsers = (props) => (
  <div
    {...props}
    className={`fa-icon ${props.className}`}
    style={{ fontSize: "24px" }}
  >
    👥
  </div>
);
const FaHandsHelping = (props) => (
  <div
    {...props}
    className={`fa-icon ${props.className}`}
    style={{ fontSize: "24px" }}
  >
    🤝
  </div>
);
const FaBullhorn = (props) => (
  <div
    {...props}
    className={`fa-icon ${props.className}`}
    style={{ fontSize: "24px" }}
  >
    📣
  </div>
);
const FaUserFriends = (props) => (
  <div
    {...props}
    className={`fa-icon ${props.className}`}
    style={{ fontSize: "24px" }}
  >
    🧑‍🤝‍🧑
  </div>
);
const FaBalanceScale = (props) => (
  <div
    {...props}
    className={`fa-icon ${props.className}`}
    style={{ fontSize: "24px" }}
  >
    ⚖️
  </div>
);
const FaCalendarAlt = (props) => (
  <div
    {...props}
    className={`fa-icon ${props.className}`}
    style={{ fontSize: "24px" }}
  >
    📅
  </div>
);
const FeatureCard = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-xl transition-shadow duration-300 bg-white hover:shadow-xl h-full">
    <div className="mb-6 p-4 rounded-xl bg-gray-100 text-blue-600 border border-gray-200">
      <Icon className="w-6 h-6" />
    </div>

    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const FEATURES = [
  {
    icon: FaUsers,
    title: "Volunteer Your Time",
    description:
      "Join our volunteers and help bring projects and events to daily life.",
  },
  {
    icon: FaHandsHelping,
    title: "Support Donation",
    description:
      "Every contribution, big or small, helps fund projects and provides who need them.",
  },
  {
    icon: FaBullhorn,
    title: "Share Awareness",
    description:
      "Share our mission on social media to inspire action and amplify voices to other.",
  },
  {
    icon: FaUserFriends,
    title: "Join Community",
    description:
      "Join some local programs and several workshops to empower communities.",
  },
  {
    icon: FaBalanceScale,
    title: "Justice Advocate",
    description:
      "Use your voice to speak up, and help drive positive change in your community.",
  },
  {
    icon: FaCalendarAlt,
    title: "Attend the Events",
    description:
      "Participate in our events to connect with others, and support initiatives.",
  },
];

const Feature = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
            Step Forward and
            <span className="relative inline-block ml-3">
              Create Lasting Change
              <span className="absolute left-0 right-0 bottom-[-10px] h-1.5 bg-green-200/50 rounded-full w-[90%] mx-auto"></span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
