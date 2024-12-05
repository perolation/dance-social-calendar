const FindSchool = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Find a School
        </h1>
        <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=188BlAWW8Pr_oED82BlhvBhVReZJSYjQ&femb=1&ll=45.523372431705816%2C-73.57841074448383&z=12"
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

export default FindSchool;