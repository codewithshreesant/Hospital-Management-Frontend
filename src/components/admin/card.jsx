function Card({ title, children }) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold mb-2">{title}</h3>
        {children}
      </div>
    );
  }