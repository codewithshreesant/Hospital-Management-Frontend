export default function TopComp({path, name, desc}) {
    return (
        <div className=" h-[30vh] relative">
            <div className="absolute">
                <img src={path} alt="image not found" className="opacity-70 h-[30vh] w-[100vw]" />
            </div>
            <div className="absolute top-[30%] left-[20%]">
                <p className="text-lg text-blue-900">
                    Home/{name}
                </p>
                <h2 className="text-3xl font-bold mb-4">{desc}</h2>
            </div>
        </div>
    );
}