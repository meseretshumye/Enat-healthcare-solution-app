const ServicesItem = ({
  iconClass,
  title,
  tagLine,
  description,
  link = "#",
}) => {
  return (
    <section className="service-item">
      <section className="service-icon">
        <i className={iconClass}></i>
      </section>
      <a href={link} className="">
        <h3>{title}</h3>
      </a>
      <p className="tag-line">{tagLine}</p>
      <p className="description">{description}</p>
    </section>
  );
};

export default ServicesItem;
