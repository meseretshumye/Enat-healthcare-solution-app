import ServicesItem from "../ServicesItem/ServicesItem"; // match the component name

const servicesData = [
  {
    iconClass: "fas fa-heartbeat",
    title: "Primary Care",
    tagLine: "Your Health, Our Priority",
    description:
      "Comprehensive check-ups, screenings, and ongoing health management for a healthier life.",
  },
  {
    iconClass: "fas fa-pills",
    title: "Maternal and Child Health",
    tagLine: "Nurturing Futures Together",
    description:
      "Specialized care for mothers, infants, and children to ensure healthy beginnings and lifelong well-being.",
  },
  {
    iconClass: "fas fa-hospital-user",
    title: "Chronic Disease Management",
    tagLine: "Managing Health, Empowering Lives",
    description:
      "Support for managing conditions like diabetes, hypertension, and more for improved quality of life.",
  },
  {
    iconClass: "fa-solid fa-brain",
    title: "Mental Health Services",
    tagLine: "Balancing Minds, Promoting Wellness",
    description:
      "Counseling and support for emotional well-being to help you thrive in everyday life.",
  },
  {
    iconClass: "fas fa-wheelchair",
    title: "Community Health Initiatives",
    tagLine: "Stronger Communities, Healthier Lives",
    description:
      "Workshops and outreach programs to promote health education and awareness in our community.",
  },
  {
    iconClass: "fas fa-notes-medical",
    title: "Preventive Health Screenings",
    tagLine: "Stay Ahead of Health Issues",
    description:
      "Routine screenings and assessments to catch potential health risks early and ensure proactive care.",
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="services-section p-block-70">
      {/* Section Title */}
      <section className="section-title">
        <h2>Services</h2>
        <p>Holistic Services Offered By Enat Health Care Solutions.</p>
      </section>

      {/* Service Items */}
      <section className="service-container">
        {servicesData.map((service, index) => (
          <ServicesItem key={index} {...service} />
        ))}
      </section>
    </section>
  );
};

export default ServiceSection;
