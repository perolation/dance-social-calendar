const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Contact
        </h1>
        <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://latin-dance-montreal.notion.site/Contact-102d7e1251d580ac835fe16e0754bbbf"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
